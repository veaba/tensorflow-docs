## Class SummarySaverHook
Saves summaries every N steps.
Inherits From: `SessionRunHook`
### Aliases:
- Class `tf.compat.v1.estimator.SummarySaverHook`
- Class `tf.compat.v1.train.SummarySaverHook`
- Class `tf.compat.v2.estimator.SummarySaverHook`
## __init__
View source

```
 __init__(
    save_steps=None,
    save_secs=None,
    output_dir=None,
    summary_writer=None,
    scaffold=None,
    summary_op=None
)
```
Initializes a `SummarySaverHook`.
#### Args:
- `save_steps`: `int`, save summaries every N steps. Exactly one of `save_secs` and `save_steps` should be set.
- `save_secs`: `int`, save summaries every N seconds.
- `output_dir`: `string`, the directory to save the summaries to. Only used if no `summary_writer` is supplied.
- `summary_writer`: `SummaryWriter`. If `None` and an `output_dir` was passed, one will be created accordingly.
- `scaffold`: `Scaffold` to get summary_op if it's not provided.
- `summary_op`: `Tensor` of type `string` containing the serialized `Summary` protocol buffer or a list of `Tensor`. They are most likely an output by TF summary methods like `tf.compat.v1.summary.scalar` or `tf.compat.v1.summary.merge_all`. It can be passed in as one tensor; if more than one, they must be passed in as a list.
#### Raises:
- `ValueError`: Exactly one of scaffold or summary_op should be set.
## Methods
### after_create_session
View source

```
 after_create_session(
    session,
    coord
)
```
Called when new TensorFlow session is created.
This is called to signal the hooks that a new session has been created. This has two essential differences with the situation in which `begin` is called:
- ``W``h``e``n`` ``t``h``i``s`` ``i``s`` ``c``a``l``l``e``d``,`` ``t``h``e`` ``g``r``a``p``h`` ``i``s`` ``f``i``n``a``l``i``z``e``d`` ``a``n``d`` ``o``p``s`` ``c``a``n`` ``n``o`` ``l``o``n``g``e``r`` ``b``e`` ``a``d``d``e``d`` ``t``o`` ``t``h``e`` ``g``r``a``p``h``.``
- ``T``h``i``s`` ``m``e``t``h``o``d`` ``w``i``l``l`` ``a``l``s``o`` ``b``e`` ``c``a``l``l``e``d`` ``a``s`` ``a`` ``r``e``s``u``l``t`` ``o``f`` ``r``e``c``o``v``e``r``i``n``g`` ``a`` ``w``r``a``p``p``e``d`` ``s``e``s``s``i``o``n``,`` ``n``o``t`` ``o``n``l``y`` ``a``t`` ``t``h``e`` ``b``e``g``i``n``n``i``n``g`` ``o``f`` ``t``h``e`` ``o``v``e``r``a``l``l`` ``s``e``s``s``i``o``n``.``
#### Args:
- `session`: A TensorFlow Session that has been created.
- `coord`: A Coordinator object which keeps track of all threads.
### after_run
View source

```
 after_run(
    run_context,
    run_values
)
```
Called after each call to run().
