

## Class  `EnumParser` 
Parser of a string enum value (a string value from a given set).

Inherits From: [ `ArgumentParser` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/ArgumentParser)

##  `__init__` 


```
 __init__(
    enum_values,
    case_sensitive=True
)
 
```

Initializes EnumParser.

#### Args:
- **`enum_values`** : [str], a non-empty list of string values in the enum.
- **`case_sensitive`** : bool, whether or not the enum is to be case-sensitive.


#### Raises:
- **`ValueError`** : When enum_values is empty.


## Methods


###  `flag_type` 


```
 flag_type()
 
```

See base class.

###  `parse` 


```
 parse(argument)
 
```

Determines validity of argument and returns the correct element of enum.

#### Args:
- **`argument`** : str, the supplied flag value.


#### Returns:
The first matching element from enum_values.

#### Raises:
- **`ValueError`** : Raised when argument didn't match anything in enum.
