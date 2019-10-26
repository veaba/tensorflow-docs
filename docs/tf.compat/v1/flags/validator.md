A function decorator for defining a flag validator.
### Aliases:
- tf.compat.v1.app.flags.validator

```
 tf.compat.v1.flags.validator(
    flag_name,
    message='Flag validation failed',
    flag_values=_flagvalues.FLAGS
)
```
Registers the decorated function as a validator for flag_name, e.g.
@flags.validator('foo') def _CheckFoo(foo): ...
See register_validator() for the specification of checker function.
#### Args:
- flag_name: str, name of the flag to be checked.
- message: str, error text to be shown to the user if checker returns False. If checker raises flags.ValidationError, message from the raised error will be shown.
- flag_values: flags.FlagValues, optional FlagValues instance to validate against.
#### Returns:
A function decorator that registers its function argument as a validator.
#### Raises:
- AttributeError: Raised when flag_name is not registered as a valid flag name.
