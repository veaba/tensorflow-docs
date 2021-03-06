Specifies that ops of type  `op_type`  is not differentiable.

**别名** : [ `tf.compat.v1.NoGradient` ](/api_docs/python/tf/no_gradient), [ `tf.compat.v1.NotDifferentiable` ](/api_docs/python/tf/no_gradient), [ `tf.compat.v1.no_gradient` ](/api_docs/python/tf/no_gradient), [ `tf.compat.v2.no_gradient` ](/api_docs/python/tf/no_gradient)

```
 tf.no_gradient(op_type)
 
```

This function should *not* be used for operations that have awell-defined gradient that is not yet implemented.

This function is only used when defining a new op type. It may beused for ops such as [ `tf.size()` ](https://tensorflow.google.cn/api_docs/python/tf/size) that are not differentiable.  Forexample:

```
 tf.no_gradient("Size")
 
```

The gradient computed for 'op_type' will then propagate zeros.

For ops that have a well-defined gradient but are not yet implemented,no declaration should be made, and an error *must* be thrown ifan attempt to request its gradient is made.

#### 参数：
- **`op_type`** : The string type of an operation. This corresponds to the `OpDef.name`  field for the proto that defines the operation.


#### 加薪：
- **`TypeError`** : If  `op_type`  is not a string.
