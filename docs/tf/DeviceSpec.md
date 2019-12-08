

## Class  `DeviceSpec` 
Represents a (possibly partial) specification for a TensorFlow device.



### Aliases:

- Class [ `tf.compat.v2.DeviceSpec` ](/api_docs/python/tf/DeviceSpec)

 `DeviceSpec` s are used throughout TensorFlow to describe where state is stored
and computations occur. Using  `DeviceSpec`  allows you to parse device spec
strings to verify their validity, merge them or compose them programmatically.



#### Example:


```
 #,,)
  squared_var = tf.square(my_var)
 
```

If a  `DeviceSpec`  is partially specified, it will be merged with other
 `DeviceSpec` s according to the scope in which it is defined.  `DeviceSpec` 
components defined in inner scopes take precedence over those defined in
outer scopes.



```
 with,,,, device_index=1):
    # Nodes created here will be assigned to /job:train/device:GPU:1.
 
```

A  `DeviceSpec`  consists of 5 components -- each of
which is optionally specified:


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



#### Args:

- **`job`** : string.  Optional job name.

- **`replica`** : int.  Optional replica index.

- **`task`** : int.  Optional task index.

- **`device_type`** : Optional device type string (e.g. "CPU" or "GPU")

- **`device_index`** : int.  Optional device index.  If left
unspecified, device represents 'any' device_index.



## Properties


###  `device_index` 


###  `device_type` 


###  `job` 


###  `replica` 


###  `task` 


## Methods


###  `__eq__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L358-L372)



```
 __eq__(other)
 
```

Checks if the  `other`  DeviceSpec is same as the current instance, eg have

same value for all the internal fields.



#### Args:

- **`other`** : Another DeviceSpec



#### Returns:
Return  `True`  if  `other`  is also a DeviceSpec instance and has same value
as the current instance.
Return  `False`  otherwise.



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



#### Args:

- **`spec`** : a string of the form
/job:/replica:/task:/device:CPU:
or
/job:/replica:/task:/device:GPU:
as cpu and gpu are mutually exclusive.
All entries are optional.



#### Returns:
A DeviceSpec.



###  `make_merged_spec` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L193-L215)



```
 make_merged_spec(dev)
 
```

Returns a new DeviceSpec which incorporates  `dev` .

When combining specs,  `dev`  will take precidence over the current spec.
So for instance:



```
 first_spec)
second_spec)
combined_spec = first_spec.make_merged_spec(second_spec)
 
```

is equivalent to:



```
 combined_spec)
 
```



#### Args:

- **`dev`** : a  `DeviceSpec` 



#### Returns:
A new  `DeviceSpec`  which combines  `self`  and  `dev` 



###  `parse_from_string` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L140-L191)



```
 parse_from_string(spec)
 
```

Parse a  `DeviceSpec`  name into its components.

2.x behavior change:
  In TensorFlow 1.x, this function mutates its own state and returns itself.
  In 2.x, DeviceSpecs are immutable, and this function will return a
    DeviceSpec which contains the spec.

Recommended:


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `# my_spec and my_updated_spec are unrelated.<br>my_spec = tf.DeviceSpec.from_string("/CPU:0")<br>my_updated_spec = tf.DeviceSpec.from_string("/GPU:0")<br>with tf.device(my_updated_spec):<br>&nbsp; ...<br>` </pre></devsite-code>
Will work in 1.x and 2.x (though deprecated in 2.x):


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `my_spec = tf.DeviceSpec.from_string("/CPU:0")<br>my_updated_spec = my_spec.parse_from_string("/GPU:0")<br>with tf.device(my_updated_spec):<br>&nbsp; ...<br>` </pre></devsite-code>
Will NOT work in 2.x:


>
<devsite-code><pre class="" translate="no" dir="ltr" is-upgraded=""> `my_spec = tf.DeviceSpec.from_string("/CPU:0")<br>my_spec.parse_from_string("/GPU:0") &nbsp;# <== Will not update my_spec<br>with tf.device(my_spec):<br>&nbsp; ...<br>` </pre></devsite-code>
In general, [ `DeviceSpec.from_string` ](https://tensorflow.google.cn/api_docs/python/tf/DeviceSpec#from_string) should completely replace
  [ `DeviceSpec.parse_from_string` ](https://tensorflow.google.cn/api_docs/python/tf/DeviceSpec#parse_from_string), and [ `DeviceSpec.replace` ](https://tensorflow.google.cn/api_docs/python/tf/DeviceSpec#replace) should
  completely replace setting attributes directly.



#### Args:

- **`spec`** : an optional string of the form
/job:/replica:/task:/device:CPU:
or
/job:/replica:/task:/device:GPU:
as cpu and gpu are mutually exclusive.
All entries are optional.



#### Returns:
The  `DeviceSpec` .



#### Raises:

- **`ValueError`** : if the spec was not valid.



###  `replace` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L217-L239)



```
 replace(**kwargs)
 
```

Convenience method for making a new DeviceSpec by overriding fields.



#### For instance:


```
 my_spec,)
my_updated_spec)
my_other_spec = my_spec.replace(device=None)
 
```



#### Args:

- **`**kwargs`** : This method takes the same args as the DeviceSpec constructor



#### Returns:
A DeviceSpec with the fields specified in kwargs overridden.



###  `to_string` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L114-L121)



```
 to_string()
 
```

Return a string representation of this  `DeviceSpec` .



#### Returns:
a string of the form
/job:/replica:/task:/device:<device_type>:.</device_type>

