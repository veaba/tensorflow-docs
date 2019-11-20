[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_decorator.py)  
---  
  
Base TFDecorator class and utility functions for working with decorators.

### Aliases:

  * Module [`tf.compat.v1.app.flags.tf_decorator`](/api_docs/python/tf/compat/v1/flags/tf_decorator)

There are two ways to create decorators that TensorFlow can introspect into.
This is important for documentation generation purposes, so that function
signatures aren't obscured by the (*args, **kwds) signature that decorators
often provide.

  1. Call `tf_decorator.make_decorator` on your wrapper function. If your decorator is stateless, or can capture all of the variables it needs to work with through lexical closure, this is the simplest option. Create your wrapper function as usual, but instead of returning it, return `tf_decorator.make_decorator(target, your_wrapper)`. This will attach some decorator introspection metadata onto your wrapper and return it.

#### Example:

def print_hello_before_calling(target): def wrapper(*args, * _kwargs):
print('hello') return target(_ args, **kwargs) return
tf_decorator.make_decorator(target, wrapper)

  1. Derive from TFDecorator. If your decorator needs to be stateful, you can implement it in terms of a TFDecorator. Store whatever state you need in your derived class, and implement the `__call__` method to do your work before calling into your target. You can retrieve the target via `super(MyDecoratorClass, self).decorated_target`, and call it with whatever parameters it needs.

#### Example:

class CallCounter(tf_decorator.TFDecorator): def **init** (self, target):
super(CallCounter, self). **init** ('count_calls', target) self.call_count = 0

def **call** (self, *args, * _kwargs): self.call_count += 1 return
super(CallCounter, self).decorated_target(_ args, **kwargs)

def count_calls(target): return CallCounter(target)

## Modules

[`tf_stack`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack)
module: Functions used to extract and analyze stacks. Faster than Python libs.

## Classes

[`class
TFDecorator`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/TFDecorator):
Base class for all TensorFlow decorators.

## Functions

[`make_decorator(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/make_decorator):
Make a decorator from a wrapper and a target.

[`rewrap(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/rewrap):
Injects a new target into a function built by make_decorator.

[`unwrap(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/unwrap):
Unwraps an object into a list of TFDecorators and a final target.

