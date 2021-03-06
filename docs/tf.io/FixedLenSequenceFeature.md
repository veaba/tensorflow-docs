

## Class  `FixedLenSequenceFeature` 
Configuration for parsing a variable-length input feature into a  `Tensor` .

**别名** : [ `tf.compat.v1.FixedLenSequenceFeature` ](/api_docs/python/tf/io/FixedLenSequenceFeature), [ `tf.compat.v1.io.FixedLenSequenceFeature` ](/api_docs/python/tf/io/FixedLenSequenceFeature), [ `tf.compat.v2.io.FixedLenSequenceFeature` ](/api_docs/python/tf/io/FixedLenSequenceFeature)

The resulting  `Tensor`  of parsing a single  `SequenceExample`  or  `Example`  hasa static  `shape`  of  `[None] + shape`  and the specified  `dtype` .The resulting  `Tensor`  of parsing a  `batch_size`  many  `Example` s hasa static  `shape`  of  `[batch_size, None] + shape`  and the specified  `dtype` .The entries in the  `batch`  from different  `Examples`  will be padded with `default_value`  to the maximum length present in the  `batch` .

To treat a sparse input as dense, provide  `allow_missing=True` ; otherwise,the parse functions will fail on any examples missing this feature.

#### 字段：
- **`shape`** : Shape of input data for dimension 2 and higher. First dimension isof variable length  `None` .
- **`dtype`** : Data type of input.
- **`allow_missing`** : Whether to allow this feature to be missing from a featurelist item. Is available only for parsing  `SequenceExample`  not forparsing  `Examples` .
- **`default_value`** : Scalar value to be used to pad multiple  `Example` s to theirmaximum length. Irrelevant for parsing a single  `Example`  or `SequenceExample` . Defaults to "" for dtype string and 0 otherwise(optional).


##  `__new__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/parsing_ops.py#L185-L187)

```
 @staticmethod
__new__(
    cls,
    shape,
    dtype,
    allow_missing=False,
    default_value=None
)
 
```

Create new instance of FixedLenSequenceFeature(shape, dtype, allow_missing, default_value)

## 属性


###  `shape` 


###  `dtype` 


###  `allow_missing` 


###  `default_value` 
