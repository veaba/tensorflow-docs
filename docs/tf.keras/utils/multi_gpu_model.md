Replicates a model on different GPUs. (deprecated)

**别名** : [ `tf.compat.v1.keras.utils.multi_gpu_model` ](/api_docs/python/tf/keras/utils/multi_gpu_model), [ `tf.compat.v2.keras.utils.multi_gpu_model` ](/api_docs/python/tf/keras/utils/multi_gpu_model)

```
 tf.keras.utils.multi_gpu_model(
    model,
    gpus,
    cpu_merge=True,
    cpu_relocation=False
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed after 2020-04-01.Instructions for updating:Use [ `tf.distribute.MirroredStrategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/MirroredStrategy) instead.
Specifically, this function implements single-machinemulti-GPU data parallelism. It works in the following way:

- Divide the model's input(s) into multiple sub-batches.
- Apply a model copy on each sub-batch. Every model copyis executed on a dedicated GPU.
- Concatenate the results (on CPU) into one big batch.
E.g. if your  `batch_size`  is 64 and you use  `gpus=2` ,then we will divide the input into 2 sub-batches of 32 samples,process each sub-batch on one GPU, then return the fullbatch of 64 processed samples.

This induces quasi-linear speedup on up to 8 GPUs.

This function is only available with the TensorFlow backendfor the time being.

#### 参数：
- **`model`** : A Keras model instance. To avoid OOM errors,this model could have been built on CPU, for instance(see usage example below).
- **`gpus`** : Integer >= 2, number of on GPUs on which to createmodel replicas.
- **`cpu_merge`** : A boolean value to identify whether to forcemerging model weights under the scope of the CPU or not.
- **`cpu_relocation`** : A boolean value to identify whether tocreate the model's weights under the scope of the CPU.If the model is not defined under any preceding devicescope, you can still rescue it by activating this option.


#### 返回：
A Keras  `Model`  instance which can be used just like the initial `model`  argument, but which distributes its workload on multiple GPUs.

示例1：在CPU上合并权重的训练模型

```
     import tensorflow as tf
    from keras.applications import Xception
    from keras.utils import multi_gpu_model
    import numpy as np

    num_samples = 1000
    height = 224
    width = 224
    num_classes = 1000

    # Instantiate the base model (or "template" model).
    # We recommend doing this with under a CPU device scope,
    # so that the model's weights are hosted on CPU memory.
    # Otherwise they may end up hosted on a GPU, which would
    # complicate weight sharing.
    with tf.device('/cpu:0'):
        model = Xception(weights=None,
                         input_shape=(height, width, 3),
                         classes=num_classes)

    # Replicates the model on 8 GPUs.
    # This assumes that your machine has 8 available GPUs.
    parallel_model = multi_gpu_model(model, gpus=8)
    parallel_model.compile(loss='categorical_crossentropy',
                           optimizer='rmsprop')

    # Generate dummy data.
    x = np.random.random((num_samples, height, width, 3))
    y = np.random.random((num_samples, num_classes))

    # This `fit` call will be distributed on 8 GPUs.
    # Since the batch size is 256, each GPU will process 32 samples.
    parallel_model.fit(x, y, epochs=20, batch_size=256)

    # Save model via the template model (which shares the same weights):
    model.save('my_model.h5')
 
```

Example 2: Training models with weights merge on CPU using cpu_relocation

```
      ..
     # Not needed to change the device scope for model definition:
     model = Xception(weights=None, ..)

     try:
         model = multi_gpu_model(model, cpu_relocation=True)
         print("Training using multiple GPUs..")
     except:
         print("Training using single GPU or CPU..")

     model.compile(..)
     ..
 
```

Example 3: Training models with weights merge on GPU (recommended for NV-link)

```
      ..
     # Not needed to change the device scope for model definition:
     model = Xception(weights=None, ..)

     try:
         model = multi_gpu_model(model, cpu_merge=False)
         print("Training using multiple GPUs..")
     except:
         print("Training using single GPU or CPU..")
     model.compile(..)
     ..
 
```

#### 加薪：
- **`ValueError`** : if the  `gpus`  argument does not match available devices.
