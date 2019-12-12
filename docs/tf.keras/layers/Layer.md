

## Class  `Layer` 
基本层类。

Inherits From: [ `Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module)

**别名** : [ `tf.compat.v1.keras.layers.Layer` ](/api_docs/python/tf/keras/layers/Layer), [ `tf.compat.v2.keras.layers.Layer` ](/api_docs/python/tf/keras/layers/Layer)

这是所有层都从中继承的类。

A layer is a class implementing common neural networks operations, suchas convolution, batch norm, etc. These operations require managing weights,losses, updates, and inter-layer connectivity.

用户只需实例化一个层，然后将其视为可调用的。

We recommend that descendants of  `Layer`  implement the following methods:

-  `__init__()` : Save configuration in member variables
-  `build()` : Called once from  `__call__` , when we know the shapes of inputsand  `dtype` . Should have the calls to  `add_weight()` , and thencall the super's  `build()`  (which sets  `self.built = True` , which isnice in case the user wants to call  `build()`  manually before thefirst  `__call__` ).
-  `call()` : Called in  `__call__`  after making sure  `build()`  has been calledonce. Should actually perform the logic of applying the layer to theinput tensors (which should be passed in as the first argument).


#### 参数：
- **`trainable`** : Boolean, whether the layer's variables should be trainable.
- **`name`** : String name of the layer.
- **`dtype`** : The dtype of the layer's computations and weights (default of `None`  means use [ `tf.keras.backend.floatx` ](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/floatx) in TensorFlow 2, or the typeof the first input in TensorFlow 1).
- **`dynamic`** : Set this to  `True`  if your layer should only be run eagerly, andshould not be used to generate a static computation graph.This would be the case for a Tree-RNN or a recursive network,for example, or generally for any layer that manipulates tensorsusing Python control flow. If  `False` , we assume that the layer cansafely be used to generate a static computation graph.
Read-only properties:  name: The name of the layer (string).  dtype: The dtype of the layer's computations and weights. If mixed    precision is used with a [ `tf.keras.mixed_precision.experimental.Policy` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/Policy),    this is instead just the dtype of the layer's weights, as the computations    are done in a different dtype.  updates: List of update ops of this layer.  losses: List of losses added by this layer.  trainable_weights: List of variables to be included in backprop.  non_trainable_weights: List of variables that should not be    included in backprop.  weights: The concatenation of the lists trainable_weights and    non_trainable_weights (in this order).

#### 可变属性：
- **`trainable`** : Whether the layer should be trained (boolean).
- **`input_spec`** : Optional (list of)  `InputSpec`  object(s) specifying theconstraints on inputs that can be accepted by the layer.


###D类型和铸造
Each layer has a dtype, which is typically the dtype of the layer'scomputations and variables. A layer's dtype can be queried via the[ `Layer.dtype` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer#dtype) property. The dtype is specified with the  `dtype`  constructorargument. In TensorFlow 2, the dtype defaults to [ `tf.keras.backend.floatx()` ](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/floatx)if no dtype is passed.  `floatx()`  itself defaults to "float32". Additionally,layers will cast their inputs to the layer's dtype in TensorFlow 2. Forexample:

```
 x = tf.ones((4, 4, 4, 4), dtype='float64')
layer = tf.keras.layers.Conv2D(filters=4, kernel_size=2)
print(layer.dtype)  # float32

# `layer` casts it's inputs to layer.dtype, which is float32, and does
# computations in float32.
y = layer(x)
 
```

Currently, only tensors in the first argument to the layer's  `call`  method arecasted. For example:

```
 class)
b)

layer)
x, y = layer(a, b)
print(x.dtype)  # float64
print(y.dtype)  # float32. Not casted since `b` was not passed to first input
 
```

It is recommended to accept tensors only in the first argument. This way,all tensors are casted to the layer's dtype.  `MyLayer`  should therefore bewritten as:

```
 class)
b)

layer)
x, y = layer((a, b))
print(x.dtype)  # float64
print(y.dtype)  # float64.
 
