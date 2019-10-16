
Base class for a parser of lists of strings.
[ArgumentParser](https://www.tensorflow.org/api_docs/python/tf/compat/v1/flags/ArgumentParser)Inherits From: 

### Aliases:
- Class `tf.compat.v1.app.flags.BaseListParser`

To extend, inherit from this class; from the subclass init, call

```
 BaseListParser.__init__(self, token, name)
```

where token is a character used to tokenize, and name is a description of the separator.
## __init__

```
 __init__(
    token=None,
    name=None
)
```

Initialize self. See help(type(self)) for accurate signature.
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

See base class.
