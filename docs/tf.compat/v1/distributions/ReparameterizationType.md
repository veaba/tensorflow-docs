## Class ReparameterizationType

Instances of this class represent how sampling is reparameterized.

Two static instances exist in the distributions library, signifying one of two possible properties for samples from a distribution:

FULLY_REPARAMETERIZED: Samples from the distribution are fully reparameterized, and straight-through gradients are supported.

NOT_REPARAMETERIZED: Samples from the distribution are not fully reparameterized, and straight-through gradients are either partially unsupported or are not supported at all. In this case, for purposes of e.g. RL or variational inference, it is generally safest to wrap the sample results in a stop_gradients call and use policy gradients / surrogate loss instead.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L233-L242)


```
 __init__(rep_type)
```

DEPRECATED FUNCTION
## Methods
### __eq__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/distributions/distribution.py#L247-L259)


```
 __eq__(other)
```

Determine if this ReparameterizationType is equal to another.

Since RepaparameterizationType instances are constant static global instances, equality checks if two instances' id() values are equal.
#### Args:
- `other`: Object to compare against.
#### Returns:

self is other.
