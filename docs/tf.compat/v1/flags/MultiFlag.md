
A flag that can appear multiple time on the command-line.
[Flag](https://www.tensorflow.org/api_docs/python/tf/compat/v1/flags/Flag)Inherits From: 

### Aliases:
- Class `tf.compat.v1.app.flags.MultiFlag`

The value of such a flag is a list that contains the individual values from all the appearances of that flag on the command-line.

See the doc for Flag for most behavior of this class. Only differences in behavior are described here:
- ``T``h``e`` ``d``e``f``a``u``l``t`` ``v``a``l``u``e`` ``m``a``y`` ``b``e`` ``e``i``t``h``e``r`` ``a`` ``s``i``n``g``l``e`` ``v``a``l``u``e`` ``o``r`` ``a``n`` ``i``t``e``r``a``b``l``e`` ``o``f`` ``v``a``l``u``e``s``.`` ``A`` ``s``i``n``g``l``e`` ``v``a``l``u``e`` ``i``s`` ``t``r``a``n``s``f``o``r``m``e``d`` ``i``n``t``o`` ``a`` ``s``i``n``g``l``e``-``i``t``e``m`` ``l``i``s``t`` ``o``f`` ``t``h``a``t`` ``v``a``l``u``e``.``
- ``T``h``e`` ``v``a``l``u``e`` ``o``f`` ``t``h``e`` ``f``l``a``g`` ``i``s`` ``a``l``w``a``y``s`` ``a`` ``l``i``s``t``,`` ``e``v``e``n`` ``i``f`` ``t``h``e`` ``o``p``t``i``o``n`` ``w``a``s`` ``o``n``l``y`` ``s``u``p``p``l``i``e``d`` ``o``n``c``e``,`` ``a``n``d`` ``e``v``e``n`` ``i``f`` ``t``h``e`` ``d``e``f``a``u``l``t`` ``v``a``l``u``e`` ``i``s`` ``a`` ``s``i``n``g``l``e`` ``v``a``l``u``e``
## __init__

```
 __init__(
    *args,
    **kwargs
)
```

Initialize self. See help(type(self)) for accurate signature.
## Properties
### value
## Methods
### __eq__

```
 __eq__(other)
```

Return self==value.
### __ge__

```
 __ge__(
    other,
    NotImplemented=NotImplemented
)
```

Return a >= b. Computed by @total_ordering from (not a < b).
### __gt__

```
 __gt__(
    other,
    NotImplemented=NotImplemented
)
```

Return a > b. Computed by @total_ordering from (not a < b) and (a != b).
### __le__

```
 __le__(
    other,
    NotImplemented=NotImplemented
)
```

Return a <= b. Computed by @total_ordering from (a < b) or (a == b).
### __lt__

```
 __lt__(other)
```

Return self<value.
### flag_type

```
 flag_type()
```

See base class.
### parse

```
 parse(arguments)
```

Parses one or more arguments with the installed parser.
#### Args:
- `arguments`: a single argument or a list of `arguments` (typically a list of default values); a single argument is converted internally into a list containing one item.
### serialize

```
 serialize()
```

Serializes the flag.
### unparse

```
 unparse()
```
