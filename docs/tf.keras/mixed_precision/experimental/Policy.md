## Class Policy
A dtype policy for a Keras layer.
### Aliases:
- Class `tf.compat.v1.keras.mixed_precision.experimental.Policy`
- Class `tf.compat.v2.keras.mixed_precision.experimental.Policy`
A dtype policy determines dtype-related aspects of a layer, such as its computation and variable dtypes. Each layer has a policy. Policies can be passed to the 'dtype' argument of layer constructors, or a global policy can be set with 'tf.keras.mixed_precision.experimental.set_policy'. A layer will default to the global policy if no policy is passed to it's constructor.
For most models, each layer will have the same computation dtype and variable dtype, which will typically be float32. However, when mixed precision training is used, most layers will instead have a float16 computation dtype and a float32 variable dtype. See this link for more information on mixed precision training. When the variable dtype does not match the computation dtype, variables will be automatically casted to the computation dtype to avoid type errors.
Policies also have a `tf.train.experimental.LossScale` instance, which is used by `tf.keras.Model`s to performance loss scaling. Loss scaling is only done by Models in `Model.fit` and `Model.train_on_batch`. Layers which are not Models ignore the loss scale.
