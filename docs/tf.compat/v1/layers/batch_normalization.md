Functional interface for the batch normalization layer. (deprecated)

```
 tf.compat.v1.layers.batch_normalization(
    inputs,
    axis=-1,
    momentum=0.99,
    epsilon=0.001,
    center=True,
    scale=True,
    beta_initializer=tf.zeros_initializer(),
    gamma_initializer=tf.ones_initializer(),
    moving_mean_initializer=tf.zeros_initializer(),
    moving_variance_initializer=tf.ones_initializer(),
    beta_regularizer=None,
    gamma_regularizer=None,
    beta_constraint=None,
    gamma_constraint=None,
    training=False,
    trainable=True,
    name=None,
    reuse=None,
    renorm=False,
    renorm_clipping=None,
    renorm_momentum=0.99,
    fused=None,
    virtual_batch_size=None,
    adjustment=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use keras.layers.BatchNormalization instead.  In particular, [ `tf.control_dependencies(tf.GraphKeys.UPDATE_OPS)` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies) should not be used (consult the  `tf.keras.layers.batch_normalization`  documentation).
Reference: http://arxiv.org/abs/1502.03167

"Batch Normalization: Accelerating Deep Network Training by ReducingInternal Covariate Shift"

Sergey Ioffe, Christian Szegedy


**Note:**  when training, the moving_mean and moving_variance need to be updated.By default the update ops are placed in  `tf.GraphKeys.UPDATE_OPS` , so theyneed to be executed alongside the  `train_op` . Also, be sure to add anybatch_normalization ops before getting the update_ops collection. Otherwise,update_ops will be empty, and training/inference will not work properly. Forexample:


```
   x_norm = tf.compat.v1.layers.batch_normalization(x, training=training)

  # ...

  update_ops = tf.compat.v1.get_collection(tf.GraphKeys.UPDATE_OPS)
  train_op = optimizer.minimize(loss)
  train_op = tf.group([train_op, update_ops])
 
```

#### 参数：
- **`inputs`** : Tensor input.
- **`axis`** : An  `int` , the axis that should be normalized (typically the featuresaxis). For instance, after a  `Convolution2D`  layer with `data_format="channels_first"` , set  `axis=1`  in  `BatchNormalization` .
- **`momentum`** : Momentum for the moving average.
- **`epsilon`** : Small float added to variance to avoid dividing by zero.
- **`center`** : If True, add offset of  `beta`  to normalized tensor. If False,  `beta` is ignored.
- **`scale`** : If True, multiply by  `gamma` . If False,  `gamma`  isnot used. When the next layer is linear (also e.g. [ `nn.relu` ](/api_docs/python/tf/nn/relu)), this can bedisabled since the scaling can be done by the next layer.
- **`beta_initializer`** : Initializer for the beta weight.
- **`gamma_initializer`** : Initializer for the gamma weight.
- **`moving_mean_initializer`** : Initializer for the moving mean.
- **`moving_variance_initializer`** : Initializer for the moving variance.
- **`beta_regularizer`** : Optional regularizer for the beta weight.
- **`gamma_regularizer`** : Optional regularizer for the gamma weight.
- **`beta_constraint`** : An optional projection function to be applied to the  `beta` weight after being updated by an  `Optimizer`  (e.g. used to implementnorm constraints or value constraints for layer weights). The functionmust take as input the unprojected variable and must return theprojected variable (which must have the same shape). Constraints arenot safe to use when doing asynchronous distributed training.
- **`gamma_constraint`** : An optional projection function to be applied to the `gamma`  weight after being updated by an  `Optimizer` .
- **`training`** : Either a Python boolean, or a TensorFlow boolean scalar tensor(e.g. a placeholder). Whether to return the output in training mode(normalized with statistics of the current batch) or in inference mode(normalized with moving statistics). **NOTE** : make sure to set thisparameter correctly, or else your training/inference will not workproperly.
- **`trainable`** : Boolean, if  `True`  also add variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES`  (see tf.Variable).
- **`name`** : String, the name of the layer.
- **`reuse`** : Boolean, whether to reuse the weights of a previous layerby the same name.
- **`renorm`** : Whether to use Batch Renormalization(https://arxiv.org/abs/1702.03275). This adds extra variables duringtraining. The inference is the same for either value of this parameter.
- **`renorm_clipping`** : A dictionary that may map keys 'rmax', 'rmin', 'dmax' toscalar  `Tensors`  used to clip the renorm correction. The correction `(r, d)`  is used as  `corrected_value = normalized_value * r + d` , with `r`  clipped to [rmin, rmax], and  `d`  to [-dmax, dmax]. Missing rmax, rmin,dmax are set to inf, 0, inf, respectively.
- **`renorm_momentum`** : Momentum used to update the moving means and standarddeviations with renorm. Unlike  `momentum` , this affects trainingand should be neither too small (which would add noise) nor too large(which would give stale estimates). Note that  `momentum`  is still appliedto get the means and variances for inference.
- **`fused`** : if  `None`  or  `True` , use a faster, fused implementation if possible.If  `False` , use the system recommended implementation.
- **`virtual_batch_size`** : An  `int` . By default,  `virtual_batch_size`  is  `None` ,which means batch normalization is performed across the whole batch. When `virtual_batch_size`  is not  `None` , instead perform "Ghost BatchNormalization", which creates virtual sub-batches which are eachnormalized separately (with shared gamma, beta, and moving statistics).Must divide the actual batch size during execution.
- **`adjustment`** : A function taking the  `Tensor`  containing the (dynamic) shape ofthe input tensor and returning a pair (scale, bias) to apply to thenormalized values (before gamma and beta), only during training. Forexample, if axis==-1, `adjustment = lambda shape: (  tf.random.uniform(shape[-1:], 0.93, 1.07),  tf.random.uniform(shape[-1:], -0.1, 0.1))` will scale the normalized value by up to 7% up or down, then shift theresult by up to 0.1 (with independent scaling and bias for each featurebut shared across all examples), and finally apply gamma and/or beta. If `None` , no adjustment is applied. Cannot be specified ifvirtual_batch_size is specified.


#### 返回：
输出张量。

#### 加薪：
- **`ValueError`** : if eager execution is enabled.
