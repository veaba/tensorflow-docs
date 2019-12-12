Base TFDecorator class and utility functions for working with decorators.

There are two ways to create decorators that TensorFlow can introspect into.This is important for documentation generation purposes, so that functionsignatures aren't obscured by the (*args, **kwds) signature that decoratorsoften provide.

1. Call  `tf_decorator.make_decorator`  on your wrapper function. If yourdecorator is stateless, or can capture all of the variables it needs to workwith through lexical closure, this is the simplest option. Create your wrapperfunction as usual, but instead of returning it, return `tf_decorator.make_decorator(target, your_wrapper)` . This will attach somedecorator introspection metadata onto your wrapper and return it.


#### Example:
def print_hello_before_calling(target):  def wrapper(*args, **kwargs):    print('hello')    return target(*args, **kwargs)  return tf_decorator.make_decorator(target, wrapper)

1. Derive from TFDecorator. If your decorator needs to be stateful, you canimplement it in terms of a TFDecorator. Store whatever state you need in yourderived class, and implement the  `__call__`  method to do your work beforecalling into your target. You can retrieve the target via `super(MyDecoratorClass, self).decorated_target` , and call it with whateverparameters it needs.


#### Example:
class CallCounter(tf_decorator.TFDecorator):  def **init** (self, target):    super(CallCounter, self).**init** ('count_calls', target)    self.call_count = 0

def **call** (self, *args, **kwargs):    self.call_count += 1    return super(CallCounter, self).decorated_target(*args, **kwargs)

def count_calls(target):  return CallCounter(target)

## Modules
[ `tf_stack` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack) module: Functions used to extract and analyze stacks.  Faster than Python libs.

## Classes
[ `class TFDecorator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/TFDecorator): Base class for all TensorFlow decorators.

## Functions
[ `make_decorator(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/make_decorator): Make a decorator from a wrapper and a target.

[ `rewrap(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/rewrap): Injects a new target into a function built by make_decorator.

[ `unwrap(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/unwrap): Unwraps an object into a list of TFDecorators and a final target.

