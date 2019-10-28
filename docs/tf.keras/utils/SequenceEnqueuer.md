## Class SequenceEnqueuer
Base class to enqueue inputs.
### Aliases:
- Class `tf.compat.v1.keras.utils.SequenceEnqueuer`
- Class `tf.compat.v2.keras.utils.SequenceEnqueuer`
The task of an Enqueuer is to use parallelism to speed up preprocessing. This is done with processes or threads.
#### Example:

```
     enqueuer = SequenceEnqueuer(...)
    enqueuer.start()
    datas = enqueuer.get()
    for data in datas:
        # Use the inputs; training, evaluating, predicting.
        # ... stop sometime.
    enqueuer.close()
```
