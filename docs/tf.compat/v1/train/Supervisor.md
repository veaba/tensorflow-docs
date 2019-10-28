## Class Supervisor
A training helper that checkpoints models and computes summaries.
This class is deprecated. Please use `tf.compat.v1.train.MonitoredTrainingSession` instead.
The Supervisor is a small wrapper around a `Coordinator`, a `Saver`, and a `SessionManager` that takes care of common needs of TensorFlow training programs.
#### Use for a single program

```
 with tf.Graph().as_default():
  ...add operations to the graph...
  # Create a Supervisor that will checkpoint the model in '/tmp/mydir'.
  sv = Supervisor(logdir='/tmp/mydir')
  # Get a TensorFlow session managed by the supervisor.
  with sv.managed_session(FLAGS.master) as sess:
    # Use the session to train the graph.
    while not sv.should_stop():
      sess.run(<my_train_op>)
```
