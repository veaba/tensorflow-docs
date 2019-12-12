An eager-compatible version of recompute_grad.

**Aliases** : [ `tf.compat.v1.recompute_grad` ](/api_docs/python/tf/recompute_grad), [ `tf.compat.v2.recompute_grad` ](/api_docs/python/tf/recompute_grad)

```
 tf.recompute_grad(f)
 
```

For f(*args, **kwargs), this supports gradients with respect to args, or togradients with respect to any variables residing in the kwarg 'variables'.Note that for keras layer and model objects, this is handled automatically.


**Warning:**  If  `f`  was originally a tf.keras Model or Layer object,  `g`  will notbe able to access the member variables of that object, because  `g`  returnsthrough the wrapper function  `inner` .  When recomputing gradients throughobjects that inherit from keras, we suggest keeping a reference to theunderlying object around for the purpose of accessing these variables.


#### Args:
- **`f`** : function  `f(*x)`  that returns a  `Tensor`  or sequence of  `Tensor`  outputs.


#### Returns:
A function  `g`  that wraps  `f` , but which recomputes  `f`  on the backwardspass of a gradient call.

