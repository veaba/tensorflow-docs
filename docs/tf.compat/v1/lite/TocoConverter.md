[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L1037-L1087)  
---  
  
## Class `TocoConverter`

Convert a TensorFlow model into `output_format` using TOCO.

This class has been deprecated. Please use
[`lite.TFLiteConverter`](/api_docs/python/tf/lite/TFLiteConverter) instead.

## Methods

### `from_frozen_graph`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L1050-L1060)

    
    
    @classmethod
    from_frozen_graph(
        cls,
        graph_def_file,
        input_arrays,
        output_arrays,
        input_shapes=None
    )
    

Creates a TocoConverter class from a file containing a frozen graph.
(deprecated)

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use
`lite.TFLiteConverter.from_frozen_graph` instead.

### `from_keras_model_file`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L1077-L1087)

    
    
    @classmethod
    from_keras_model_file(
        cls,
        model_file,
        input_arrays=None,
        input_shapes=None,
        output_arrays=None
    )
    

Creates a TocoConverter class from a tf.keras model file. (deprecated)

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use
`lite.TFLiteConverter.from_keras_model_file` instead.

### `from_saved_model`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L1062-L1075)

    
    
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
    

Creates a TocoConverter class from a SavedModel. (deprecated)

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use
[`lite.TFLiteConverter.from_saved_model`](/api_docs/python/tf/lite/TFLiteConverter#from_saved_model)
instead.

### `from_session`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L1043-L1048)

    
    
    @classmethod
    from_session(
        cls,
        sess,
        input_tensors,
        output_tensors
    )
    

Creates a TocoConverter class from a TensorFlow Session. (deprecated)

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: Use `lite.TFLiteConverter.from_session`
instead.

