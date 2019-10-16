
Warm-starts a model using the given settings.

```
 tf.compat.v1.train.warm_start(
    ckpt_to_initialize_from,
    vars_to_warm_start='.*',
    var_name_to_vocab_info=None,
    var_name_to_prev_var_name=None
)
```

If you are using a tf.estimator.Estimator, this will automatically be called during training.
#### Args:
- `ckpt_to_initialize_from`: [Required] A string specifying the directory with checkpoint file(s) or path to checkpoint from which to warm-start the model parameters.
- `vars_to_warm_start`: [Optional] One of the following:
A regular expression (string) that captures which variables to warm-start (see tf.compat.v1.get_collection). This expression will only consider variables in the TRAINABLE_VARIABLES collection -- if you need to warm-start non_TRAINABLE vars (such as optimizer accumulators or batch norm statistics), please use the below option.
A list of strings, each a regex scope provided to tf.compat.v1.get_collection with GLOBAL_VARIABLES (please see tf.compat.v1.get_collection). For backwards compatibility reasons, this is separate from the single-string argument type.
A list of `Variable`s to warm-start. If you do not have access to the `Variable` objects at the call site, please use the above option.
`None`, in which case only TRAINABLE variables specified in `var_name_to_vocab_info` will be warm-started.
Defaults to `'.*'`, which warm-starts all variables in the TRAINABLE_VARIABLES collection. Note that this excludes variables such as accumulators and moving statistics from batch norm.
- A regular expression (string) that captures which variables to warm-start (see tf.compat.v1.get_collection). This expression will only consider variables in the TRAINABLE_VARIABLES collection -- if you need to warm-start non_TRAINABLE vars (such as optimizer accumulators or batch norm statistics), please use the below option.
- A list of strings, each a regex scope provided to tf.compat.v1.get_collection with GLOBAL_VARIABLES (please see tf.compat.v1.get_collection). For backwards compatibility reasons, this is separate from the single-string argument type.
- A list of `Variable`s to warm-start. If you do not have access to the `Variable` objects at the call site, please use the above option.
- `None`, in which case only TRAINABLE variables specified in `var_name_to_vocab_info` will be warm-started.
- `var_name_to_vocab_info`: [Optional] Dict of variable names (strings) to `tf.estimator.VocabInfo`. The variable names should be "full" variables, not the names of the partitions. If not explicitly provided, the variable is assumed to have no (changes to) vocabulary.
- `var_name_to_prev_var_name`: [Optional] Dict of variable names (strings) to name of the previously-trained variable in `ckpt_to_initialize_from`. If not explicitly provided, the name of the variable is assumed to be same between previous checkpoint and current model. Note that this has no effect on the set of variables that is warm-started, and only controls name mapping (use `vars_to_warm_start` for controlling what variables to warm-start).
#### Raises:
- `ValueError`: If the WarmStartSettings contains prev_var_name or VocabInfo configuration for variable names that are not used. This is to ensure a stronger check for variable configuration than relying on users to examine the logs.
