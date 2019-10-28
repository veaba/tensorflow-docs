## Class TFRecordOptions
Options used for manipulating TFRecord files.
### Aliases:
- Class `tf.compat.v1.io.TFRecordOptions`
- Class `tf.compat.v1.python_io.TFRecordOptions`
- Class `tf.compat.v2.io.TFRecordOptions`
## __init__
View source

```
 __init__(
    compression_type=None,
    flush_mode=None,
    input_buffer_size=None,
    output_buffer_size=None,
    window_bits=None,
    compression_level=None,
    compression_method=None,
    mem_level=None,
    compression_strategy=None
)
```
Creates a `TFRecordOptions` instance.
Options only effect TFRecordWriter when compression_type is not `None`. Documentation, details, and defaults can be found in `zlib_compression_options.h` and in the zlib manual. Leaving an option as `None` allows C++ to set a reasonable default.
#### Args:
- `compression_type`: `"GZIP"`, `"ZLIB"`, or `""` (no compression).
- `flush_mode`: flush mode or `None`, Default: Z_NO_FLUSH.
- `input_buffer_size`: int or `None`.
- `output_buffer_size`: int or `None`.
- `window_bits`: int or `None`.
- `compression_level`: 0 to 9, or `None`.
- `compression_method`: compression method or `None`.
- `mem_level`: 1 to 9, or `None`.
- `compression_strategy`: strategy or `None`. Default: Z_DEFAULT_STRATEGY.
#### Returns:
A `TFRecordOptions` object.
#### Raises:
- `ValueError`: If compression_type is invalid.
## Methods
### get_compression_type_string
View source

```
 @classmethod
get_compression_type_string(
    cls,
    options
)
```
Convert various option types to a unified string.
#### Args:
- `options`: `TFRecordOption`, `TFRecordCompressionType`, or string.
#### Returns:
Compression type as string (e.g. `'ZLIB'`, `'GZIP'`, or `''`).
#### Raises:
- `ValueError`: If compression_type is invalid.
## Class Members
- `compression_type_map`
