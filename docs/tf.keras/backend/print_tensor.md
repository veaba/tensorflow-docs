Prints `message` and the tensor value when evaluated.
### Aliases:
- `tf.compat.v1.keras.backend.print_tensor`
- `tf.compat.v2.keras.backend.print_tensor`

```
 tf.keras.backend.print_tensor(
    x,
    message=''
)
```
Note that `print_tensor` returns a new tensor identical to `x` which should be used in the following code. Otherwise the print operation is not taken into account during evaluation.
#### Example:

```
    x = K.print_tensor(x, message=&quot;x is: &quot;)
   
```
#### Arguments:
- `x`: Tensor to print.
- `message`: Message to print jointly with the tensor.
#### Returns:
The same tensor `x`, unchanged.
