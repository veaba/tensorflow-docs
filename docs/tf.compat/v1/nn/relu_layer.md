Computes Relu(x * weight + biases).

```
 tf.compat.v1.nn.relu_layer(
    x,
    weights,
    biases,
    name=None
)
 
```

#### Args:
- **`x`** : a 2D tensor.  Dimensions typically: batch, in_units
- **`weights`** : a 2D tensor.  Dimensions typically: in_units, out_units
- **`biases`** : a 1D tensor.  Dimensions: out_units
- **`name`** : A name for the operation (optional).  If not specified"nn_relu_layer" is used.


#### Returns:
A 2-D Tensor computing relu(matmul(x, weights) + biases).Dimensions typically: batch, out_units.