```

In a future minor release, tensors in other arguments may be casted as well.

Currently, other arguments are not automatically casted fortechnical reasons, but this may change in a future minor release.

A layer subclass can prevent its inputs from being autocasted by passing `autocast=False`  to the layer constructor. For example:

```
 class MyLayer(tf.keras.layers.Layer):

  def __init__(self, **kwargs):
    kwargs['autocast']=False
    super(MyLayer, self).__init__(**kwargs)

  def call(self, inp):
    return inp

x = tf.ones((4, 4, 4, 4), dtype='float64')
layer = MyLayer()
print(layer.dtype)  # float32.
y = layer(x)  # MyLayer will not cast inputs to it's dtype of float32
print(y.dtype)  # float64
 
```

####Tensorflow 2中float64中的运行模型
If you want to run a Model in float64, you can set floatx to be float64 bycalling  `tf.keras.backend.set_floatx('float64')` . This will cause all layersto default to float64 instead of float32:

```
 tf.keras.backend.set_floatx('float64')
layer1 = tf.keras.layers.Dense(4)
layer2 = tf.keras.layers.Dense(4)

x = tf.ones((4, 4))
y = layer2(layer1(x))  # Both layers run in float64
 
```

Alternatively, you can pass  `dtype='float64'`  to each individual layer. Notethat if you have any layers which contain other layers as members, you mustensure each sublayer gets  `dtype='float64'`  passed to it's constructor aswell:

```
 layer1 = tf.keras.layers.Dense(4, dtype='float64')
layer2 = tf.keras.layers.Dense(4, dtype='float64')

x = tf.ones((4, 4))
y = layer2(layer1(x))  # Both layers run in float64

class NestedLayer(tf.keras.layers.Layer):
  def __init__(self, **kwargs):
    super(NestedLayer, self).__init__(**kwargs)
    self.dense = tf.keras.layers.Dense(4, dtype=kwargs.get('dtype'))

  def call(self, inp):
    return self.dense(inp)

layer3 = NestedLayer(dtype='float64')
z = layer3(x)  # layer3's dense layer runs in float64, since NestedLayer
               # correcty passed it's dtype to it's dense layer

 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L277-L363)

```
 __init__(
    trainable=True,
    name=None,
    dtype=None,
    dynamic=False,
    **kwargs
)
 
```

## 属性


###  `activity_regularizer` 
此层输出的可选正则化函数。

###  `dtype` 


###  `dynamic` 


###  `input` 
检索层的输入张量。

Only applicable if the layer has exactly one input,i.e. if it is connected to one incoming layer.

#### 返回：
输入张量或输入张量列表。

#### 加薪：
- **`RuntimeError`** : If called in Eager mode.
- **`AttributeError`** : If no inbound nodes are found.


###  `input_mask` 
检索层的输入掩码张量。

Only applicable if the layer has exactly one inbound node,i.e. if it is connected to one incoming layer.

#### 返回：
Input mask tensor (potentially None) or list of inputmask tensors.

#### 加薪：
- **`AttributeError`** : if the layer is connected tomore than one incoming layers.


###  `input_shape` 
检索层的输入形状。

Only applicable if the layer has exactly one input,i.e. if it is connected to one incoming layer, or if all inputshave the same shape.

#### 返回：
Input shape, as an integer shape tuple(or list of shape tuples, one tuple per input tensor).

#### 加薪：
- **`AttributeError`** : if the layer has no defined input_shape.
- **`RuntimeError`** : if called in Eager mode.


###  `input_spec` 


###  `losses` 
Losses which are associated with this  `Layer` .

Variable regularization tensors are created when this property is accessed,so it is eager safe: accessing  `losses`  under a [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape) willpropagate gradients back to the corresponding variables.

#### 返回：
张量表。

###  `metrics` 


###  `name` 
返回在ctor中传递或确定的此模块的名称。

注意：This is not the same as the  `self.name_scope.name`  which includesparent module names.

###  `non_trainable_variables` 


###  `non_trainable_weights` 


###  `output` 
检索层的输出张量。

Only applicable if the layer has exactly one output,i.e. if it is connected to one incoming layer.

#### 返回：
输出张量或输出张量列表。

#### 加薪：
- **`AttributeError`** : if the layer is connected to more than one incominglayers.
- **`RuntimeError`** : if called in Eager mode.


