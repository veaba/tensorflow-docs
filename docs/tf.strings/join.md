将给定的字符串张量列表中的字符串连接成一个张量；

**别名** : [ `tf.compat.v1.string_join` ](/api_docs/python/tf/strings/join), [ `tf.compat.v1.strings.join` ](/api_docs/python/tf/strings/join), [ `tf.compat.v2.strings.join` ](/api_docs/python/tf/strings/join)

```
 tf.strings.join(
    inputs,
    separator='',
    name=None
)
 
```

### 在指南中使用：
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)
with the given separator (default is an empty separator).

#### 参数：
- **`inputs`** : A list of at least 1  `Tensor`  objects with type  `string` .A list of string tensors.  The tensors must all have the same shape,or be scalars.  Scalars may be mixed in; these will be broadcast to the shapeof non-scalar inputs.
- **`separator`** : An optional  `string` . Defaults to  `""` .string, an optional join separator.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `string` .

