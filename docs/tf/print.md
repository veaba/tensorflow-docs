Print the specified inputs.
### Aliases:
- `tf.compat.v1.print`
- `tf.compat.v2.print`

```
 tf.print(
    *inputs,
    **kwargs
)
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``U``s``i``n``g`` ``t``h``e`` ``S``a``v``e``d``M``o``d``e``l`` ``f``o``r``m``a``t``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
A TensorFlow operator that prints the specified inputs to a desired output stream or logging level. The inputs may be dense or sparse Tensors, primitive python objects, data structures that contain tensors, and printable Python objects. Printed tensors will recursively show the first and last elements of each dimension to summarize.
#### Example:
Single-input usage:

```
 tensor = tf.range(10)
tf.print(tensor, output_stream=sys.stderr)
```
(This prints "[0 1 2 ... 7 8 9]" to sys.stderr)
Multi-input usage:

```
 tensor = tf.range(10)
tf.print("tensors:", tensor, {2: tensor * 2}, output_stream=sys.stdout)
```
(This prints "tensors: [0 1 2 ... 7 8 9] {2: [0 2 4 ... 14 16 18]}" to sys.stdout)
Changing the input separator:

```
 tensor_a = tf.range(2)
tensor_b = tensor_a * 2
tf.print(tensor_a, tensor_b, output_stream=sys.stderr, sep=',')
```
(This prints "[0 1],[0 2]" to sys.stderr)
Usage in a `tf.function`:

```
 @tf.function
def f():
    tensor = tf.range(10)
    tf.print(tensor, output_stream=sys.stderr)
    return tensor

range_tensor = f()
```
(This prints "[0 1 2 ... 7 8 9]" to sys.stderr)
[tf.function](https://tensorflow.google.cn/api_docs/python/tf/function)

Compatibility usage in TF 1.x graphs:
(This prints "tensors: [0 1 2 ... 7 8 9] {2: [0 2 4 ... 14 16 18]}" to sys.stdout)
#### Args:
#### Returns:
None when executing eagerly. During graph tracing this returns a TF operator that prints the specified inputs in the specified output stream or logging level. This operator will be automatically executed except inside of `tf.compat.v1` graphs and sessions.
#### Raises:
- `ValueError`: If an unsupported output stream is specified.
#### Python2 Compatibility
In python 2.7, make sure to import the following: `from __future__ import print_function`