###  `output_mask` 
检索层的输出掩码张量。

Only applicable if the layer has exactly one inbound node,i.e. if it is connected to one incoming layer.

#### 返回：
Output mask tensor (potentially None) or list of outputmask tensors.

#### 加薪：
- **`AttributeError`** : if the layer is connected tomore than one incoming layers.


###  `output_shape` 
检索层的输出形状。

Only applicable if the layer has one output,or if all outputs have the same shape.

#### 返回：
Output shape, as an integer shape tuple(or list of shape tuples, one tuple per output tensor).

#### 加薪：
- **`AttributeError`** : if the layer has no defined output shape.
- **`RuntimeError`** : if called in Eager mode.


###  `trainable` 


###  `trainable_variables` 
此模块及其子模块拥有的变量序列。


**Note:**  this method uses reflection to find variables on the current instanceand submodules. For performance reasons you may wish to cache the resultof calling this method if you don't expect the return value to change.


#### 返回：
A sequence of variables for the current module (sorted by attributename) followed by variables from all submodules recursively (breadthfirst).

###  `trainable_weights` 


###  `updates` 


###  `variables` 
返回所有图层变量/权重的列表。

Alias of  `self.weights` .

#### 返回：
变量列表。

###  `weights` 
返回所有图层变量/权重的列表。

#### 返回：
变量列表。

## 方法


###  `__call__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L703-L895)

```
 __call__(
    inputs,
    *args,
    **kwargs
)
 
```

Wraps  `call` , applying pre- and post-processing steps.

#### 参数：
- **`inputs`** : input tensor(s).
- **`*args`** : additional positional arguments to be passed to  `self.call` .
- **`**kwargs`** : additional keyword arguments to be passed to  `self.call` .


#### 返回：
输出张量。

#### 注：
- The following optional keyword arguments are reserved for specific uses:
- If the layer's  `call`  method takes a  `mask`  argument (as some Keraslayers do), its default value will be set to the mask generatedfor  `inputs`  by the previous layer (if  `input`  did come froma layer that generated a corresponding mask, i.e. if it came froma Keras layer with masking support.
    -  `training` : Boolean scalar tensor of Python boolean indicatingwhether the  `call`  is meant for training or inference.
    -  `mask` : Boolean input mask.


#### 加薪：
- **`ValueError`** : if the layer's  `call`  method returns None (an invalid value).


###  `add_loss` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1017-L1135)

```
 add_loss(
    losses,
    inputs=None
)
 
```

Add loss tensor(s), potentially dependent on layer inputs.

Some losses (for instance, activity regularization losses) may be dependenton the inputs passed when calling a layer. Hence, when reusing the samelayer on different inputs  `a`  and  `b` , some entries in  `layer.losses`  maybe dependent on  `a`  and some on  `b` . This method automatically keeps trackof dependencies.

This method can be used inside a subclassed layer or model's  `call` function, in which case  `losses`  should be a Tensor or list of Tensors.

#### 示例：


```
 class MyLayer(tf.keras.layers.Layer):
  def call(inputs, self):
    self.add_loss(tf.abs(tf.reduce_mean(inputs)), inputs=True)
    return inputs
 
```

This method can also be called directly on a Functional Model duringconstruction. In this case, any loss Tensors passed to this Model mustbe symbolic and be able to be traced back to the model's  `Input` s. Theselosses become part of the model's topology and are tracked in  `get_config` .

#### 示例：


```
 inputs = tf.keras.Input(shape=(10,))
x = tf.keras.layers.Dense(10)(inputs)
outputs = tf.keras.layers.Dense(1)(x)
model = tf.keras.Model(inputs, outputs)
# Actvity regularization.
model.add_loss(tf.abs(tf.reduce_mean(x)))
 
```

