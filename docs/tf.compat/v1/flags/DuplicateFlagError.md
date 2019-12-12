

## Class  `DuplicateFlagError` 
如果存在标志命名冲突，则引发。

Inherits From: [ `Error` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/flags/Error)

## 方法


###  `from_flag` 


```
 @classmethod
from_flag(
    cls,
    flagname,
    flag_values,
    other_flag_values=None
)
 
```

通过提供标志名称和值创建重复的鞭毛错误。

#### 参数：
- **`flagname`** : str, the name of the flag being redefined.
- **`flag_values`** : FlagValues, the FlagValues instance containing the firstdefinition of flagname.
- **`other_flag_values`** : FlagValues, if it is not None, it should be theFlagValues object where the second definition of flagname occurs.If it is None, we assume that we're being called when attemptingto create the flag a second time, and we use the module callingthis one as the source of the second definition.


#### 返回：
重复鞭毛错误的实例。

