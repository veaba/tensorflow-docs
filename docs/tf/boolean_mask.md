Apply boolean mask to tensor.
### Aliases:
- `tf.compat.v2.boolean_mask`

```
 tf.boolean_mask(
    tensor,
    mask,
    axis=None,
    name='boolean_mask'
)
```
Numpy equivalent is `tensor[mask]`.

```
 # 1-D example
tensor = [0, 1, 2, 3]
mask = np.array([True, False, True, False])
boolean_mask(tensor, mask)  # [0, 2]
```
