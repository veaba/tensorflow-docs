[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/moments) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_impl.py#L1244-L1277)  
  
  
Calculates the mean and variance of `x`.

### Aliases:

  * [`tf.compat.v2.nn.moments`](/api_docs/python/tf/nn/moments)

    
    
    tf.nn.moments(
        x,
        axes,
        shift=None,
        keepdims=False,
        name=None
    )
    

The mean and variance are calculated by aggregating the contents of `x` across
`axes`. If `x` is 1-D and `axes = [0]` this is just the mean and variance of a
vector.

**Note:** shift is currently not used; the true mean is computed and used.

When using these moments for batch normalization (see
[`tf.nn.batch_normalization`](https://tensorflow.google.cn/api_docs/python/tf/nn/batch_normalization)):

  * for so-called "global normalization", used with convolutional filters with shape `[batch, height, width, depth]`, pass `axes=[0, 1, 2]`.
  * for simple batch normalization pass `axes=[0]` (batch only).

#### Args:

  * **`x`** : A `Tensor`.
  * **`axes`** : Array of ints. Axes along which to compute mean and variance.
  * **`shift`** : Not used in the current implementation.
  * **`keepdims`** : produce moments with the same dimensionality as the input.
  * **`name`** : Name used to scope the operations that compute the moments.

#### Returns:

Two `Tensor` objects: `mean` and `variance`.

