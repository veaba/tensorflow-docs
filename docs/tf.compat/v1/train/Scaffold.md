## Class Scaffold
Structure to create or gather pieces commonly needed to train a model.
### Used in the guide:
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
When you build a model for training you usually need ops to initialize variables, a `Saver` to checkpoint them, an op to collect summaries for the visualizer, and so on.
Various libraries built on top of the core TensorFlow library take care of creating some or all of these pieces and storing them in well known collections in the graph. The `Scaffold` class helps pick these pieces from the graph collections, creating and adding them to the collections if needed.
