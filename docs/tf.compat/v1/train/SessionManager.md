## Class SessionManager
Training helper that restores from checkpoint and creates session.
This class is a small wrapper that takes care of session creation and checkpoint recovery. It also provides functions that to facilitate coordination among multiple training threads or processes.
- ``C``h``e``c``k``p``o``i``n``t``i``n``g`` ``t``r``a``i``n``e``d`` ``v``a``r``i``a``b``l``e``s`` ``a``s`` ``t``h``e`` ``t``r``a``i``n``i``n``g`` ``p``r``o``g``r``e``s``s``e``s``.``
- ``I``n``i``t``i``a``l``i``z``i``n``g`` ``v``a``r``i``a``b``l``e``s`` ``o``n`` ``s``t``a``r``t``u``p``,`` ``r``e``s``t``o``r``i``n``g`` ``t``h``e``m`` ``f``r``o``m`` ``t``h``e`` ``m``o``s``t`` ``r``e``c``e``n``t`` ``c``h``e``c``k``p``o``i``n``t`` ``a``f``t``e``r`` ``a`` ``c``r``a``s``h``,`` ``o``r`` ``w``a``i``t`` ``f``o``r`` ``c``h``e``c``k``p``o``i``n``t``s`` ``t``o`` ``b``e``c``o``m``e`` ``a``v``a``i``l``a``b``l``e``.``
### Usage:

```
 with tf.Graph().as_default():
   ...add operations to the graph...
  # Create a SessionManager that will checkpoint the model in '/tmp/mydir'.
  sm = SessionManager()
  sess = sm.prepare_session(master, init_op, saver, checkpoint_dir)
  # Use the session to train the graph.
  while True:
    sess.run(<my_train_op>)
```
