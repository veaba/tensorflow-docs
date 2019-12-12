Support for training models.

See the [Training](https://tensorflow.org/api_guides/python/train) guide.

## Modules
[ `experimental` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/experimental) module: Public API for tf.train.experimental namespace.

[ `queue_runner` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/queue_runner) module: Public API for tf.train.queue_runner namespace.

## Classes
[ `class AdadeltaOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/AdadeltaOptimizer): Optimizer that implements the Adadelta algorithm.

[ `class AdagradDAOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/AdagradDAOptimizer): Adagrad Dual Averaging algorithm for sparse linear models.

[ `class AdagradOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/AdagradOptimizer): Optimizer that implements the Adagrad algorithm.

[ `class AdamOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/AdamOptimizer): Optimizer that implements the Adam algorithm.

[ `class BytesList` ](https://tensorflow.google.cn/api_docs/python/tf/train/BytesList): A ProtocolMessage

[ `class Checkpoint` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Checkpoint): Groups trackable objects, saving and restoring them.

[ `class CheckpointManager` ](https://tensorflow.google.cn/api_docs/python/tf/train/CheckpointManager): Deletes old checkpoints.

[ `class CheckpointSaverHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/CheckpointSaverHook): Saves checkpoints every N steps or seconds.

[ `class CheckpointSaverListener` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/CheckpointSaverListener): Interface for listeners that take action before or after checkpoint save.

[ `class ChiefSessionCreator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/ChiefSessionCreator): Creates a tf.compat.v1.Session for a chief.

[ `class ClusterDef` ](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterDef): A ProtocolMessage

[ `class ClusterSpec` ](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterSpec): Represents a cluster as a set of "tasks", organized into "jobs".

[ `class Coordinator` ](https://tensorflow.google.cn/api_docs/python/tf/train/Coordinator): A coordinator for threads.

[ `class Example` ](https://tensorflow.google.cn/api_docs/python/tf/train/Example): A ProtocolMessage

[ `class ExponentialMovingAverage` ](https://tensorflow.google.cn/api_docs/python/tf/train/ExponentialMovingAverage): Maintains moving averages of variables by employing an exponential decay.

[ `class Feature` ](https://tensorflow.google.cn/api_docs/python/tf/train/Feature): A ProtocolMessage

[ `class FeatureList` ](https://tensorflow.google.cn/api_docs/python/tf/train/FeatureList): A ProtocolMessage

[ `class FeatureLists` ](https://tensorflow.google.cn/api_docs/python/tf/train/FeatureLists): A ProtocolMessage

[ `class Features` ](https://tensorflow.google.cn/api_docs/python/tf/train/Features): A ProtocolMessage

[ `class FeedFnHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/FeedFnHook): Runs  `feed_fn`  and sets the  `feed_dict`  accordingly.

[ `class FinalOpsHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/FinalOpsHook): A hook which evaluates  `Tensors`  at the end of a session.

[ `class FloatList` ](https://tensorflow.google.cn/api_docs/python/tf/train/FloatList): A ProtocolMessage

[ `class FtrlOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/FtrlOptimizer): Optimizer that implements the FTRL algorithm.

[ `class GlobalStepWaiterHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/GlobalStepWaiterHook): Delays execution until global step reaches  `wait_until_step` .

[ `class GradientDescentOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/GradientDescentOptimizer): Optimizer that implements the gradient descent algorithm.

[ `class Int64List` ](https://tensorflow.google.cn/api_docs/python/tf/train/Int64List): A ProtocolMessage

[ `class JobDef` ](https://tensorflow.google.cn/api_docs/python/tf/train/JobDef): A ProtocolMessage

[ `class LoggingTensorHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/LoggingTensorHook): Prints the given tensors every N local steps, every N seconds, or at end.

[ `class LooperThread` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/LooperThread): A thread that runs code repeatedly, optionally on a timer.

[ `class MomentumOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/MomentumOptimizer): Optimizer that implements the Momentum algorithm.

[ `class MonitoredSession` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/MonitoredSession): Session-like object that handles initialization, recovery and hooks.

[ `class NanLossDuringTrainingError` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/NanLossDuringTrainingError): Unspecified run-time error.

[ `class NanTensorHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/NanTensorHook): Monitors the loss tensor and stops training if loss is NaN.

[ `class Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Optimizer): Base class for optimizers.

[ `class ProfilerHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/ProfilerHook): Captures CPU/GPU profiling information every N steps or seconds.

[ `class ProximalAdagradOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/ProximalAdagradOptimizer): Optimizer that implements the Proximal Adagrad algorithm.

[ `class ProximalGradientDescentOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/ProximalGradientDescentOptimizer): Optimizer that implements the proximal gradient descent algorithm.

[ `class QueueRunner` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/QueueRunner): Holds a list of enqueue operations for a queue, each to be run in a thread.

[ `class RMSPropOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/RMSPropOptimizer): Optimizer that implements the RMSProp algorithm.

[ `class Saver` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Saver): Saves and restores variables.

[ `class SaverDef` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/SaverDef): A ProtocolMessage

[ `class Scaffold` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Scaffold): Structure to create or gather pieces commonly needed to train a model.

[ `class SecondOrStepTimer` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SecondOrStepTimer): Timer that triggers at most once every N seconds or once every N steps.

[ `class SequenceExample` ](https://tensorflow.google.cn/api_docs/python/tf/train/SequenceExample): A ProtocolMessage

[ `class Server` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Server): An in-process TensorFlow server, for use in distributed training.

[ `class ServerDef` ](https://tensorflow.google.cn/api_docs/python/tf/train/ServerDef): A ProtocolMessage

[ `class SessionCreator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/SessionCreator): A factory for tf.Session.

[ `class SessionManager` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/SessionManager): Training helper that restores from checkpoint and creates session.

[ `class SessionRunArgs` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunArgs): Represents arguments to be added to a  `Session.run()`  call.

[ `class SessionRunContext` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunContext): Provides information about the  `session.run()`  call being made.

[ `class SessionRunHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunHook): Hook to extend calls to MonitoredSession.run().

[ `class SessionRunValues` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunValues): Contains the results of  `Session.run()` .

[ `class SingularMonitoredSession` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/SingularMonitoredSession): Session-like object that handles initialization, restoring, and hooks.

[ `class StepCounterHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/StepCounterHook): Hook that counts steps per second.

[ `class StopAtStepHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/StopAtStepHook): Hook that requests stop at a specified step.

[ `class SummarySaverHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SummarySaverHook): Saves summaries every N steps.

[ `class Supervisor` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Supervisor): A training helper that checkpoints models and computes summaries.

[ `class SyncReplicasOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/SyncReplicasOptimizer): Class to synchronize, aggregate gradients and pass them to the optimizer.

[ `class VocabInfo` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/VocabInfo): Vocabulary information for warm-starting.

[ `class WorkerSessionCreator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/WorkerSessionCreator): Creates a tf.compat.v1.Session for a worker.

## Functions
[ `MonitoredTrainingSession(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/MonitoredTrainingSession): Creates a  `MonitoredSession`  for training.

[ `NewCheckpointReader(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/NewCheckpointReader)

[ `add_queue_runner(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/add_queue_runner): Adds a  `QueueRunner`  to a collection in the graph. (deprecated)

[ `assert_global_step(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/assert_global_step): Asserts  `global_step_tensor`  is a scalar int  `Variable`  or  `Tensor` .

[ `basic_train_loop(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/basic_train_loop): Basic loop to train a model.

[ `batch(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/batch): Creates batches of tensors in  `tensors` . (deprecated)

[ `batch_join(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/batch_join): Runs a list of tensors to fill a queue to create batches of examples. (deprecated)

[ `checkpoint_exists(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/checkpoint_exists): Checks whether a V1 or V2 checkpoint exists with the specified prefix. (deprecated)

[ `checkpoints_iterator(...)` ](https://tensorflow.google.cn/api_docs/python/tf/train/checkpoints_iterator): Continuously yield new checkpoint files as they appear.

[ `cosine_decay(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/cosine_decay): Applies cosine decay to the learning rate.

[ `cosine_decay_restarts(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/cosine_decay_restarts): Applies cosine decay with restarts to the learning rate.

[ `create_global_step(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/create_global_step): Create global step tensor in graph.

[ `do_quantize_training_on_graphdef(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/do_quantize_training_on_graphdef): A general quantization scheme is being developed in  `tf.contrib.quantize` . (deprecated)

[ `exponential_decay(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/exponential_decay): Applies exponential decay to the learning rate.

[ `export_meta_graph(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/export_meta_graph): Returns  `MetaGraphDef`  proto.

[ `generate_checkpoint_state_proto(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/generate_checkpoint_state_proto): Generates a checkpoint state proto.

[ `get_checkpoint_mtimes(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/get_checkpoint_mtimes): Returns the mtimes (modification timestamps) of the checkpoints. (deprecated)

[ `get_checkpoint_state(...)` ](https://tensorflow.google.cn/api_docs/python/tf/train/get_checkpoint_state): Returns CheckpointState proto from the "checkpoint" file.

[ `get_global_step(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/get_global_step): Get the global step tensor.

[ `get_or_create_global_step(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/get_or_create_global_step): Returns and create (if necessary) the global step tensor.

[ `global_step(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/global_step): Small helper to get the global step.

[ `import_meta_graph(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/import_meta_graph): Recreates a Graph saved in a  `MetaGraphDef`  proto.

[ `init_from_checkpoint(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/init_from_checkpoint): Replaces [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable) initializers so they load from a checkpoint file.

[ `input_producer(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/input_producer): Output the rows of  `input_tensor`  to a queue for an input pipeline. (deprecated)

[ `inverse_time_decay(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/inverse_time_decay): Applies inverse time decay to the initial learning rate.

[ `latest_checkpoint(...)` ](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint): Finds the filename of latest saved checkpoint file.

[ `limit_epochs(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/limit_epochs): Returns tensor  `num_epochs`  times and then raises an  `OutOfRange`  error. (deprecated)

[ `linear_cosine_decay(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/linear_cosine_decay): Applies linear cosine decay to the learning rate.

[ `list_variables(...)` ](https://tensorflow.google.cn/api_docs/python/tf/train/list_variables): Returns list of all variables in the checkpoint.

[ `load_checkpoint(...)` ](https://tensorflow.google.cn/api_docs/python/tf/train/load_checkpoint): Returns  `CheckpointReader`  for checkpoint found in  `ckpt_dir_or_file` .

[ `load_variable(...)` ](https://tensorflow.google.cn/api_docs/python/tf/train/load_variable): Returns the tensor value of the given variable in the checkpoint.

[ `match_filenames_once(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/match_filenames_once): Save the list of files matching pattern, so it is only computed once.

[ `maybe_batch(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/maybe_batch): Conditionally creates batches of tensors based on  `keep_input` . (deprecated)

[ `maybe_batch_join(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/maybe_batch_join): Runs a list of tensors to conditionally fill a queue to create batches. (deprecated)

[ `maybe_shuffle_batch(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/maybe_shuffle_batch): Creates batches by randomly shuffling conditionally-enqueued tensors. (deprecated)

[ `maybe_shuffle_batch_join(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/maybe_shuffle_batch_join): Create batches by randomly shuffling conditionally-enqueued tensors. (deprecated)

[ `natural_exp_decay(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/natural_exp_decay): Applies natural exponential decay to the initial learning rate.

[ `noisy_linear_cosine_decay(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/noisy_linear_cosine_decay): Applies noisy linear cosine decay to the learning rate.

[ `piecewise_constant(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/piecewise_constant): Piecewise constant from boundaries and interval values.

[ `piecewise_constant_decay(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/piecewise_constant): Piecewise constant from boundaries and interval values.

[ `polynomial_decay(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/polynomial_decay): Applies a polynomial decay to the learning rate.

[ `range_input_producer(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/range_input_producer): Produces the integers from 0 to limit-1 in a queue. (deprecated)

[ `remove_checkpoint(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/remove_checkpoint): Removes a checkpoint given by  `checkpoint_prefix` . (deprecated)

[ `replica_device_setter(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/replica_device_setter): Return a  `device function`  to use when building a Graph for replicas.

[ `sdca_fprint(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/sdca_fprint): Computes fingerprints of the input strings.

[ `sdca_optimizer(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/sdca_optimizer): Distributed version of Stochastic Dual Coordinate Ascent (SDCA) optimizer for

[ `sdca_shrink_l1(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/sdca_shrink_l1): Applies L1 regularization shrink step on the parameters.

[ `shuffle_batch(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/shuffle_batch): Creates batches by randomly shuffling tensors. (deprecated)

[ `shuffle_batch_join(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/shuffle_batch_join): Create batches by randomly shuffling tensors. (deprecated)

[ `slice_input_producer(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/slice_input_producer): Produces a slice of each  `Tensor`  in  `tensor_list` . (deprecated)

[ `start_queue_runners(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/start_queue_runners): Starts all queue runners collected in the graph. (deprecated)

[ `string_input_producer(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/string_input_producer): Output strings (e.g. filenames) to a queue for an input pipeline. (deprecated)

[ `summary_iterator(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/summary_iterator): An iterator for reading  `Event`  protocol buffers from an event file.

[ `update_checkpoint_state(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/update_checkpoint_state): Updates the content of the 'checkpoint' file. (deprecated)

[ `warm_start(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/warm_start): Warm-starts a model using the given settings.

[ `write_graph(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/write_graph): Writes a graph proto to a file.

