Computes the "logical or" of elements across dimensions of a tensor. (deprecated arguments)

```
 tf.compat.v1.reduce_any(
    input_tensor,
    axis=None,
    keepdims=None,
    name=None,
    reduction_indices=None,
    keep_dims=None
)
 
```


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(keep_dims)` . They will be removed in a future version.Instructions for updating:keep_dims is deprecated, use keepdims instead
Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  is None, all dimensions are reduced, and atensor with a single element is returned.

#### 例如：


```
 x = tf.constant([[True,  True], [False, False]])
tf.reduce_any(x)  # True
tf.reduce_any(x, 0)  # [True, True]
tf.reduce_any(x, 1)  # [True, False]
 
```

#### 参数：
- **`input_tensor`** : The boolean tensor to reduce.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name for the operation (optional).
- **`reduction_indices`** : The old (deprecated) name for axis.
- **`keep_dims`** : Deprecated alias for  `keepdims` .


#### 返回：
简化张量。

#### numpy兼容性
相当于np.any

