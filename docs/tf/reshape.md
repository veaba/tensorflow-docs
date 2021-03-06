重塑张量。

**别名** : [ `tf.compat.v1.manip.reshape` ](/api_docs/python/tf/reshape), [ `tf.compat.v1.reshape` ](/api_docs/python/tf/reshape), [ `tf.compat.v2.reshape` ](/api_docs/python/tf/reshape)

```
 tf.reshape(
    tensor,
    shape,
    name=None
)
 
```

### 在指南中使用：
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)


### 在教程中使用：
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
- [TFRecord and tf.Example](https://tensorflow.google.cn/tutorials/load_data/tfrecord)
Given  `tensor` , this operation returns a tensor that has the same valuesas  `tensor`  with shape  `shape` .

If one component of  `shape`  is the special value -1, the size of thatdimension is computed so that the total size remains constant.  In particular,a  `shape`  of  `[-1]`  flattens into 1-D.  At most one component of  `shape`  canbe -1.

If  `shape`  is 1-D or higher, then the operation returns a tensor with shape `shape`  filled with the values of  `tensor` . In this case, the number ofelements implied by  `shape`  must be the same as the number of elements in `tensor` .

#### 例如：


```
 # tensor 't' is [1, 2, 3, 4, 5, 6, 7, 8, 9]
# tensor 't' has shape [9]
reshape(t, [3, 3]) ==> [[1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]]

# tensor 't' is [[[1, 1], [2, 2]],
#                [[3, 3], [4, 4]]]
# tensor 't' has shape [2, 2, 2]
reshape(t, [2, 4]) ==> [[1, 1, 2, 2],
                        [3, 3, 4, 4]]

# tensor 't' is [[[1, 1, 1],
#                 [2, 2, 2]],
#                [[3, 3, 3],
#                 [4, 4, 4]],
#                [[5, 5, 5],
#                 [6, 6, 6]]]
# tensor 't' has shape [3, 2, 3]
# pass '[-1]' to flatten 't'
reshape(t, [-1]) ==> [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]

# -1 can also be used to infer the shape

# -1 is inferred to be 9:
reshape(t, [2, -1]) ==> [[1, 1, 1, 2, 2, 2, 3, 3, 3],
                         [4, 4, 4, 5, 5, 5, 6, 6, 6]]
# -1 is inferred to be 2:
reshape(t, [-1, 9]) ==> [[1, 1, 1, 2, 2, 2, 3, 3, 3],
                         [4, 4, 4, 5, 5, 5, 6, 6, 6]]
# -1 is inferred to be 3:
reshape(t, [ 2, -1, 3]) ==> [[[1, 1, 1],
                              [2, 2, 2],
                              [3, 3, 3]],
                             [[4, 4, 4],
                              [5, 5, 5],
                              [6, 6, 6]]]

# tensor 't' is [7]
# shape `[]` reshapes to a scalar
reshape(t, []) ==> 7
 
```

#### 参数：
- **`tensor`** : A  `Tensor` .
- **`shape`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .Defines the shape of the output tensor.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `tensor` .

