

## Class  `Dense` 
Densely-connected layer class.

Inherits From: [ `Dense` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Dense), [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/layers/Layer)

This layer implements the operation: `outputs = activation(inputs * kernel + bias)` Where  `activation`  is the activation function passed as the  `activation` argument (if not  `None` ),  `kernel`  is a weights matrix created by the layer,and  `bias`  is a bias vector created by the layer(only if  `use_bias`  is  `True` ).

#### 参数：
- **`units`** : Integer or Long, dimensionality of the output space.
- **`activation`** : Activation function (callable). Set it to None to maintain alinear activation.
- **`use_bias`** : Boolean, whether the layer uses a bias.
- **`kernel_initializer`** : Initializer function for the weight matrix.If  `None`  (default), weights are initialized using the defaultinitializer used by [ `tf.compat.v1.get_variable` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_variable).
- **`bias_initializer`** : Initializer function for the bias.
- **`kernel_regularizer`** : Regularizer function for the weight matrix.
- **`bias_regularizer`** : Regularizer function for the bias.
- **`activity_regularizer`** : Regularizer function for the output.
- **`kernel_constraint`** : An optional projection function to be applied to thekernel after being updated by an  `Optimizer`  (e.g. used to implementnorm constraints or value constraints for layer weights). The functionmust take as input the unprojected variable and must return theprojected variable (which must have the same shape). Constraints arenot safe to use when doing asynchronous distributed training.
- **`bias_constraint`** : An optional projection function to be applied to thebias after being updated by an  `Optimizer` .
- **`trainable`** : Boolean, if  `True`  also add variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES`  (see [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)).
- **`name`** : String, the name of the layer. Layers with the same name willshare weights, but to avoid mistakes we require reuse=True in such cases.
- **`_reuse`** : Boolean, whether to reuse the weights of a previous layerby the same name.


#### 属性：
- **`units`** : Python integer, dimensionality of the output space.
- **`activation`** : Activation function (callable).
- **`use_bias`** : Boolean, whether the layer uses a bias.
- **`kernel_initializer`** : Initializer instance (or name) for the kernel matrix.
- **`bias_initializer`** : Initializer instance (or name) for the bias.
- **`kernel_regularizer`** : Regularizer instance for the kernel matrix (callable)
- **`bias_regularizer`** : Regularizer instance for the bias (callable).
- **`activity_regularizer`** : Regularizer instance for the output (callable)
- **`kernel_constraint`** : Constraint function for the kernel matrix.
- **`bias_constraint`** : Constraint function for the bias.
- **`kernel`** : Weight matrix (TensorFlow variable or tensor).
- **`bias`** : Bias vector, if applicable (TensorFlow variable or tensor).


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/core.py#L85-L110)

```
 __init__(
    units,
    activation=None,
    use_bias=True,
    kernel_initializer=None,
    bias_initializer=tf.zeros_initializer(),
    kernel_regularizer=None,
    bias_regularizer=None,
    activity_regularizer=None,
    kernel_constraint=None,
    bias_constraint=None,
    trainable=True,
    name=None,
    **kwargs
)
 
```

## 属性


###  `graph` 
不推荐的函数


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Stop using this property because tf.layers layers no longer track their graph.


###  `scope_name` 
Functional interface for the densely-connected layer. (deprecated)

```
 tf.compat.v1.layers.dense(
    inputs,
    units,
    activation=None,
    use_bias=True,
    kernel_initializer=None,
    bias_initializer=tf.zeros_initializer(),
    kernel_regularizer=None,
    bias_regularizer=None,
    activity_regularizer=None,
    kernel_constraint=None,
    bias_constraint=None,
    trainable=True,
    name=None,
    reuse=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use keras.layers.Dense instead.
This layer implements the operation: `outputs = activation(inputs * kernel + bias)` where  `activation`  is the activation function passed as the  `activation` argument (if not  `None` ),  `kernel`  is a weights matrix created by the layer,and  `bias`  is a bias vector created by the layer(only if  `use_bias`  is  `True` ).

#### 参数：
- **`inputs`** : Tensor input.
- **`units`** : Integer or Long, dimensionality of the output space.
- **`activation`** : Activation function (callable). Set it to None to maintain alinear activation.
- **`use_bias`** : Boolean, whether the layer uses a bias.
- **`kernel_initializer`** : Initializer function for the weight matrix.If  `None`  (default), weights are initialized using the defaultinitializer used by [ `tf.compat.v1.get_variable` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_variable).
- **`bias_initializer`** : Initializer function for the bias.
- **`kernel_regularizer`** : Regularizer function for the weight matrix.
- **`bias_regularizer`** : Regularizer function for the bias.
- **`activity_regularizer`** : Regularizer function for the output.
- **`kernel_constraint`** : An optional projection function to be applied to thekernel after being updated by an  `Optimizer`  (e.g. used to implementnorm constraints or value constraints for layer weights). The functionmust take as input the unprojected variable and must return theprojected variable (which must have the same shape). Constraints arenot safe to use when doing asynchronous distributed training.
- **`bias_constraint`** : An optional projection function to be applied to thebias after being updated by an  `Optimizer` .
- **`trainable`** : Boolean, if  `True`  also add variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES`  (see [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)).
- **`name`** : String, the name of the layer.
- **`reuse`** : Boolean, whether to reuse the weights of a previous layerby the same name.


#### 返回：
Output tensor the same shape as  `inputs`  except the last dimension is ofsize  `units` .

#### 加薪：
- **`ValueError`** : if eager execution is enabled.
