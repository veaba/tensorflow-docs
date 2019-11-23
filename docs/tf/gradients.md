
Constructs symbolic derivatives of sum of  `ys`  w.r.t. x in  `xs` .


### Aliases:
- [ `tf.compat.v2.gradients` ](/api_docs/python/tf/gradients)


```
tf.gradients(
    ys,
    xs,
    grad_ys=None,
    name='gradients',
    gate_gradients=False,
    aggregation_method=None,
    stop_gradients=None,
    unconnected_gradients=tf.UnconnectedGradients.NONE
)

```


 `ys`  and  `xs`  are each a  `Tensor`  or a list of tensors.   `grad_ys` is a list of  `Tensor` , holding the gradients received by the `ys` . The list must be the same length as  `ys` .

 `gradients()`  adds ops to the graph to output the derivatives of  `ys`  withrespect to  `xs` .  It returns a list of  `Tensor`  of length  `len(xs)`  whereeach tensor is the  `sum(dy/dx)`  for y in  `ys` .

 `grad_ys`  is a list of tensors of the same length as  `ys`  that holdsthe initial gradients for each y in  `ys` .  When  `grad_ys`  is None,we fill in a tensor of '1's of the shape of y for each y in  `ys` .  Auser can provide their own initial  `grad_ys`  to compute thederivatives using a different initial gradient for each y (e.g., ifone wanted to weight the gradient differently for each value ineach y).

 `stop_gradients`  is a  `Tensor`  or a list of tensors to be considered constantwith respect to all  `xs` . These tensors will not be backpropagated through,as though they had been explicitly disconnected using  `stop_gradient` .  Amongother things, this allows computation of partial derivatives as opposed tototal derivatives. For example:


```
a = tf.constant(0.)
b = 2 * a
g = tf.gradients(a + b, [a, b], stop_gradients=[a, b])

```


Here the partial derivatives  `g`  evaluate to  `[1.0, 1.0]` , compared to thetotal derivatives  `tf.gradients(a + b, [a, b])` , which take into account theinfluence of  `a`  on  `b`  and evaluate to  `[3.0, 1.0]` .  Note that the above isequivalent to:


```
a = tf.stop_gradient(tf.constant(0.))
b = tf.stop_gradient(2 * a)
g = tf.gradients(a + b, [a, b])

```


 `stop_gradients`  provides a way of stopping gradient after the graph hasalready been constructed, as compared to [ `tf.stop_gradient` ](https://tensorflow.google.cn/api_docs/python/tf/stop_gradient) which is usedduring graph construction.  When the two approaches are combined,backpropagation stops at both [ `tf.stop_gradient` ](https://tensorflow.google.cn/api_docs/python/tf/stop_gradient) nodes and nodes in `stop_gradients` , whichever is encountered first.

All integer tensors are considered constant with respect to all  `xs` , as ifthey were included in  `stop_gradients` .

 `unconnected_gradients`  determines the value returned for each x in xs if itis unconnected in the graph to ys. By default this is None to safeguardagainst errors. Mathematically these gradients are zero which can be requestedusing the  `'zero'`  option.  `tf.UnconnectedGradients`  provides thefollowing options and behaviors:


```
a = tf.ones([1, 2])
b = tf.ones([3, 1])
g1 = tf.gradients([b], [a], unnconnected_gradients='none')
sess.run(g1)  # [None]

g2 = tf.gradients([b], [a], unconnected_gradients='zero')
sess.run(g2)  # [array([[0., 0.]], dtype=float32)]

```



#### Args:
- **`ys`** : A  `Tensor`  or list of tensors to be differentiated.
- **`xs`** : A  `Tensor`  or list of tensors to be used for differentiation.
- **`grad_ys`** : Optional. A  `Tensor`  or list of tensors the same size as `ys`  and holding the gradients computed for each y in  `ys` .
- **`name`** : Optional name to use for grouping all the gradient ops together.defaults to 'gradients'.
- **`gate_gradients`** : If True, add a tuple around the gradients returnedfor an operations.  This avoids some race conditions.
- **`aggregation_method`** : Specifies the method used to combine gradient terms.Accepted values are constants defined in the class  `AggregationMethod` .
- **`stop_gradients`** : Optional. A  `Tensor`  or list of tensors not to differentiatethrough.
- **`unconnected_gradients`** : Optional. Specifies the gradient value returned whenthe given input tensors are unconnected. Accepted values are constantsdefined in the class [ `tf.UnconnectedGradients` ](https://tensorflow.google.cn/api_docs/python/tf/UnconnectedGradients) and the default value is `none` .


#### Returns:

A list of  `sum(dy/dx)`  for each x in  `xs` .


#### Raises:
- **`LookupError`** : if one of the operations between  `x`  and  `y`  does nothave a registered gradient function.
- **`ValueError`** : if the arguments are invalid.
- **`RuntimeError`** : if called in Eager mode.
