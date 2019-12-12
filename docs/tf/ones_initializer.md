

## Class  `ones_initializer` 
生成初始化为1的张量的初始值设定项。

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/Initializer)

**别名** : [ `tf.compat.v2.initializers.Ones` ](/api_docs/python/tf/ones_initializer), [ `tf.compat.v2.initializers.ones` ](/api_docs/python/tf/ones_initializer), [ `tf.compat.v2.keras.initializers.Ones` ](/api_docs/python/tf/ones_initializer), [ `tf.compat.v2.keras.initializers.ones` ](/api_docs/python/tf/ones_initializer), [ `tf.compat.v2.ones_initializer` ](/api_docs/python/tf/ones_initializer), [ `tf.initializers.Ones` ](/api_docs/python/tf/ones_initializer), [ `tf.initializers.ones` ](/api_docs/python/tf/ones_initializer), [ `tf.keras.initializers.Ones` ](/api_docs/python/tf/ones_initializer), [ `tf.keras.initializers.ones` ](/api_docs/python/tf/ones_initializer)

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L105-L119)

```
 __call__(
    shape,
    dtype=tf.dtypes.float32
)
 
```

返回按初始值设定项指定初始化的张量对象。

#### 参数：
- **`shape`** : Shape of the tensor.
- **`dtype`** : Optional dtype of the tensor. Only numeric or boolean dtypes aresupported.


#### 加薪：
- **`ValuesError`** : If the dtype is not numeric or boolean.


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops_v2.py#L61-L67)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