If this is not the case for your loss (if, for example, your loss referencesa  `Variable`  of one of the model's layers), you can wrap your loss in azero-argument lambda. These losses are not tracked as part of the model'stopology since they can't be serialized.

#### 示例：


```
 inputs = tf.keras.Input(shape=(10,))
x = tf.keras.layers.Dense(10)(inputs)
outputs = tf.keras.layers.Dense(1)(x)
model = tf.keras.Model(inputs, outputs)
# Weight regularization.
model.add_loss(lambda: tf.reduce_mean(x.kernel))
 
```

The  `get_losses_for`  method allows to retrieve the losses relevant to aspecific set of inputs.

#### 参数：
- **`losses`** : Loss tensor, or list/tuple of tensors. Rather than tensors, lossesmay also be zero-argument callables which create a loss tensor.
- **`inputs`** : Ignored when executing eagerly. If anything other than None ispassed, it signals the losses are conditional on some of the layer'sinputs, and thus they should only be run where these inputs areavailable. This is the case for activity regularization losses, forinstance. If  `None`  is passed, the losses are assumedto be unconditional, and will apply across all dataflows of the layer(e.g. weight regularization losses).


###  `add_metric` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1150-L1219)

```
 add_metric(
    value,
    aggregation=None,
    name=None
)
 
```

向层添加度量张量。

#### 参数：
- **`value`** : Metric tensor.
- **`aggregation`** : Sample-wise metric reduction function. If  `aggregation=None` ,it indicates that the metric tensor provided has been aggregatedalready. eg,  `bin_acc = BinaryAccuracy(name='acc')`  followed by `model.add_metric(bin_acc(y_true, y_pred))` . If aggregation='mean', thegiven metric tensor will be sample-wise reduced using  `mean`  function.eg,  `model.add_metric(tf.reduce_sum(outputs), name='output_mean',aggregation='mean')` .
- **`name`** : String metric name.


#### 加薪：
- **`ValueError`** : If  `aggregation`  is anything other than None or  `mean` .


###  `add_update` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1221-L1305)

```
 add_update(
    updates,
    inputs=None
)
 
```

Add update op(s), potentially dependent on layer inputs. (deprecated arguments)


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(inputs)` . They will be removed in a future version.Instructions for updating: `inputs`  is now automatically inferred
Weight updates (for instance, the updates of the moving mean and variancein a BatchNormalization layer) may be dependent on the inputs passedwhen calling a layer. Hence, when reusing the same layer ondifferent inputs  `a`  and  `b` , some entries in  `layer.updates`  may bedependent on  `a`  and some on  `b` . This method automatically keeps trackof dependencies.

The  `get_updates_for`  method allows to retrieve the updates relevant to aspecific set of inputs.

This call is ignored when eager execution is enabled (in that case, variableupdates are run on the fly and thus do not need to be tracked for laterexecution).

#### 参数：
- **`updates`** : Update op, or list/tuple of update ops, or zero-arg callablethat returns an update op. A zero-arg callable should be passed inorder to disable running the updates by setting  `trainable=False` on this Layer, when executing in Eager mode.
- **`inputs`** : Deprecated, will be automatically inferred.


###  `add_weight` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L394-L537)

```
 add_weight(
    name=None,
    shape=None,
    dtype=None,
    initializer=None,
    regularizer=None,
    trainable=None,
    constraint=None,
    partitioner=None,
    use_resource=None,
    synchronization=tf.VariableSynchronization.AUTO,
    aggregation=tf.compat.v1.VariableAggregation.NONE,
    **kwargs
)
 
```

向图层添加新变量。

#### 参数：
- **`name`** : Variable name.
- **`shape`** : Variable shape. Defaults to scalar if unspecified.
- **`dtype`** : The type of the variable. Defaults to  `self.dtype`  or  `float32` .
- **`initializer`** : Initializer instance (callable).
- **`regularizer`** : Regularizer instance (callable).
- **`trainable`** : Boolean, whether the variable should be part of the layer's"trainable_variables" (e.g. variables, biases)or "non_trainable_variables" (e.g. BatchNorm mean and variance).Note that  `trainable`  cannot be  `True`  if  `synchronization` is set to  `ON_READ` .
- **`constraint`** : Constraint instance (callable).
- **`partitioner`** : Partitioner to be passed to the  `Trackable`  API.
- **`use_resource`** : Whether to use  `ResourceVariable` .
- **`synchronization`** : Indicates when a distributed a variable will beaggregated. Accepted values are constants defined in the class[ `tf.VariableSynchronization` ](https://tensorflow.google.cn/api_docs/python/tf/VariableSynchronization). By default the synchronization is set to `AUTO`  and the current  `DistributionStrategy`  chooseswhen to synchronize. If  `synchronization`  is set to  `ON_READ` , `trainable`  must not be set to  `True` .
- **`aggregation`** : Indicates how a distributed variable will be aggregated.Accepted values are constants defined in the class[ `tf.VariableAggregation` ](https://tensorflow.google.cn/api_docs/python/tf/VariableAggregation).
- **`**kwargs`** : Additional keyword arguments. Accepted values are  `getter`  and `collections` .


#### 返回：
The created variable. Usually either a  `Variable`  or  `ResourceVariable` instance. If  `partitioner`  is not  `None` , a  `PartitionedVariable` instance is returned.

#### 加薪：
- **`RuntimeError`** : If called with partitioned variable regularization andeager execution is enabled.
- **`ValueError`** : When giving unsupported dtype and no initializer or whentrainable has been set to True with synchronization set as  `ON_READ` .


###  `build` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L365-L379)

```
 build(input_shape)
 
```

Creates the variables of the layer (optional, for subclass implementers).

This is a method that implementers of subclasses of  `Layer`  or  `Model` can override if they need a state-creation step in-betweenlayer instantiation and layer call.

This is typically used to create the weights of  `Layer`  subclasses.

#### 参数：
- **`input_shape`** : Instance of  `TensorShape` , or list of instances of `TensorShape`  if the layer expects a list of inputs(one instance per input).


###  `call` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L381-L392)

```
 call(
    inputs,
    **kwargs
)
 
```

这就是层的逻辑所在。

#### 参数：
- **`inputs`** : Input tensor, or list/tuple of input tensors.
- **`**kwargs`** : Additional keyword arguments.


#### 返回：
张量或张量的列表/元组。

###  `compute_mask` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L681-L701)

```
 compute_mask(
    inputs,
    mask=None
)
 
```

计算输出遮罩张量。

#### 参数：
- **`inputs`** : Tensor or list of tensors.
- **`mask`** : Tensor or list of tensors.


#### 返回：
None or a tensor (or list of tensors,    one per output tensor of the layer).

###  `compute_output_shape` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L596-L639)

```
 compute_output_shape(input_shape)
 
```

计算层的输出形状。

If the layer has not been built, this method will call  `build`  on thelayer. This assumes that the layer will later be used with inputs thatmatch the input shape provided here.

#### 参数：
- **`input_shape`** : Shape tuple (tuple of integers)or list of shape tuples (one per output tensor of the layer).Shape tuples can include None for free dimensions,instead of an integer.


#### 返回：
输入形状元组。

###  `compute_output_signature` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L641-L679)

```
 compute_output_signature(input_signature)
 
```

根据输入计算层的输出张量特征。

Unlike a TensorShape object, a TensorSpec object contains both shapeand dtype information for a tensor. This method allows layers to provideoutput dtype information if it is different from the input dtype.For any layer that doesn't implement this function,the framework will fall back to use  `compute_output_shape` , and willassume that the output dtype matches the input dtype.

#### 参数：
- **`input_signature`** : Single TensorSpec or nested structure of TensorSpecobjects, describing a candidate input for the layer.


#### 返回：
Single TensorSpec or nested structure of TensorSpec objects, describing  how the layer would transform the provided input.

#### 加薪：
- **`TypeError`** : If input_signature contains a non-TensorSpec object.


###  `count_params` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1611-L1630)

```
 count_params()
 
```

计算组成权重的标量总数。

#### 返回：
整数计数。

#### 加薪：
- **`ValueError`** : if the layer isn't yet built(in which case its weights aren't yet defined).


###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L578-L594)

```
 @classmethod
from_config(
    cls,
    config
)
 
```

从其配置创建层。

This method is the reverse of  `get_config` ,capable of instantiating the same layer from the configdictionary. It does not handle layer connectivity(handled by Network), nor weights (handled by  `set_weights` ).

#### 参数：
- **`config`** : A Python dictionary, typically theoutput of get_config.


#### 返回：
层实例。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L539-L576)

```
 get_config()
 
```

返回层的配置。

A layer config is a Python dictionary (serializable)containing the configuration of a layer.The same layer can be reinstantiated later(without its trained weights) from this configuration.

The config of a layer does not include connectivityinformation, nor the layer class name. These are handledby  `Network`  (one layer of abstraction above).

#### 返回：
python字典。

###  `get_input_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1505-L1521)

