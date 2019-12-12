

## Class  `TPUEstimatorSpec` 
Ops and objects returned from a  `model_fn`  and passed to  `TPUEstimator` .

See  `EstimatorSpec`  for  `mode` ,  `predictions` ,  `loss` ,  `train_op` , and `export_outputs` .

For evaluation,  `eval_metrics` is a tuple of  `metric_fn`  and  `tensors` , where `metric_fn`  runs on CPU to generate metrics and  `tensors`  represents the `Tensor` s transferred from TPU system to CPU host and passed to  `metric_fn` .To be precise, TPU evaluation expects a slightly different signature from the[ `tf.estimator.Estimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Estimator). While [ `EstimatorSpec.eval_metric_ops` ](/api_docs/python/tf/estimator/EstimatorSpec#eval_metric_ops) expects adict,  `TPUEstimatorSpec.eval_metrics`  is a tuple of  `metric_fn`  and  `tensors` .The  `tensors`  could be a list of  `Tensor` s or dict of names to  `Tensor` s. The `tensors`  usually specify the model logits, which are transferred back fromTPU system to CPU host. All tensors must have be batch-major, i.e., the batchsize is the first dimension. Once all tensors are available at CPU host fromall shards, they are concatenated (on CPU) and passed as positional argumentsto the  `metric_fn`  if  `tensors`  is list or keyword arguments if  `tensors`  isa dict.  `metric_fn`  takes the  `tensors`  and returns a dict from metric stringname to the result of calling a metric function, namely a  `(metric_tensor,update_op)`  tuple. See  `TPUEstimator`  for MNIST example how to specify the `eval_metrics` .

 `scaffold_fn`  is a function running on CPU to generate the  `Scaffold` . Thisfunction should not capture any Tensors in  `model_fn` .

 `host_call`  is a tuple of a  `function`  and a list or dictionary of  `tensors` to pass to that function and returns a list of Tensors.  `host_call`  currentlyworks for train() and evaluate(). The Tensors returned by the function isexecuted on the CPU on every step, so there is communication overhead whensending tensors from TPU to CPU. To reduce the overhead, try reducing thesize of the tensors. The  `tensors`  are concatenated along their major (batch)dimension, and so must be >= rank 1. The  `host_call`  is useful for writingsummaries with  `tf.contrib.summary.create_file_writer` .

##  `__new__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/tpu_estimator.py)

```
 @staticmethod
__new__(
    cls,
    mode,
    predictions=None,
    loss=None,
    train_op=None,
    eval_metrics=None,
    export_outputs=None,
    scaffold_fn=None,
    host_call=None,
    training_hooks=None,
    evaluation_hooks=None,
    prediction_hooks=None
)
 
```

Creates a validated  `TPUEstimatorSpec`  instance.

## Properties


###  `mode` 


###  `predictions` 


###  `loss` 


###  `train_op` 


###  `eval_metrics` 


###  `export_outputs` 


###  `scaffold_fn` 


###  `host_call` 


###  `training_hooks` 


###  `evaluation_hooks` 


###  `prediction_hooks` 


## Methods


###  `as_estimator_spec` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/tpu_estimator.py)

```
 as_estimator_spec()
 
```

Creates an equivalent  `EstimatorSpec`  used by CPU train/eval.

