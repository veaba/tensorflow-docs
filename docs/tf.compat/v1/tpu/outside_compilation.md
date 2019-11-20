[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu.py#L533-L573)  
---  
  
Builds part of a computation outside any current TPU replicate scope.

    
    
    tf.compat.v1.tpu.outside_compilation(
        computation,
        *args,
        **kwargs
    )
    

#### Args:

  * **`computation`** : A Python function that builds the computation to place on the host.
  * **`*args`** : the positional arguments for the computation.
  * **`**kwargs`** : the keyword arguments for the computation.

#### Returns:

The Tensors returned by computation.

