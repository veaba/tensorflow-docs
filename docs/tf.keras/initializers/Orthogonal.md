

## Class  `Orthogonal` 
生成正交矩阵的初始值设定项。

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)

**别名** : [ `tf.compat.v2.initializers.Orthogonal` ](/api_docs/python/tf/keras/initializers/Orthogonal), [ `tf.compat.v2.initializers.orthogonal` ](/api_docs/python/tf/keras/initializers/Orthogonal), [ `tf.compat.v2.keras.initializers.Orthogonal` ](/api_docs/python/tf/keras/initializers/Orthogonal), [ `tf.compat.v2.keras.initializers.orthogonal` ](/api_docs/python/tf/keras/initializers/Orthogonal), [ `tf.initializers.Orthogonal` ](/api_docs/python/tf/keras/initializers/Orthogonal), [ `tf.initializers.orthogonal` ](/api_docs/python/tf/keras/initializers/Orthogonal), [ `tf.keras.initializers.orthogonal` ](/api_docs/python/tf/keras/initializers/Orthogonal)

If the shape of the tensor to initialize is two-dimensional, it is initializedwith an orthogonal matrix obtained from the QR decomposition of a matrix ofrandom numbers drawn from a normal distribution.If the matrix has fewer rows than columns then the output will have orthogonalrows. Otherwise, the output will have orthogonal columns.

If the shape of the tensor to initialize is more than two-dimensional,a matrix of shape  `(shape[0] * ... * shape[n - 2], shape[n - 1])` is initialized, where  `n`  is the length of the shape vector.The matrix is subsequently reshaped to give a tensor of the desired shape.

#### 参数：
- **`gain`** : multiplicative factor to apply to the orthogonal matrix
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed)for behavior.


#### 参考文献：
[Saxe et al., 2014](https://openreview.net/forum?id=_wzZwKpTDF_9C)([pdf](https://arxiv.org/pdf/1312.6120.pdf))

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L473-L476)

```
 __init__(
    gain=1.0,
    seed=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L478-L512)

```
 __call__(
    shape,
    dtype=tf.dtypes.float32
)
 
```

返回按初始值设定项指定初始化的张量对象。

#### 参数：
- **`shape`** : Shape of the tensor.
- **`dtype`** : Optional dtype of the tensor. Only floating point types aresupported.


#### 加薪：
- **`ValueError`** : If the dtype is not floating point or the input shape is notvalid.


###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L69-L89)

```
 from_config(
    cls,
    config
)
 
```

从配置字典实例化初始值设定项。

#### 示例：


```
 initializer = RandomUniform(-1, 1)
config = initializer.get_config()
initializer = RandomUniform.from_config(config)
 
```

#### 参数：
- **`config`** : A Python dictionary.It will typically be the output of  `get_config` .


#### 返回：
初始化器实例。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L514-L515)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

