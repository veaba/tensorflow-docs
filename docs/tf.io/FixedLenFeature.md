## Class FixedLenFeature
Configuration for parsing a fixed-length input feature.
### Aliases:
- Class tf.compat.v1.FixedLenFeature
- Class tf.compat.v1.io.FixedLenFeature
- Class tf.compat.v2.io.FixedLenFeature
### Used in the guide:
- tf.data: Build TensorFlow input pipelines
### Used in the tutorials:
- TFRecord and tf.Example
To treat sparse input as dense, provide a default_value; otherwise, the parse functions will fail on any examples missing this feature.
#### Fields:
- shape: Shape of input data.
- dtype: Data type of input.
- default_value: Value to be used if an example is missing this feature. It must be compatible with dtype and of the specified shape.
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
