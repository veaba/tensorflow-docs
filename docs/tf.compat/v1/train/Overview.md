Support for training models.
See the Training guide.
## Modules
`experimental` module: Public API for tf.train.`experimental` namespace.
`queue_runner` module: Public API for tf.train.`queue_runner` namespace.
## Classes
`class AdadeltaOptimizer`: Optimizer that implements the Adadelta algorithm.
`class AdagradDAOptimizer`: Adagrad Dual Averaging algorithm for sparse linear models.
`class AdagradOptimizer`: Optimizer that implements the Adagrad algorithm.
`class AdamOptimizer`: Optimizer that implements the Adam algorithm.
`class BytesList`: A ProtocolMessage
`class Checkpoint`: Groups trackable objects, saving and restoring them.
`class CheckpointManager`: Deletes old checkpoints.
`class CheckpointSaverHook`: Saves checkpoints every N steps or seconds.
`class CheckpointSaverListener`: Interface for listeners that take action before or after checkpoint save.
`class ChiefSessionCreator`: Creates a tf.compat.v1.Session for a chief.
`class ClusterDef`: A ProtocolMessage
`class ClusterSpec`: Represents a cluster as a set of "tasks", organized into "jobs".
`class Coordinator`: A coordinator for threads.
`class Example`: A ProtocolMessage
`class ExponentialMovingAverage`: Maintains moving averages of variables by employing an exponential decay.
`class Feature`: A ProtocolMessage
`class FeatureList`: A ProtocolMessage
`class FeatureLists`: A ProtocolMessage
`class Features`: A ProtocolMessage
`class FeedFnHook`: Runs `feed_fn` and sets the `feed_dict` accordingly.
`class FinalOpsHook`: A hook which evaluates `Tensors` at the end of a session.
`class FloatList`: A ProtocolMessage
`class FtrlOptimizer`: Optimizer that implements the FTRL algorithm.
`class GlobalStepWaiterHook`: Delays execution until global step reaches `wait_until_step`.
`class GradientDescentOptimizer`: Optimizer that implements the gradient descent algorithm.
`class Int64List`: A ProtocolMessage
`class JobDef`: A ProtocolMessage
`class LoggingTensorHook`: Prints the given tensors every N local steps, every N seconds, or at end.
`class LooperThread`: A thread that runs code repeatedly, optionally on a timer.
`class MomentumOptimizer`: Optimizer that implements the Momentum algorithm.
`class MonitoredSession`: Session-like object that handles initialization, recovery and hooks.
`class NanLossDuringTrainingError`: Unspecified run-time error.
`class NanTensorHook`: Monitors the loss tensor and stops training if loss is NaN.
`class Optimizer`: Base class for optimizers.
`class ProfilerHook`: Captures CPU/GPU profiling information every N steps or seconds.
`class ProximalAdagradOptimizer`: Optimizer that implements the Proximal Adagrad algorithm.
`class ProximalGradientDescentOptimizer`: Optimizer that implements the proximal gradient descent algorithm.
`class QueueRunner`: Holds a list of enqueue operations for a queue, each to be run in a thread.
`class RMSPropOptimizer`: Optimizer that implements the RMSProp algorithm.
`class Saver`: Saves and restores variables.
`class SaverDef`: A ProtocolMessage
`class Scaffold`: Structure to create or gather pieces commonly needed to train a model.
`class SecondOrStepTimer`: Timer that triggers at most once every N seconds or once every N steps.
`class SequenceExample`: A ProtocolMessage
`class Server`: An in-process TensorFlow server, for use in distributed training.
`class ServerDef`: A ProtocolMessage
`class SessionCreator`: A factory for tf.Session.
`class SessionManager`: Training helper that restores from checkpoint and creates session.
