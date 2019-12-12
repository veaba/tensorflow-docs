计算辍学。

```
 tf.nn.dropout(    x,    rate,    noise_shape=None,    seed=None,    name=None) 
```

### 在指南中使用：
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)


### 在教程中使用：
- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
With probability  `rate` , drops elements of  `x` . Input that are kept arescaled up by  `1 / (1 - rate)` , otherwise outputs  `0` .  The scaling is so thatthe expected sum is unchanged.

**Note:**  The behavior of dropout has changed between TensorFlow 1.x and 2.x.When converting 1.x code, please use named arguments to ensure behavior staysconsistent.

By default, each element is kept or dropped independently.  If  `noise_shape` is specified, it must be[broadcastable](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)to the shape of  `x` , and only dimensions with  `noise_shape[i] == shape(x)[i]` will make independent decisions.  For example, if  `shape(x) = [k, l, m, n]` and  `noise_shape = [k, 1, 1, n]` , each batch and channel component will bekept independently and each row and column will be kept or not kept together.

#### 参数：
- **`x`** : A floating point tensor.
- **`rate`** : A scalar  `Tensor`  with the same type as x. The probabilitythat each element is dropped. For example, setting rate=0.1 would drop10% of input elements.
- **`noise_shape`** : A 1-D  `Tensor`  of type  `int32` , representing theshape for randomly generated keep/drop flags.
- **`seed`** : A Python integer. Used to create random seeds. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
- **`name`** : A name for this operation (optional).


#### 返回：
A Tensor of the same shape of  `x` .

#### 加薪：
- **`ValueError`** : If  `rate`  is not in  `(0, 1]`  or if  `x`  is not a floating pointtensor.
