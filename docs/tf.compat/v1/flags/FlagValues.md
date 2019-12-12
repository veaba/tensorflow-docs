

## Class  `FlagValues` 
“标记”对象的注册表。

A 'FlagValues' can then scan command line arguments, passing flagarguments through to the 'Flag' objects that it owns.  It alsoprovides easy access to the flag values.  Typically only one'FlagValues' object is needed by an application: flags.FLAGS

该类重载严重：

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

## 方法


###  `__call__` 


```
 __call__(
    argv,
    known_only=False
)
 
```

分析argv中的标志；将已分析的标志存储到此FlagValues对象中。

将返回所有未分析的参数。

#### 参数：
- **`argv`** : a tuple/list of strings.
- **`known_only`** : bool, if True, parse and remove known flags; return the restuntouched. Unknown flags specified by --undefok are not returned.


#### 返回：
The list of arguments not parsed as options, including argv[0].

#### 加薪：
- **`Error`** : Raised on any parsing error.
- **`TypeError`** : Raised on passing wrong type of arguments.
- **`ValueError`** : Raised on flag value parsing error.


###  `__contains__` 


```
 __contains__(name)
 
```

如果name是dict中的值（标志），则返回true。

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

追加在另一个FlagValues实例中注册的标志。

#### 参数：
- **`flag_values`** : FlagValues, the FlagValues instance from which to copy flags.


###  `append_flags_into_file` 


```
 append_flags_into_file(filename)
 
```

将此flaginfo对象中的所有标志分配附加到文件。

输出将采用标记文件的格式。

注意：MUST mirror the behavior of the C++ AppendFlagsIntoFilefrom https://github.com/gflags/gflags.

#### 参数：
- **`filename`** : str, name of the file.


###  `find_module_defining_flag` 


```
 find_module_defining_flag(
    flagname,
    default=None
)
 
```

Return the name of the module defining this flag, or default.

#### 参数：
- **`flagname`** : str, name of the flag to lookup.
- **`default`** : Value to return if flagname is not defined. Defaultsto None.


#### 返回：
The name of the module which registered the flag with this name.If no such module exists (i.e. no flag with this name exists),we return default.

###  `find_module_id_defining_flag` 


```
 find_module_id_defining_flag(
    flagname,
    default=None
)
 
```

Return the ID of the module defining this flag, or default.

#### 参数：
- **`flagname`** : str, name of the flag to lookup.
- **`default`** : Value to return if flagname is not defined. Defaultsto None.


#### 返回：
The ID of the module which registered the flag with this name.If no such module exists (i.e. no flag with this name exists),we return default.

###  `flag_values_dict` 


```
 flag_values_dict()
 
```

返回将标志名称映射到标志值的字典。

###  `flags_by_module_dict` 


```
 flags_by_module_dict()
 
```

Returns the dictionary of module_name -> list of defined flags.

#### 返回：
A dictionary.  Its keys are module names (strings).  Its valuesare lists of Flag objects.

###  `flags_by_module_id_dict` 


```
 flags_by_module_id_dict()
 
```

Returns the dictionary of module_id -> list of defined flags.

#### 返回：
A dictionary.  Its keys are module IDs (ints).  Its valuesare lists of Flag objects.

###  `flags_into_string` 


```
 flags_into_string()
 
```

返回具有来自此FlagValues对象的标志分配的字符串。

This function ignores flags whose value is None.  Each flagassignment is separated by a newline.

注意：MUST mirror the behavior of the C++ CommandlineFlagsIntoStringfrom https://github.com/gflags/gflags.

#### 返回：
str, the string with the flags assignments from this FlagValues object.The flags are ordered by (module_name, flag_name).

###  `get_flag_value` 


```
 get_flag_value(
    name,
    default
)
 
```

返回标志值（如果不是无）或默认值。

#### 参数：
- **`name`** : str, the name of a flag.
- **`default`** : Default value to use if the flag value is None.


#### 返回：
请求的标志值或默认值。

###  `get_help` 


```
 get_help(
    prefix='',
    include_special_flags=True
)
 
```

返回所有已知标志的帮助字符串。

#### 参数：
- **`prefix`** : str, per-line output prefix.
- **`include_special_flags`** : bool, whether to include description ofSPECIAL_FLAGS, i.e. --flagfile and --undefok.


#### 返回：
str, formatted help message.

