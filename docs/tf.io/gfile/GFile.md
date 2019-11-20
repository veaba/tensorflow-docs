[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/io/gfile/GFile) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/gfile.py#L41-L52)  
---|---  
  
## Class `GFile`

File I/O wrappers without thread locking.

### Aliases:

  * Class [`tf.compat.v1.gfile.GFile`](/api_docs/python/tf/io/gfile/GFile)
  * Class [`tf.compat.v1.gfile.Open`](/api_docs/python/tf/io/gfile/GFile)
  * Class [`tf.compat.v1.io.gfile.GFile`](/api_docs/python/tf/io/gfile/GFile)
  * Class [`tf.compat.v2.io.gfile.GFile`](/api_docs/python/tf/io/gfile/GFile)

Note, that this is somewhat like builtin Python file I/O, but there are
semantic differences to make it more efficient for some backing filesystems.
For example, a write mode file will not be opened until the first write call
(to minimize RPC invocations in network filesystems).

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/gfile.py#L51-L52)

    
    
    __init__(
        name,
        mode='r'
    )
    

Initialize self. See help(type(self)) for accurate signature.

## Properties

### `mode`

Returns the mode in which the file was opened.

### `name`

Returns the file name.

## Methods

### `__enter__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L202-L204)

    
    
    __enter__()
    

Make usable with "with" statement.

### `__exit__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L206-L208)

    
    
    __exit__(
        unused_type,
        unused_value,
        unused_traceback
    )
    

Make usable with "with" statement.

### `__iter__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L210-L211)

    
    
    __iter__()
    

### `close`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L234-L241)

    
    
    close()
    

Closes FileIO. Should be called for the WritableFile to be flushed.

### `flush`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L222-L232)

    
    
    flush()
    

Flushes the Writable file.

This only ensures that the data has made its way out of the process without
any guarantees on whether it's written to disk. This means that the data would
survive an application crash but not necessarily an OS crash.

### `next`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L213-L217)

    
    
    next()
    

### `read`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L110-L128)

    
    
    read(n=-1)
    

Returns the contents of a file as a string.

Starts reading from current position in file.

#### Args:

  * **`n`** : Read 'n' bytes if n != -1. If n = -1, reads to end of file.

#### Returns:

'n' bytes of the file (or whole file) in bytes mode or 'n' bytes of the string
if in string (regular) mode.

### `readline`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L176-L179)

    
    
    readline()
    

Reads the next line from the file. Leaves the '\n' at the end.

### `readlines`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L181-L190)

    
    
    readlines()
    

Returns all lines from the file in a list.

### `seek`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L130-L174)

    
    
    seek(
        offset=None,
        whence=0,
        position=None
    )
    

Seeks to the offset in the file. (deprecated arguments)

**Warning:** SOME ARGUMENTS ARE DEPRECATED: `(position)`. They will be removed
in a future version. Instructions for updating: position is deprecated in
favor of the offset argument.

#### Args:

  * **`offset`** : The byte count relative to the whence argument.
  * **`whence`** : Valid values for whence are: 0: start of the file (default) 1: relative to the current position of the file 2: relative to the end of file. offset is usually negative.

### `seekable`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L243-L245)

    
    
    seekable()
    

Returns True as FileIO supports random access ops of seek()/tell()

### `size`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L100-L102)

    
    
    size()
    

Returns the size of the file.

### `tell`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L192-L200)

    
    
    tell()
    

Returns the current position in the file.

### `write`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/lib/io/file_io.py#L104-L108)

    
    
    write(file_content)
    

Writes file_content to the file. Appends to the end of the file.

