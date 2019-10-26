## Class TocoConverter
Convert a TensorFlow model into output_format using TOCO.
[lite.TFLiteConverter](https://tensorflow.google.cn/api_docs/python/tf/lite/TFLiteConverter)This class has been deprecated. Please use  instead.

## Methods
### from_frozen_graph
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L1050-L1060)


```
 @classmethod
from_frozen_graph(
    cls,
    graph_def_file,
    input_arrays,
    output_arrays,
    input_shapes=None
)
```
Creates a TocoConverter class from a file containing a frozen graph. (deprecated)
### from_keras_model_file
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L1077-L1087)


```
 @classmethod
from_keras_model_file(
    cls,
    model_file,
    input_arrays=None,
    input_shapes=None,
    output_arrays=None
)
```
Creates a TocoConverter class from a tf.keras model file. (deprecated)
### from_saved_model
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L1062-L1075)


```
 @classmethod
from_saved_model(
    cls,
    saved_model_dir,
    input_arrays=None,
    input_shapes=None,
    output_arrays=None,
    tag_set=None,
    signature_key=None
)
```
Creates a TocoConverter class from a SavedModel. (deprecated)
### from_session
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L1043-L1048)


```
 @classmethod
from_session(
    cls,
    sess,
    input_tensors,
    output_tensors
)
```
Creates a TocoConverter class from a TensorFlow Session. (deprecated)
