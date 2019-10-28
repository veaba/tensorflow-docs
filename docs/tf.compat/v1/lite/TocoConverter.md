## Class TocoConverter
Convert a TensorFlow model into `output_format` using TOCO.
This class has been deprecated. Please use `lite.TFLiteConverter` instead.
## Methods
### from_frozen_graph
View source

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
View source

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
View source

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
View source

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
