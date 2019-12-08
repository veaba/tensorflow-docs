

## Class  `Layer` 
Base layer class.

Inherits From: [ `Module` ](https://tensorflow.google.cn/api_docs/python/tf/Module)



### Aliases:

- Class [ `tf.compat.v1.keras.layers.Layer` ](/api_docs/python/tf/keras/layers/Layer)

- Class [ `tf.compat.v2.keras.layers.Layer` ](/api_docs/python/tf/keras/layers/Layer)

This is the class from which all layers inherit.

A layer is a class implementing common neural networks operations, such
as convolution, batch norm, etc. These operations require managing weights,
losses, updates, and inter-layer connectivity.

Users will just instantiate a layer and then treat it as a callable.

We recommend that descendants of  `Layer`  implement the following methods:


-  `__init__()` : Save configuration in member variables

-  `build()` : Called once from  `__call__` , when we know the shapes of inputs
and  `dtype` . Should have the calls to  `add_weight()` , and then
call the super's  `build()`  (which sets  `self.built = True` , which is
nice in case the user wants to call  `build()`  manually before the
first  `__call__` ).

-  `call()` : Called in  `__call__`  after making sure  `build()`  has been called
once. Should actually perform the logic of applying the layer to the
input tensors (which should be passed in as the first argument).



#### Arguments:

- **`trainable`** : Boolean, whether the layer's variables should be trainable.

- **`name`** : String name of the layer.

- **`dtype`** : The dtype of the layer's computations and weights (default of
 `None`  means use [ `tf.keras.backend.floatx` ](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/floatx) in TensorFlow 2, or the type
of the first input in TensorFlow 1).

- **`dynamic`** : Set this to  `True`  if your layer should only be run eagerly, and
should not be used to generate a static computation graph.
This would be the case for a Tree-RNN or a recursive network,
for example, or generally for any layer that manipulates tensors
using Python control flow. If  `False` , we assume that the layer can
safely be used to generate a static computation graph.

Read-only properties:
  name: The name of the layer (string).
  dtype: The dtype of the layer's computations and weights. If mixed
    precision is used with a [ `tf.keras.mixed_precision.experimental.Policy` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/Policy),
    this is instead just the dtype of the layer's weights, as the computations
    are done in a different dtype.
  updates: List of update ops of this layer.
  losses: List of losses added by this layer.
  trainable_weights: List of variables to be included in backprop.
  non_trainable_weights: List of variables that should not be
    included in backprop.
  weights: The concatenation of the lists trainable_weights and
    non_trainable_weights (in this order).



#### Mutable properties:

- **`trainable`** : Whether the layer should be trained (boolean).

- **`input_spec`** : Optional (list of)  `InputSpec`  object(s) specifying the
constraints on inputs that can be accepted by the layer.



