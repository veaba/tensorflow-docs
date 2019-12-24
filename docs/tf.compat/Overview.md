与Python2和Python3兼容的函数。

## 转换例程
In addition to the functions below,  `as_str`  converts an object to a  `str` .

## 类型
兼容性模块还提供以下类型：

-  `bytes_or_text_types` 
-  `complex_types` 
-  `integral_types` 
-  `real_types` 


## 模块
[ `v1` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1) module: Bring in all of the public TensorFlow interface into this module.

[ `v2` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v2) module: Bring in all of the public TensorFlow interface into this module.

## 功能
[ `as_bytes(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/as_bytes): Converts  `bytearray` ,  `bytes` , or unicode python input types to  `bytes` .

[ `as_str(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/as_text): Converts any string-like python input types to unicode.

[ `as_str_any(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/as_str_any): Converts input to  `str`  type.

[ `as_text(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/as_text): Converts any string-like python input types to unicode.

[ `dimension_at_index(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/dimension_at_index): Compatibility utility required to allow for both V1 and V2 behavior in TF.

[ `dimension_value(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/dimension_value): Compatibility utility required to allow for both V1 and V2 behavior in TF.

[ `forward_compatibility_horizon(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/forward_compatibility_horizon): Context manager for testing forward compatibility of generated graphs.

[ `forward_compatible(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/forward_compatible): Return true if the forward compatibility window has expired.

[ `path_to_str(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/path_to_str): Converts input which is a  `PathLike`  object to  `str`  type.

## 其他成员
-  `bytes_or_text_types`  
-  `complex_types`  
-  `integral_types`  
-  `real_types`  
