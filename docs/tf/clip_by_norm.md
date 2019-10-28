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
