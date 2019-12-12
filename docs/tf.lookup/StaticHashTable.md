

## Class  `StaticHashTable` 
初始化后不可变的通用哈希表。

#### 示例用法：


```
 keys_tensor = tf.constant([1, 2])
vals_tensor = tf.constant([3, 4])
input_tensor = tf.constant([1, 5])
table = tf.lookup.StaticHashTable(
    tf.lookup.KeyValueTensorInitializer(keys_tensor, vals_tensor), -1)
print(table.lookup(input_tensor))
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L262-L291)

```
 __init__(
    initializer,
    default_value,
    name=None
)
 
```

Creates a non-initialized  `HashTable`  object.

Creates a table, the type of its keys and values are specified by theinitializer.Before using the table you will have to initialize it. After initializationthe table will be immutable.

#### 参数：
- **`initializer`** : The table initializer to use. See  `HashTable`  kernel forsupported key and value types.
- **`default_value`** : The value to use if a key is missing in the table.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `HashTable`  object.

## 属性


###  `default_value` 
表的默认值。

###  `key_dtype` 
表键dtype。

###  `name` 
表的名称。

###  `resource_handle` 
返回与此资源关联的资源句柄。

###  `value_dtype` 
表值dtype。

## 方法


###  `export` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L309-L325)

```
 export(name=None)
 
```

返回表中所有键和值的张量。

#### 参数：
- **`name`** : A name for the operation (optional).


#### 返回：
A pair of tensors with the first tensor containing all keys and the  second tensors containing all values in the table.

###  `lookup` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L201-L236)

```
 lookup(
    keys,
    name=None
)
 
```

Looks up  `keys`  in a table, outputs the corresponding values.

The  `default_value`  is used for keys not present in the table.

#### 参数：
- **`keys`** : Keys to look up. May be either a  `SparseTensor`  or dense  `Tensor` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `SparseTensor`  if keys are sparse, otherwise a dense  `Tensor` .

#### 加薪：
- **`TypeError`** : when  `keys`  or  `default_value`  doesn't match the table datatypes.


###  `size` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L189-L199)

```
 size(name=None)
 
```

计算此表中的元素数。

#### 参数：
- **`name`** : A name for the operation (optional).


#### 返回：
包含此表中元素数的标量张量。

