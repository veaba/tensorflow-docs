

## Class  `ArgumentParser` 
用于分析和转换参数的基类。

The parse() method checks to make sure that the string argument is alegal value and convert it to a native type.  If the value cannot beconverted, it should throw a 'ValueError' exception with a humanreadable explanation of why the value is illegal.

Subclasses should also define a syntactic_help string which may bepresented to the user to describe the form of the legal values.

Argument parser classes must be stateless, since instances are cachedand shared between flags. Initializer arguments are allowed, but allmember variables must be derived from initializer arguments only.

## 方法


###  `flag_type` 


```
 flag_type()
 
```

返回表示标志类型的字符串。

###  `parse` 


```
 parse(argument)
 
```

分析字符串参数并返回本机值。

默认情况下，它返回未修改的参数。

#### 参数：
- **`argument`** : string argument passed in the commandline.


#### 加薪：
- **`ValueError`** : Raised when it fails to parse the argument.
- **`TypeError`** : Raised when the argument has the wrong type.


#### 返回：
本机类型中的已分析值。

