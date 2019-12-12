Clips tensor values to a maximum L2-norm.

**Aliases** : [ `tf.compat.v1.clip_by_norm` ](/api_docs/python/tf/clip_by_norm), [ `tf.compat.v2.clip_by_norm` ](/api_docs/python/tf/clip_by_norm)

```
 tf.clip_by_norm(
    t,
    clip_norm,
    axes=None,
    name=None
)
 
```

### Used in the guide:
- [Eager execution](https://tensorflow.google.cn/guide/eager)
Given a tensor  `t` , and a maximum clip value  `clip_norm` , this operationnormalizes  `t`  so that its L2-norm is less than or equal to  `clip_norm` ,along the dimensions given in  `axes` . Specifically, in the default casewhere all dimensions are used for calculation, if the L2-norm of  `t`  isalready less than or equal to  `clip_norm` , then  `t`  is not modified. Ifthe L2-norm is greater than  `clip_norm` , then this operation returns atensor of the same type and shape as  `t`  with its values set to:

 `t * clip_norm / l2norm(t)` 

In this case, the L2-norm of the output tensor is  `clip_norm` .

As another example, if  `t`  is a matrix and  `axes == [1]` , then each rowof the output will have L2-norm less than or equal to  `clip_norm` . If `axes == [0]`  instead, each column of the output will be clipped.

This operation is typically used to clip gradients before applying them withan optimizer.

#### Args:
- **`t`** : A  `Tensor`  or  `IndexedSlices` .
- **`clip_norm`** : A 0-D (scalar)  `Tensor`  > 0. A maximum clipping value.
- **`axes`** : A 1-D (vector)  `Tensor`  of type int32 containing the dimensionsto use for computing the L2-norm. If  `None`  (the default), uses alldimensions.
- **`name`** : A name for the operation (optional).


#### Returns:
A clipped  `Tensor`  or  `IndexedSlices` .

#### Raises:
- **`ValueError`** : If the clip_norm tensor is not a 0-D scalar tensor.
- **`TypeError`** : If dtype of the input is not a floating point orcomplex type.
