Iterates over the time dimension of a tensor.



### Aliases:

- [ `tf.compat.v1.keras.backend.rnn` ](/api_docs/python/tf/keras/backend/rnn)

- [ `tf.compat.v2.keras.backend.rnn` ](/api_docs/python/tf/keras/backend/rnn)



```
 tf.keras.backend.rnn(
    step_function,
    inputs,
    initial_states,
    go_backwards=False,
    mask=None,
    constants=None,
    unroll=False,
    input_length=None,
    time_major=False,
    zero_output_for_mask=False
)
 
```



#### Arguments:

- **`step_function`** : RNN step function.
Args;
    input; Tensor with shape  `(samples, ...)`  (no time dimension),
        representing input for the batch of samples at a certain
        time step.
    states; List of tensors.
Returns;
    output; Tensor with shape  `(samples, output_dim)` 
        (no time dimension).
    new_states; List of tensors, same length and shapes
        as 'states'. The first state in the list must be the
        output tensor at the previous timestep.

- **`inputs`** : Tensor of temporal data of shape  `(samples, time, ...)` 
(at least 3D), or nested tensors, and each of which has shape
 `(samples, time, ...)` .

- **`initial_states`** : Tensor with shape  `(samples, state_size)` 
(no time dimension), containing the initial values for the states used
in the step function. In the case that state_size is in a nested
shape, the shape of initial_states will also follow the nested
structure.

- **`go_backwards`** : Boolean. If True, do the iteration over the time
dimension in reverse order and return the reversed sequence.

- **`mask`** : Binary tensor with shape  `(samples, time, 1)` ,
with a zero for every element that is masked.

- **`constants`** : List of constant values passed at each step.

- **`unroll`** : Whether to unroll the RNN or to use a symbolic  `while_loop` .

- **`input_length`** : If specified, assume time dimension is of this length.

- **`time_major`** : Boolean. If true, the inputs and outputs will be in shape
 `(timesteps, batch, ...)` , whereas in the False case, it will be
 `(batch, timesteps, ...)` . Using  `time_major = True`  is a bit more
efficient because it avoids transposes at the beginning and end of the
RNN calculation. However, most TensorFlow data is batch-major, so by
default this function accepts input and emits output in batch-major
form.

- **`zero_output_for_mask`** : Boolean. If True, the output for masked timestep
will be zeros, whereas in the False case, output from previous
timestep is returned.



#### Returns:
A tuple,  `(last_output, outputs, new_states)` .
    last_output: the latest output of the rnn, of shape  `(samples, ...)` 
    outputs: tensor with shape  `(samples, time, ...)`  where each
        entry  `outputs[s, t]`  is the output of the step function
        at time  `t`  for sample  `s` .
    new_states: list of tensors, latest states returned by
        the step function, of shape  `(samples, ...)` .



#### Raises:

- **`ValueError`** : if input dimension is less than 3.

- **`ValueError`** : if  `unroll`  is  `True`  but input timestep is not a fixed
number.

- **`ValueError`** : if  `mask`  is provided (not  `None` ) but states is not provided
( `len(states)`  == 0).

