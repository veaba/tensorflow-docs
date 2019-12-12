Convert a model using TOCO. (deprecated)

```
 tf.compat.v1.lite.toco_convert(
    input_data,
    input_tensors,
    output_tensors,
    *args,
    **kwargs
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `lite.TFLiteConverter` ](/api_docs/python/tf/lite/TFLiteConverter) instead.
Typically this function is used to convert from TensorFlow GraphDef to TFLite.Conversion can be customized by providing arguments that are forwarded to `build_toco_convert_protos`  (see documentation for details). This function hasbeen deprecated. Please use [ `lite.TFLiteConverter` ](/api_docs/python/tf/lite/TFLiteConverter) instead.

#### 参数：
- **`input_data`** : Input data (i.e. often  `sess.graph_def` ),
- **`input_tensors`** : List of input tensors. Type and shape are computed using `foo.shape`  and  `foo.dtype` .
- **`output_tensors`** : List of output tensors (only .name is used from this).
- **`*args`** : See  `build_toco_convert_protos` ,
- **`**kwargs`** : See  `build_toco_convert_protos` .


#### 返回：
The converted data. For example if TFLite was the destination, thenthis will be a tflite flatbuffer in a bytes array.

#### 加薪：
Defined in  `build_toco_convert_protos` .

