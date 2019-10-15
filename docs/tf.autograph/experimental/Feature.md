## Class Feature

This enumeration represents optional conversion options.
### Aliases:
- Class `tf.compat.v1.autograph.experimental.Feature`
- Class `tf.compat.v2.autograph.experimental.Feature`

These conversion options are experimental. They are subject to change without notice and offer no guarantees.

Example Usage

```
 optionals= tf.autograph.experimental.Feature.EQUALITY_OPERATORS
@tf.function(experimental_autograph_options=optionals)
def f(i):
  if i == 0:  # EQUALITY_OPERATORS allows the use of == here.
    tf.print('i is zero')
```
#### Attributes:
- `ALL`: Enable all features.
- `AUTO_CONTROL_DEPS`: Insert of control dependencies in the generated code.
- `ASSERT_STATEMENTS`: Convert Tensor-dependent assert statements to tf.Assert.
- `BUILTIN_FUNCTIONS`: Convert builtin functions applied to Tensors to their TF counterparts.
- `EQUALITY_OPERATORS`: Whether to convert the comparison operators, like equality. This is soon to be deprecated as support is being added to the Tensor class.
- `LISTS`: Convert list idioms, like initializers, slices, append, etc.
- `NAME_SCOPES`: Insert name scopes that name ops according to context, like the function they were defined in.
## Class Members
- `ALL`
- `ASSERT_STATEMENTS`
- `AUTO_CONTROL_DEPS`
- `BUILTIN_FUNCTIONS`
- `EQUALITY_OPERATORS`
- `LISTS`
- `NAME_SCOPES`
