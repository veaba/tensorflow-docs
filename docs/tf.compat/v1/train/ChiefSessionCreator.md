## Class ChiefSessionCreator
Creates a tf.compat.v1.Session for a chief.
Inherits From: `SessionCreator`
## __init__
View source

```
 __init__(
    scaffold=None,
    master='',
    config=None,
    checkpoint_dir=None,
    checkpoint_filename_with_path=None
)
```
Initializes a chief session creator.
#### Args:
- `scaffold`: A `Scaffold` used for gathering or building supportive ops. If not specified a default one is created. It's used to finalize the graph.
- `master`: `String` representation of the TensorFlow `master` to use.
- `config`: `ConfigProto` proto used to `config`ure the session.
- `checkpoint_dir`: A string. Optional path to a directory where to restore variables.
- `checkpoint_filename_with_path`: Full file name path to the checkpoint file.
## Methods
### create_session
View source

```
 create_session()
```