### Dtypes and casting
Each layer has a dtype, which is typically the dtype of the layer's
computations and variables. A layer's dtype can be queried via the
[ `Layer.dtype` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer#dtype) property. The dtype is specified with the  `dtype`  constructor
argument. In TensorFlow 2, the dtype defaults to [ `tf.keras.backend.floatx()` ](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/floatx)
if no dtype is passed.  `floatx()`  itself defaults to "float32". Additionally,
layers will cast their inputs to the layer's dtype in TensorFlow 2. For
example:



```
 x = tf.ones((4, 4, 4, 4), dtype='float64')
layer = tf.keras.layers.Conv2D(filters=4, kernel_size=2)
print(layer.dtype)  # float32

# `layer` casts it's inputs to layer.dtype, which is float32, and does
# computations in float32.
y = layer(x)
 
```

Currently, only tensors in the first argument to the layer's  `call`  method are
casted. For example:



```
 class)
b)

layer)
x, y = layer(a, b)
print(x.dtype)  # float64
print(y.dtype)  # float32. Not casted since `b` was not passed to first input
 
```

It is recommended to accept tensors only in the first argument. This way,
all tensors are casted to the layer's dtype.  `MyLayer`  should therefore be
written as:



```
 class)
b)

layer)
x, y = layer((a, b))
print(x.dtype)  # float64
print(y.dtype)  # float64.
 
```

In a future minor release, tensors in other arguments may be casted as well.

Currently, other arguments are not automatically casted for
technical reasons, but this may change in a future minor release.

A layer subclass can prevent its inputs from being autocasted by passing
 `autocast=False`  to the layer constructor. For example:



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



#### Running models in float64 in TensorFlow 2
If you want to run a Model in float64, you can set floatx to be float64 by
calling  `tf.keras.backend.set_floatx('float64')` . This will cause all layers
to default to float64 instead of float32:



```
 tf.keras.backend.set_floatx('float64')
layer1 = tf.keras.layers.Dense(4)
layer2 = tf.keras.layers.Dense(4)

x = tf.ones((4, 4))
y = layer2(layer1(x))  # Both layers run in float64
 
```

Alternatively, you can pass  `dtype='float64'`  to each individual layer. Note
that if you have any layers which contain other layers as members, you must
ensure each sublayer gets  `dtype='float64'`  passed to it's constructor as
well:



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



## Properties


###  `activity_regularizer` 
Optional regularizer function for the output of this layer.



###  `dtype` 


###  `dynamic` 


###  `input` 
Retrieves the input tensor(s) of a layer.

Only applicable if the layer has exactly one input,
i.e. if it is connected to one incoming layer.



#### Returns:
Input tensor or list of input tensors.



#### Raises:

- **`RuntimeError`** : If called in Eager mode.

- **`AttributeError`** : If no inbound nodes are found.



###  `input_mask` 
Retrieves the input mask tensor(s) of a layer.

Only applicable if the layer has exactly one inbound node,
i.e. if it is connected to one incoming layer.



#### Returns:
Input mask tensor (potentially None) or list of input
mask tensors.



#### Raises:

- **`AttributeError`** : if the layer is connected to
more than one incoming layers.



###  `input_shape` 
Retrieves the input shape(s) of a layer.

Only applicable if the layer has exactly one input,
i.e. if it is connected to one incoming layer, or if all inputs
have the same shape.



#### Returns:
Input shape, as an integer shape tuple
(or list of shape tuples, one tuple per input tensor).



#### Raises:

- **`AttributeError`** : if the layer has no defined input_shape.

- **`RuntimeError`** : if called in Eager mode.



###  `input_spec` 


###  `losses` 
Losses which are associated with this  `Layer` .

Variable regularization tensors are created when this property is accessed,
so it is eager safe: accessing  `losses`  under a [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape) will
propagate gradients back to the corresponding variables.



#### Returns:
A list of tensors.



###  `metrics` 


###  `name` 
Returns the name of this module as passed or determined in the ctor.

NOTE: This is not the same as the  `self.name_scope.name`  which includes
parent module names.



###  `non_trainable_variables` 


###  `non_trainable_weights` 


###  `output` 
Retrieves the output tensor(s) of a layer.

Only applicable if the layer has exactly one output,
i.e. if it is connected to one incoming layer.



#### Returns:
Output tensor or list of output tensors.



#### Raises:

- **`AttributeError`** : if the layer is connected to more than one incoming
layers.

- **`RuntimeError`** : if called in Eager mode.



###  `output_mask` 
Retrieves the output mask tensor(s) of a layer.

Only applicable if the layer has exactly one inbound node,
i.e. if it is connected to one incoming layer.



#### Returns:
Output mask tensor (potentially None) or list of output
mask tensors.



#### Raises:

- **`AttributeError`** : if the layer is connected to
more than one incoming layers.



###  `output_shape` 
Retrieves the output shape(s) of a layer.

Only applicable if the layer has one output,
or if all outputs have the same shape.



#### Returns:
Output shape, as an integer shape tuple
(or list of shape tuples, one tuple per output tensor).



#### Raises:

- **`AttributeError`** : if the layer has no defined output shape.

- **`RuntimeError`** : if called in Eager mode.



###  `trainable` 


###  `trainable_variables` 
Sequence of variables owned by this module and it's submodules.


<aside class="note">**Note:**  this method uses reflection to find variables on the current instance
and submodules. For performance reasons you may wish to cache the result
of calling this method if you don't expect the return value to change.</aside>


#### Returns:
A sequence of variables for the current module (sorted by attribute
name) followed by variables from all submodules recursively (breadth
first).



###  `trainable_weights` 


###  `updates` 


###  `variables` 
Returns the list of all layer variables/weights.

Alias of  `self.weights` .



#### Returns:
A list of variables.



###  `weights` 
Returns the list of all layer variables/weights.



#### Returns:
A list of variables.



## Methods


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



#### Arguments:

- **`inputs`** : input tensor(s).

- **`*args`** : additional positional arguments to be passed to  `self.call` .

- **`**kwargs`** : additional keyword arguments to be passed to  `self.call` .



#### Returns:
Output tensor(s).



#### Note:

- The following optional keyword arguments are reserved for specific uses:


- If the layer's  `call`  method takes a  `mask`  argument (as some Keras
layers do), its default value will be set to the mask generated
for  `inputs`  by the previous layer (if  `input`  did come from
a layer that generated a corresponding mask, i.e. if it came from
a Keras layer with masking support.


    -  `training` : Boolean scalar tensor of Python boolean indicating
whether the  `call`  is meant for training or inference.

    -  `mask` : Boolean input mask.



#### Raises:

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

Some losses (for instance, activity regularization losses) may be dependent
on the inputs passed when calling a layer. Hence, when reusing the same
layer on different inputs  `a`  and  `b` , some entries in  `layer.losses`  may
be dependent on  `a`  and some on  `b` . This method automatically keeps track
of dependencies.

This method can be used inside a subclassed layer or model's  `call` 
function, in which case  `losses`  should be a Tensor or list of Tensors.



#### Example:


```
 class MyLayer(tf.keras.layers.Layer):
  def call(inputs, self):
    self.add_loss(tf.abs(tf.reduce_mean(inputs)), inputs=True)
    return inputs
 
```

This method can also be called directly on a Functional Model during
construction. In this case, any loss Tensors passed to this Model must
be symbolic and be able to be traced back to the model's  `Input` s. These
losses become part of the model's topology and are tracked in  `get_config` .



#### Example:


```
 inputs = tf.keras.Input(shape=(10,))
x = tf.keras.layers.Dense(10)(inputs)
outputs = tf.keras.layers.Dense(1)(x)
model = tf.keras.Model(inputs, outputs)
# Actvity regularization.
model.add_loss(tf.abs(tf.reduce_mean(x)))
 
```

If this is not the case for your loss (if, for example, your loss references
a  `Variable`  of one of the model's layers), you can wrap your loss in a
zero-argument lambda. These losses are not tracked as part of the model's
topology since they can't be serialized.



#### Example:


```
 inputs = tf.keras.Input(shape=(10,))
x = tf.keras.layers.Dense(10)(inputs)
outputs = tf.keras.layers.Dense(1)(x)
model = tf.keras.Model(inputs, outputs)
# Weight regularization.
model.add_loss(lambda: tf.reduce_mean(x.kernel))
 
```

The  `get_losses_for`  method allows to retrieve the losses relevant to a
specific set of inputs.



#### Arguments:

- **`losses`** : Loss tensor, or list/tuple of tensors. Rather than tensors, losses
may also be zero-argument callables which create a loss tensor.

- **`inputs`** : Ignored when executing eagerly. If anything other than None is
passed, it signals the losses are conditional on some of the layer's
inputs, and thus they should only be run where these inputs are
available. This is the case for activity regularization losses, for
instance. If  `None`  is passed, the losses are assumed
to be unconditional, and will apply across all dataflows of the layer
(e.g. weight regularization losses).



###  `add_metric` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1150-L1219)



```
 add_metric(
    value,
    aggregation=None,
    name=None
)
 
```

Adds metric tensor to the layer.



#### Args:

- **`value`** : Metric tensor.

- **`aggregation`** : Sample-wise metric reduction function. If  `aggregation=None` ,
it indicates that the metric tensor provided has been aggregated
already. eg,  `bin_acc = BinaryAccuracy(name='acc')`  followed by
 `model.add_metric(bin_acc(y_true, y_pred))` . If aggregation='mean', the
given metric tensor will be sample-wise reduced using  `mean`  function.
eg, <code translate="no" dir="ltr">model.add_metric(tf.reduce_sum(outputs), name='output_mean',
aggregation='mean')</code>.

- **`name`** : String metric name.



#### Raises:

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


<aside class="warning">**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(inputs)` . They will be removed in a future version.
Instructions for updating:
 `inputs`  is now automatically inferred</aside>
Weight updates (for instance, the updates of the moving mean and variance
in a BatchNormalization layer) may be dependent on the inputs passed
when calling a layer. Hence, when reusing the same layer on
different inputs  `a`  and  `b` , some entries in  `layer.updates`  may be
dependent on  `a`  and some on  `b` . This method automatically keeps track
of dependencies.

The  `get_updates_for`  method allows to retrieve the updates relevant to a
specific set of inputs.

This call is ignored when eager execution is enabled (in that case, variable
updates are run on the fly and thus do not need to be tracked for later
execution).



#### Arguments:

- **`updates`** : Update op, or list/tuple of update ops, or zero-arg callable
that returns an update op. A zero-arg callable should be passed in
order to disable running the updates by setting  `trainable=False` 
on this Layer, when executing in Eager mode.

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

Adds a new variable to the layer.



#### Arguments:

- **`name`** : Variable name.

- **`shape`** : Variable shape. Defaults to scalar if unspecified.

- **`dtype`** : The type of the variable. Defaults to  `self.dtype`  or  `float32` .

- **`initializer`** : Initializer instance (callable).

- **`regularizer`** : Regularizer instance (callable).

- **`trainable`** : Boolean, whether the variable should be part of the layer's
"trainable_variables" (e.g. variables, biases)
or "non_trainable_variables" (e.g. BatchNorm mean and variance).
Note that  `trainable`  cannot be  `True`  if  `synchronization` 
is set to  `ON_READ` .

- **`constraint`** : Constraint instance (callable).

- **`partitioner`** : Partitioner to be passed to the  `Trackable`  API.

- **`use_resource`** : Whether to use  `ResourceVariable` .

- **`synchronization`** : Indicates when a distributed a variable will be
aggregated. Accepted values are constants defined in the class
[ `tf.VariableSynchronization` ](https://tensorflow.google.cn/api_docs/python/tf/VariableSynchronization). By default the synchronization is set to
 `AUTO`  and the current  `DistributionStrategy`  chooses
when to synchronize. If  `synchronization`  is set to  `ON_READ` ,
 `trainable`  must not be set to  `True` .

- **`aggregation`** : Indicates how a distributed variable will be aggregated.
Accepted values are constants defined in the class
[ `tf.VariableAggregation` ](https://tensorflow.google.cn/api_docs/python/tf/VariableAggregation).

- **`**kwargs`** : Additional keyword arguments. Accepted values are  `getter`  and
 `collections` .



#### Returns:
The created variable. Usually either a  `Variable`  or  `ResourceVariable` 
instance. If  `partitioner`  is not  `None` , a  `PartitionedVariable` 
instance is returned.



#### Raises:

- **`RuntimeError`** : If called with partitioned variable regularization and
eager execution is enabled.

- **`ValueError`** : When giving unsupported dtype and no initializer or when
trainable has been set to True with synchronization set as  `ON_READ` .



###  `build` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L365-L379)



```
 build(input_shape)
 
```

Creates the variables of the layer (optional, for subclass implementers).

This is a method that implementers of subclasses of  `Layer`  or  `Model` 
can override if they need a state-creation step in-between
layer instantiation and layer call.

This is typically used to create the weights of  `Layer`  subclasses.



#### Arguments:

- **`input_shape`** : Instance of  `TensorShape` , or list of instances of
 `TensorShape`  if the layer expects a list of inputs
(one instance per input).



###  `call` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L381-L392)



```
 call(
    inputs,
    **kwargs
)
 
```

This is where the layer's logic lives.



#### Arguments:

- **`inputs`** : Input tensor, or list/tuple of input tensors.

- **`**kwargs`** : Additional keyword arguments.



#### Returns:
A tensor or list/tuple of tensors.



###  `compute_mask` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L681-L701)



```
 compute_mask(
    inputs,
    mask=None
)
 
```

Computes an output mask tensor.



#### Arguments:

- **`inputs`** : Tensor or list of tensors.

- **`mask`** : Tensor or list of tensors.



#### Returns:
None or a tensor (or list of tensors,
    one per output tensor of the layer).



###  `compute_output_shape` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L596-L639)



```
 compute_output_shape(input_shape)
 
```

Computes the output shape of the layer.

If the layer has not been built, this method will call  `build`  on the
layer. This assumes that the layer will later be used with inputs that
match the input shape provided here.



#### Arguments:

- **`input_shape`** : Shape tuple (tuple of integers)
or list of shape tuples (one per output tensor of the layer).
Shape tuples can include None for free dimensions,
instead of an integer.



#### Returns:
An input shape tuple.



###  `compute_output_signature` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L641-L679)



```
 compute_output_signature(input_signature)
 
```

Compute the output tensor signature of the layer based on the inputs.

Unlike a TensorShape object, a TensorSpec object contains both shape
and dtype information for a tensor. This method allows layers to provide
output dtype information if it is different from the input dtype.
For any layer that doesn't implement this function,
the framework will fall back to use  `compute_output_shape` , and will
assume that the output dtype matches the input dtype.



#### Args:

- **`input_signature`** : Single TensorSpec or nested structure of TensorSpec
objects, describing a candidate input for the layer.



#### Returns:
Single TensorSpec or nested structure of TensorSpec objects, describing
  how the layer would transform the provided input.



#### Raises:

- **`TypeError`** : If input_signature contains a non-TensorSpec object.



###  `count_params` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1611-L1630)



```
 count_params()
 
```

Count the total number of scalars composing the weights.



#### Returns:
An integer count.



#### Raises:

- **`ValueError`** : if the layer isn't yet built
(in which case its weights aren't yet defined).



###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L578-L594)



```
 @classmethod
from_config(
    cls,
    config
)
 
```

Creates a layer from its config.

This method is the reverse of  `get_config` ,
capable of instantiating the same layer from the config
dictionary. It does not handle layer connectivity
(handled by Network), nor weights (handled by  `set_weights` ).



#### Arguments:

- **`config`** : A Python dictionary, typically the
output of get_config.



#### Returns:
A layer instance.



###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L539-L576)



```
 get_config()
 
```

Returns the config of the layer.

A layer config is a Python dictionary (serializable)
containing the configuration of a layer.
The same layer can be reinstantiated later
(without its trained weights) from this configuration.

The config of a layer does not include connectivity
information, nor the layer class name. These are handled
by  `Network`  (one layer of abstraction above).



#### Returns:
Python dictionary.



###  `get_input_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1505-L1521)



```
 get_input_at(node_index)
 
```

Retrieves the input tensor(s) of a layer at a given node.



#### Arguments:

- **`node_index`** : Integer, index of the node
from which to retrieve the attribute.
E.g.  `node_index=0`  will correspond to the
first time the layer was called.



#### Returns:
A tensor (or list of tensors if the layer has multiple inputs).



#### Raises:

- **`RuntimeError`** : If called in Eager mode.



###  `get_input_mask_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1387-L1404)



```
 get_input_mask_at(node_index)
 
```

Retrieves the input mask tensor(s) of a layer at a given node.



#### Arguments:

- **`node_index`** : Integer, index of the node
from which to retrieve the attribute.
E.g.  `node_index=0`  will correspond to the
first time the layer was called.



#### Returns:
A mask tensor
(or list of tensors if the layer has multiple inputs).



###  `get_input_shape_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1467-L1484)



```
 get_input_shape_at(node_index)
 
```

Retrieves the input shape(s) of a layer at a given node.



#### Arguments:

- **`node_index`** : Integer, index of the node
from which to retrieve the attribute.
E.g.  `node_index=0`  will correspond to the
first time the layer was called.



#### Returns:
A shape tuple
(or list of shape tuples if the layer has multiple inputs).



#### Raises:

- **`RuntimeError`** : If called in Eager mode.



###  `get_losses_for` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1368-L1385)



```
 get_losses_for(inputs)
 
```

Retrieves losses relevant to a specific set of inputs.



#### Arguments:

- **`inputs`** : Input tensor or list/tuple of input tensors.



#### Returns:
List of loss tensors of the layer that depend on  `inputs` .



###  `get_output_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1523-L1539)



```
 get_output_at(node_index)
 
```

Retrieves the output tensor(s) of a layer at a given node.



#### Arguments:

- **`node_index`** : Integer, index of the node
from which to retrieve the attribute.
E.g.  `node_index=0`  will correspond to the
first time the layer was called.



#### Returns:
A tensor (or list of tensors if the layer has multiple outputs).



#### Raises:

- **`RuntimeError`** : If called in Eager mode.



###  `get_output_mask_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1406-L1423)



```
 get_output_mask_at(node_index)
 
```

Retrieves the output mask tensor(s) of a layer at a given node.



#### Arguments:

- **`node_index`** : Integer, index of the node
from which to retrieve the attribute.
E.g.  `node_index=0`  will correspond to the
first time the layer was called.



#### Returns:
A mask tensor
(or list of tensors if the layer has multiple outputs).



###  `get_output_shape_at` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1486-L1503)



```
 get_output_shape_at(node_index)
 
```

Retrieves the output shape(s) of a layer at a given node.



#### Arguments:

- **`node_index`** : Integer, index of the node
from which to retrieve the attribute.
E.g.  `node_index=0`  will correspond to the
first time the layer was called.



#### Returns:
A shape tuple
(or list of shape tuples if the layer has multiple outputs).



#### Raises:

- **`RuntimeError`** : If called in Eager mode.



###  `get_updates_for` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1349-L1366)



```
 get_updates_for(inputs)
 
```

Retrieves updates relevant to a specific set of inputs.



#### Arguments:

- **`inputs`** : Input tensor or list/tuple of input tensors.



#### Returns:
List of update ops of the layer that depend on  `inputs` .



###  `get_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1340-L1347)



```
 get_weights()
 
```

Returns the current weights of the layer.



#### Returns:
Weights values as a list of numpy arrays.



###  `set_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/engine/base_layer.py#L1307-L1338)



```
 set_weights(weights)
 
```

Sets the weights of the layer, from Numpy arrays.



#### Arguments:

- **`weights`** : a list of Numpy arrays. The number
of arrays and their shape must match
number of the dimensions of the weights
of the layer (i.e. it should match the
output of  `get_weights` ).



#### Raises:

- **`ValueError`** : If the provided weights list does not match the
layer's specifications.

