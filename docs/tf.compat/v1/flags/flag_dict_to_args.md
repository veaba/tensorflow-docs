Convert a dict of values into process call parameters.
### Aliases:
- `tf.compat.v1.app.flags.flag_dict_to_args`

```
 tf.compat.v1.flags.flag_dict_to_args(flag_map)
```
This method is used to convert a dictionary into a sequence of parameters for a binary that parses arguments using this module.
#### Args:
- `flag_map`: dict, a mapping where the keys are flag names (strings). values are treated according to their type:
If value is None, then only the name is emitted.
If value is True, then only the name is emitted.
If value is False, then only the name prepended with 'no' is emitted.
If value is a string then --name=value is emitted.
If value is a collection, this will emit --name=value1,value2,value3.
Everything else is converted to string an passed as such.
- ``I``f`` ``v``a``l``u``e`` ``i``s`` ``N``o``n``e``,`` ``t``h``e``n`` ``o``n``l``y`` ``t``h``e`` ``n``a``m``e`` ``i``s`` ``e``m``i``t``t``e``d``.``
- ``I``f`` ``v``a``l``u``e`` ``i``s`` ``T``r``u``e``,`` ``t``h``e``n`` ``o``n``l``y`` ``t``h``e`` ``n``a``m``e`` ``i``s`` ``e``m``i``t``t``e``d``.``
- ``I``f`` ``v``a``l``u``e`` ``i``s`` ``F``a``l``s``e``,`` ``t``h``e``n`` ``o``n``l``y`` ``t``h``e`` ``n``a``m``e`` ``p``r``e``p``e``n``d``e``d`` ``w``i``t``h`` ``'``n``o``'`` ``i``s`` ``e``m``i``t``t``e``d``.``
- ``I``f`` ``v``a``l``u``e`` ``i``s`` ``a`` ``s``t``r``i``n``g`` ``t``h``e``n`` ``-``-``n``a``m``e``=``v``a``l``u``e`` ``i``s`` ``e``m``i``t``t``e``d``.``
- ``I``f`` ``v``a``l``u``e`` ``i``s`` ``a`` ``c``o``l``l``e``c``t``i``o``n``,`` ``t``h``i``s`` ``w``i``l``l`` ``e``m``i``t`` ``-``-``n``a``m``e``=``v``a``l``u``e``1``,``v``a``l``u``e``2``,``v``a``l``u``e``3``.``
- ``E``v``e``r``y``t``h``i``n``g`` ``e``l``s``e`` ``i``s`` ``c``o``n``v``e``r``t``e``d`` ``t``o`` ``s``t``r``i``n``g`` ``a``n`` ``p``a``s``s``e``d`` ``a``s`` ``s``u``c``h``.``
#### Yields:
sequence of string suitable for a subprocess execution.
