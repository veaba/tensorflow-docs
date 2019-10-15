Clips tensor values to a maximum L2-norm.
### Aliases:
- `tf.compat.v1.clip_by_norm`
- `tf.compat.v2.clip_by_norm`

```
 tf.clip_by_norm(
    t,
    clip_norm,
    axes=None,
    name=None
)
```
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
Given a `t`ensor `t`, and a maximum clip value `clip_norm`, `t`his opera`t`ion normalizes `t` so `t`ha`t` i`t`s L2-norm is less `t`han or equal `t`o `clip_norm`, along `t`he dimensions given in `axes`. Specifically, in `t`he defaul`t` case where all dimensions are used for calcula`t`ion, if `t`he L2-norm of `t` is already less `t`han or equal `t`o `clip_norm`, `t`hen `t` is no`t` modified. If `t`he L2-norm is grea`t`er `t`han `clip_norm`, `t`hen `t`his opera`t`ion re`t`urns a `t`ensor of `t`he same `t`ype and shape as `t` wi`t`h i`t`s values se`t` `t`o:
t * clip_norm / l2norm(t)
In this case, the L2-norm of the output tensor is `clip_norm`.
As ano`t`her example, if `t` is a ma`t`rix and `axes == [1]`, `t`hen each row of `t`he ou`t`pu`t` will have L2-norm less `t`han or equal `t`o `clip_norm`. If `axes == [0]` ins`t`ead, each column of `t`he ou`t`pu`t` will be clipped.
This operation is typically used to clip gradients before applying them with an optimizer.
#### Args:
- `t`: A `Tensor` or `IndexedSlices`.
- `clip_norm`: A 0-D (scalar) `Tensor` > 0. A maximum clipping value.
- `axes`: A 1-D (vec`t`or) `Tensor` of `t`ype in`t`32 con`t`aining `t`he dimensions `t`o use for compu`t`ing `t`he L2-norm. If `None` (`t`he defaul`t`), uses all dimensions.
- `name`: A `name` for `t`he opera`t`ion (op`t`ional).
#### Returns:
A clipped `Tensor` or `IndexedSlices`.
#### Raises:
- `ValueError`: If the clip_norm tensor is not a 0-D scalar tensor.
- `TypeError`: If dtype of the input is not a floating point or complex type.
