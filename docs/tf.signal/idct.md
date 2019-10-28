Computes the 1D Inverse Discrete Cosine Transform (DCT) of `input`.
### Aliases:
- `tf.compat.v1.signal.idct`
- `tf.compat.v1.spectral.idct`
- `tf.compat.v2.signal.idct`

```
 tf.signal.idct(
    input,
    type=2,
    n=None,
    axis=-1,
    norm=None,
    name=None
)
```
Currently only Types I, II and III are supported. Type III is the inverse of Type II, and vice versa.
