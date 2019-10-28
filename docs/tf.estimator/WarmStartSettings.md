## Class WarmStartSettings
Settings for warm-starting in `tf.estimator.Estimators`.
### Aliases:
- Class `tf.compat.v1.estimator.WarmStartSettings`
- Class `tf.compat.v2.estimator.WarmStartSettings`
Example Use with canned `tf.estimator.DNNEstimator`:

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
where `ws` could be defined as:
Warm-start all weights in the model (input layer and hidden weights). Either the directory or a specific checkpoint can be provided (in the case of the former, the latest checkpoint will be used):

```
 ws = WarmStartSettings(ckpt_to_initialize_from="/tmp")
ws = WarmStartSettings(ckpt_to_initialize_from="/tmp/model-1000")
```
Warm-start only the embeddings (input layer):

```
 ws = WarmStartSettings(ckpt_to_initialize_from="/tmp",
                       vars_to_warm_start=".*input_layer.*")
```
Warm-start all weights but the embedding parameters corresponding to `sc_vocab_file` have a different vocab from the one used in the current model:

```
 vocab_info = tf.estimator.VocabInfo(
    new_vocab=sc_vocab_file.vocabulary_file,
    new_vocab_size=sc_vocab_file.vocabulary_size,
    num_oov_buckets=sc_vocab_file.num_oov_buckets,
    old_vocab="old_vocab.txt"
)
ws = WarmStartSettings(
    ckpt_to_initialize_from="/tmp",
    var_name_to_vocab_info={
        "input_layer/sc_vocab_file_embedding/embedding_weights": vocab_info
    })
```
Warm-start only `sc_vocab_file` embeddings (and no other variables), which have a different vocab from the one used in the current model:

```
 vocab_info = tf.estimator.VocabInfo(
    new_vocab=sc_vocab_file.vocabulary_file,
    new_vocab_size=sc_vocab_file.vocabulary_size,
    num_oov_buckets=sc_vocab_file.num_oov_buckets,
    old_vocab="old_vocab.txt"
)
ws = WarmStartSettings(
    ckpt_to_initialize_from="/tmp",
    vars_to_warm_start=None,
    var_name_to_vocab_info={
        "input_layer/sc_vocab_file_embedding/embedding_weights": vocab_info
    })
```
Warm-start all weights but the parameters corresponding to `sc_vocab_file` have a different vocab from the one used in current checkpoint, and only 100 of those entries were used:

```
 vocab_info = tf.estimator.VocabInfo(
    new_vocab=sc_vocab_file.vocabulary_file,
    new_vocab_size=sc_vocab_file.vocabulary_size,
    num_oov_buckets=sc_vocab_file.num_oov_buckets,
    old_vocab="old_vocab.txt",
    old_vocab_size=100
)
ws = WarmStartSettings(
    ckpt_to_initialize_from="/tmp",
    var_name_to_vocab_info={
        "input_layer/sc_vocab_file_embedding/embedding_weights": vocab_info
    })
```
Warm-start all weights but the parameters corresponding to `sc_vocab_file` have a different vocab from the one used in current checkpoint and the parameters corresponding to `sc_vocab_list` have a different name from the current checkpoint:

```
 vocab_info = tf.estimator.VocabInfo(
    new_vocab=sc_vocab_file.vocabulary_file,
    new_vocab_size=sc_vocab_file.vocabulary_size,
    num_oov_buckets=sc_vocab_file.num_oov_buckets,
    old_vocab="old_vocab.txt",
    old_vocab_size=100
)
ws = WarmStartSettings(
    ckpt_to_initialize_from="/tmp",
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
 ws = WarmStartSettings(ckpt_to_initialize_from="/tmp",
                       vars_to_warm_start=".*")
```
Warm-start all variables (including non-TRAINABLE):

```
 ws = WarmStartSettings(ckpt_to_initialize_from="/tmp",
                       vars_to_warm_start=[".*"])
```
Warm-start non-TRAINABLE variables "v1", "v1/Momentum", and "v2" but not "v2/momentum":

