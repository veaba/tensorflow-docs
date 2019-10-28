Defined in generated file: `python/ops/gen_string_ops.py`
Determine the script codes of a given tensor of Unicode integer code points.
### Aliases:
- `tf.compat.v1.strings.unicode_script`
- `tf.compat.v2.strings.unicode_script`

```
 tf.strings.unicode_script(
    input,
    name=None
)
```
### Used in the tutorials:
- ``U``n``i``c``o``d``e`` ``s``t``r``i``n``g``s``
This operation converts Unicode code points to script codes corresponding to each code point. Script codes correspond to International Components for Unicode (ICU) UScriptCode values. See http://icu-project.org/apiref/icu4c/uscript_8h.html. Returns -1 (USCRIPT_INVALID_CODE) for invalid codepoints. Output shape will match input shape.
#### Args:
- `input`: A `Tensor` of type `int32`. A `Tensor` of `int32` Unicode code points.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` of type `int32`.
