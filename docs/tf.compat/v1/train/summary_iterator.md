
An iterator for reading Event protocol buffers from an event file.

```
 tf.compat.v1.train.summary_iterator(path)
```

You can use this function to read events written to an event file. It returns a Python iterator that yields Event protocol buffers.

Example: Print the contents of an events file.

```
 for e in tf.compat.v1.train.summary_iterator(path to events file):
    print(e)
```

Example: Print selected summary values.

```
 # This example supposes that the events file contains summaries with a
# summary value tag 'loss'.  These could have been added by calling
# `add_summary()`, passing the output of a scalar summary op created with
# with: `tf.compat.v1.summary.scalar('loss', loss_tensor)`.
for e in tf.compat.v1.train.summary_iterator(path to events file):
    for v in e.summary.value:
        if v.tag == 'loss':
            print(v.simple_value)
```
[Event](https://www.tensorflow.org/code/tensorflow/core/util/event.proto)See the protocol buffer definitions of  and Summary for more information about their attributes.

#### Args:
- `path`: The `path` to an event file created by a `SummaryWriter`.
#### Yields:

Event protocol buffers.
