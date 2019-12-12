

## Class  `WarmStartSettings` 
Settings for warm-starting in  `tf.estimator.Estimators` .

**Aliases** : [ `tf.compat.v1.estimator.WarmStartSettings` ](/api_docs/python/tf/estimator/WarmStartSettings), [ `tf.compat.v2.estimator.WarmStartSettings` ](/api_docs/python/tf/estimator/WarmStartSettings)

Example Use with canned [ `tf.estimator.DNNEstimator` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/DNNEstimator):

```
 emb_vocab_file = tf.feature_column.embedding_column(
    tf.feature_column.categorical_column_with_vocabulary_file(
        "sc_vocab_file", "new_vocab.txt", vocab_size=100),
    dimension=8)
emb_vocab_list = tf.feature_column.embedding_column(
    tf.feature_column.categorical_column_with_vocabulary_list(
        "sc_vocab_list", vocabulary_list=["a", "b"]),
    dimension=8)
estimator = tf.estimator.DNNClassifier(
  hidden_units=[128, 64], feature_columns=[emb_vocab_file, emb_vocab_list],
  warm_start_from=ws)
 
```

where  `ws`  could be defined as:

Warm-start all weights in the model (input layer and hidden weights).Either the directory or a specific checkpoint can be provided (in the caseof the former, the latest checkpoint will be used):

```
 ws)
ws)
 
```

Warm-start only the embeddings (input layer):

```
 ws,
 )
 
```

Warm-start all weights but the embedding parameters corresponding to `sc_vocab_file`  have a different vocab from the one used in the currentmodel:

```
 vocab_info
)
ws,
    var_name_to_vocab_info={
        "input_layer/sc_vocab_file_embedding/embedding_weights": vocab_info
    })
 
```

Warm-start only  `sc_vocab_file`  embeddings (and no other variables), whichhave a different vocab from the one used in the current model:

```
 vocab_info
)
ws,
    vars_to_warm_start=None,
    var_name_to_vocab_info={
        "input_layer/sc_vocab_file_embedding/embedding_weights": vocab_info
    })
 
```

Warm-start all weights but the parameters corresponding to  `sc_vocab_file` have a different vocab from the one used in current checkpoint, and only100 of those entries were used:

```
 vocab_info,
 ,
    var_name_to_vocab_info={
        "input_layer/sc_vocab_file_embedding/embedding_weights": vocab_info
    })
 
```

Warm-start all weights but the parameters corresponding to  `sc_vocab_file` have a different vocab from the one used in current checkpoint and theparameters corresponding to  `sc_vocab_list`  have a different name from thecurrent checkpoint:

```
 vocab_info,
 ,
    var_name_to_vocab_info={
        "input_layer/sc_vocab_file_embedding/embedding_weights": vocab_info
    },
    var_name_to_prev_var_name={
        "input_layer/sc_vocab_list_embedding/embedding_weights":
            "old_tensor_name"
    })
 
```

Warm-start all TRAINABLE variables:

```
 ws,
 )
 
```

Warm-start all variables (including non-TRAINABLE):

```
 ws,
                       vars_to_warm_start=[".*"])
 
```

Warm-start non-TRAINABLE variables "v1", "v1/Momentum", and "v2" but not"v2/momentum":

```
 ws,
                       vars_to_warm_start=["v1", "v2[^/]"])
 
```

#### Attributes:
- **`ckpt_to_initialize_from`** : [Required] A string specifying the directory withcheckpoint file(s) or path to checkpoint from which to warm-start themodel parameters.
- **`vars_to_warm_start`** : [Optional] One of the following:

Defaults to  `'.*'` , which warm-starts all variables in theTRAINABLE_VARIABLES collection.  Note that this excludes variables suchas accumulators and moving statistics from batch norm.


- **`var_name_to_vocab_info`** : [Optional] Dict of variable names (strings) to[ `tf.estimator.VocabInfo` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/VocabInfo). The variable names should be "full" variables,not the names of the partitions.  If not explicitly provided, the variableis assumed to have no (changes to) vocabulary.


- **`var_name_to_prev_var_name`** : [Optional] Dict of variable names (strings) toname of the previously-trained variable in  `ckpt_to_initialize_from` . Ifnot explicitly provided, the name of the variable is assumed to be samebetween previous checkpoint and current model.  Note that this has noeffect on the set of variables that is warm-started, and only controlsname mapping (use  `vars_to_warm_start`  for controlling what variables towarm-start).


    - A regular expression (string) that captures which variables towarm-start (see tf.compat.v1.get_collection).  This expression will onlyconsider variables in the TRAINABLE_VARIABLES collection -- if you needto warm-start non_TRAINABLE vars (such as optimizer accumulators orbatch norm statistics), please use the below option.
    - A list of strings, each a regex scope provided totf.compat.v1.get_collection with GLOBAL_VARIABLES (please seetf.compat.v1.get_collection).  For backwards compatibility reasons,this is separate from the single-string argument type.
    - A list of Variables to warm-start.  If you do not have access to the `Variable`  objects at the call site, please use the above option.
    -  `None` , in which case only TRAINABLE variables specified in `var_name_to_vocab_info`  will be warm-started.


##  `__new__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/estimator.py)

```
 @staticmethod
__new__(
    cls,
    ckpt_to_initialize_from,
    vars_to_warm_start='.*',
    var_name_to_vocab_info=None,
    var_name_to_prev_var_name=None
)
 
```

Create new instance of WarmStartSettings(ckpt_to_initialize_from, vars_to_warm_start, var_name_to_vocab_info, var_name_to_prev_var_name)

## Properties


###  `ckpt_to_initialize_from` 


###  `vars_to_warm_start` 


###  `var_name_to_vocab_info` 


###  `var_name_to_prev_var_name` 
