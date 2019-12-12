

## Class  `Constant` 
生成具有常量值的张量的初始值设定项。

Inherits From: [ `Initializer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/initializers/Initializer)

**别名** : [ `tf.compat.v1.constant_initializer` ](/api_docs/python/tf/compat/v1/keras/initializers/Constant), [ `tf.compat.v1.initializers.constant` ](/api_docs/python/tf/compat/v1/keras/initializers/Constant), [ `tf.compat.v1.keras.initializers.constant` ](/api_docs/python/tf/compat/v1/keras/initializers/Constant)

The resulting tensor is populated with values of type  `dtype` , asspecified by arguments  `value`  following the desired  `shape`  of thenew tensor (see examples below).

The argument  `value`  can be a constant value, or a list of values of type `dtype` . If  `value`  is a list, then the length of the list must be lessthan or equal to the number of elements implied by the desired shape of thetensor. In the case where the total number of elements in  `value`  is lessthan the number of elements required by the tensor shape, the last elementin  `value`  will be used to fill the remaining entries. If the total number ofelements in  `value`  is greater than the number of elements required by thetensor shape, the initializer will raise a  `ValueError` .

#### 参数：
- **`value`** : A Python scalar, list or tuple of values, or a N-dimensional numpyarray. All elements of the initialized variable will be set to thecorresponding value in the  `value`  argument.
- **`dtype`** : Default data type, used if no  `dtype`  argument is provided whencalling the initializer.
- **`verify_shape`** : Boolean that enables verification of the shape of  `value` . If `True` , the initializer will throw an error if the shape of  `value`  is notcompatible with the shape of the initialized tensor.


#### 加薪：
- **`TypeError`** : If the input  `value`  is not one of the expected types.


#### 示例：
The following example can be rewritten using a numpy.ndarray insteadof the  `value`  list, even reshaped, as shown in the two commented linesbelow the  `value`  list initialization.


```python
import numpy as np
import tensorflow as tf

value = [0, 1, 2, 3, 4, 5, 6, 7]
# value = np.array(value)
# value = value.reshape([2, 4])
init = tf.compat.v1.constant_initializer(value)
 
print('fitting shape:')
with tf.compat.v1.Session():
    x = tf.compat.v1.get_variable('x', shape=[2, 4], initializer=init)
    x.initializer.run()
    print(x.eval())

"""
> fitting shape:
 [[ 0.  1.  2.  3.]
 [ 4.  5.  6.  7.]]
"""

print('larger shape:')
with tf.compat.v1.Session():
    x = tf.compat.v1.get_variable('x', shape=[3, 4], initializer=init)
    x.initializer.run()
    print(x.eval())
"""
> larger shape:
   [[ 0.  1.  2.  3.]
    [ 4.  5.  6.  7.]
    [ 7.  7.  7.  7.]]
"""

print('smaller shape:')
with tf.compat.v1.Session():
   x = tf.compat.v1.get_variable('x', shape=[2, 3], initializer=init)
"""
> ValueError: Too many elements provided. Needed at most 6, but received 8
"""

print('shape verification:') 
init_verify = tf.compat.v1.constant_initializer(value,verify_shape=True)
with tf.compat.v1.Session():
   x = tf.compat.v1.get_variable('x', shape=[3, 4],initializer=init_verify)
# > TypeError: Expected Tensor's shape: (3, 4), got (8,).
   
```

## __init__

[view Source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L223-L236)

```
init(
  value=0,
  dtype=tf.dtypes.float32,
  verify_shape=False
)
```

DEPRECATED FUNCTION ARGUMENTS (deprecated arguments)


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dtype)` . They will be removed in a future version.Instructions for updating:Call initializer instance with the dtype argument instead of passing it to the constructor

**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(verify_shape)` . They will be removed in a future version.Instructions for updating:Objects must now be the required shape or no shape can be specified


## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L238-L244)

```
 __call__(
    shape,
    dtype=None,
    partition_info=None,
    verify_shape=None
)
 
```

返回按初始值设定项指定初始化的张量对象。

#### 参数：
- **`shape`** : Shape of the tensor.
- **`dtype`** : Optional dtype of the tensor. If not provided use the initializerdtype.
- **`partition_info`** : Optional information about the possible partitioning of atensor.


###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L78-L97)

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
- **`config`** : A Python dictionary. It will typically be the output of `get_config` .


#### 返回：
初始化器实例。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/init_ops.py#L246-L251)

```
 get_config()
 
```

Returns the configuration of the initializer as a JSON-serializable dict.

#### 返回：
A JSON-serializable Python dict.

