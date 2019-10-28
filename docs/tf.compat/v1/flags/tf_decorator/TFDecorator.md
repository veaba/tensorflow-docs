## Class TFDecorator
Base class for all TensorFlow decorators.
### Aliases:
- Class `tf.compat.v1.app.flags.tf_decorator.TFDecorator`
TFDecorator captures and exposes the wrapped target, and provides details about the current decorator.
## __init__
View source

```
 __init__(
    decorator_name,
    target,
    decorator_doc='',
    decorator_argspec=None
)
```
Initialize self. See help(type(self)) for accurate signature.
## Properties
### decorated_target
### decorator_argspec
### decorator_doc
### decorator_name
## Methods
### __call__
View source

```
 __call__(
    *args,
    **kwargs
)
```
Call self as a function.
