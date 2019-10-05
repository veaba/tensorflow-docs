
Return a tensor with the same shape and contents as input.
### Aliases:
- `tf.compat.v1.identity`
- `tf.compat.v2.identity`

```
 tf.identity(
    input,
    name=None
)
```
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
#### For example:

```
 import tensorflow as tf
val0 = tf.ones((1,), dtype=tf.float32)
a = tf.atan2(val0, val0)
a_identity = tf.identity(a)
print(a.numpy())          #[0.7853982]
print(a_identity.numpy()) #[0.7853982]
```
#### Args:
- `input`: A `Tensor`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as input.

Return a tensor with the same shape and contents as input.
### Aliases:
- `tf.compat.v1.identity`
- `tf.compat.v2.identity`

```
 tf.identity(
    input,
    name=None
)
```
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
#### For example:

```
 import tensorflow as tf
val0 = tf.ones((1,), dtype=tf.float32)
a = tf.atan2(val0, val0)
a_identity = tf.identity(a)
print(a.numpy())          #[0.7853982]
print(a_identity.numpy()) #[0.7853982]
```
#### Args:
- `input`: A `Tensor`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor. Has the same type as input.
