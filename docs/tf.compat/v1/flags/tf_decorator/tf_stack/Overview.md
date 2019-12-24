Functions used to extract and analyze stacks.  Faster than Python libs.

## Class 
[ `class CurrentModuleFilter` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack/CurrentModuleFilter): Filters stack frames from the module where this is used (best effort).

[ `class FileAndLine` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack/FileAndLine): FileAndLine(file, line)

[ `class StackTraceFilter` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack/StackTraceFilter): Allows filtering traceback information by removing superfluous frames.

[ `class StackTraceMapper` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack/StackTraceMapper): Allows remapping traceback information to different source code.

[ `class StackTraceTransform` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack/StackTraceTransform): Base class for stack trace transformation functions.

## 功能
[ `convert_stack(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack/convert_stack): Converts a stack extracted using extract_stack() to a traceback stack.

[ `extract_stack(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack/extract_stack): A lightweight, extensible re-implementation of traceback.extract_stack.

[ `extract_stack_file_and_line(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/tf_decorator/tf_stack/extract_stack_file_and_line): A version of extract_stack that only returns filenames and line numbers.

## 其他成员
-  `EMPTY_FROZEN_MAP`  
-  `EMPTY_FROZEN_SET`  
-  `TB_CODEDICT = 3`  
-  `TB_FILENAME = 0`  
-  `TB_FUNCNAME = 2`  
-  `TB_LINENO = 1`  
