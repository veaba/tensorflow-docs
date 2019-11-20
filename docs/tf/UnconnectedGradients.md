[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/UnconnectedGradients) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/unconnected_gradients.py#L27-L43)  
---|---  
  
## Class `UnconnectedGradients`

Controls how gradient computation behaves when y does not depend on x.

### Aliases:

  * Class [`tf.compat.v1.UnconnectedGradients`](/api_docs/python/tf/UnconnectedGradients)
  * Class [`tf.compat.v2.UnconnectedGradients`](/api_docs/python/tf/UnconnectedGradients)

The gradient of y with respect to x can be zero in two different ways: there
could be no differentiable path in the graph connecting x to y (and so we can
statically prove that the gradient is zero) or it could be that runtime values
of tensors in a particular execution lead to a gradient of zero (say, if a
relu unit happens to not be activated). To allow you to distinguish between
these two cases you can choose what value gets returned for the gradient when
there is no path in the graph from x to y:

  * `NONE`: Indicates that [None] will be returned if there is no path from x to y
  * `ZERO`: Indicates that a zero tensor will be returned in the shape of x.

## Class Members

  * `NONE`
  * `ZERO`

