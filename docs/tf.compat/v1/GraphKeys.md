

## Class  `GraphKeys` 
用于图形集合的标准名称。

The standard library uses various well-known names to collect andretrieve values associated with a graph. For example, the `tf.Optimizer`  subclasses default to optimizing the variablescollected under  `tf.GraphKeys.TRAINABLE_VARIABLES`  if none isspecified, but it is also possible to pass an explicit list ofvariables.

定义了以下标准键：

-  `GLOBAL_VARIABLES` : the default collection of  `Variable`  objects, sharedacross distributed environment (model variables are subset of these). See[ `tf.compat.v1.global_variables` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/global_variables)for more details.Commonly, all  `TRAINABLE_VARIABLES`  variables will be in  `MODEL_VARIABLES` ,and all  `MODEL_VARIABLES`  variables will be in  `GLOBAL_VARIABLES` .
-  `LOCAL_VARIABLES` : the subset of  `Variable`  objects that are local to eachmachine. Usually used for temporarily variables, like counters.注意：use  `tf.contrib.framework.local_variable`  to add to this collection.
-  `MODEL_VARIABLES` : the subset of  `Variable`  objects that are used in themodel for inference (feed forward). 注意：use `tf.contrib.framework.model_variable`  to add to this collection.
-  `TRAINABLE_VARIABLES` : the subset of  `Variable`  objects that willbe trained by an optimizer. See[ `tf.compat.v1.trainable_variables` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/trainable_variables)for more details.
-  `SUMMARIES` : the summary  `Tensor`  objects that have been created in thegraph. See[ `tf.compat.v1.summary.merge_all` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/summary/merge_all)for more details.
-  `QUEUE_RUNNERS` : the  `QueueRunner`  objects that are used toproduce input for a computation. See[ `tf.compat.v1.train.start_queue_runners` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/start_queue_runners)for more details.
-  `MOVING_AVERAGE_VARIABLES` : the subset of  `Variable`  objects that will alsokeep moving averages.  See[ `tf.compat.v1.moving_average_variables` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/moving_average_variables)for more details.
-  `REGULARIZATION_LOSSES` : regularization losses collected during graphconstruction.
The following standard keys are *defined*, but their collections are **not** automatically populated as many of the others are:

-  `WEIGHTS` 
-  `BIASES` 
-  `ACTIVATIONS` 


## Class 成员
-  `ACTIVATIONS = 'activations'`  
-  `ASSET_FILEPATHS = 'asset_filepaths'`  
-  `BIASES = 'biases'`  
-  `CONCATENATED_VARIABLES = 'concatenated_variables'`  
-  `COND_CONTEXT = 'cond_context'`  
-  `EVAL_STEP = 'eval_step'`  
-  `GLOBAL_STEP = 'global_step'`  
-  `GLOBAL_VARIABLES = 'variables'`  
-  `INIT_OP = 'init_op'`  
-  `LOCAL_INIT_OP = 'local_init_op'`  
-  `LOCAL_RESOURCES = 'local_resources'`  
-  `LOCAL_VARIABLES = 'local_variables'`  
-  `LOSSES = 'losses'`  
-  `METRIC_VARIABLES = 'metric_variables'`  
-  `MODEL_VARIABLES = 'model_variables'`  
-  `MOVING_AVERAGE_VARIABLES = 'moving_average_variables'`  
-  `QUEUE_RUNNERS = 'queue_runners'`  
-  `READY_FOR_LOCAL_INIT_OP = 'ready_for_local_init_op'`  
-  `READY_OP = 'ready_op'`  
-  `REGULARIZATION_LOSSES = 'regularization_losses'`  
-  `RESOURCES = 'resources'`  
-  `SAVEABLE_OBJECTS = 'saveable_objects'`  
-  `SAVERS = 'savers'`  
-  `SUMMARIES = 'summaries'`  
-  `SUMMARY_OP = 'summary_op'`  
-  `TABLE_INITIALIZERS = 'table_initializer'`  
-  `TRAINABLE_RESOURCE_VARIABLES = 'trainable_resource_variables'`  
-  `TRAINABLE_VARIABLES = 'trainable_variables'`  
-  `TRAIN_OP = 'train_op'`  
-  `UPDATE_OPS = 'update_ops'`  
-  `VARIABLES = 'variables'`  
-  `WEIGHTS = 'weights'`  
-  `WHILE_CONTEXT = 'while_context'`  
