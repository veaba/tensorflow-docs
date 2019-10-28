## Class LossScale
Loss scale base class.
### Aliases:
- Class `tf.compat.v1.train.experimental.LossScale`
- Class `tf.compat.v2.train.experimental.LossScale`
Loss scaling is a process that multiplies the loss by a multiplier called the loss scale, and divides each gradient by the same multiplier. The pseudocode for this process is:

```
 loss = ...
loss *= loss_scale
grads = gradients(loss, vars)
grads /= loss_scale
```
Mathematically, loss scaling has no effect, but can help avoid numerical underflow in intermediate gradients when float16 tensors are used for mixed precision training. By multiplying the loss, each intermediate gradient will have the same multiplier applied.
