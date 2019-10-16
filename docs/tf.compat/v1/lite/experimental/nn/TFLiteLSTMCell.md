## Class TFLiteLSTMCell

Long short-term memory unit (LSTM) recurrent network cell.

This is used only for TfLite, it provides hints and it also makes the variables in the desired for the tflite ops (transposed and seaparated).

The default non-peephole implementation is based on:

https://pdfs.semanticscholar.org/1154/0131eae85b2e11d53df7f1360eeb6476e7f4.pdf

Felix Gers, Jurgen Schmidhuber, and Fred Cummins. "Learning to forget: Continual prediction with LSTM." IET, 850-855, 1999.

The peephole implementation is based on:

https://research.google.com/pubs/archive/43905.pdf

Hasim Sak, Andrew Senior, and Francoise Beaufays. "Long short-term memory recurrent neural network architectures for large scale acoustic modeling." INTERSPEECH, 2014.

The class uses optional peep-hole connections, optional cell clipping, and an optional projection layer.

Note that this cell is not optimized for performance. Please use tf.contrib.cudnn_rnn.CudnnLSTM for better performance on GPU, or tf.contrib.rnn.LSTMBlockCell and tf.contrib.rnn.LSTMBlockFusedCell for better performance on CPU.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/experimental/examples/lstm/rnn_cell.py#L190-L274)


```
 __init__(
    num_units,
    use_peepholes=False,
    cell_clip=None,
    initializer=None,
    num_proj=None,
    proj_clip=None,
    num_unit_shards=None,
    num_proj_shards=None,
    forget_bias=1.0,
    state_is_tuple=True,
    activation=None,
    reuse=None,
    name=None,
    dtype=None
)
```

