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
`tf_stack` module: Functions used to extract and analyze stacks. Faster than Python libs.
## Classes
`class TFDecorator`: Base class for all TensorFlow decorators.
## Functions
