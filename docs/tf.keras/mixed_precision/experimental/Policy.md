## Class Policy

A dtype policy for a Keras layer.
### Aliases:
- Class `tf.compat.v1.keras.mixed_precision.experimental.Policy`
- Class `tf.compat.v2.keras.mixed_precision.experimental.Policy`

A dtype policy determines dtype-related aspects of a layer, such as its computation and variable dtypes. Each layer has a policy. Policies can be passed to the 'dtype' argument of layer constructors, or a global policy can be set with 'tf.keras.mixed_precision.experimental.set_policy'. A layer will default to the global policy if no policy is passed to it's constructor.
[this link](https://docs.nvidia.com/deeplearning/sdk/mixed-precision-training/index.html)For most models, each layer will have the same computation dtype and variable dtype, which will typically be float32. However, when mixed precision training is used, most layers will instead have a float16 computation dtype and a float32 variable dtype. See  for more information on mixed precision training. When the variable dtype does not match the computation dtype, variables will be automatically casted to the computation dtype to avoid type errors.

[tf.train.experimental.LossScale](https://www.tensorflow.org/api_docs/python/tf/train/experimental/LossScale)Policies also have a  instance, which is used by tf.keras.Models to performance loss scaling. Loss scaling is only done by Models in Model.fit and Model.train_on_batch. Layers which are not Models ignore the loss scale.


Policies are constructed by passing a string to the constructor, e.g. tf.keras.mixed_precision.experimental.Policy('float32'). The string determines the compute and variable dtypes. It can be one of the following:
- ``A``n``y`` ``d``t``y``p``e`` ``n``a``m``e``,`` ``s``u``c``h`` ``a``s`` ``'``f``l``o``a``t``3``2``'`` ``o``r`` ``'``f``l``o``a``t``6``4``'``.`` ``B``o``t``h`` ``t``h``e`` ``v``a``r``i``a``b``l``e`` ``a``n``d`` ``c``o``m``p``u``t``e`` ``d``t``y``p``e``s`` ``w``i``l``l`` ``b``e`` ``t``h``a``t`` ``d``t``y``p``e``.`` ``N``o`` ``l``o``s``s`` ``s``c``a``l``i``n``g`` ``i``s`` ``d``o``n``e`` ``b``y`` ``d``e``f``a``u``l``t``.``
- ``'``m``i``x``e``d``_``f``l``o``a``t``1``6``'`` ``o``r`` ``'``m``i``x``e``d``_``b``f``l``o``a``t``1``6``'``:`` ``T``h``e`` ``c``o``m``p``u``t``e`` ``d``t``y``p``e`` ``i``s`` ``f``l``o``a``t``1``6`` ``o``r`` ``b``f``l``o``a``t``1``6``,`` ``w``h``i``l``e`` ``t``h``e`` ``v``a``r``i``a``b``l``e`` ``d``t``y``p``e`` ``i``s`` ``f``l``o``a``t``3``2``.`` ``T``h``e``s``e`` ``p``o``l``i``c``i``e``s`` ``a``r``e`` ``u``s``e``d`` ``f``o``r`` ``m``i``x``e``d`` ``p``r``e``c``i``s``i``o``n`` ``t``r``a``i``n``i``n``g``.`` ``W``i``t``h`` ``'``m``i``x``e``d``_``f``l``o``a``t``1``6``'``,`` ``a`` ``d``y``n``a``m``i``c`` ``l``o``s``s`` ``s``c``a``l``e`` ``i``s`` ``u``s``e``d`` ``b``y`` ``d``e``f``a``u``l``t``.`` ``'``m``i``x``e``d``_``b``f``l``o``a``t``1``6``'`` ``d``o``e``s`` ``n``o`` ``l``o``s``s`` ``s``c``a``l``i``n``g`` ``b``y`` ``d``e``f``a``u``l``t``,`` ``a``s`` ``l``o``s``s`` ``s``c``a``l``i``n``g`` ``i``s`` ``u``n``n``e``c``e``s``s``a``r``y`` ``w``i``t``h`` ``b``f``l``o``a``t``1``6``.``
### How to use mixed precision in layers with Policies
[tf.keras.mixed_precision.experimental.set_policy](https://www.tensorflow.org/api_docs/python/tf/keras/mixed_precision/experimental/set_policy)To use mixed precision in a model, the 'mixed_float16' policy can be used.  can be used to set the default policy for layers if no policy is passed to them. For example:


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

Alternatively, the policy can be passed to individual layers instead of setting the global policy with set_policy:

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

As the above example shows, strings can be directly passed to layer constructors in the dtype argument instead of policies, but only if the string is convertible to a dtype.
[Model.fit](https://www.tensorflow.org/api_docs/python/tf/keras/Model#fit)Note the 'mixed_float16' policy will apply loss scaling by default in  and Model.train_on_batch. If neither method is used (e.g., a custom training loop is used) and 'mixed_float16' is used, the loss scale must be manually applied. See tf.keras.mixed_precision.experimental.LossScaleOptimizer for details. For 'mixed_bfloat16', no loss scaling is done and loss scaling never needs to be manually applied.

### The deprecated "infer" policy

In addition to a dtype or "_with_float32_vars", a policy can also be "infer". This Policy is deprecated, and it is not recommended. When a layer has an infer policy, it will infer the computation and variable dtype from the first input the first time the layer is called.

Once the layer is called for the first time, the layer's policy will change to the dtype of the first input.

Similarly to "infer", there is a deprecated "infer_with_float32_vars" policy that infers the compute dtype, but not the variable dtype. Once a layer with an "infer_with_float32_vars" policy is called for the first time, the layer's policy will change to "_with_float32_vars", where is the dtype of the first input. These policies force variables in float32.

In TensorFlow 1, only the "infer" and "infer_with_float32_vars" policies are available.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/policy.py#L153-L211)


```
 __init__(
    name,
    loss_scale=USE_DEFAULT
)
```

Constructs the policy.

The name argument determines the compute and variable dtype, and has no additional effect on the Policy. The compute and variable dtypes can only be specified through name, and cannot be specified directly.
#### Args:
- `name`: A string. Can be one of the following values:
Any dtype `name`, such as 'float32' or 'float64'. Both the variable and compute dtypes will be that dtype.
'mixed_float16' or 'mixed_bfloat16': The compute dtype is float16 or bfloat16, while the variable dtype is float32. With 'mixed_float16', a dynamic loss scale is used. These policies are used for mixed precision training.
'infer' (deprecated): Infer the compute and variable dtype from the input dtype.
- Any dtype `name`, such as 'float32' or 'float64'. Both the variable and compute dtypes will be that dtype.
- 'mixed_float16' or 'mixed_bfloat16': The compute dtype is float16 or bfloat16, while the variable dtype is float32. With 'mixed_float16', a dynamic loss scale is used. These policies are used for mixed precision training.
- 'infer' (deprecated): Infer the compute and variable dtype from the input dtype.
- `loss_scale`: A `tf.train.experimental.LossScale`, or a value convertible to one such as "dynamic". Defaults to using no loss scaling unless `name` is "mixed_float16", in which case this defaults to "dynamic". Only `tf.keras.Model`s, not layers, use the loss scale, and it is only used during `Model.fit` or `Model.train_on_batch`.
## Properties
### compute_dtype

The compute dtype of this policy.

This is the dtype layers will do their computations in.

If this is None, the policy is "infer" or "infer_with_float32_vars" and variable_dtype is either None or float32 respectively.

Note that even if the compute dtype is float16 or bfloat16, hardware devices may not do individual adds, multiplies, and other fundamental operations in [b]float16, but instead may do some of them in float32 for numeric stability. The compute dtype is the dtype of the inputs and outputs of the TensorFlow ops that the layer executes. Internally, many TensorFlow ops will do certain internal calculations in float32, or some other device-internal intermediate format with higher precision than [b]float16, to increase numeric stability.
[tf.keras.layers.Dense](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Dense)For example, a  layer, when run on a GPU with a float16 compute dtype, will pass float16 inputs to tf.matmul. But, tf.matmul will do use float32 intermediate math. The performance benefit of float16 is still apparent, due to increased memory bandwidth and the fact GPUs have specialized hardware for computating matmuls on float16 while still keeping intermediate computations in float32.

#### Returns:

The variable dtype of this policy, or None if the variable dtype should be inferred from the inputs.
### loss_scale

Returns the loss scale of this Policy.
#### Returns:
[tf.train.experimental.LossScale](https://www.tensorflow.org/api_docs/python/tf/train/experimental/LossScale)A , or None.

### name

Returns the name of this policy.
### should_cast_variables

Returns True if variables should be casted.

This is true if the variable dtype is not the same as the compute dtype.
#### Returns:

True, if variables should be casted.
### variable_dtype

The variable dtype of this policy.
[Policy.compute_dtype](https://www.tensorflow.org/api_docs/python/tf/keras/mixed_precision/experimental/Policy#compute_dtype)This is the dtype layers will create their variables in, unless a layer explicit chooses a different dtype. If this is different than  and both are non-None, Layers will cast variables to the compute dtype to avoid type errors.


If this is None, the policy is "infer" and the compute_dtype is also None. If compute_dtype is None, this is either None or float32.
#### Returns:

The variable dtype of this policy, or None if the variable dtype should be inferred from the inputs.
