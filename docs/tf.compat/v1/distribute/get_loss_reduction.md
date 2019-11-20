[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L168-L187)  
---  
  
[`tf.distribute.ReduceOp`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp)
corresponding to the last loss reduction.

    
    
    tf.compat.v1.distribute.get_loss_reduction()
    

This is used to decide whether loss should be scaled in optimizer (used only
for estimator + v1 optimizer use case).

#### Returns:

[`tf.distribute.ReduceOp`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp)
corresponding to the last loss reduction for estimator and v1 optimizer use
case.
[`tf.distribute.ReduceOp.SUM`](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp#SUM)
otherwise.