```
 get_input_at(node_index)
 
```

检索给定节点处的层的输入张量。

#### 参数：
- **`node_index`** : Integer, index of the nodefrom which to retrieve the attribute.E.g.  `node_index=0`  will correspond to thefirst time the layer was called.


#### 返回：
张量（或张量列表，如果层有多个输入）。

#### 加薪：
- **`RuntimeError`** : If called in Eager mode.


###  `get_input_mask_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1387-L1404)

```
 get_input_mask_at(node_index)
 
```

检索给定节点处的层的输入掩码张量。

#### 参数：
- **`node_index`** : Integer, index of the nodefrom which to retrieve the attribute.E.g.  `node_index=0`  will correspond to thefirst time the layer was called.


#### 返回：
A mask tensor(or list of tensors if the layer has multiple inputs).

###  `get_input_shape_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1467-L1484)

```
 get_input_shape_at(node_index)
 
```

检索给定节点处的层的输入形状。

#### 参数：
- **`node_index`** : Integer, index of the nodefrom which to retrieve the attribute.E.g.  `node_index=0`  will correspond to thefirst time the layer was called.


#### 返回：
A shape tuple(or list of shape tuples if the layer has multiple inputs).

#### 加薪：
- **`RuntimeError`** : If called in Eager mode.


###  `get_losses_for` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1368-L1385)

