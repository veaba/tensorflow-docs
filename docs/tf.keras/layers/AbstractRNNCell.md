## Class AbstractRNNCell
Abstract object representing an RNN cell.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.AbstractRNNCell`
- Class `tf.compat.v2.keras.layers.AbstractRNNCell`
This is the base class for implementing RNN cells with custom behavior.
Every `RNNCell` must have the properties below and implement `call` with the signature (output, next_state) = `call`(input, state).
#### Examples:

```
   class MinimalRNNCell(AbstractRNNCell):

    def __init__(self, units, **kwargs):
      self.units = units
      super(MinimalRNNCell, self).__init__(**kwargs)

    @property
    def state_size(self):
      return self.units

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
      return output, output
```
This definition of cell differs from the definition used in the literature. In the literature, 'cell' refers to an object with a single scalar output. This definition refers to a horizontal array of such units.
