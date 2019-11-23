
Defined in generated file:  `python/ops/gen_array_ops.py` 

Bitcasts a tensor from one type to another without copying data.


### Aliases:
- [ `tf.compat.v1.bitcast` ](/api_docs/python/tf/bitcast)
- [ `tf.compat.v2.bitcast` ](/api_docs/python/tf/bitcast)


```
tf.bitcast(
    input,
    type,
    name=None
)

```


Given a tensor  `input` , this operation returns a tensor that has the same bufferdata as  `input`  with datatype  `type` .

If the input datatype  `T`  is larger than the output datatype  `type`  then theshape changes from [...] to [..., sizeof( `T` )/sizeof( `type` )].

If  `T`  is smaller than  `type` , the operator requires that the rightmostdimension be equal to sizeof( `type` )/sizeof( `T` ). The shape then goes from[..., sizeof( `type` )/sizeof( `T` )] to [...].

tf.bitcast() and tf.cast() work differently when real dtype is casted as a complex dtype(e.g. tf.complex64 or tf.complex128) as tf.cast() make imaginary part 0 while tf.bitcast()gives module error.For example,


#### Example 1:


```
>>" dir="ltr">a = [1., 2., 3.]
```


<em>NOTE</em>: Bitcast is implemented as a low-level cast, so machines with differentendian orderings will give different results.


#### Args:
- **`input`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `int64` ,  `int32` ,  `uint8` ,  `uint16` ,  `uint32` ,  `uint64` ,  `int8` ,  `int16` ,  `complex64` ,  `complex128` ,  `qint8` ,  `quint8` ,  `qint16` ,  `quint16` ,  `qint32` .
- **`type`** : A [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.bfloat16, tf.half, tf.float32, tf.float64, tf.int64, tf.int32, tf.uint8, tf.uint16, tf.uint32, tf.uint64, tf.int8, tf.int16, tf.complex64, tf.complex128, tf.qint8, tf.quint8, tf.qint16, tf.quint16, tf.qint32` .
- **`name`** : A name for the operation (optional).


#### Returns:

A  `Tensor`  of type  `type` .
