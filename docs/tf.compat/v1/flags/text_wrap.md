Wraps a given text to a maximum line length and returns it.

### Aliases:

  * [`tf.compat.v1.app.flags.text_wrap`](/api_docs/python/tf/compat/v1/flags/text_wrap)

    
    
    tf.compat.v1.flags.text_wrap(
        text,
        length=None,
        indent='',
        firstline_indent=None
    )
    

It turns lines that only contain whitespace into empty lines, keeps new lines,
and expands tabs using 4 spaces.

#### Args:

  * **`text`** : str, text to wrap.
  * **`length`** : int, maximum length of a line, includes indentation. If this is None then use get_help_width()
  * **`indent`** : str, indent for all but first line.
  * **`firstline_indent`** : str, indent for first line; if None, fall back to indent.

#### Returns:

str, the wrapped text.

#### Raises:

  * **`ValueError`** : Raised if indent or firstline_indent not shorter than length.

