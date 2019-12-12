

## Class  `TFLiteConverter` 
将TensorFlow模型转换为TensorFlow Lite模型。

#### 属性：
- **`allow_custom_ops`** : Boolean indicating whether to allow custom operations.When false any unknown operation is an error. When true, custom ops arecreated for any op that is unknown. The developer will need to providethese to the TensorFlow Lite runtime with a custom resolver.(default False)
- **`target_spec`** : Experimental flag, subject to change. Specification of targetdevice.
- **`optimizations`** : Experimental flag, subject to change. A list of optimizationsto apply when converting the model. E.g. `[Optimize.DEFAULT]
- **`representative_dataset`** : A representative dataset that can be used togenerate input and output samples for the model. The converter can use thedataset to evaluate different optimizations.
- **`experimental_enable_mlir_converter`** : Experimental flag, subject to change.Enables the MLIR converter instead of the TOCO converter.


#### 示例用法：


```
 # Converting a SavedModel to a TensorFlow Lite model.
converter = lite.TFLiteConverter.from_saved_model(saved_model_dir)
tflite_model = converter.convert()

# Converting a tf.Keras model to a TensorFlow Lite model.
converter = lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()

# Converting ConcreteFunctions to a TensorFlow Lite model.
converter = lite.TFLiteConverter.from_concrete_functions([func])
tflite_model = converter.convert()
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L298-L312)

```
 __init__(
    funcs,
    trackable_obj=None
)
 
```

tflitecoverter的构造函数。

#### 参数：
- **`funcs`** : List of TensorFlow ConcreteFunctions. The list should not containduplicate elements.
- **`trackable_obj`** : tf.AutoTrackable object associated with  `funcs` . Areference to this object needs to be maintained so that Variables do notget garbage collected since functions have a weak reference toVariables. This is only required when the tf.AutoTrackable object is notmaintained by the user (e.g.  `from_saved_model` ).


## 方法


###  `convert` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L386-L452)

```
 convert()
 
```

基于实例变量转换tensorflow graphdef。

#### 返回：
以序列化格式转换的数据。

#### 加薪：
- **`ValueError`** :   Multiple concrete functions are specified.Input shape is not specified.Invalid quantization parameters.


###  `from_concrete_functions` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L314-L335)

```
 @classmethod
from_concrete_functions(
    cls,
    funcs
)
 
```

从ConcreteFunctions创建TfliteConverter对象。

#### 参数：
- **`funcs`** : List of TensorFlow ConcreteFunctions. The list should not containduplicate elements.


#### 返回：
TFLiteConverter对象。

#### 加薪：
输入类型无效。

###  `from_keras_model` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L372-L384)

```
 @classmethod
from_keras_model(
    cls,
    model
)
 
```

从keras模型创建tflitecoverter对象。

#### 参数：
- **`model`** : tf.Keras.Model


#### 返回：
TFLiteConverter对象。

###  `from_saved_model` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L337-L370)

```
 @classmethod
from_saved_model(
    cls,
    saved_model_dir,
    signature_keys=None,
    tags=None
)
 
```

从savedModel目录创建tflitecoverter对象。

#### 参数：
- **`saved_model_dir`** : SavedModel directory to convert.
- **`signature_keys`** : List of keys identifying SignatureDef containing inputsand outputs. Elements should not be duplicated. By default the `signatures`  attribute of the MetaGraphdef is used. (defaultsaved_model.signatures)
- **`tags`** : Set of tags identifying the MetaGraphDef within the SavedModel toanalyze. All tags in the tag set must be present. (default set(SERVING))


#### 返回：
TFLiteConverter对象。

#### 加薪：
无效的签名密钥。