```
 ws = WarmStartSettings(ckpt_to_initialize_from="/tmp",
                       vars_to_warm_start=["v1", "v2[^/]"])
```
#### Attributes:
- `ckpt_to_initialize_from`: [Required] A string specifying the directory with checkpoint file(s) or path to checkpoint from which to warm-start the model parameters.
- `vars_to_warm_start`: [Optional] One of the following:
A regular expression (string) that captures which variables to warm-start (see tf.compat.v1.get_collection). This expression will only consider variables in the TRAINABLE_VARIABLES collection -- if you need to warm-start non_TRAINABLE vars (such as optimizer accumulators or batch norm statistics), please use the below option.
A list of strings, each a regex scope provided to tf.compat.v1.get_collection with GLOBAL_VARIABLES (please see tf.compat.v1.get_collection). For backwards compatibility reasons, this is separate from the single-string argument type.
A list of `Variable`s to warm-start. If you do not have access to the `Variable` objects at the call site, please use the above option.
`None`, in which case only TRAINABLE variables specified in `var_name_to_vocab_info` will be warm-started.
Defaults to '.*', which warm-starts all variables in the TRAINABLE_VARIABLES collection. Note that this excludes variables such as accumulators and moving statistics from batch norm.
- ``A`` ``r``e``g``u``l``a``r`` ``e``x``p``r``e``s``s``i``o``n`` ``(``s``t``r``i``n``g``)`` ``t``h``a``t`` ``c``a``p``t``u``r``e``s`` ``w``h``i``c``h`` ``v``a``r``i``a``b``l``e``s`` ``t``o`` ``w``a``r``m``-``s``t``a``r``t`` ``(``s``e``e`` ``t``f``.``c``o``m``p``a``t``.``v``1``.``g``e``t``_``c``o``l``l``e``c``t``i``o``n``)``.`` ``T``h``i``s`` ``e``x``p``r``e``s``s``i``o``n`` ``w``i``l``l`` ``o``n``l``y`` ``c``o``n``s``i``d``e``r`` ``v``a``r``i``a``b``l``e``s`` ``i``n`` ``t``h``e`` ``T``R``A``I``N``A``B``L``E``_``V``A``R``I``A``B``L``E``S`` ``c``o``l``l``e``c``t``i``o``n`` ``-``-`` ``i``f`` ``y``o``u`` ``n``e``e``d`` ``t``o`` ``w``a``r``m``-``s``t``a``r``t`` ``n``o``n``_``T``R``A``I``N``A``B``L``E`` ``v``a``r``s`` ``(``s``u``c``h`` ``a``s`` ``o``p``t``i``m``i``z``e``r`` ``a``c``c``u``m``u``l``a``t``o``r``s`` ``o``r`` ``b``a``t``c``h`` ``n``o``r``m`` ``s``t``a``t``i``s``t``i``c``s``)``,`` ``p``l``e``a``s``e`` ``u``s``e`` ``t``h``e`` ``b``e``l``o``w`` ``o``p``t``i``o``n``.``
- ``A`` ``l``i``s``t`` ``o``f`` ``s``t``r``i``n``g``s``,`` ``e``a``c``h`` ``a`` ``r``e``g``e``x`` ``s``c``o``p``e`` ``p``r``o``v``i``d``e``d`` ``t``o`` ``t``f``.``c``o``m``p``a``t``.``v``1``.``g``e``t``_``c``o``l``l``e``c``t``i``o``n`` ``w``i``t``h`` ``G``L``O``B``A``L``_``V``A``R``I``A``B``L``E``S`` ``(``p``l``e``a``s``e`` ``s``e``e`` ``t``f``.``c``o``m``p``a``t``.``v``1``.``g``e``t``_``c``o``l``l``e``c``t``i``o``n``)``.`` ``F``o``r`` ``b``a``c``k``w``a``r``d``s`` ``c``o``m``p``a``t``i``b``i``l``i``t``y`` ``r``e``a``s``o``n``s``,`` ``t``h``i``s`` ``i``s`` ``s``e``p``a``r``a``t``e`` ``f``r``o``m`` ``t``h``e`` ``s``i``n``g``l``e``-``s``t``r``i``n``g`` ``a``r``g``u``m``e``n``t`` ``t``y``p``e``.``
- A list of `Variable`s to warm-start. If you do not have access to the `Variable` objects at the call site, please use the above option.
- `None`, in which case only TRAINABLE variables specified in `var_name_to_vocab_info` will be warm-started.
- `var_name_to_vocab_info`: [Optional] Dict of variable names (strings) to `tf.estimator.VocabInfo`. The variable names should be "full" variables, not the names of the partitions. If not explicitly provided, the variable is assumed to have no (changes to) vocabulary.
- `var_name_to_prev_var_name`: [Optional] Dict of variable names (strings) to name of the previously-trained variable in `ckpt_to_initialize_from`. If not explicitly provided, the name of the variable is assumed to be same between previous checkpoint and current model. Note that this has no effect on the set of variables that is warm-started, and only controls name mapping (use `vars_to_warm_start` for controlling what variables to warm-start).
## __new__
View source

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
### ckpt_to_initialize_from
### vars_to_warm_start
### var_name_to_vocab_info
### var_name_to_prev_var_name
