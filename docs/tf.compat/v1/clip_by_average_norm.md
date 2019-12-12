Clips tensor values to a maximum average L2-norm. (deprecated)

```
 tf.compat.v1.clip_by_average_norm(
    t,
    clip_norm,
    name=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:clip_by_average_norm is deprecated in TensorFlow 2.0. Please use clip_by_norm(t, clip_norm * tf.cast(tf.size(t), tf.float32), name) instead.
Given a tensor  `t` , and a maximum clip value  `clip_norm` , this operationnormalizes  `t`  so that its average L2-norm is less than or equal to `clip_norm` . Specifically, if the average L2-norm is already less than orequal to  `clip_norm` , then  `t`  is not modified. If the average L2-norm isgreater than  `clip_norm` , then this operation returns a tensor of the sametype and shape as  `t`  with its values set to:

 `t * clip_norm / l2norm_avg(t)` 

In this case, the average L2-norm of the output tensor is  `clip_norm` .

This operation is typically used to clip gradients before applying them withan optimizer.

#### 参数：
- **`t`** : A  `Tensor` .
- **`clip_norm`** : A 0-D (scalar)  `Tensor`  > 0. A maximum clipping value.
- **`name`** : A name for the operation (optional).


#### 返回：
A clipped  `Tensor` .

