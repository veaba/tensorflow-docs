Warm-starts a model using the given settings.

```
 tf.compat.v1.train.warm_start(
    ckpt_to_initialize_from,
    vars_to_warm_start='.*',
    var_name_to_vocab_info=None,
    var_name_to_prev_var_name=None
)
 
```

If you are using a tf.estimator.Estimator, this will automatically be calledduring training.

#### Args:
- **`ckpt_to_initialize_from`** : [Required] A string specifying the directory withcheckpoint file(s) or path to checkpoint from which to warm-start themodel parameters.
- **`vars_to_warm_start`** : [Optional] One of the following:

Defaults to  `'.*'` , which warm-starts all variables in theTRAINABLE_VARIABLES collection.  Note that this excludes variables suchas accumulators and moving statistics from batch norm.


- **`var_name_to_vocab_info`** : [Optional] Dict of variable names (strings) to[ `tf.estimator.VocabInfo` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/VocabInfo). The variable names should be "full" variables,not the names of the partitions.  If not explicitly provided, the variableis assumed to have no (changes to) vocabulary.


- **`var_name_to_prev_var_name`** : [Optional] Dict of variable names (strings) toname of the previously-trained variable in  `ckpt_to_initialize_from` . Ifnot explicitly provided, the name of the variable is assumed to be samebetween previous checkpoint and current model.  Note that this has noeffect on the set of variables that is warm-started, and only controlsname mapping (use  `vars_to_warm_start`  for controlling what variables towarm-start).


    - A regular expression (string) that captures which variables towarm-start (see tf.compat.v1.get_collection).  This expression will onlyconsider variables in the TRAINABLE_VARIABLES collection -- if you needto warm-start non_TRAINABLE vars (such as optimizer accumulators orbatch norm statistics), please use the below option.
    - A list of strings, each a regex scope provided totf.compat.v1.get_collection with GLOBAL_VARIABLES (please seetf.compat.v1.get_collection).  For backwards compatibility reasons,this is separate from the single-string argument type.
    - A list of Variables to warm-start.  If you do not have access to the `Variable`  objects at the call site, please use the above option.
    -  `None` , in which case only TRAINABLE variables specified in `var_name_to_vocab_info`  will be warm-started.


#### Raises:
- **`ValueError`** : If the WarmStartSettings contains prev_var_name or VocabInfoconfiguration for variable names that are not used.  This is to ensurea stronger check for variable configuration than relying on users toexamine the logs.
