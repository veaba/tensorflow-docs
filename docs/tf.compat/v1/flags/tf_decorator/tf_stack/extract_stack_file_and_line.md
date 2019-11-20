[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/tf_stack.py#L207-L235)  
---  
  
A version of extract_stack that only returns filenames and line numbers.

### Aliases:

  * [`tf.compat.v1.app.flags.tf_decorator.tf_stack.extract_stack_file_and_line`](/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack/extract_stack_file_and_line)

    
    
    tf.compat.v1.flags.tf_decorator.tf_stack.extract_stack_file_and_line(max_length=1000)
    

Callers often only require filenames and line numbers, and do not need the
additional information gathered by extract_stack, as they never call
convert_stack.

As a further optimisation, we allow users to specify a limit on the number of
frames examined.

#### Args:

  * **`max_length`** : The maximum length of stack to extract.

#### Returns:

A list of FileAndLine objects corresponding to the call stack of the current
thread.

