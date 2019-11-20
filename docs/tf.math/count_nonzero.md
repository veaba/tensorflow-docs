[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/count_nonzero) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1695-L1759)  
---|---  
  
Computes number of nonzero elements across dimensions of a tensor.

### Aliases:

  * [`tf.compat.v2.math.count_nonzero`](/api_docs/python/tf/math/count_nonzero)

    
    
    tf.math.count_nonzero(
        input,
        axis=None,
        keepdims=None,
        dtype=tf.dtypes.int64,
        name=None
    )
    

Reduces `input` along the dimensions given in `axis`. Unless `keepdims` is
true, the rank of the tensor is reduced by 1 for each entry in `axis`. If
`keepdims` is true, the reduced dimensions are retained with length 1.

If `axis` has no entries, all dimensions are reduced, and a tensor with a
single element is returned.

**NOTE** Floating point comparison to zero is done by exact floating point
equality check. Small values are **not** rounded to zero for purposes of the
nonzero check.

#### For example:

    
    
    x = tf.constant([[0, 1, 0], [1, 1, 0]])
    tf.math.count_nonzero(x)  # 3
    tf.math.count_nonzero(x, 0)  # [1, 2, 0]
    tf.math.count_nonzero(x, 1)  # [1, 2]
    tf.math.count_nonzero(x, 1, keepdims=True)  # [[1], [2]]
    tf.math.count_nonzero(x, [0, 1])  # 3
    

**NOTE** Strings are compared against zero-length empty string `""`. Any
string with a size greater than zero is already considered as nonzero.

#### For example:

    
    
    x = tf.constant(["", "a", "  ", "b", ""])
    tf.math.count_nonzero(x) # 3, with "a", "  ", and "b" as nonzero strings.
    

#### Args:

  * **`input`** : The tensor to reduce. Should be of numeric type, `bool`, or `string`.
  * **`axis`** : The dimensions to reduce. If `None` (the default), reduces all dimensions. Must be in the range `[-rank(input), rank(input))`.
  * **`keepdims`** : If true, retains reduced dimensions with length 1.
  * **`dtype`** : The output dtype; defaults to [`tf.int64`](https://tensorflow.google.cn/api_docs/python/tf#int64).
  * **`name`** : A name for the operation (optional).

#### Returns:

The reduced tensor (number of nonzero values).

