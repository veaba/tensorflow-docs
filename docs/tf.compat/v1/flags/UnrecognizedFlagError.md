Raised when a flag is unrecognized.
Inherits From: `Error`
### Aliases:
- Class `tf.compat.v1.app.flags.UnrecognizedFlagError`
#### Attributes:
- `flagname`: str, the name of the unrecognized flag.
- `flagvalue`: The value of the flag, empty if the flag is not defined.
## __init__

```
 __init__(
    flagname,
    flagvalue='',
    suggestions=None
)
```
Initialize self. See help(type(self)) for accurate signature.
