

## Class  `KeyValueTensorInitializer` 
Table initializers given  `keys`  and  `values`  tensors.

**别名** : [ `tf.compat.v1.lookup.KeyValueTensorInitializer` ](/api_docs/python/tf/lookup/KeyValueTensorInitializer), [ `tf.compat.v2.lookup.KeyValueTensorInitializer` ](/api_docs/python/tf/lookup/KeyValueTensorInitializer)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L418-L446)

```
 __init__(
    keys,
    values,
    key_dtype=None,
    value_dtype=None,
    name=None
)
 
```

基于键和值张量构造表初始值设定项对象。

#### 参数：
- **`keys`** : The tensor for the keys.
- **`values`** : The tensor for the values.
- **`key_dtype`** : The  `keys`  data type. Used when  `keys`  is a python array.
- **`value_dtype`** : The  `values`  data type. Used when  `values`  is a python array.
- **`name`** : A name for the operation (optional).


## 属性


###  `key_dtype` 
所需的表键dtype。

###  `value_dtype` 
所需的表值DTYPE。

## 方法


###  `initialize` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L448-L473)

```
 initialize(table)
 
```

Initializes the given  `table`  with  `keys`  and  `values`  tensors.

#### 参数：
- **`table`** : The table to initialize.


#### 返回：
初始化表的操作。

#### 加薪：
- **`TypeError`** : when the keys and values data types do not match the tablekey and value data types.
