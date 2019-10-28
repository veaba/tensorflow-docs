Hyperbolic Tangent (tanh) activation function.
### Aliases:
- `tf.compat.v1.keras.activations.tanh`
- `tf.compat.v2.keras.activations.tanh`

```
 tf.keras.activations.tanh(x)
```
#### For example:

```
 # Constant 1-D tensor populated with value list.
a = tf.constant([-3.0,-1.0, 0.0,1.0,3.0], dtype = tf.float32)
b = tf.keras.activations.tanh(a) #[-0.9950547,-0.7615942,
0.,0.7615942,0.9950547]
```
Arguments: x: Input tensor.
#### Returns:
