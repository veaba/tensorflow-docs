
Base TFDecorator class and utility functions for working with decorators.
### Aliases:
- Module `tf.compat.v1.app.flags.tf_decorator`

There are two ways to create decorators that TensorFlow can introspect into. This is important for documentation generation purposes, so that function signatures aren't obscured by the (*args, **kwds) signature that decorators often provide.
#### Example:

def print_hello_before_calling(target): def wrapper(*args, *kwargs): print('hello') return target(args, **kwargs) return tf_decorator.make_decorator(target, wrapper)
#### Example:

class CallCounter(tf_decorator.TFDecorator): def init(self, target): super(CallCounter, self).init('count_calls', target) self.call_count = 0

def call(self, *args, *kwargs): self.call_count += 1 return super(CallCounter, self).decorated_target(args, **kwargs)

def count_calls(target): return CallCounter(target)
## Modules
[tf_stack](https://www.tensorflow.org/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack) module: Functions used to extract and analyze stacks. Faster than Python libs.

## Classes
[class TFDecorator](https://www.tensorflow.org/api_docs/python/tf/compat/v1/flags/tf_decorator/TFDecorator): Base class for all TensorFlow decorators.

## Functions
[make_decorator(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/flags/tf_decorator/make_decorator): Make a decorator from a wrapper and a target.

[rewrap(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/flags/tf_decorator/rewrap): Injects a new target into a function built by make_decorator.

[unwrap(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/flags/tf_decorator/unwrap): Unwraps an object into a list of TFDecorators and a final target.

