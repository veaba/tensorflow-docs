[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/basic_loops.py#L24-L65)  
---  
  
Basic loop to train a model.

    
    
    tf.compat.v1.train.basic_train_loop(
        supervisor,
        train_step_fn,
        args=None,
        kwargs=None,
        master=''
    )
    

Calls `train_step_fn` in a loop to train a model. The function is called as:

    
    
    train_step_fn(session, *args, **kwargs)
    

It is passed a
[`tf.compat.v1.Session`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session)
in addition to `args` and `kwargs`. The function typically runs one training
step in the session.

#### Args:

  * **`supervisor`** : [`tf.compat.v1.train.Supervisor`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Supervisor) to run the training services.
  * **`train_step_fn`** : Callable to execute one training step. Called repeatedly as `train_step_fn(session, *args **kwargs)`.
  * **`args`** : Optional positional arguments passed to `train_step_fn`.
  * **`kwargs`** : Optional keyword arguments passed to `train_step_fn`.
  * **`master`** : Master to use to create the training session. Defaults to `""` which causes the session to be created in the local process.

