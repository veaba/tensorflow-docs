Returns the default session for the current thread.

```
 tf.compat.v1.get_default_session() 
```

The returned  `Session`  will be the innermost session on which a `Session`  or  `Session.as_default()`  context has been entered.

NOTE: The default session is a property of the current thread. If youcreate a new thread, and wish to use the default session in thatthread, you must explicitly add a  `with sess.as_default():`  in thatthread's function.

#### Returns:
The default  `Session`  being used in the current thread.

