Stacks a list of rank- `R`  tensors into one rank- `(R+1)`  tensor.

**别名** : [ `tf.compat.v1.stack` ](/api_docs/python/tf/stack), [ `tf.compat.v2.stack` ](/api_docs/python/tf/stack)

```
 tf.stack(
    values,
    axis=0,
    name='stack'
)
 
```

### 在指南中使用：
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)


### 在教程中使用：
- [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
- [Load CSV data](https://tensorflow.google.cn/tutorials/load_data/csv)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Overfit and underfit](https://tensorflow.google.cn/tutorials/keras/overfit_and_underfit)
- [Load a pandas.DataFrame](https://tensorflow.google.cn/tutorials/load_data/pandas_dataframe)
Packs the list of tensors in  `values`  into a tensor with rank one higher thaneach tensor in  `values` , by packing them along the  `axis`  dimension.Given a list of length  `N`  of tensors of shape  `(A, B, C)` ;

if  `axis == 0`  then the  `output`  tensor will have the shape  `(N, A, B, C)` .if  `axis == 1`  then the  `output`  tensor will have the shape  `(A, N, B, C)` .Etc.

#### 例如：


```
 x = tf.constant([1, 4])
y = tf.constant([2, 5])
z = tf.constant([3, 6])
tf.stack([x, y, z])  # [[1, 4], [2, 5], [3, 6]] (Pack along first dim.)
tf.stack([x, y, z], axis=1)  # [[1, 2, 3], [4, 5, 6]]
 
```

This is the opposite of unstack.  The numpy equivalent is

```
 tf.stack([x, y, z]) = np.stack([x, y, z])
 
```

#### 参数：
- **`values`** : A list of  `Tensor`  objects with the same shape and type.
- **`axis`** : An  `int` . The axis to stack along. Defaults to the first dimension.Negative values wrap around, so the valid range is  `[-(R+1), R+1)` .
- **`name`** : A name for this operation (optional).


#### 返回：
- **`output`** : A stacked  `Tensor`  with the same type as  `values` .


#### 加薪：
- **`ValueError`** : If  `axis`  is out of the range [-(R+1), R+1).
