## Class GraphKeys
Standard names to use for graph collections.
The standard library uses various well-known names to collect and retrieve values associated with a graph. For example, the tf.Optimizer subclasses default to optimizing the variables collected under tf.GraphKeys.TRAINABLE_VARIABLES if none is specified, but it is also possible to pass an explicit list of variables.
The following standard keys are defined:
- GLOBAL_VARIABLES: the default collection of Variable objects, shared across distributed environment (model variables are subset of these). See tf.compat.v1.global_variables for more details. Commonly, all TRAINABLE_VARIABLES variables will be in MODEL_VARIABLES, and all MODEL_VARIABLES variables will be in GLOBAL_VARIABLES.
- LOCAL_VARIABLES: the subset of Variable objects that are local to each machine. Usually used for temporarily variables, like counters. Note: use tf.contrib.framework.local_variable to add to this collection.
- MODEL_VARIABLES: the subset of Variable objects that are used in the model for inference (feed forward). Note: use tf.contrib.framework.model_variable to add to this collection.
- TRAINABLE_VARIABLES: the subset of Variable objects that will be trained by an optimizer. See tf.compat.v1.trainable_variables for more details.
- SUMMARIES: the summary Tensor objects that have been created in the graph. See tf.compat.v1.summary.merge_all for more details.
- QUEUE_RUNNERS: the QueueRunner objects that are used to produce input for a computation. See tf.compat.v1.train.start_queue_runners for more details.
- MOVING_AVERAGE_VARIABLES: the subset of Variable objects that will also keep moving averages. See tf.compat.v1.moving_average_variables for more details.
- REGULARIZATION_LOSSES: regularization losses collected during graph construction.
The following standard keys are defined, but their collections are not automatically populated as many of the others are:
- WEIGHTS
- BIASES
- ACTIVATIONS
## Class Members
- ACTIVATIONS = 'activations'
- ASSET_FILEPATHS = 'asset_filepaths'
- BIASES = 'biases'
- CONCATENATED_VARIABLES = 'concatenated_variables'
- COND_CONTEXT = 'cond_context'
- EVAL_STEP = 'eval_step'
- GLOBAL_STEP = 'global_step'
- GLOBAL_VARIABLES = 'variables'
- INIT_OP = 'init_op'
- LOCAL_INIT_OP = 'local_init_op'
- LOCAL_RESOURCES = 'local_resources'
- LOCAL_VARIABLES = 'local_variables'
- LOSSES = 'losses'
- METRIC_VARIABLES = 'metric_variables'
- MODEL_VARIABLES = 'model_variables'
- MOVING_AVERAGE_VARIABLES = 'moving_average_variables'
- QUEUE_RUNNERS = 'queue_runners'
- READY_FOR_LOCAL_INIT_OP = 'ready_for_local_init_op'
- READY_OP = 'ready_op'
- REGULARIZATION_LOSSES = 'regularization_losses'
- RESOURCES = 'resources'
- SAVEABLE_OBJECTS = 'saveable_objects'
- SAVERS = 'savers'
- SUMMARIES = 'summaries'
- SUMMARY_OP = 'summary_op'
- TABLE_INITIALIZERS = 'table_initializer'
- TRAINABLE_RESOURCE_VARIABLES = 'trainable_resource_variables'
- TRAINABLE_VARIABLES = 'trainable_variables'
- TRAIN_OP = 'train_op'
- UPDATE_OPS = 'update_ops'
- VARIABLES = 'variables'
- WEIGHTS = 'weights'
- WHILE_CONTEXT = 'while_context'
