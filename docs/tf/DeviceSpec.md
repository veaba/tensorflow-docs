![](https://tensorflow.google.cn/images/tf_logo_32px.png)
## Class  `DeviceSpec` 

Represents a (possibly partial) specification for a TensorFlow device.

### Aliases:

- Class [ `tf.compat.v2.DeviceSpec` ](/api_docs/python/tf/DeviceSpec)

 `DeviceSpec` s are used throughout TensorFlow to describe where state is storedand computations occur. Using  `DeviceSpec`  allows you to parse device specstrings to verify their validity, merge them or compose them programmatically.

#### Example:


```python
# Place the operations on device "GPU:0" in the "ps" job.
device_spec = DeviceSpec(job="ps", device_type="GPU", device_index=0)
with tf.device(device_spec):
&nbsp; # Both my_var and squared_var will be placed on /job:ps/device:GPU:0.
&nbsp; my_var = tf.Variable(..., name="my_variable")
&nbsp; squared_var = tf.square(my_var)

```


If a  `DeviceSpec`  is partially specified, it will be merged with other `DeviceSpec` s according to the scope in which it is defined.  `DeviceSpec` components defined in inner scopes take precedence over those defined inouter scopes.


```python
with tf.device(DeviceSpec(job="train", )):
&nbsp; with tf.device(DeviceSpec(job="ps", device_type="GPU", device_index=0):
  # Nodes created here will be assigned to /job:ps/device:GPU:0.
&nbsp; with tf.device(DeviceSpec(device_type="GPU", device_index=1):
  # Nodes created here will be assigned to /job:train/device:GPU:1.

```


A  `DeviceSpec`  consists of 5 components -- each ofwhich is optionally specified:

- Job: The job name.</li><li>Replica: The replica index.</li><li>Task: The task index.</li><li>Device type: The device type string (e.g. "CPU" or "GPU").</li><li>Device index: The device index.
##  `__init__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L92-L112)


```python
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

- **`device_index`** : int.  Optional device index.  If leftunspecified, device represents 'any' device_index.

## Properties

###  `device_index` 

###  `device_type` 

###  `job` 

###  `replica` 

###  `task` 

## Methods

###  `__eq__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L358-L372)


```python
__eq__(other)

```


Checks if the  `other`  DeviceSpec is same as the current instance, eg have

same value for all the internal fields.

#### Args:

- **`other`** : Another DeviceSpec

#### Returns:

Return  `True`  if  `other`  is also a DeviceSpec instance and has same valueas the current instance.Return  `False`  otherwise.

###  `from_string` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L123-L138)


```python
@classmethod
from_string(
  cls,
  spec
)

```


Construct a  `DeviceSpec`  from a string.

#### Args:

- **`spec`** : a string of the form/job:<name>/replica:<id>/task:<id>/device:CPU:<id>or/job:<name>/replica:<id>/task:<id>/device:GPU:<id>as cpu and gpu are mutually exclusive.All entries are optional.</id></id></id></name></id></id></id></name>

#### Returns:

A DeviceSpec.

###  `make_merged_spec` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L193-L215)


```python
make_merged_spec(dev)

```


Returns a new DeviceSpec which incorporates  `dev` .

When combining specs,  `dev`  will take precidence over the current spec.So for instance:


```python
first_spec = tf.DeviceSpec(job=0, device_type="CPU")
second_spec = tf.DeviceSpec(device_type="GPU")
combined_spec = first_spec.make_merged_spec(second_spec)

```


is equivalent to:


```python
combined_spec = tf.DeviceSpec(job=0, device_type="GPU")

```


#### Args:

- **`dev`** : a  `DeviceSpec` 

#### Returns:

A new  `DeviceSpec`  which combines  `self`  and  `dev` 

###  `parse_from_string` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L140-L191)


```python
parse_from_string(spec)

```


Parse a  `DeviceSpec`  name into its components.

2.x behavior change:  In TensorFlow 1.x, this function mutates its own state and returns itself.  In 2.x, DeviceSpecs are immutable, and this function will return a    DeviceSpec which contains the spec.

Recommended:


```python
# my_spec and my_updated_spec are unrelated.
my_spec = tf.DeviceSpec.from_string("/CPU:0")
my_updated_spec = tf.DeviceSpec.from_string("/GPU:0")
with tf.device(my_updated_spec):
&nbsp; ...

```


Will work in 1.x and 2.x (though deprecated in 2.x):


```python
my_spec = tf.DeviceSpec.from_string("/CPU:0")
my_updated_spec = my_spec.parse_from_string("/GPU:0")
with tf.device(my_updated_spec):
&nbsp; ...

```


Will NOT work in 2.x:


```python
my_spec = tf.DeviceSpec.from_string("/CPU:0")
my_spec.parse_from_string("/GPU:0") &nbsp;# &lt;== Will not update my_spec
with tf.device(my_spec):
&nbsp; ...

```


In general, [ `DeviceSpec.from_string` ](https://tensorflow.google.cn/api_docs/python/tf/DeviceSpec#from_string) should completely replace  [ `DeviceSpec.parse_from_string` ](https://tensorflow.google.cn/api_docs/python/tf/DeviceSpec#parse_from_string), and [ `DeviceSpec.replace` ](https://tensorflow.google.cn/api_docs/python/tf/DeviceSpec#replace) should  completely replace setting attributes directly.

#### Args:

- **`spec`** : an optional string of the form/job:<name>/replica:<id>/task:<id>/device:CPU:<id>or/job:<name>/replica:<id>/task:<id>/device:GPU:<id>as cpu and gpu are mutually exclusive.All entries are optional.</id></id></id></name></id></id></id></name>

#### Returns:

The  `DeviceSpec` .

#### Raises:

- **`ValueError`** : if the spec was not valid.

###  `replace` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L217-L239)


```python
replace(**kwargs)

```


Convenience method for making a new DeviceSpec by overriding fields.

#### For instance:


```python
my_spec = DeviceSpec=(job="my_job", device="CPU")
my_updated_spec = my_spec.replace(device="GPU")
my_other_spec = my_spec.replace(device=None)

```


#### Args:

- **`**kwargs`** : This method takes the same args as the DeviceSpec constructor

#### Returns:

A DeviceSpec with the fields specified in kwargs overridden.

###  `to_string` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/device_spec.py#L114-L121)


```python
to_string()

```


Return a string representation of this  `DeviceSpec` .

#### Returns:

a string of the form/job:<name>/replica:<id>/task:<id>/device:<device_type>:<id>.</id></device_type></id></id></name>
