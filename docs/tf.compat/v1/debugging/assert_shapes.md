[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/check_ops.py#L1750-L1964)  
---  
  
Assert tensor shapes and dimension size relationships between tensors.

    
    
    tf.compat.v1.debugging.assert_shapes(
        shapes,
        data=None,
        summarize=None,
        message=None,
        name=None
    )
    

This Op checks that a collection of tensors shape relationships satisfies
given constraints.

#### Example:

    
    
    tf.assert_shapes({
      (x, ('N', 'Q')),
      (y, ('N', 'D')),
      (param, ('Q',)),
      (scalar, ())
    })
    

Example of adding a dependency to an operation:

    
    
    with tf.control_dependencies([tf.assert_shapes(shapes)]):
      output = tf.matmul(x, y, transpose_a=True)
    

If `x`, `y`, `param` or `scalar` does not have a shape that satisfies all
specified constraints, `message`, as well as the first `summarize` entries of
the first encountered violating tensor are printed, and `InvalidArgumentError`
is raised.

Size entries in the specified shapes are checked against other entries by
their **hash** , except: \- a size entry is interpreted as an explicit size if
it can be parsed as an integer primitive. \- a size entry is interpreted as
_any_ size if it is None or '.'.

If the first entry of a shape is `...` (type `Ellipsis`) or '*' that indicates
a variable number of outer dimensions of unspecified size, i.e. the constraint
applies to the inner-most dimensions only.

Scalar tensors and specified shapes of length zero (excluding the 'inner-most'
prefix) are both treated as having a single dimension of size one.

#### Args:

  * **`shapes`** : dictionary with (`Tensor` to shape) items. A shape must be an iterable.
  * **`data`** : The tensors to print out if the condition is False. Defaults to error message and first few entries of the violating tensor.
  * **`summarize`** : Print this many entries of the tensor.
  * **`message`** : A string to prefix to the default message.
  * **`name`** : A name for this operation (optional). Defaults to "assert_shapes".

#### Returns:

Op raising `InvalidArgumentError` unless all shape constraints are satisfied.
If static checks determine all constraints are satisfied, a `no_op` is
returned.

#### Raises:

  * **`ValueError`** : If static checks determine any shape constraint is violated.

