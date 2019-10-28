Apply boolean mask to tensor.

```
 tf.compat.v1.boolean_mask(
    tensor,
    mask,
    name='boolean_mask',
    axis=None
)
```
Numpy equivalent is `tensor[mask]`.

```
 # 1-D example
tensor = [0, 1, 2, 3]
mask = np.array([True, False, True, False])
boolean_mask(tensor, mask)  # [0, 2]
```
