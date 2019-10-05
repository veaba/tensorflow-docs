
Base class used to parse and convert arguments.
### Aliases:
- Class `tf.compat.v1.app.flags.ArgumentParser`

The parse() method checks to make sure that the string argument is a legal value and convert it to a native type. If the value cannot be converted, it should throw a 'ValueError' exception with a human readable explanation of why the value is illegal.

Subclasses should also define a syntactic_help string which may be presented to the user to describe the form of the legal values.

Argument parser classes must be stateless, since instances are cached and shared between flags. Initializer arguments are allowed, but all member variables must be derived from initializer arguments only.
## Methods
### flag_type

```
 flag_type()
```

Returns a string representing the type of the flag.
### parse

```
 parse(argument)
```

Parses the string argument and returns the native value.

By default it returns its argument unmodified.
#### Args:
- `argument`: string `argument` passed in the commandline.
#### Raises:
- `ValueError`: Raised when it fails to parse the argument.
- `TypeError`: Raised when the argument has the wrong type.
#### Returns:

The parsed value in native type.
