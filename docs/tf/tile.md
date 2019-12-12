通过平铺给定的张量来构造张量。

**别名** : [ `tf.compat.v1.manip.tile` ](/api_docs/python/tf/tile), [ `tf.compat.v1.tile` ](/api_docs/python/tf/tile), [ `tf.compat.v2.tile` ](/api_docs/python/tf/tile)

```
 tf.tile(
    input,
    multiples,
    name=None
)
 
```

### 在指南中使用：
- [Better performance with the tf.data API](https://tensorflow.google.cn/guide/data_performance)
- [Masking and padding with Keras](https://tensorflow.google.cn/guide/keras/masking_and_padding)
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)
This operation creates a new tensor by replicating  `input`   `multiples`  times.The output tensor's i'th dimension has  `input.dims(i) * multiples[i]`  elements,and the values of  `input`  are replicated  `multiples[i]`  times along the 'i'thdimension. For example, tiling  `[a b c d]`  by  `[2]`  produces `[a b c d a b c d]` .

#### 参数：
- **`input`** : A  `Tensor` . 1-D or higher.
- **`multiples`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .1-D. Length must be the same as the number of dimensions in  `input` 
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

