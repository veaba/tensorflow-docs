## Class Bidirectional
Bidirectional wrapper for RNNs.
Inherits From: `Wrapper`
### Aliases:
- Class `tf.compat.v1.keras.layers.Bidirectional`
- Class `tf.compat.v2.keras.layers.Bidirectional`
### Used in the guide:
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``T``e``x``t`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``w``i``t``h`` ``a``n`` ``R``N``N``
- ``L``o``a``d`` ``t``e``x``t``
#### Arguments:
- `layer`: `Recurrent` instance.
- `merge_mode`: Mode by which outputs of the forward and backward RNNs will be combined. One of {'sum', 'mul', 'concat', 'ave', None}. If None, the outputs will not be combined, they will be returned as a list.
- `backward_layer`: Optional `Recurrent` instance to be used to handle backwards input processing. If `backward_layer` is not provided, the `layer` instance passed as the `layer` argument will be used to generate the backward `layer` automatically. Note that the provided `backward_layer` `layer` should have properties matching those of the `layer` argument, in particular it should have the same values for `stateful`, `return_states`, `return_sequence`, etc. In addition, `backward_layer` and `layer` should have different `go_backwards` argument values. A `ValueError` will be raised if these requirements are not met.
#### Call arguments:
The call arguments for this layer are the same as those of the wrapped RNN layer.
#### Raises:
- `ValueError`: 1. If `layer` or `backward_layer` is not a `Layer` instance.
In case of invalid `merge_mode` argument.
If `backward_layer` has mismatched properties compared to `layer`.
- In case of invalid `merge_mode` argument.
- If `backward_layer` has mismatched properties compared to `layer`.
#### Examples:

```
 model = Sequential()
model.add(Bidirectional(LSTM(10, return_sequences=True), input_shape=(5, 10)))
model.add(Bidirectional(LSTM(10)))
model.add(Dense(5))
model.add(Activation('softmax'))
model.compile(loss='categorical_crossentropy', optimizer='rmsprop')

 # With custom backward layer
 model = Sequential()
 forward_layer = LSTM(10, return_sequences=True)
 backard_layer = LSTM(10, activation='relu', return_sequences=True,
                      go_backwards=True)
 model.add(Bidirectional(forward_layer, backward_layer=backward_layer,
                         input_shape=(5, 10)))
 model.add(Dense(5))
 model.add(Activation('softmax'))
 model.compile(loss='categorical_crossentropy', optimizer='rmsprop')
```
## __init__
View source

```
 __init__(
    layer,
    merge_mode='concat',
    weights=None,
    backward_layer=None,
    **kwargs
)
```
## Properties
### constraints
## Methods
### reset_states
View source

```
 reset_states()
```
