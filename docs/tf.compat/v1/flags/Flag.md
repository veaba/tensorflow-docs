

## Class  `Flag` 
Information about a command-line flag.

'Flag' objects define the following fields:  .name - the name for this flag;  .default - the default value for this flag;  .default_unparsed - the unparsed default value for this flag.  .default_as_str - default value as repr'd string, e.g., "'true'" (or None);  .value - the most recent parsed value of this flag; set by parse();  .help - a help string or None if no help is available;  .short_name - the single letter alias for this flag (or None);  .boolean - if 'true', this flag does not accept arguments;  .present - true if this flag was parsed from command line flags;  .parser - an ArgumentParser object;  .serializer - an ArgumentSerializer object;  .allow_override - the flag may be redefined without raising an error, and                    newly defined flag overrides the old one.  .allow_override_cpp - use the flag from C++ if available; the flag                        definition is replaced by the C++ flag after init;  .allow_hide_cpp - use the Python flag despite having a C++ flag with                    the same name (ignore the C++ flag);  .using_default_value - the flag value has not been set by user;  .allow_overwrite - the flag may be parsed more than once without raising                     an error, the last set value will be used;  .allow_using_method_names - whether this flag can be defined even if it has                              a name that conflicts with a FlagValues method.

The only public method of a 'Flag' object is parse(), but it istypically only called by a 'FlagValues' object.  The parse() method isa thin wrapper around the 'ArgumentParser' parse() method.  The parsedvalue is saved in .value, and the .present attribute is updated.  Ifthis flag was already present, an Error is raised.

parse() is also called during **init**  to parse the default value andinitialize the .value attribute.  This enables other python modules tosafely use flags even if the **main**  module neglects to parse thecommand line arguments.  The .present attribute is cleared after**init**  parsing.  If the default value is set to None, then the**init**  parsing step is skipped and the .value attribute isinitialized to None.


**Note:**  The default value is also presented to the user in the helpstring, so it is important that it be a legal value for this flag.


##  `__init__` 


```
 __init__(
    parser,
    serializer,
    name,
    default,
    help_string,
    short_name=None,
    boolean=False,
    allow_override=False,
    allow_override_cpp=False,
    allow_hide_cpp=False,
    allow_overwrite=True,
    allow_using_method_names=False
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 属性


###  `value` 


## 方法


###  `__eq__` 


```
 __eq__(other)
 
```

Return self==value.

###  `__ge__` 


```
 __ge__(
    other,
    NotImplemented=NotImplemented
)
 
```

Return a >= b.  Computed by @total_ordering from (not a < b).

###  `__gt__` 


```
 __gt__(
    other,
    NotImplemented=NotImplemented
)
 
```

Return a > b.  Computed by @total_ordering from (not a < b) and (a != b).

###  `__le__` 


```
 __le__(
    other,
    NotImplemented=NotImplemented
)
 
```

Return a <= b.  Computed by @total_ordering from (a < b) or (a == b).

###  `__lt__` 


```
 __lt__(other)
 
```

返回self<value。

###  `flag_type` 


```
 flag_type()
 
```

返回描述标志类型的str。

注意：we use strings, and not the types.*Type constants becauseour flags can have more exotic types, e.g., 'comma separated listof strings', 'whitespace separated list of strings', etc.

###  `parse` 


```
 parse(argument)
 
```

分析字符串并设置标志值。

#### 参数：
- **`argument`** : str or the correct flag value type, argument to be parsed.


###  `serialize` 


```
 serialize()
 
```

序列化标志。

###  `unparse` 


```
 unparse()
 
```

