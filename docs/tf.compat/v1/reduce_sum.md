Computes the sum of elements across dimensions of a tensor. (deprecated arguments)

```
 tf.compat.v1.reduce_sum(
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
 x = tf.constant([[1, 1, 1], [1, 1, 1]])
tf.reduce_sum(x)  # 6
tf.reduce_sum(x, 0)  # [2, 2, 2]
tf.reduce_sum(x, 1)  # [3, 3]
tf.reduce_sum(x, 1, keepdims=True)  # [[3], [3]]
tf.reduce_sum(x, [0, 1])  # 6
 
```

#### 参数：
- **`input_tensor`** : The tensor to reduce. Should have numeric type.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name for the operation (optional).
- **`reduction_indices`** : The old (deprecated) name for axis.
- **`keep_dims`** : Deprecated alias for  `keepdims` .


#### 返回：
The reduced tensor, of the same dtype as the input_tensor.

#### numpy兼容性
Equivalent to np.sum apart the fact that numpy upcast uint8 and int32 toint64 while tensorflow returns the same dtype as the input.

