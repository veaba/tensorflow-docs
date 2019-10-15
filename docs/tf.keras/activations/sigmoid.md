
Sigmoid.
### Aliases:
- `tf.compat.v1.keras.activations.sigmoid`
- `tf.compat.v2.keras.activations.sigmoid`

```
 tf.keras.activations.sigmoid(x)
```

Applies the sigmoid activation function. The sigmoid function is defined as 1 divided by (1 + exp(-x)). It's curve is like an "S" and is like a smoothed version of the Heaviside (Unit Step Function) function. For small values (<-5) the sigmoid returns a value close to zero and for larger values (>5) the result of the function gets close to 1. Arguments: x: A tensor or variable.
#### Returns:

A tensor.

Sigmoid activation function.
#### Arguments:
- `x`: Input tensor.
#### Returns:

The sigmoid activation: (1.0 / (1.0 + exp(-x))).
