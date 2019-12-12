

## Class  `FlagValues` 
Registry of 'Flag' objects.

A 'FlagValues' can then scan command line arguments, passing flagarguments through to the 'Flag' objects that it owns.  It alsoprovides easy access to the flag values.  Typically only one'FlagValues' object is needed by an application: flags.FLAGS

This class is heavily overloaded:

'Flag' objects are registered via **setitem** :     FLAGS['longname'] = x   # register a new flag

The .value attribute of the registered 'Flag' objects can be accessedas attributes of this 'FlagValues' object, through **getattr** .  Boththe long and short name of the original 'Flag' objects can be used toaccess its value:     FLAGS.longname          # parsed flag value     FLAGS.x                 # parsed flag value (short name)

Command line arguments are scanned and passed to the registered 'Flag'objects through the **call**  method.  Unparsed arguments, includingargv[0](/api_docs/python/tf/compat/v1/flags/e.g.%20the%20program%20name) are returned.     argv = FLAGS(sys.argv)  # scan command line arguments

The original registered Flag objects can be retrieved through the useof the dictionary-like operator, **getitem** :     x = FLAGS['longname']   # access the registered Flag object

The str() operator of a 'FlagValues' object provides help for all ofthe registered 'Flag' objects.

##  `__init__` 


```
 __init__()
 
```

Initialize self.  See help(type(self)) for accurate signature.

## Methods


###  `__call__` 


```
 __call__(
    argv,
    known_only=False
)
 
```

Parses flags from argv; stores parsed flags into this FlagValues object.

All unparsed arguments are returned.

#### Args:
- **`argv`** : a tuple/list of strings.
- **`known_only`** : bool, if True, parse and remove known flags; return the restuntouched. Unknown flags specified by --undefok are not returned.


#### Returns:
The list of arguments not parsed as options, including argv[0].

#### Raises:
- **`Error`** : Raised on any parsing error.
- **`TypeError`** : Raised on passing wrong type of arguments.
- **`ValueError`** : Raised on flag value parsing error.


###  `__contains__` 


```
 __contains__(name)
 
```

Returns True if name is a value (flag) in the dict.

###  `__getitem__` 


```
 __getitem__(name)
 
```

Returns the Flag object for the flag --name.

###  `__iter__` 


```
 __iter__()
 
```

###  `__len__` 


```
 __len__()
 
```

###  `append_flag_values` 


```
 append_flag_values(flag_values)
 
```

Appends flags registered in another FlagValues instance.

#### Args:
- **`flag_values`** : FlagValues, the FlagValues instance from which to copy flags.


###  `append_flags_into_file` 


```
 append_flags_into_file(filename)
 
```

Appends all flags assignments from this FlagInfo object to a file.

Output will be in the format of a flagfile.

NOTE: MUST mirror the behavior of the C++ AppendFlagsIntoFilefrom https://github.com/gflags/gflags.

#### Args:
- **`filename`** : str, name of the file.


###  `find_module_defining_flag` 


```
 find_module_defining_flag(
    flagname,
    default=None
)
 
```

Return the name of the module defining this flag, or default.

#### Args:
- **`flagname`** : str, name of the flag to lookup.
- **`default`** : Value to return if flagname is not defined. Defaultsto None.


#### Returns:
The name of the module which registered the flag with this name.If no such module exists (i.e. no flag with this name exists),we return default.

###  `find_module_id_defining_flag` 


```
 find_module_id_defining_flag(
    flagname,
    default=None
)
 
```

Return the ID of the module defining this flag, or default.

#### Args:
- **`flagname`** : str, name of the flag to lookup.
- **`default`** : Value to return if flagname is not defined. Defaultsto None.


#### Returns:
The ID of the module which registered the flag with this name.If no such module exists (i.e. no flag with this name exists),we return default.

###  `flag_values_dict` 


```
 flag_values_dict()
 
```

Returns a dictionary that maps flag names to flag values.

###  `flags_by_module_dict` 


```
 flags_by_module_dict()
 
```

Returns the dictionary of module_name -> list of defined flags.

#### Returns:
A dictionary.  Its keys are module names (strings).  Its valuesare lists of Flag objects.

###  `flags_by_module_id_dict` 


```
 flags_by_module_id_dict()
 
```

Returns the dictionary of module_id -> list of defined flags.

#### Returns:
A dictionary.  Its keys are module IDs (ints).  Its valuesare lists of Flag objects.

###  `flags_into_string` 


```
 flags_into_string()
 
```

Returns a string with the flags assignments from this FlagValues object.

This function ignores flags whose value is None.  Each flagassignment is separated by a newline.

NOTE: MUST mirror the behavior of the C++ CommandlineFlagsIntoStringfrom https://github.com/gflags/gflags.

#### Returns:
str, the string with the flags assignments from this FlagValues object.The flags are ordered by (module_name, flag_name).

###  `get_flag_value` 


```
 get_flag_value(
    name,
    default
)
 
```

Returns the value of a flag (if not None) or a default value.

#### Args:
- **`name`** : str, the name of a flag.
- **`default`** : Default value to use if the flag value is None.


#### Returns:
Requested flag value or default.

###  `get_help` 


```
 get_help(
    prefix='',
    include_special_flags=True
)
 
```

Returns a help string for all known flags.

#### Args:
- **`prefix`** : str, per-line output prefix.
- **`include_special_flags`** : bool, whether to include description ofSPECIAL_FLAGS, i.e. --flagfile and --undefok.


#### Returns:
str, formatted help message.

###  `get_key_flags_for_module` 


```
 get_key_flags_for_module(module)
 
```

Returns the list of key flags for a module.

