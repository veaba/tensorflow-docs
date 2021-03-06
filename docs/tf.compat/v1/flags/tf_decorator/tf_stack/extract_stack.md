A lightweight, extensible re-implementation of traceback.extract_stack.

```
 tf.compat.v1.flags.tf_decorator.tf_stack.extract_stack(limit=None) 
```

NOTE(mrry): traceback.extract_stack eagerly retrieves the line of code for    each stack frame using linecache, which results in an abundance of stat()    calls. This implementation does not retrieve the code, and any consumer    should apply _convert_stack to the result to obtain a traceback that can    be formatted etc. using traceback methods.

#### 参数：
- **`limit`** : A limit on the number of frames to return.


#### 返回：
A list of 5-tuples    (filename, lineno, name, frame_globals, func_start_lineno)corresponding to the call stack of the current thread.  The returned tupleshave the innermost stack frame at the end, unlike the Python inspectmodule's stack() function.

