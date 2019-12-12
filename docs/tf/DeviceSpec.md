

## Class  `DeviceSpec` 
表示TensorFlow设备的（可能是部分）规范。

 `DeviceSpec` s are used throughout TensorFlow to describe where state is storedand computations occur. Using  `DeviceSpec`  allows you to parse device specstrings to verify their validity, merge them or compose them programmatically.

#### 示例：


```
 #,,)
  squared_var = tf.square(my_var)
 
```

If a  `DeviceSpec`  is partially specified, it will be merged with other `DeviceSpec` s according to the scope in which it is defined.  `DeviceSpec` components defined in inner scopes take precedence over those defined inouter scopes.

```
 with,,,, device_index=1):
    # Nodes created here will be assigned to /job:train/device:GPU:1.
 
```

A  `DeviceSpec`  consists of 5 components -- each ofwhich is optionally specified:

- Job: The job name.
- Replica: The replica index.
- Task: The task index.
- Device type: The device type string (e.g. "CPU" or "GPU").
- Device index: The device index.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L92-L112)

```
 __init__(
    job=None,
    replica=None,
    task=None,
    device_type=None,
    device_index=None
)
 
```

Create a new  `DeviceSpec`  object.

#### 参数：
- **`job`** : string.  Optional job name.
- **`replica`** : int.  Optional replica index.
- **`task`** : int.  Optional task index.
- **`device_type`** : Optional device type string (e.g. "CPU" or "GPU")
- **`device_index`** : int.  Optional device index.  If leftunspecified, device represents 'any' device_index.


## 属性


###  `device_index` 


###  `device_type` 


###  `job` 


###  `replica` 


###  `task` 


## 方法


###  `__eq__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L358-L372)

```
 __eq__(other)
 
```

Checks if the  `other`  DeviceSpec is same as the current instance, eg have

所有内部字段的值都相同。

#### 参数：
- **`other`** : Another DeviceSpec


#### 返回：
Return  `True`  if  `other`  is also a DeviceSpec instance and has same valueas the current instance.Return  `False`  otherwise.

###  `from_string` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L123-L138)

```
 @classmethod
from_string(
    cls,
    spec
)
 
```

Construct a  `DeviceSpec`  from a string.

#### 参数：
- **`spec`** : a string of the form/job:/replica:/task:/device:CPU:or/job:/replica:/task:/device:GPU:as cpu and gpu are mutually exclusive.All entries are optional.


#### 返回：
恶魔啄食者

###  `make_merged_spec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L193-L215)

```
 make_merged_spec(dev)
 
```

Returns a new DeviceSpec which incorporates  `dev` .

When combining specs,  `dev`  will take precidence over the current spec.So for instance:

```
 first_spec)
second_spec)
combined_spec = first_spec.make_merged_spec(second_spec)
 
```

相当于：

```
 combined_spec)
 
```

#### 参数：
- **`dev`** : a  `DeviceSpec` 


#### 返回：
A new  `DeviceSpec`  which combines  `self`  and  `dev` 

###  `parse_from_string` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L140-L191)

```
 parse_from_string(spec)
 
```

Parse a  `DeviceSpec`  name into its components.

2.x behavior change:  In TensorFlow 1.x, this function mutates its own state and returns itself.  In 2.x, DeviceSpecs are immutable, and this function will return a    DeviceSpec which contains the spec.

推荐：

```
 # my_spec and my_updated_spec are unrelated.
my_spec = tf.DeviceSpec.from_string("/CPU:0")
my_updated_spec = tf.DeviceSpec.from_string("/GPU:0")
with tf.device(my_updated_spec):
  ...
 
```

将在1.x和2.x中工作（尽管在2.x中已弃用）：

```
 my_spec = tf.DeviceSpec.from_string("/CPU:0")
my_updated_spec = my_spec.parse_from_string("/GPU:0")
with tf.device(my_updated_spec):
  ...
 
```

在2.x中不起作用：

```
 my_spec = tf.DeviceSpec.from_string("/CPU:0")
my_spec.parse_from_string("/GPU:0")  # <== Will not update my_spec
with tf.device(my_spec):
  ...
 
```

In general, [ `DeviceSpec.from_string` ](https://tensorflow.google.cn/api_docs/python/tf/DeviceSpec#from_string) should completely replace  [ `DeviceSpec.parse_from_string` ](https://tensorflow.google.cn/api_docs/python/tf/DeviceSpec#parse_from_string), and [ `DeviceSpec.replace` ](https://tensorflow.google.cn/api_docs/python/tf/DeviceSpec#replace) should  completely replace setting attributes directly.

#### 参数：
- **`spec`** : an optional string of the form/job:/replica:/task:/device:CPU:or/job:/replica:/task:/device:GPU:as cpu and gpu are mutually exclusive.All entries are optional.


#### 返回：
The  `DeviceSpec` .

#### 加薪：
- **`ValueError`** : if the spec was not valid.


###  `replace` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L217-L239)

```
 replace(**kwargs)
 
```

通过重写字段来生成新的devicespec的方便方法。

#### 例如：


```
 my_spec,)
my_updated_spec)
my_other_spec = my_spec.replace(device=None)
 
```

#### 参数：
- **`**kwargs`** : This method takes the same args as the DeviceSpec constructor


#### 返回：
具有在kwargs中指定的字段的devicespec被重写。

###  `to_string` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L114-L121)

```
 to_string()
 
```

Return a string representation of this  `DeviceSpec` .

#### 返回：
a string of the form/job:/replica:/task:/device::.

