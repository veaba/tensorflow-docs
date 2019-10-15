## Class FixedLenFeature

Configuration for parsing a fixed-length input feature.
### Aliases:
- Class `tf.compat.v1.FixedLenFeature`
- Class `tf.compat.v1.io.FixedLenFeature`
- Class `tf.compat.v2.io.FixedLenFeature`
### Used in the guide:
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
### Used in the tutorials:
- ``T``F``R``e``c``o``r``d`` ``a``n``d`` ``t``f``.``E``x``a``m``p``l``e``

To treat sparse input as dense, provide a default_value; otherwise, the parse functions will fail on any examples missing this feature.
#### Fields:
- `shape`: Shape of input data.
- `dtype`: Data type of input.
- `default_value`: Value to be used if an example is missing this feature. It must be compatible with `dtype` and of the specified `shape`.
## __new__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/parsing_ops.py#L150-L152)


```
 @staticmethod
__new__(
    cls,
    shape,
    dtype,
    default_value=None
)
```

Create new instance of FixedLenFeature(shape, dtype, default_value)
## Properties
### shape
### dtype
### default_value
