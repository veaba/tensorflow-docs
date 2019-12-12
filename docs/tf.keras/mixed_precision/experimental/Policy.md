

## Class  `Policy` 
keras层的数据类型策略。

**别名** : [ `tf.compat.v1.keras.mixed_precision.experimental.Policy` ](/api_docs/python/tf/keras/mixed_precision/experimental/Policy), [ `tf.compat.v2.keras.mixed_precision.experimental.Policy` ](/api_docs/python/tf/keras/mixed_precision/experimental/Policy)

A dtype policy determines dtype-related aspects of a layer, such as itscomputation and variable dtypes. Each layer has a policy. Policies can bepassed to the 'dtype' argument of layer constructors, or a global policy canbe set with 'tf.keras.mixed_precision.experimental.set_policy'. A layer willdefault to the global policy if no policy is passed to it's constructor.

For most models, each layer will have the same computation dtype and variabledtype, which will typically be float32. However, when mixed precisiontraining is used, most layers will instead have a float16 computation dtypeand a float32 variable dtype. See [thislink](https://docs.nvidia.com/deeplearning/sdk/mixed-precision-training/index.html)for more information on mixed precision training. When the variable dtype doesnot match the computation dtype, variables will be automatically casted to thecomputation dtype to avoid type errors.

Policies also have a [ `tf.train.experimental.LossScale` ](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale) instance, which is usedby [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model)s to performance loss scaling. Loss scaling is only done byModels in [ `Model.fit` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#fit) and [ `Model.train_on_batch` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#train_on_batch). Layers which are not Modelsignore the loss scale.

Policies are constructed by passing a string to the constructor, e.g. `tf.keras.mixed_precision.experimental.Policy('float32')` . The stringdetermines the compute and variable dtypes. It can be one of the following:

- Any dtype name, such as 'float32' or 'float64'. Both the variable andcompute dtypes will be that dtype. No loss scaling is done by default.
- 'mixed_float16' or 'mixed_bfloat16': The compute dtype is float16 orbfloat16, while the variable dtype is float32. These policies are used formixed precision training. With 'mixed_float16', a dynamic loss scale isused by default. 'mixed_bfloat16' does no loss scaling by default, as lossscaling is unnecessary with bfloat16.


### 如何在具有策略的层中使用混合精度
To use mixed precision in a model, the 'mixed_float16' policy canbe used. [ `tf.keras.mixed_precision.experimental.set_policy` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/set_policy) can be used to setthe default policy for layers if no policy is passed to them. For example:

```
 tf.keras.mixed_precision.experimental.set_policy('mixed_float16')
model = tf.keras.models.Sequential(
    tf.keras.layers.Input((100,)),
    # Dense layers use global policy of 'mixed_float16', which does
    # computations in float16 while keeping variables in float32.
    tf.keras.layers.Dense(10),
    tf.keras.layers.Dense(10),
    # Softmax should be done in float32 for numeric stability. We pass
    # dtype='float32' to use float32 instead of the global policy.
    tf.keras.layers.Activation('Softmax', dtype='float32')
)
model.fit(...)  # Train `model`
 
```

Alternatively, the policy can be passed to individual layers instead ofsetting the global policy with  `set_policy` :

```
 policy = tf.keras.mixed_precision.experimental.Policy('mixed_float16')
model = tf.keras.models.Sequential(
    tf.keras.layers.Input((100,)),
    tf.keras.layers.Dense(10, dtype=policy),
    tf.keras.layers.Dense(10, dtype=policy),
    # Softmax should be done in float32 for numeric stability.
    tf.keras.layers.Activation('Softmax', dtype='float32')
)
model.fit(...)  # Train `model`
 
```

As the above example shows, strings can be directly passed to layerconstructors in the  `dtype`  argument instead of policies, but only if thestring is convertible to a dtype.

Note the 'mixed_float16' policy will apply loss scaling by default in[ `Model.fit` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#fit) and [ `Model.train_on_batch` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#train_on_batch). If neither method is used (e.g., acustom training loop is used) and 'mixed_float16' is used, the loss scale mustbe manually applied. See[ `tf.keras.mixed_precision.experimental.LossScaleOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer) for details. For'mixed_bfloat16', no loss scaling is done and loss scaling never needs to bemanually applied.

### 不赞成的“推断”策略
In addition to a dtype or "<dtype>_with_float32_vars", a policy can also be"infer". This Policy is deprecated, and it is not recommended. When a layerhas an infer policy, it will infer the computation and variable dtype fromthe first input the first time the layer is called.</dtype>

Once the layer is called for the first time, the layer's policy will change tothe dtype of the first input.

Similarly to "infer", there is a deprecated "infer_with_float32_vars" policythat infers the compute dtype, but not the variable dtype. Once a layer withan "infer_with_float32_vars" policy is called for the first time, the layer'spolicy will change to "<dtype>_with_float32_vars", where <dtype> is the dtypeof the first input. These policies force variables in float32.</dtype></dtype>


**Warning:**  Policies ending in "_with_float32_vars" will be removed in TensorFlow2.1. Please use "mixed_float16" or "mixed_bfloat16" instead.
In TensorFlow 1, only the "infer" and "infer_with_float32_vars" policies areavailable.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/policy.py#L153-L211)

```
 __init__(
    name,
    loss_scale=USE_DEFAULT
)
 
```

构建策略。

The  `name`  argument determines the compute and variable dtype, and has noadditional effect on the Policy. The compute and variable dtypes can only bespecified through  `name` , and cannot be specified directly.

#### 参数：
- **`name`** : A string. Can be one of the following values:
- **`loss_scale`** : A [ `tf.train.experimental.LossScale` ](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale), or a value convertible toone such as "dynamic". Defaults to using no loss scaling unless  `name` is "mixed_float16", in which case this defaults to "dynamic". Only[ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model)s, not layers, use the loss scale, and it is only usedduring [ `Model.fit` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#fit) or [ `Model.train_on_batch` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#train_on_batch).
    - Any dtype name, such as 'float32' or 'float64'. Both the variable andcompute dtypes will be that dtype.
    - 'mixed_float16' or 'mixed_bfloat16': The compute dtype is float16 orbfloat16, while the variable dtype is float32. With 'mixed_float16',a dynamic loss scale is used. These policies are used for mixedprecision training.
    - 'infer' (deprecated): Infer the compute and variable dtype from theinput dtype.


## 属性


###  `compute_dtype` 
此策略的计算数据类型。

这是将在中进行计算的dtype层。

If this is None, the policy is "infer" or "infer_with_float32_vars" and `variable_dtype`  is either None or float32 respectively.

Note that even if the compute dtype is float16 or bfloat16, hardware devicesmay not do individual adds, multiplies, and other fundamental operations in[b]float16, but instead may do some of them in float32 for numericstability. The compute dtype is the dtype of the inputs and outputs of theTensorFlow ops that the layer executes. Internally, many TensorFlow ops willdo certain internal calculations in float32, or some other device-internalintermediate format with higher precision than [b]float16, to increasenumeric stability.

For example, a [ `tf.keras.layers.Dense` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Dense) layer, when run on a GPU with afloat16 compute dtype, will pass float16 inputs to tf.matmul. But, tf.matmulwill do use float32 intermediate math. The performance benefit of float16 isstill apparent, due to increased memory bandwidth and the fact GPUs havespecialized hardware for computating matmuls on float16 while still keepingintermediate computations in float32.

#### 返回：
The variable dtype of this policy, or None if the variable dtype should beinferred from the inputs.

###  `loss_scale` 
返回此保险单的损失等级。

#### 返回：
A [ `tf.train.experimental.LossScale` ](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale), or None.

###  `name` 
返回此策略的名称。

###  `should_cast_variables` 
如果变量应强制类型化，则返回true。

如果变量dtype与计算dtype不同，则为true。

#### 返回：
True, if variables should be casted.

###  `variable_dtype` 
此策略的可变数据类型。

This is the dtype layers will create their variables in, unless a layerexplicit chooses a different dtype. If this is different than[ `Policy.compute_dtype` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/Policy#compute_dtype) and both are non-None, Layers will cast variables tothe compute dtype to avoid type errors.

If this is None, the policy is "infer" and the  `compute_dtype`  is also None.If  `compute_dtype`  is None, this is either None or float32.

#### 返回：
The variable dtype of this policy, or None if the variable dtype should beinferred from the inputs.