#### Args:
- **`module`** : module|str, the module to get key flags from.


#### Returns:
[Flag], a new list of Flag instances.  Caller may update this list as

- **`desired`** : none of those changes will affect the internals of thisFlagValue instance.


###  `is_gnu_getopt` 


```
 is_gnu_getopt()
 
```

###  `is_parsed` 


```
 is_parsed()
 
```

Returns whether flags were parsed.

###  `key_flags_by_module_dict` 


```
 key_flags_by_module_dict()
 
```

Returns the dictionary of module_name -> list of key flags.

#### Returns:
A dictionary.  Its keys are module names (strings).  Its valuesare lists of Flag objects.

###  `main_module_help` 


```
 main_module_help()
 
```

Describes the key flags of the main module.

#### Returns:
str, describing the key flags of the main module.

###  `mark_as_parsed` 


```
 mark_as_parsed()
 
```

Explicitly marks flags as parsed.

Use this when the caller knows that this FlagValues has been parsed as ifa **call** () invocation has happened.  This is only a public method foruse by things like appcommands which do additional command like parsing.

###  `module_help` 


```
 module_help(module)
 
```

Describes the key flags of a module.

#### Args:
- **`module`** : module|str, the module to describe the key flags for.


#### Returns:
str, describing the key flags of a module.

###  `read_flags_from_files` 


```
 read_flags_from_files(
    argv,
    force_gnu=True
)
 
```

Processes command line args, but also allow args to be read from file.

#### Args:
- **`argv`** : [str], a list of strings, usually sys.argv[1:], which may containone or more flagfile directives of the form --flagfile="./filename".Note that the name of the program (sys.argv[0]) should be omitted.
- **`force_gnu`** : bool, if False, --flagfile parsing obeys theFLAGS.is_gnu_getopt() value. If True, ignore the value and alwaysfollow gnu_getopt semantics.


#### Returns:
A new list which has the original list combined with what we readfrom any flagfile(s).

#### Raises:
- **`IllegalFlagValueError`** : Raised when --flagfile is provided with noargument.
This function is called by FLAGS(argv).It scans the input list for a flag that looks like:--flagfile=<somefile>. Then it opens <somefile>, reads all valid keyand value pairs and inserts them into the input list in exactly theplace where the --flagfile arg is found.</somefile></somefile>

Note that your application's flags are still defined the usual wayusing absl.flags DEFINE_flag() type functions.

Notes (assuming we're getting a commandline of some sort as our input):--> For duplicate flags, the last one we hit should "win".--> Since flags that appear later win, a flagfile's settings can be "weak"    if the --flagfile comes at the beginning of the argument sequence,    and it can be "strong" if the --flagfile comes at the end.--> A further "--flagfile=<otherfile.cfg>" CAN be nested in a flagfile.    It will be expanded in exactly the spot where it is found.--> In a flagfile, a line beginning with # or // is a comment.--> Entirely blank lines *should* be ignored.</otherfile.cfg>

###  `register_flag_by_module` 


```
 register_flag_by_module(
    module_name,
    flag
)
 
```

Records the module that defines a specific flag.

We keep track of which flag is defined by which module so that wecan later sort the flags by module.

#### Args:
- **`module_name`** : str, the name of a Python module.
- **`flag`** : Flag, the Flag instance that is key to the module.


###  `register_flag_by_module_id` 


```
 register_flag_by_module_id(
    module_id,
    flag
)
 
```

Records the module that defines a specific flag.

#### Args:
- **`module_id`** : int, the ID of the Python module.
- **`flag`** : Flag, the Flag instance that is key to the module.


###  `register_key_flag_for_module` 


```
 register_key_flag_for_module(
    module_name,
    flag
)
 
```

Specifies that a flag is a key flag for a module.

#### Args:
- **`module_name`** : str, the name of a Python module.
- **`flag`** : Flag, the Flag instance that is key to the module.


###  `remove_flag_values` 


```
 remove_flag_values(flag_values)
 
```

Remove flags that were previously appended from another FlagValues.

#### Args:
- **`flag_values`** : FlagValues, the FlagValues instance containing flags toremove.


###  `set_default` 


```
 set_default(
    name,
    value
)
 
```

Changes the default value of the named flag object.

The flag's current value is also updated if the flag is currently usingthe default value, i.e. not specified in the command line, and not setby FLAGS.name = value.

#### Args:
- **`name`** : str, the name of the flag to modify.
- **`value`** : The new default value.


#### Raises:
- **`UnrecognizedFlagError`** : Raised when there is no registered flag named name.
- **`IllegalFlagValueError`** : Raised when value is not valid.


###  `set_gnu_getopt` 


```
 set_gnu_getopt(gnu_getopt=True)
 
```

Sets whether or not to use GNU style scanning.

GNU style allows mixing of flag and non-flag arguments. Seehttp://docs.python.org/library/getopt.html#getopt.gnu_getopt

#### Args:
- **`gnu_getopt`** : bool, whether or not to use GNU style scanning.


###  `unparse_flags` 


```
 unparse_flags()
 
```

Unparses all flags to the point before any FLAGS(argv) was called.

###  `write_help_in_xml_format` 


```
 write_help_in_xml_format(outfile=None)
 
```

Outputs flag documentation in XML format.

NOTE: We use element names that are consistent with those used bythe C++ command-line flag library, fromhttps://github.com/gflags/gflags.We also use a few new elements (e.g., <key>), but we do notinterfere / overlap with existing XML elements used by the C++library.  Please maintain this consistency.</key>

#### Args:
- **`outfile`** : File object we write to.  Default None means sys.stdout.
