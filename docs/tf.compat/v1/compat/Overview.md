Functions for Python 2 vs. 3 compatibility.
## Conversion routines
In addition to the functions below, as_str converts an object to a str.
## Types
The compatibility module also provides the following types:
- bytes_or_text_types
- complex_types
- integral_types
- real_types
## Functions
[as_bytes(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/as_bytes): Converts bytearray, bytes, or unicode python input types to bytes.

[as_str(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/as_text): Converts any string-like python input types to unicode.

[as_str_any(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/as_str_any): Converts input to str type.

[as_text(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/as_text): Converts any string-like python input types to unicode.

[dimension_at_index(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/dimension_at_index): Compatibility utility required to allow for both V1 and V2 behavior in TF.

[dimension_value(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/dimension_value): Compatibility utility required to allow for both V1 and V2 behavior in TF.

[forward_compatibility_horizon(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/forward_compatibility_horizon): Context manager for testing forward compatibility of generated graphs.

[forward_compatible(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/forward_compatible): Return true if the forward compatibility window has expired.

[path_to_str(...)](https://tensorflow.google.cn/api_docs/python/tf/compat/path_to_str): Converts input which is a PathLike object to str type.

## Other Members
- bytes_or_text_types
- complex_types
- integral_types
- real_types
