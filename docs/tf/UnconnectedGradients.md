

## Class  `UnconnectedGradients` 
Controls how gradient computation behaves when y does not depend on x.

**Aliases** : [ `tf.compat.v1.UnconnectedGradients` ](/api_docs/python/tf/UnconnectedGradients), [ `tf.compat.v2.UnconnectedGradients` ](/api_docs/python/tf/UnconnectedGradients)

The gradient of y with respect to x can be zero in two different ways: therecould be no differentiable path in the graph connecting x to y (and so we canstatically prove that the gradient is zero) or it could be that runtime valuesof tensors in a particular execution lead to a gradient of zero (say, if arelu unit happens to not be activated). To allow you to distinguish betweenthese two cases you can choose what value gets returned for the gradient whenthere is no path in the graph from x to y:

-  `NONE` : Indicates that [None] will be returned if there is no path from xto y
-  `ZERO` : Indicates that a zero tensor will be returned in the shape of x.


## Class Members
-  `NONE`  []()
-  `ZERO`  []()
