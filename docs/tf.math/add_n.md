Adds all input tensors element-wise.

**别名** : [ `tf.add_n` ](/api_docs/python/tf/math/add_n), [ `tf.compat.v1.add_n` ](/api_docs/python/tf/math/add_n), [ `tf.compat.v1.math.add_n` ](/api_docs/python/tf/math/add_n), [ `tf.compat.v2.add_n` ](/api_docs/python/tf/math/add_n), [ `tf.compat.v2.math.add_n` ](/api_docs/python/tf/math/add_n)

```
 tf.math.add_n(
    inputs,
    name=None
)
 
```

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [Use a GPU](https://tensorflow.google.cn/guide/gpu)


### 在教程中使用：
- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
- [Overfit and underfit](https://tensorflow.google.cn/tutorials/keras/overfit_and_underfit)
Converts  `IndexedSlices`  objects into dense tensors prior to adding.

[ `tf.math.add_n` ](https://tensorflow.google.cn/api_docs/python/tf/math/add_n) performs the same operation as [ `tf.math.accumulate_n` ](https://tensorflow.google.cn/api_docs/python/tf/math/accumulate_n), but itwaits for all of its inputs to be ready before beginning to sum.This buffering can result in higher memory consumption when inputs are readyat different times, since the minimum temporary storage required isproportional to the input size rather than the output size.

This op does not [broadcast](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)its inputs. If you need broadcasting, use [ `tf.math.add` ](https://tensorflow.google.cn/api_docs/python/tf/math/add) (or the  `+`  operator)instead.

#### 例如：


```
 a = tf.constant([[3, 5], [4, 8]])
b = tf.constant([[1, 6], [2, 9]])
tf.math.add_n([a, b, a])  # [[7, 16], [10, 25]]
 
```

#### 参数：
- **`inputs`** : A list of [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) or [ `tf.IndexedSlices` ](https://tensorflow.google.cn/api_docs/python/tf/IndexedSlices) objects, each with sameshape and type.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of same shape and type as the elements of  `inputs` .

#### 加薪：
- **`ValueError`** : If  `inputs`  don't all have same shape and dtype or the shapecannot be inferred.