```
 get_losses_for(inputs)
 
```

检索与特定输入集相关的丢失。

#### 参数：
- **`inputs`** : Input tensor or list/tuple of input tensors.


#### 返回：
List of loss tensors of the layer that depend on  `inputs` .

###  `get_output_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1523-L1539)

```
 get_output_at(node_index)
 
```

检索给定节点处层的输出张量。

#### 参数：
- **`node_index`** : Integer, index of the nodefrom which to retrieve the attribute.E.g.  `node_index=0`  will correspond to thefirst time the layer was called.


#### 返回：
张量（或张量列表，如果层有多个输出）。

#### 加薪：
- **`RuntimeError`** : If called in Eager mode.


###  `get_output_mask_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1406-L1423)

```
 get_output_mask_at(node_index)
 
```

检索给定节点处的层的输出掩码张量。

#### 参数：
- **`node_index`** : Integer, index of the nodefrom which to retrieve the attribute.E.g.  `node_index=0`  will correspond to thefirst time the layer was called.


#### 返回：
A mask tensor(or list of tensors if the layer has multiple outputs).

###  `get_output_shape_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1486-L1503)

```
 get_output_shape_at(node_index)
 
```

检索给定节点处的层的输出形状。

#### 参数：
- **`node_index`** : Integer, index of the nodefrom which to retrieve the attribute.E.g.  `node_index=0`  will correspond to thefirst time the layer was called.


#### 返回：
A shape tuple(or list of shape tuples if the layer has multiple outputs).

#### 加薪：
- **`RuntimeError`** : If called in Eager mode.


###  `get_updates_for` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1349-L1366)

```
 get_updates_for(inputs)
 
```

检索与特定输入集相关的更新。

#### 参数：
- **`inputs`** : Input tensor or list/tuple of input tensors.


#### 返回：
List of update ops of the layer that depend on  `inputs` .

###  `get_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1340-L1347)

```
 get_weights()
 
```

返回层的当前权重。

#### 返回：
将值作为numpy数组的列表进行加权。

###  `set_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1307-L1338)

```
 set_weights(weights)
 
```

Sets the weights of the layer, from Numpy arrays.

#### 参数：
- **`weights`** : a list of Numpy arrays. The numberof arrays and their shape must matchnumber of the dimensions of the weightsof the layer (i.e. it should match theoutput of  `get_weights` ).


#### 加薪：
- **`ValueError`** : If the provided weights list does not match thelayer's specifications.
