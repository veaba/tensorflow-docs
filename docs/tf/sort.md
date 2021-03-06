对张量排序。

**别名** : [ `tf.compat.v1.sort` ](/api_docs/python/tf/sort), [ `tf.compat.v2.sort` ](/api_docs/python/tf/sort)

```
 tf.sort(
    values,
    axis=-1,
    direction='ASCENDING',
    name=None
)
 
```

#### 用法：


```
 import tensorflow as tf
a = [1, 10, 26.9, 2.8, 166.32, 62.3]
b = tf.sort(a,axis=-1,direction='ASCENDING',name=None)
c = tf.keras.backend.eval(b)
# Here, c = [  1.     2.8   10.    26.9   62.3  166.32]
 
```

#### 参数：
- **`values`** : 1-D or higher numeric  `Tensor` .
- **`axis`** : The axis along which to sort. The default is -1, which sorts the lastaxis.
- **`direction`** : The direction in which to sort the values ( `'ASCENDING'`  or `'DESCENDING'` ).
- **`name`** : Optional name for the operation.


#### 返回：
A  `Tensor`  with the same dtype and shape as  `values` , with the elements    sorted along the given  `axis` .

#### 加薪：
- **`ValueError`** : If axis is not a constant scalar, or the direction is invalid.
