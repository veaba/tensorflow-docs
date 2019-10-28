## Class RegressionOutput
Represents the output of a regression head.
Inherits From: `ExportOutput`
### Aliases:
- Class `tf.compat.v1.estimator.export.RegressionOutput`
- Class `tf.compat.v2.estimator.export.RegressionOutput`
## __init__
View source

```
 __init__(value)
```
Constructor for `RegressionOutput`.
#### Args:
- `value`: a float `Tensor` giving the predicted `value`s. Required.
#### Raises:
- `ValueError`: if the value is not a `Tensor` with dtype tf.float32.
## Properties
### value
## Methods
### as_signature_def
View source

```
 as_signature_def(receiver_tensors)
```
Generate a SignatureDef proto for inclusion in a MetaGraphDef.
The SignatureDef will specify outputs as described in this ExportOutput, and will use the provided receiver_tensors as inputs.
#### Args:
- `receiver_tensors`: a `Tensor`, or a dict of string to `Tensor`, specifying input nodes that will be fed.
