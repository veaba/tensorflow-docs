将给定张量中的每个项转换为字符串。

**别名** : [ `tf.as_string` ](/api_docs/python/tf/strings/as_string), [ `tf.compat.v1.as_string` ](/api_docs/python/tf/strings/as_string), [ `tf.compat.v1.dtypes.as_string` ](/api_docs/python/tf/strings/as_string), [ `tf.compat.v1.strings.as_string` ](/api_docs/python/tf/strings/as_string), [ `tf.compat.v2.as_string` ](/api_docs/python/tf/strings/as_string), [ `tf.compat.v2.strings.as_string` ](/api_docs/python/tf/strings/as_string)

```
 tf.strings.as_string(
    input,
    precision=-1,
    scientific=False,
    shortest=False,
    width=-1,
    fill='',
    name=None
)
 
```

支持多种数值类型和布尔值。

For Unicode, see the[https://www.tensorflow.org/tutorials/representation/unicode](/api_docs/python/tf/strings/Working%20with%20Unicode%20text)tutorial.

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `int8` ,  `int16` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` ,  `float32` ,  `float64` ,  `bool` .
- **`precision`** : An optional  `int` . Defaults to  `-1` .The post-decimal precision to use for floating point numbers.Only used if precision > -1.
- **`scientific`** : An optional  `bool` . Defaults to  `False` .Use scientific notation for floating point numbers.
- **`shortest`** : An optional  `bool` . Defaults to  `False` .Use shortest representation (either scientific or standard) forfloating point numbers.
- **`width`** : An optional  `int` . Defaults to  `-1` .Pad pre-decimal numbers to this width.Applies to both floating point and integer numbers.Only used if width > -1.
- **`fill`** : An optional  `string` . Defaults to  `""` .The value to pad if width > -1.  If empty, pads with spaces.Another typical value is '0'.  String cannot be longer than 1 character.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `string` .

