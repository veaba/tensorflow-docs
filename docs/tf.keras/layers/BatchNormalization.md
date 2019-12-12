

## Class  `BatchNormalization` 
Base class of Batch normalization layer (Ioffe and Szegedy, 2014).

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)


### 在教程中使用：
- [Custom layers](https://tensorflow.google.cn/tutorials/customization/custom_layers)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
Normalize the activations of the previous layer at each batch,i.e. applies a transformation that maintains the mean activationclose to 0 and the activation standard deviation close to 1.

#### 参数：
- **`axis`** : Integer, the axis that should be normalized(typically the features axis).For instance, after a  `Conv2D`  layer with `data_format="channels_first"` ,set  `axis=1`  in  `BatchNormalization` .
- **`momentum`** : Momentum for the moving average.
- **`epsilon`** : Small float added to variance to avoid dividing by zero.
- **`center`** : If True, add offset of  `beta`  to normalized tensor.If False,  `beta`  is ignored.
- **`scale`** : If True, multiply by  `gamma` .If False,  `gamma`  is not used.When the next layer is linear (also e.g. [ `nn.relu` ](https://tensorflow.google.cn/api_docs/python/tf/nn/relu)),this can be disabled since the scalingwill be done by the next layer.
- **`beta_initializer`** : Initializer for the beta weight.
- **`gamma_initializer`** : Initializer for the gamma weight.
- **`moving_mean_initializer`** : Initializer for the moving mean.
- **`moving_variance_initializer`** : Initializer for the moving variance.
- **`beta_regularizer`** : Optional regularizer for the beta weight.
- **`gamma_regularizer`** : Optional regularizer for the gamma weight.
- **`beta_constraint`** : Optional constraint for the beta weight.
- **`gamma_constraint`** : Optional constraint for the gamma weight.
- **`renorm`** : Whether to use Batch Renormalization(https://arxiv.org/abs/1702.03275). This adds extra variables duringtraining. The inference is the same for either value of this parameter.
- **`renorm_clipping`** : A dictionary that may map keys 'rmax', 'rmin', 'dmax' toscalar  `Tensors`  used to clip the renorm correction. The correction `(r, d)`  is used as  `corrected_value = normalized_value * r + d` , with `r`  clipped to [rmin, rmax], and  `d`  to [-dmax, dmax]. Missing rmax, rmin,dmax are set to inf, 0, inf, respectively.
- **`renorm_momentum`** : Momentum used to update the moving means and standarddeviations with renorm. Unlike  `momentum` , this affects trainingand should be neither too small (which would add noise) nor too large(which would give stale estimates). Note that  `momentum`  is still appliedto get the means and variances for inference.
- **`fused`** : if  `True` , use a faster, fused implementation, or raise a ValueErrorif the fused implementation cannot be used. If  `None` , use the fasterimplementation if possible. If False, do not used the fusedimplementation.
- **`trainable`** : Boolean, if  `True`  the variables will be marked as trainable.
- **`virtual_batch_size`** : An  `int` . By default,  `virtual_batch_size`  is  `None` ,which means batch normalization is performed across the whole batch. When `virtual_batch_size`  is not  `None` , instead perform "Ghost BatchNormalization", which creates virtual sub-batches which are eachnormalized separately (with shared gamma, beta, and moving statistics).Must divide the actual batch size during execution.
- **`adjustment`** : A function taking the  `Tensor`  containing the (dynamic) shape ofthe input tensor and returning a pair (scale, bias) to apply to thenormalized values (before gamma and beta), only during training. Forexample, if axis==-1, `adjustment = lambda shape: (  tf.random.uniform(shape[-1:], 0.93, 1.07),  tf.random.uniform(shape[-1:], -0.1, 0.1))` will scale the normalized value by up to 7% up or down, then shift theresult by up to 0.1 (with independent scaling and bias for each featurebut shared across all examples), and finally apply gamma and/or beta. If `None` , no adjustment is applied. Cannot be specified ifvirtual_batch_size is specified.


#### 调用参数：
- **`inputs`** : Input tensor (of any rank).
- **`training`** : Python boolean indicating whether the layer should behave intraining mode or in inference mode.
    -  `training=True` : The layer will normalize its inputs using themean and variance of the current batch of inputs.
    -  `training=False` : The layer will normalize its inputs using themean and variance of its moving statistics, learned during training.


#### 输入形状：
Arbitrary. Use the keyword argument  `input_shape` (tuple of integers, does not include the samples axis)when using this layer as the first layer in a model.

#### 输出形状：
与输入形状相同。

#### 参考文献：
- [Batch Normalization: Accelerating Deep Network Training by ReducingInternal Covariate Shift](https://arxiv.org/abs/1502.03167)
{ {TRAINABLE_ATTRIBUTE_NOTE}}

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/normalization.py#L138-L209)

```
 __init__(
    axis=-1,
    momentum=0.99,
    epsilon=0.001,
    center=True,
    scale=True,
    beta_initializer='zeros',
    gamma_initializer='ones',
    moving_mean_initializer='zeros',
    moving_variance_initializer='ones',
    beta_regularizer=None,
    gamma_regularizer=None,
    beta_constraint=None,
    gamma_constraint=None,
    renorm=False,
    renorm_clipping=None,
    renorm_momentum=0.99,
    fused=None,
    trainable=True,
    virtual_batch_size=None,
    adjustment=None,
    name=None,
    **kwargs
)
 
```

