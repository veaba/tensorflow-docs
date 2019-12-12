Calculates the mean and variance of  `x` .

```
 tf.nn.moments(    x,    axes,    shift=None,    keepdims=False,    name=None) 
```

The mean and variance are calculated by aggregating the contents of  `x` across  `axes` .  If  `x`  is 1-D and  `axes = [0]`  this is just the meanand variance of a vector.


**Note:**  shift is currently not used; the true mean is computed and used.
When using these moments for batch normalization (see[ `tf.nn.batch_normalization` ](https://tensorflow.google.cn/api_docs/python/tf/nn/batch_normalization)):

- for so-called "global normalization", used with convolutional filters withshape  `[batch, height, width, depth]` , pass  `axes=[0, 1, 2]` .
- for simple batch normalization pass  `axes=[0]`  (batch only).


#### 参数：
- **`x`** : A  `Tensor` .
- **`axes`** : Array of ints.  Axes along which to compute mean andvariance.
- **`shift`** : Not used in the current implementation.
- **`keepdims`** : produce moments with the same dimensionality as the input.
- **`name`** : Name used to scope the operations that compute the moments.


#### 返回：
Two  `Tensor`  objects:  `mean`  and  `variance` .

