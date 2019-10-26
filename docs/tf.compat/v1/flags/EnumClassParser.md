Parser of an Enum class member.
[ArgumentParser](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/ArgumentParser)Inherits From: 

### Aliases:
- Class tf.compat.v1.app.flags.EnumClassParser
## __init__

```
 __init__(enum_class)
```
Initializes EnumParser.
#### Args:
- enum_class: class, the Enum class with all possible flag values.
#### Raises:
- TypeError: When enum_class is not a subclass of Enum.
- ValueError: When enum_class is empty.
## Methods
### flag_type

```
 flag_type()
```
See base class.
### parse

```
 parse(argument)
```
Determines validity of argument and returns the correct element of enum.
#### Args:
- argument: str or Enum class member, the supplied flag value.
#### Returns:
The first matching Enum class member in Enum class.
#### Raises:
- ValueError: Raised when argument didn't match anything in enum.
