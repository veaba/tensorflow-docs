对张量应用布尔掩码。

```
 tf.compat.v1.boolean_mask(
    tensor,
    mask,
    name='boolean_mask',
    axis=None
)
 
```

Numpy equivalent is  `tensor[mask]` .

```
 # 1-D example
tensor = [0, 1, 2, 3]
mask = np.array([True, False, True, False])
boolean_mask(tensor, mask)  # [0, 2]
 
```

In general,  `0 < dim(mask) = K <= dim(tensor)` , and  `mask` 's shape must matchthe first K dimensions of  `tensor` 's shape.  We then have:   `boolean_mask(tensor, mask)[i, j1,...,jd] = tensor[i1,...,iK,j1,...,jd]` where  `(i1,...,iK)`  is the ith  `True`  entry of  `mask`  (row-major order).The  `axis`  could be used with  `mask`  to indicate the axis to mask from.In that case,  `axis + dim(mask) <= dim(tensor)`  and  `mask` 's shape must matchthe first  `axis + dim(mask)`  dimensions of  `tensor` 's shape.

See also: [ `tf.ragged.boolean_mask` ](https://tensorflow.google.cn/api_docs/python/tf/ragged/boolean_mask), which can be applied to both dense andragged tensors, and can be used if you need to preserve the masked dimensionsof  `tensor`  (rather than flattening them, as [ `tf.boolean_mask` ](https://tensorflow.google.cn/api_docs/python/tf/boolean_mask) does).

#### 参数：
- **`tensor`** :  N-D tensor.
- **`mask`** :  K-D boolean tensor, K <= N and K must be known statically.
- **`name`** :  A name for this operation (optional).
- **`axis`** :  A 0-D int Tensor representing the axis in  `tensor`  to mask from. Bydefault, axis is 0 which will mask from the first dimension. Otherwise K +axis <= N.


#### 返回：
(N-K+1)-dimensional tensor populated by entries in  `tensor`  correspondingto  `True`  values in  `mask` .

#### 加薪：
- **`ValueError`** :  If shapes do not conform.


#### 示例：


```
 # 2-D example
tensor = [[1, 2], [3, 4], [5, 6]]
mask = np.array([True, False, True])
boolean_mask(tensor, mask)  # [[1, 2], [5, 6]]
 
```

