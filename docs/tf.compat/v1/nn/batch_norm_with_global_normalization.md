
Batch normalization.

```
 tf.compat.v1.nn.batch_norm_with_global_normalization(
    t=None,
    m=None,
    v=None,
    beta=None,
    gamma=None,
    variance_epsilon=None,
    scale_after_normalization=None,
    name=None,
    input=None,
    mean=None,
    variance=None
)
```
[tf.nn.batch_normalization](https://www.tensorflow.org/api_docs/python/tf/nn/batch_normalization)This op is deprecated. See .

#### Args:
- `t`: A 4D inpu`t` Tensor.
- `m`: A 1D `m`ean Tensor wi`t`h size `m`a`t`ching `t`he las`t` di`m`ension of `t`. This is `t`he firs`t` ou`t`pu`t` fro`m` `t`f.nn.`m`o`m`en`t`s, or a saved `m`oving average `t`hereof.
- `v`: A 1D `v`ariance Tensor wi`t`h size `m`a`t`ching `t`he las`t` di`m`ension of `t`. This is `t`he second ou`t`pu`t` fro`m` `t`f.nn.`m`o`m`en`t`s, or a sa`v`ed `m`o`v`ing a`v`erage `t`hereof.
- `beta`: A 1D `beta` Tensor wi`t`h size `m`a`t`ching `t`he las`t` di`m`ension of `t`. An offse`t` `t`o be added `t`o `t`he nor`m`alized `t`ensor.
- `gamma`: A 1D `gamma` Tensor wi`t`h size `m`a`t`ching `t`he las`t` di`m`ension of `t`. If "scale_af`t`er_nor`m`aliza`t`ion" is `t`rue, `t`his `t`ensor will be `m`ul`t`iplied wi`t`h `t`he nor`m`alized `t`ensor.
- `v`ariance_epsilon: A s`m`all floa`t` nu`m`ber `t`o a`v`oid di`v`iding by 0.
- `scale_after_normalization`: A bool indica`t`ing whe`t`her `t`he resul`t`ed `t`ensor needs `t`o be `m`ul`t`iplied wi`t`h `gamma`.
- `name`: A `name` for `t`his opera`t`ion (op`t`ional).
- `input`: Alias for `t`.
- `m`ean: Alias for `m`.
- `v`ariance: Alias for `v`.
#### Returns:

A batch-normalized t.
