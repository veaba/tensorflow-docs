[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/recompute_grad) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/custom_gradient.py#L360-L405)  
---|---  
  
An eager-compatible version of recompute_grad.

### Aliases:

  * [`tf.compat.v1.recompute_grad`](/api_docs/python/tf/recompute_grad)
  * [`tf.compat.v2.recompute_grad`](/api_docs/python/tf/recompute_grad)

    
    
    tf.recompute_grad(f)
    

For f(*args, **kwargs), this supports gradients with respect to args, or to
gradients with respect to any variables residing in the kwarg 'variables'.
Note that for keras layer and model objects, this is handled automatically.

**Warning:** If `f` was originally a tf.keras Model or Layer object, `g` will
not be able to access the member variables of that object, because `g` returns
through the wrapper function `inner`. When recomputing gradients through
objects that inherit from keras, we suggest keeping a reference to the
underlying object around for the purpose of accessing these variables.

#### Args:

  * **`f`** : function `f(*x)` that returns a `Tensor` or sequence of `Tensor` outputs.

#### Returns:

A function `g` that wraps `f`, but which recomputes `f` on the backwards pass
of a gradient call.

