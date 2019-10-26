## Class EnumFlag
Basic enum flag; its value can be any string from list of enum_values.
[Flag](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/Flag)Inherits From: 

### Aliases:
- Class tf.compat.v1.app.flags.EnumFlag
## __init__

```
 __init__(
    name,
    default,
    help,
    enum_values,
    short_name=None,
    case_sensitive=True,
    **args
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
Returns a str that describes the type of the flag.
NOTE: we use strings, and not the types.*Type constants because our flags can have more exotic types, e.g., 'comma separated list of strings', 'whitespace separated list of strings', etc.
### parse

```
 parse(argument)
```
Parses string and sets flag value.
#### Args:
- argument: str or the correct flag value type, argument to be parsed.
### serialize

```
 serialize()
```
Serializes the flag.
### unparse

```
 unparse()
```
