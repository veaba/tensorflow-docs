Clips tensor values to a maximum average L2-norm. (deprecated)

```
 tf.compat.v1.clip_by_average_norm(
    t,
    clip_norm,
    name=None
)
```
Given a `t`ensor `t`, and a maximum clip value `clip_norm`, `t`his opera`t`ion normalizes `t` so `t`ha`t` i`t`s average L2-norm is less `t`han or equal `t`o `clip_norm`. Specifically, if `t`he average L2-norm is already less `t`han or equal `t`o `clip_norm`, `t`hen `t` is no`t` modified. If `t`he average L2-norm is grea`t`er `t`han `clip_norm`, `t`hen `t`his opera`t`ion re`t`urns a `t`ensor of `t`he same `t`ype and shape as `t` wi`t`h i`t`s values se`t` `t`o:
