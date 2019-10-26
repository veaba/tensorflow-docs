Support for training models.
[Training](https://tensorflow.org/api_guides/python/train)See the  guide.

## Modules
[experimental](https://tensorflow.google.cn/api_docs/python/tf/compat/v2/train/experimental) module: Public API for tf.train. namespace.

## Classes
[class BytesList](https://tensorflow.google.cn/api_docs/python/tf/train/BytesList): A ProtocolMessage

[class Checkpoint](https://tensorflow.google.cn/api_docs/python/tf/train/Checkpoint): Groups trackable objects, saving and restoring them.

[class CheckpointManager](https://tensorflow.google.cn/api_docs/python/tf/train/CheckpointManager): Deletes old checkpoints.

[class ClusterDef](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterDef): A ProtocolMessage

[class ClusterSpec](https://tensorflow.google.cn/api_docs/python/tf/train/ClusterSpec): Represents a cluster as a set of "tasks", organized into "jobs".

[class Coordinator](https://tensorflow.google.cn/api_docs/python/tf/train/Coordinator): A coordinator for threads.

[class Example](https://tensorflow.google.cn/api_docs/python/tf/train/Example): A ProtocolMessage

[class ExponentialMovingAverage](https://tensorflow.google.cn/api_docs/python/tf/train/ExponentialMovingAverage): Maintains moving averages of variables by employing an exponential decay.

[class Feature](https://tensorflow.google.cn/api_docs/python/tf/train/Feature): A ProtocolMessage

[class FeatureList](https://tensorflow.google.cn/api_docs/python/tf/train/FeatureList): A ProtocolMessage

[class FeatureLists](https://tensorflow.google.cn/api_docs/python/tf/train/FeatureLists): A ProtocolMessage

[class Features](https://tensorflow.google.cn/api_docs/python/tf/train/Features): A ProtocolMessage

[class FloatList](https://tensorflow.google.cn/api_docs/python/tf/train/FloatList): A ProtocolMessage

[class Int64List](https://tensorflow.google.cn/api_docs/python/tf/train/Int64List): A ProtocolMessage

[class JobDef](https://tensorflow.google.cn/api_docs/python/tf/train/JobDef): A ProtocolMessage

[class SequenceExample](https://tensorflow.google.cn/api_docs/python/tf/train/SequenceExample): A ProtocolMessage

[class ServerDef](https://tensorflow.google.cn/api_docs/python/tf/train/ServerDef): A ProtocolMessage

## Functions
[checkpoints_iterator(...)](https://tensorflow.google.cn/api_docs/python/tf/train/checkpoints_iterator): Continuously yield new checkpoint files as they appear.

[get_checkpoint_state(...)](https://tensorflow.google.cn/api_docs/python/tf/train/get_checkpoint_state): Returns CheckpointState proto from the "checkpoint" file.

[latest_checkpoint(...)](https://tensorflow.google.cn/api_docs/python/tf/train/latest_checkpoint): Finds the filename of latest saved checkpoint file.

[list_variables(...)](https://tensorflow.google.cn/api_docs/python/tf/train/list_variables): Returns list of all variables in the checkpoint.

[load_checkpoint(...)](https://tensorflow.google.cn/api_docs/python/tf/train/load_checkpoint): Returns CheckpointReader for checkpoint found in ckpt_dir_or_file.

[load_variable(...)](https://tensorflow.google.cn/api_docs/python/tf/train/load_variable): Returns the tensor value of the given variable in the checkpoint.

