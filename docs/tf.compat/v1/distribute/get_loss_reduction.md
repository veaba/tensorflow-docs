`tf.distribute.ReduceOp` corresponding to the last loss reduction.

```
 tf.compat.v1.distribute.get_loss_reduction()
```
This is used to decide whether loss should be scaled in optimizer (used only for estimator + v1 optimizer use case).
#### Returns:
`tf.distribute.ReduceOp` corresponding to the last loss reduction for estimator and v1 optimizer use case. `tf.distribute.ReduceOp`.SUM otherwise.
