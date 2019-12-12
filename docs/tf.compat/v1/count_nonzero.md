Computes number of nonzero elements across dimensions of a tensor. (deprecated arguments) (deprecated arguments)

```
 tf.compat.v1.count_nonzero(    input_tensor=None,    axis=None,    keepdims=None,    dtype=tf.dtypes.int64,    name=None,    reduction_indices=None,    keep_dims=None,    input=None) 
```


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(keep_dims)` . They will be removed in a future version.Instructions for updating:keep_dims is deprecated, use keepdims instead

**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(axis)` . They will be removed in a future version.Instructions for updating:reduction_indices is deprecated, use axis instead
Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  has no entries, all dimensions are reduced, and atensor with a single element is returned.

**NOTE**  Floating point comparison to zero is done by exact floating pointequality check.  Small values are **not**  rounded to zero for purposes ofthe nonzero check.

#### 例如：


```
 x = tf.constant([[0, 1, 0], [1, 1, 0]])
tf.math.count_nonzero(x)  # 3
tf.math.count_nonzero(x, 0)  # [1, 2, 0]
tf.math.count_nonzero(x, 1)  # [1, 2]
tf.math.count_nonzero(x, 1, keepdims=True)  # [[1], [2]]
tf.math.count_nonzero(x, [0, 1])  # 3
 
```

**NOTE**  Strings are compared against zero-length empty string  `""` . Anystring with a size greater than zero is already considered as nonzero.

#### 例如：


```
 x = tf.constant(["", "a", "  ", "b", ""])
tf.math.count_nonzero(x) # 3, with "a", "  ", and "b" as nonzero strings.
 
```

#### 参数：
- **`input_tensor`** : The tensor to reduce. Should be of numeric type,  `bool` , or `string` .
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`dtype`** : The output dtype; defaults to [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64).
- **`name`** : A name for the operation (optional).
- **`reduction_indices`** : The old (deprecated) name for axis.
- **`keep_dims`** : Deprecated alias for  `keepdims` .
- **`input`** : Overrides input_tensor. For compatibility.


#### 返回：
约化张量（非零值的数目）。