###  `get_key_flags_for_module` 


```
 get_key_flags_for_module(module)
 
```

返回模块的键标志列表。

#### 参数：
- **`module`** : module|str, the module to get key flags from.


#### 返回：
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

返回是否分析了标志。

###  `key_flags_by_module_dict` 


```
 key_flags_by_module_dict()
 
```

Returns the dictionary of module_name -> list of key flags.

#### 返回：
A dictionary.  Its keys are module names (strings).  Its valuesare lists of Flag objects.

###  `main_module_help` 


```
 main_module_help()
 
```

描述主模块的键标志。

#### 返回：
str, describing the key flags of the main module.

###  `mark_as_parsed` 


```
 mark_as_parsed()
 
```

显式地将标志标记为已分析。

Use this when the caller knows that this FlagValues has been parsed as ifa **call** () invocation has happened.  This is only a public method foruse by things like appcommands which do additional command like parsing.

###  `module_help` 


```
 module_help(module)
 
```

描述模块的键标志。

#### 参数：
- **`module`** : module|str, the module to describe the key flags for.


#### 返回：
str, describing the key flags of a module.

###  `read_flags_from_files` 


```
 read_flags_from_files(
    argv,
    force_gnu=True
)
 
```

Processes command line args, but also allow args to be read from file.

#### 参数：
- **`argv`** : [str], a list of strings, usually sys.argv[1:], which may containone or more flagfile directives of the form --flagfile="./filename".Note that the name of the program (sys.argv[0]) should be omitted.
- **`force_gnu`** : bool, if False, --flagfile parsing obeys theFLAGS.is_gnu_getopt() value. If True, ignore the value and alwaysfollow gnu_getopt semantics.


#### 返回：
A new list which has the original list combined with what we readfrom any flagfile(s).

#### 加薪：
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

记录定义特定标志的模块。

We keep track of which flag is defined by which module so that wecan later sort the flags by module.

#### 参数：
- **`module_name`** : str, the name of a Python module.
- **`flag`** : Flag, the Flag instance that is key to the module.


###  `register_flag_by_module_id` 


```
 register_flag_by_module_id(
    module_id,
    flag
)
 
```

记录定义特定标志的模块。

#### 参数：
- **`module_id`** : int, the ID of the Python module.
- **`flag`** : Flag, the Flag instance that is key to the module.


###  `register_key_flag_for_module` 


```
 register_key_flag_for_module(
    module_name,
    flag
)
 
```

指定标志是模块的键标志。

#### 参数：
- **`module_name`** : str, the name of a Python module.
- **`flag`** : Flag, the Flag instance that is key to the module.


###  `remove_flag_values` 


```
 remove_flag_values(flag_values)
 
```

删除以前从另一个标志值附加的标志。

#### 参数：
- **`flag_values`** : FlagValues, the FlagValues instance containing flags toremove.


###  `set_default` 


```
 set_default(
    name,
    value
)
 
```

更改命名标志对象的默认值。

The flag's current value is also updated if the flag is currently usingthe default value, i.e. not specified in the command line, and not setby FLAGS.name = value.

#### 参数：
- **`name`** : str, the name of the flag to modify.
- **`value`** : The new default value.


#### 加薪：
- **`UnrecognizedFlagError`** : Raised when there is no registered flag named name.
- **`IllegalFlagValueError`** : Raised when value is not valid.


###  `set_gnu_getopt` 


```
 set_gnu_getopt(gnu_getopt=True)
 
```

设置是否使用GNU样式扫描。

GNU style allows mixing of flag and non-flag arguments. Seehttp://docs.python.org/library/getopt.html#getopt.gnu_getopt

#### 参数：
- **`gnu_getopt`** : bool, whether or not to use GNU style scanning.


###  `unparse_flags` 


```
 unparse_flags()
 
```

在调用任何标志（argv）之前，断开所有标志的连接。

###  `write_help_in_xml_format` 


```
 write_help_in_xml_format(outfile=None)
 
```

以XML格式输出标记文档。

注意：We use element names that are consistent with those used bythe C++ command-line flag library, fromhttps://github.com/gflags/gflags.We also use a few new elements (e.g., <key>), but we do notinterfere / overlap with existing XML elements used by the C++library.  Please maintain this consistency.</key>

#### 参数：
- **`outfile`** : File object we write to.  Default None means sys.stdout.
