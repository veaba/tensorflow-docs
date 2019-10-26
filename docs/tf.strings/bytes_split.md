Split string elements of input into bytes.
### Aliases:
- tf.compat.v1.strings.bytes_split
- tf.compat.v2.strings.bytes_split

```
 tf.strings.bytes_split(
    input,
    name=None
)
```
#### Examples:

```
 tf.strings.bytes_split('hello')
['h', 'e', 'l', 'l', 'o']
tf.strings.bytes_split(['hello', '123'])
<RaggedTensor [['h', 'e', 'l', 'l', 'o'], ['1', '2', '3']]>
```
[tf.strings.unicode_split](https://tensorflow.google.cn/api_docs/python/tf/strings/unicode_split)Note that this op splits strings into bytes, not unicode characters. To split strings into unicode characters, use .

[tf.io.decode_raw](https://tensorflow.google.cn/api_docs/python/tf/io/decode_raw)See also: , tf.strings.split, tf.strings.unicode_split.

#### Args:
- input: A string Tensor or RaggedTensor: the strings to split. Must have a statically known rank `(N)`.
- name: A name for the operation (optional).
#### Returns:
A RaggedTensor of rank N+1: the bytes that make up the source strings.
