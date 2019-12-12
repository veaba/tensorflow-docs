

在给定维度上连接字符串张量。

```
 tf.compat.v1.reduce_join(
    inputs,
    axis=None,
    keep_dims=None,
    separator='',
    name=None,
    reduction_indices=None,
    keepdims=None
)
 
```

Computes the string join across dimensions in the given string Tensor of shape `[\\(d_0, d_1, ..., d_{n-1}\\)]` .  Returns a new Tensor created by joining the inputstrings with the given separator (default: empty string).  Negative indices arecounted backwards from the end, with  `-1`  being equivalent to  `n - 1` .  Ifindices are not specified, joins across all dimensions beginning from  `n - 1` through  `0` .

#### 例如：


```
 #) ==> ["a.c", "b.d"]
tf.strings.reduce_join(a, [0, 1]) ==> "acbd"
tf.strings.reduce_join(a, [1, 0]) ==> "abcd"
tf.strings.reduce_join(a, []) ==> [["a", "b"], ["c", "d"]]
tf.strings.reduce_join(a) = tf.strings.reduce_join(a, [1, 0]) ==> "abcd"
 
```

#### 参数：
- **`inputs`** : A  `Tensor`  of type  `string` .The input to be joined.  All reduced indices must have non-zero size.
- **`axis`** : A  `Tensor`  of type  `int32` .The dimensions to reduce over.  Dimensions are reduced in theorder specified.  Omitting  `axis`  is equivalent to passing `[n-1, n-2, ..., 0]` .  Negative indices from  `-n`  to  `-1`  are supported.
- **`keep_dims`** : An optional  `bool` . Defaults to  `False` .If  `True` , retain reduced dimensions with length  `1` .
- **`separator`** : An optional  `string` . Defaults to  `""` .The separator to use when joining.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `string` .

