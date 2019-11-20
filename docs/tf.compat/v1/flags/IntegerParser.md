## Class `IntegerParser`

Parser of an integer value.

### Aliases:

  * Class [`tf.compat.v1.app.flags.IntegerParser`](/api_docs/python/tf/compat/v1/flags/IntegerParser)

Parsed value may be bounded to a given upper and lower bound.

## `__init__`

    
    
    __init__(
        lower_bound=None,
        upper_bound=None
    )
    

Initialize self. See help(type(self)) for accurate signature.

## Methods

### `convert`

    
    
    convert(argument)
    

Returns the int value of argument.

### `flag_type`

    
    
    flag_type()
    

See base class.

### `is_outside_bounds`

    
    
    is_outside_bounds(val)
    

Returns whether the value is outside the bounds or not.

### `parse`

    
    
    parse(argument)
    

See base class.

## Class Members

  * `number_article = 'an'`
  * `number_name = 'integer'`
  * `syntactic_help = 'an integer'`

