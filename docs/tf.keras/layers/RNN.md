## Class RNN

Base class for recurrent layers.
[Layer](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.layers.RNN`
- Class `tf.compat.v2.keras.layers.RNN`
### Used in the guide:
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
#### Arguments:
- `cell`: A RNN `cell` instance or a list of RNN `cell` instances. A RNN `cell` is a class that has:
A `call`(input_at_t, states_at_t) method, returning (`output_at_t, states_at_t_plus_1`). The `call` method of the `cell` can also take the optional argument `constants`, see section "Note on passing external `constants`" below.
A `state_size` attribute. This can be a single integer (single state) in which case it is the size of the recurrent state. This can also be a list/tuple of integers (one size per state). The `state_size` can also be TensorShape or tuple/list of TensorShape, to represent high dimension state.
A `output_size` attribute. This can be a single integer or a TensorShape, which represent the shape of the output. For backward compatible reason, if this attribute is not available for the `cell`, the value will be inferred by the first element of the `state_size`.
A get_initial_state(`inputs`=`None`, `batch_size`=`None`, `dtype`=`None`) method that creates a tensor meant to be fed to `call`() as the initial state, if the user didn't specify any initial state via other means. The returned initial state should have a shape of [`batch_size`, `cell`.`state_size`]. The `cell` might choose to create a tensor full of zeros, or full of other values based on the `cell`'s implementation. `inputs` is the input tensor to the RNN layer, which should contain the batch size as its shape[0], and also `dtype`. Note that the shape[0] might be `None` during the graph construction. Either the `inputs` or the pair of `batch_size` and `dtype` are provided. `batch_size` is a scalar tensor that represents the batch size of the `inputs`. `dtype` is `tf.DType` that represents the `dtype` of the `inputs`. For backward compatible reason, if this method is not implemented by the `cell`, the RNN layer will create a zero filled tensor with the size of [`batch_size`, `cell`.`state_size`]. In the case that `cell` is a list of RNN `cell` instances, the `cell`s will be stacked on top of each other in the RNN, resulting in an efficient stacked RNN.
- A `call`(input_at_t, states_at_t) method, returning (`output_at_t, states_at_t_plus_1`). The `call` method of the `cell` can also take the optional argument `constants`, see section "Note on passing external `constants`" below.
- A `state_size` attribute. This can be a single integer (single state) in which case it is the size of the recurrent state. This can also be a list/tuple of integers (one size per state). The `state_size` can also be TensorShape or tuple/list of TensorShape, to represent high dimension state.
- A `output_size` attribute. This can be a single integer or a TensorShape, which represent the shape of the output. For backward compatible reason, if this attribute is not available for the `cell`, the value will be inferred by the first element of the `state_size`.
- A get_initial_state(`inputs`=`None`, `batch_size`=`None`, `dtype`=`None`) method that creates a tensor meant to be fed to `call`() as the initial state, if the user didn't specify any initial state via other means. The returned initial state should have a shape of [`batch_size`, `cell`.`state_size`]. The `cell` might choose to create a tensor full of zeros, or full of other values based on the `cell`'s implementation. `inputs` is the input tensor to the RNN layer, which should contain the batch size as its shape[0], and also `dtype`. Note that the shape[0] might be `None` during the graph construction. Either the `inputs` or the pair of `batch_size` and `dtype` are provided. `batch_size` is a scalar tensor that represents the batch size of the `inputs`. `dtype` is `tf.DType` that represents the `dtype` of the `inputs`. For backward compatible reason, if this method is not implemented by the `cell`, the RNN layer will create a zero filled tensor with the size of [`batch_size`, `cell`.`state_size`]. In the case that `cell` is a list of RNN `cell` instances, the `cell`s will be stacked on top of each other in the RNN, resulting in an efficient stacked RNN.
- `return_sequences`: Boolean. Whether to return the last output in the output sequence, or the full sequence.
- `return_state`: Boolean. Whether to return the last state in addition to the output.
- `go_backwards`: Boolean (default False). If True, process the input sequence backwards and return the reversed sequence.
- `stateful`: Boolean (default False). If True, the last state for each sample at index i in a batch will be used as initial state for the sample of index i in the following batch.
- `unroll`: Boolean (default False). If True, the network will be `unroll`ed, else a symbolic loop will be used. Unrolling can speed-up a RNN, although it tends to be more memory-intensive. Unrolling is only suitable for short sequences.
- `time_major`: The shape format of the `inputs` and `outputs` tensors. If True, the `inputs` and `outputs` will be in shape (`timesteps, batch, ...`), whereas in the False case, it will be (`batch, timesteps, ...`). Using `time_major` = True is a bit more efficient because it avoids transposes at the beginning and end of the RNN calculation. However, most TensorFlow data is batch-major, so by default this function accepts input and emits output in batch-major form.
#### Call arguments:
- `inputs`: Input tensor.
- `mask`: Binary tensor of shape (`samples, timesteps`) indicating whether a given timestep should be `mask`ed.
- `training`: Python boolean indicating whether the layer should behave in `training` mode or in inference mode. This argument is passed to the cell when calling it. This is for use with cells that use dropout.
- `initial_state`: List of initial state tensors to be passed to the first call of the cell.
- `constants`: List of constant tensors to be passed to the cell at each timestep.
#### Input shape:

N-D tensor with shape (batch_size, timesteps, ...) or (timesteps, batch_size, ...) when time_major is True.
#### Output shape:
- If `return_state`: a list of tensors. The first tensor is the output. The remaining tensors are the last states, each with shape (`batch_size, state_size`), where `state_size` could be a high dimension tensor shape.
- If `return_sequences`: N-D tensor with shape (`batch_size, timesteps, output_size`), where `output_size` could be a high dimension tensor shape, or (`timesteps, batch_size, output_size`) when `time_major` is True.
- Else, N-D tensor with shape (`batch_size, output_size`), where `output_size` could be a high dimension tensor shape.
#### Masking:
[Embedding](https://www.tensorflow.org/api_docs/python/tf/keras/layers/embeddings)This layer supports masking for input data with a variable number of timesteps. To introduce masks to your data, use an  layer with the mask_zero parameter set to True.


Note on using statefulness in RNNs: You can set RNN layers to be 'stateful', which means that the states computed for the samples in one batch will be reused as initial states for the samples in the next batch. This assumes a one-to-one mapping between samples in different successive batches.

To enable statefulness: - Specify stateful=True in the layer constructor. - Specify a fixed batch size for your model, by passing If sequential model: batch_input_shape=(...) to the first layer in your model. Else for functional model with 1 or more Input layers: batch_shape=(...) to all the first layers in your model. This is the expected shape of your inputs including the batch size. It should be a tuple of integers, e.g. (32, 10, 100). - Specify shuffle=False when calling fit().

To reset the states of your model, call .reset_states() on either a specific layer, or on your entire model.

Note on specifying the initial state of RNNs: You can specify the initial state of RNN layers symbolically by calling them with the keyword argument initial_state. The value of initial_state should be a tensor or list of tensors representing the initial state of the RNN layer.

You can specify the initial state of RNN layers numerically by calling reset_states with the keyword argument states. The value of states should be a numpy array or list of numpy arrays representing the initial state of the RNN layer.
[RNN.call](https://www.tensorflow.org/api_docs/python/tf/keras/layers/RNN#__call__)Note on passing external constants to RNNs: You can pass "external" constants to the cell using the constants keyword argument of  (as well as ) method. This requires that the cell.call method accepts the same keyword argument constants. Such constants can be used to condition the cell transformation on additional static inputs (not changing over time), a.k.a. an attention mechanism.

#### Examples:

```
 # First, let's define a RNN Cell, as a layer subclass.

class MinimalRNNCell(keras.layers.Layer):

    def __init__(self, units, **kwargs):
        self.units = units
        self.state_size = units
        super(MinimalRNNCell, self).__init__(**kwargs)

    def build(self, input_shape):
        self.kernel = self.add_weight(shape=(input_shape[-1], self.units),
                                      initializer='uniform',
                                      name='kernel')
        self.recurrent_kernel = self.add_weight(
            shape=(self.units, self.units),
            initializer='uniform',
            name='recurrent_kernel')
        self.built = True

    def call(self, inputs, states):
        prev_output = states[0]
        h = K.dot(inputs, self.kernel)
        output = h + K.dot(prev_output, self.recurrent_kernel)
        return output, [output]

# Let's use this cell in a RNN layer:

cell = MinimalRNNCell(32)
x = keras.Input((None, 5))
layer = RNN(cell)
y = layer(x)

# Here's how to use the cell to build a stacked RNN:

cells = [MinimalRNNCell(32), MinimalRNNCell(64)]
x = keras.Input((None, 5))
layer = RNN(cells)
y = layer(x)
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L366-L412)


```
 __init__(
    cell,
    return_sequences=False,
    return_state=False,
    go_backwards=False,
    stateful=False,
    unroll=False,
    time_major=False,
    **kwargs
)
```
## Properties
### states
## Methods
### get_initial_state
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L593-L614)


```
 get_initial_state(inputs)
```
### reset_states
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/recurrent.py#L806-L858)


```
 reset_states(states=None)
```
