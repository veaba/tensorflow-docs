Converts a stack extracted using extract_stack() to a traceback stack.

```
 tf.compat.v1.flags.tf_decorator.tf_stack.convert_stack(    stack,    include_func_start_lineno=False) 
```

#### 参数：
- **`stack`** : A list of n 5-tuples,(filename, lineno, name, frame_globals, func_start_lineno).
- **`include_func_start_lineno`** : True if function start line number should beincluded as the 5th entry in return tuples.


#### 返回：
A tuple of n 4-tuples or 5-tuples(filename, lineno, name, code, [optional: func_start_lineno]), where thecode tuple element is calculated from the corresponding elements of theinput tuple.

