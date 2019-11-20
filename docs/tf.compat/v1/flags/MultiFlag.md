## Class `MultiFlag`

A flag that can appear multiple time on the command-line.

Inherits From:
[`Flag`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/Flag)

### Aliases:

  * Class [`tf.compat.v1.app.flags.MultiFlag`](/api_docs/python/tf/compat/v1/flags/MultiFlag)

The value of such a flag is a list that contains the individual values from
all the appearances of that flag on the command-line.

See the **doc** for Flag for most behavior of this class. Only differences in
behavior are described here:

  * The default value may be either a single value or an iterable of values. A single value is transformed into a single-item list of that value.

  * The value of the flag is always a list, even if the option was only supplied once, and even if the default value is a single value

## `__init__`

    
    
    __init__(
        *args,
        **kwargs
    )
    

Initialize self. See help(type(self)) for accurate signature.

## Properties

### `value`

## Methods

### `__eq__`

    
    
    __eq__(other)
    

Return self==value.

### `__ge__`

    
    
    __ge__(
        other,
        NotImplemented=NotImplemented
    )
    

Return a >= b. Computed by @total_ordering from (not a < b).

### `__gt__`

    
    
    __gt__(
        other,
        NotImplemented=NotImplemented
    )
    

Return a > b. Computed by @total_ordering from (not a < b) and (a != b).

### `__le__`

    
    
    __le__(
        other,
        NotImplemented=NotImplemented
    )
    

Return a <= b. Computed by @total_ordering from (a < b) or (a == b).

### `__lt__`

    
    
    __lt__(other)
    

Return self<value.

### `flag_type`

    
    
    flag_type()
    

See base class.

### `parse`

    
    
    parse(arguments)
    

Parses one or more arguments with the installed parser.

#### Args:

  * **`arguments`** : a single argument or a list of arguments (typically a list of default values); a single argument is converted internally into a list containing one item.

### `serialize`

    
    
    serialize()
    

Serializes the flag.

### `unparse`

    
    
    unparse()
    

