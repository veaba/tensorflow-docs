## Class MultiEnumClassFlag
A multi_enum_class flag.
[MultiFlag](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/MultiFlag)Inherits From: 

### Aliases:
- Class tf.compat.v1.app.flags.MultiEnumClassFlag
See the doc for MultiFlag for most behaviors of this class. In addition, this class knows how to handle enum.Enum instances as values for this flag type.
## __init__

```
 __init__(
    name,
    default,
    help_string,
    enum_class,
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
See base class.
### parse

```
 parse(arguments)
```
Parses one or more arguments with the installed parser.
#### Args:
- arguments: a single argument or a list of arguments (typically a list of default values); a single argument is converted internally into a list containing one item.
### serialize

```
 serialize()
```
Serializes the flag.
### unparse

```
 unparse()
```
