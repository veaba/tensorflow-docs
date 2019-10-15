
Basic loop to train a model.

```
 tf.compat.v1.train.basic_train_loop(
    supervisor,
    train_step_fn,
    args=None,
    kwargs=None,
    master=''
)
```

Calls train_step_fn in a loop to train a model. The function is called as:

```
 train_step_fn(session, *args, **kwargs)
```
[tf.compat.v1.Session](https://www.tensorflow.org/api_docs/python/tf/compat/v1/Session)It is passed a  in addition to args and kwargs. The function typically runs one training step in the session.

#### Args:
- `supervisor`: `tf.compat.v1.train.Supervisor` to run the training services.
