## Class StackedRNNCells
Wrapper allowing a stack of RNN cells to behave as a single cell.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.layers.StackedRNNCells`
- Class `tf.compat.v2.keras.layers.StackedRNNCells`
Used to implement efficient stacked RNNs.
#### Arguments:
- `cells`: List of RNN cell instances.
#### Examples:

```
 cells = [
    keras.layers.LSTMCell(output_dim),
    keras.layers.LSTMCell(output_dim),
    keras.layers.LSTMCell(output_dim),
]

inputs = keras.Input((timesteps, input_dim))
x = keras.layers.RNN(cells)(inputs)
```
## __init__
View source

```
 __init__(
    cells,
    **kwargs
)
```
## Properties
### output_size
### state_size
## Methods
### get_initial_state
View source

```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
```
