## Class BooleanFlag
Basic boolean flag.
Inherits From: `Flag`
### Aliases:
- Class `tf.compat.v1.app.flags.BooleanFlag`
Boolean flags do not take any arguments, and their value is either True (1) or False (0). The false value is specified on the command line by prepending the word 'no' to either the long or the short flag name.
For example, if a Boolean flag was created whose long name was 'update' and whose short name was 'x', then this flag could be explicitly unset through either --noupdate or --nox.
## __init__

```
 __init__(
    name,
    default,
    help,
    short_name=None,
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
- `argument`: str or the correct flag value type, `argument` to be parsed.
### serialize

```
 serialize()
```
Serializes the flag.
### unparse

```
 unparse()
```
