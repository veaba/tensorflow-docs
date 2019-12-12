

## Class  `DType` 
Represents the type of the elements in a  `Tensor` .

**别名** : [ `tf.DType` ](/api_docs/python/tf/dtypes/DType), [ `tf.compat.v1.DType` ](/api_docs/python/tf/dtypes/DType), [ `tf.compat.v1.dtypes.DType` ](/api_docs/python/tf/dtypes/DType), [ `tf.compat.v2.DType` ](/api_docs/python/tf/dtypes/DType), [ `tf.compat.v2.dtypes.DType` ](/api_docs/python/tf/dtypes/DType)

The following  `DType`  objects are defined:

- [ `tf.float16` ](https://tensorflow.google.cn/api_docs/python/tf#float16): 16-bit half-precision floating-point.
- [ `tf.float32` ](https://tensorflow.google.cn/api_docs/python/tf#float32): 32-bit single-precision floating-point.
- [ `tf.float64` ](https://tensorflow.google.cn/api_docs/python/tf#float64): 64-bit double-precision floating-point.
- [ `tf.bfloat16` ](https://tensorflow.google.cn/api_docs/python/tf#bfloat16): 16-bit truncated floating-point.
- [ `tf.complex64` ](https://tensorflow.google.cn/api_docs/python/tf#complex64): 64-bit single-precision complex.
- [ `tf.complex128` ](https://tensorflow.google.cn/api_docs/python/tf#complex128): 128-bit double-precision complex.
- [ `tf.int8` ](https://tensorflow.google.cn/api_docs/python/tf#int8): 8-bit signed integer.
- [ `tf.uint8` ](https://tensorflow.google.cn/api_docs/python/tf#uint8): 8-bit unsigned integer.
- [ `tf.uint16` ](https://tensorflow.google.cn/api_docs/python/tf#uint16): 16-bit unsigned integer.
- [ `tf.uint32` ](https://tensorflow.google.cn/api_docs/python/tf#uint32): 32-bit unsigned integer.
- [ `tf.uint64` ](https://tensorflow.google.cn/api_docs/python/tf#uint64): 64-bit unsigned integer.
- [ `tf.int16` ](https://tensorflow.google.cn/api_docs/python/tf#int16): 16-bit signed integer.
- [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32): 32-bit signed integer.
- [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64): 64-bit signed integer.
- [ `tf.bool` ](https://tensorflow.google.cn/api_docs/python/tf#bool): Boolean.
- [ `tf.string` ](https://tensorflow.google.cn/api_docs/python/tf#string): String.
- [ `tf.qint8` ](https://tensorflow.google.cn/api_docs/python/tf#qint8): Quantized 8-bit signed integer.
- [ `tf.quint8` ](https://tensorflow.google.cn/api_docs/python/tf#quint8): Quantized 8-bit unsigned integer.
- [ `tf.qint16` ](https://tensorflow.google.cn/api_docs/python/tf#qint16): Quantized 16-bit signed integer.
- [ `tf.quint16` ](https://tensorflow.google.cn/api_docs/python/tf#quint16): Quantized 16-bit unsigned integer.
- [ `tf.qint32` ](https://tensorflow.google.cn/api_docs/python/tf#qint32): Quantized 32-bit signed integer.
- [ `tf.resource` ](https://tensorflow.google.cn/api_docs/python/tf#resource): Handle to a mutable resource.
- [ `tf.variant` ](https://tensorflow.google.cn/api_docs/python/tf#variant): Values of arbitrary types.
The [ `tf.as_dtype()` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/as_dtype) function converts numpy types and string typenames to a  `DType`  object.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/dtypes.py#L64-L85)

```
 __init__(type_enum)
 
```

Creates a new  `DataType` .

NOTE(mrry): In normal circumstances, you should not need toconstruct a  `DataType`  object directly. Instead, use the[ `tf.as_dtype()` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/as_dtype) function.

#### 参数：
- **`type_enum`** : A  `types_pb2.DataType`  enum value.


#### 加薪：
- **`TypeError`** : If  `type_enum`  is not a value  `types_pb2.DataType` .


## 属性


###  `as_datatype_enum` 
Returns a  `types_pb2.DataType`  enum value based on this  `DType` .

###  `as_numpy_dtype` 
Returns a  `numpy.dtype`  based on this  `DType` .

###  `base_dtype` 
Returns a non-reference  `DType`  based on this  `DType` .

###  `is_bool` 
返回是否为布尔数据类型

###  `is_complex` 
返回这是否为复杂浮点类型。

###  `is_floating` 
Returns whether this is a (non-quantized, real) floating point type.

###  `is_integer` 
Returns whether this is a (non-quantized) integer type.

###  `is_numpy_compatible` 


###  `is_quantized` 
返回这是否是量化数据类型。

###  `is_unsigned` 
返回此类型是否无符号。

Non-numeric, unordered, and quantized types are not considered unsigned, andthis function returns  `False` .

#### 返回：
Whether a  `DType`  is unsigned.

###  `limits` 
Return intensity limits, i.e.

(min, max) tuple, of the dtype.Args:  clip_negative : bool, optional If True, clip the negative range (i.e.    return 0 for min intensity) even if the image dtype allows negative    values. Returns  min, max : tuple Lower and upper intensity limits.

###  `max` 
返回此数据类型中可表示的最大值。

#### 加薪：
- **`TypeError`** : if this is a non-numeric, unordered, or quantized type.


###  `min` 
返回此数据类型中可表示的最小值。

#### 加薪：
- **`TypeError`** : if this is a non-numeric, unordered, or quantized type.


###  `name` 
Returns the string name for this  `DType` .

###  `real_dtype` 
返回与此数据类型的实际部分相对应的数据类型。

###  `size` 


## 方法


###  `__eq__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/dtypes.py#L260-L268)

```
 __eq__(other)
 
```

Returns True iff this DType refers to the same type as  `other` .

###  `__ne__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/dtypes.py#L270-L272)

```
 __ne__(other)
 
```

Returns True iff self != other.

###  `is_compatible_with` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/dtypes.py#L240-L258)

```
 is_compatible_with(other)
 
```

Returns True if the  `other`  DType will be converted to this DType.

转换规则如下：

```
 DType(T)       .is_compatible_with(DType(T))        == True
 
```

#### 参数：
- **`other`** : A  `DType`  (or object that may be converted to a  `DType` ).


#### 返回：
True if a Tensor of the  `other`   `DType`  will be implicitly converted tothis  `DType` .

