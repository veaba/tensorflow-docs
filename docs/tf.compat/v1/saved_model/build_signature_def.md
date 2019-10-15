
Utility function to build a SignatureDef protocol buffer.
### Aliases:
- `tf.compat.v1.saved_model.signature_def_utils.build_signature_def`

```
 tf.compat.v1.saved_model.build_signature_def(
    inputs=None,
    outputs=None,
    method_name=None
)
```
#### Args:
- `inputs`: Inputs of the SignatureDef defined as a proto map of string to tensor info.
- `outputs`: Outputs of the SignatureDef defined as a proto map of string to tensor info.
- `method_name`: Method name of the SignatureDef as a string.
#### Returns:

A SignatureDef protocol buffer constructed based on the supplied arguments.