Initialize the parameters for an LSTM cell.
#### Args:
- `num_units`: int, The number of units in the LSTM cell.
- `use_peepholes`: bool, set True to enable diagonal/peephole connections.
- `cell_clip`: (optional) A float value, if provided the cell state is clipped by this value prior to the cell output activation.
- `initializer`: (optional) The `initializer` to use for the weight and projection matrices.
- `num_proj`: (optional) int, The output dimensionality for the projection matrices. If None, no projection is performed.
- `proj_clip`:` `(`o``p`t`i``o`na`l`)` `A` `f`l``o`at` `va`l`ue.` `If` ``num_proj`` `>` `0` `and` ``proj_clip`` ``i`s` ``p``r``o`v`i`ded`,`` `then` `the` ``p``r``o``j`e`c`ted` `va`l`ues` `a`r`e` ``c``l``i``p``p`ed` `e`l`ementw`i`se` `t`o`` `w`i`th`i`n` `[`-``proj_clip``,`` ``proj_clip`].
- `num_unit_shards`:` `De`p``r`e`c`ated`,`` `w`i``l``l`` `be` ``r`em`o`ved` `by` `Jan.` `2017.` `Use` `a` `va`r``i`ab`l`e`_`s`c``o``p`e` ``p`a`r`t`i`t`i``o`ne`r`` ``i`nstead.
- `num_proj``_`sha`r`ds:` `De`p``r`e`c`ated`,`` `w`i``l``l`` `be` ``r`em`o`ved` `by` `Jan.` `2017.` `Use` `a` `va`r``i`ab`l`e`_`s`c``o``p`e` ``p`a`r`t`i`t`i``o`ne`r`` ``i`nstead.
- `forget_bias`:` `B`i`ases` ``o`f` `the` `f`o``r`get` `gate` `a`r`e` ``i`n`i`t`i`a`l``i`zed` `by` `defau`l`t` `t`o`` `1` ``i`n` ``o``r`de`r`` `t`o`` ``r`edu`c`e` `the` `s`c`a`l`e` ``o`f` `f`o``r`gett`i`ng` `at` `the` `beg`i`nn`i`ng` ``o`f` `the` `t`r`a`i`n`i`ng.` `Must` `set` ``i`t` `manua`l``l`y` `t`o`` ``0.0`` `when` ``r`est`o``r``i`ng` `f`r``o`m` `CudnnLSTM` `t`r`a`i`ned` ``c`he`c`k`p``o``i`nts.
- `state_is_tuple`:` `If` `T`r`ue`,`` `a`c``c`e`p`ted` `and` ``r`etu`r`ned` `states` `a`r`e` `2`-`tu`p``l`es` ``o`f` `the` ``c``_`state` `and` ``m_state`.` `If` `Fa`l`se`,`` `they` `a`r`e` ``c``o`n`c`atenated` `a`l``o`ng` `the` ``c``o``l`umn` `ax`i`s.` `Th`i`s` ``l`atte`r`` `behav`i``o``r`` `w`i``l``l`` `s`o``o`n` `be` `de`p``r`e`c`ated.
- `activation`:` `A`c`t`i`vat`i``o`n` `fun`c`t`i``o`n` ``o`f` `the` ``i`nne`r`` `states.` `Defau`l`t:` ``tanh`.
- `r`euse:` `(`o``p`t`i``o`na`l`)` `Pyth`o`n` `b`o``o``l`ean` `des`c``r``i`b`i`ng` `whethe`r`` `t`o`` ``r`euse` `va`r``i`ab`l`es` ``i`n` `an` `ex`i`st`i`ng` `s`c``o``p`e.` `If` `n`o`t` ``True``,`` `and` `the` `ex`i`st`i`ng` `s`c``o``p`e` `a`l``r`eady` `has` `the` `g`i`ven` `va`r``i`ab`l`es`,`` `an` `e`r``r``o``r`` ``i`s` ``r`a`i`sed.
- `name`:` `St`r``i`ng`,`` `the` ``name`` ``o`f` `the` ``l`aye`r`.` `Laye`r`s` `w`i`th` `the` `same` ``name`` `w`i``l``l`` `sha`r`e` `we`i`ghts`,`` `but` `t`o`` `av`o``i`d` `m`i`stakes` `we` ``r`equ`i``r`e` ``r`euse=`True`` ``i`n` `su`c`h` ``c`ases.
- `dtype`:` `Defau`l`t` ``dtype`` ``o`f` `the` ``l`aye`r`` `(defau`l`t` ``o`f` ``None`` `means` `use` `the` `ty`p`e` ``o`f` `the` `f`i``r`st` ``i`n`p`ut).` `Requ`i``r`ed` `when` ``build`` ``i`s` ``c`a`l``l`ed` `bef`o``r`e` ``c`a`l``l`.` `When` ``r`est`o``r``i`ng` `f`r``o`m` `CudnnLSTM`-`t`r`a`i`ned` ``c`he`c`k`p``o``i`nts`,`` `use` ``CudnnCompatibleLSTMCell`` ``i`nstead.
## Properties
### graph

DEPRECATED FUNCTION
### output_size

Integer or TensorShape: size of outputs produced by this cell.
### scope_name
### state_size

size(s) of state(s) used by this cell.

It can be represented by an Integer, a TensorShape or a tuple of Integers or TensorShapes.
## Methods
### get_initial_state
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L281-L309)


```
 get_initial_state(
    inputs=None,
    batch_size=None,
    dtype=None
)
```
### zero_state
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/rnn_cell_impl.py#L311-L340)


```
 zero_state(
    batch_size,
    dtype
)
```

Return zero-filled state tensor(s).
#### Args:
- `batch_size`: int, float, or unit Tensor representing the batch size.
- `dtype`: the data type to use for the state.
#### Returns:

If state_size is an int or TensorShape, then the return value is a N-D tensor of shape [batch_size, state_size] filled with zeros.

If state_size is a nested list or tuple, then the return value is a nested list or tuple (of the same structure) of 2-D tensors with the shapes [batch_size, s] for each s in state_size.
