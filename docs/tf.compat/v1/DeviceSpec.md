## Class DeviceSpec
Represents a (possibly partial) specification for a TensorFlow device.
Inherits From: `DeviceSpec`
`DeviceSpec`s are used throughout TensorFlow to describe where state is stored and computations occur. Using `DeviceSpec` allows you to parse device spec strings to verify their validity, merge them or compose them programmatically.
#### Example:

```
 # Place the operations on device "GPU:0" in the "ps" job.
device_spec = DeviceSpec(job="ps", device_type="GPU", device_index=0)
with tf.device(device_spec):
  # Both my_var and squared_var will be placed on /job:ps/device:GPU:0.
  my_var = tf.Variable(..., name="my_variable")
  squared_var = tf.square(my_var)
```
If a `DeviceSpec` is partially specified, it will be merged with other `DeviceSpec`s according to the scope in which it is defined. `DeviceSpec` components defined in inner scopes take precedence over those defined in outer scopes.

```
 with tf.device(DeviceSpec(job="train", )):
  with tf.device(DeviceSpec(job="ps", device_type="GPU", device_index=0):
    # Nodes created here will be assigned to /job:ps/device:GPU:0.
  with tf.device(DeviceSpec(device_type="GPU", device_index=1):
    # Nodes created here will be assigned to /job:train/device:GPU:1.
```
A `DeviceSpec` consists of 5 components -- each of which is optionally specified:
- ``J``o``b``:`` ``T``h``e`` ``j``o``b`` ``n``a``m``e``.``
- ``R``e``p``l``i``c``a``:`` ``T``h``e`` ``r``e``p``l``i``c``a`` ``i``n``d``e``x``.``
- ``T``a``s``k``:`` ``T``h``e`` ``t``a``s``k`` ``i``n``d``e``x``.``
- ``D``e``v``i``c``e`` ``t``y``p``e``:`` ``T``h``e`` ``d``e``v``i``c``e`` ``t``y``p``e`` ``s``t``r``i``n``g`` ``(``e``.``g``.`` ``"``C``P``U``"`` ``o``r`` ``"``G``P``U``"``)``.``
- ``D``e``v``i``c``e`` ``i``n``d``e``x``:`` ``T``h``e`` ``d``e``v``i``c``e`` ``i``n``d``e``x``.``
## __init__
View source

```
 __init__(
    job=None,
    replica=None,
    task=None,
    device_type=None,
    device_index=None
)
```
Create a new `DeviceSpec` object.
#### Args:
- `job`: string. Optional `job` name.
- `replica`: int. Optional `replica` index.
- `task`: int. Optional `task` index.
- `device_type`: Optional device type string (e.g. "CPU" or "GPU")
- `device_index`: int. Optional device index. If left unspecified, device represents 'any' `device_index`.
## Properties
### device_index
### device_type
### job
### replica
### task
## Methods
### __eq__
View source

```
 __eq__(other)
```
Checks if the `other` DeviceSpec is same as the current instance, eg have
same value for all the internal fields.
#### Args:
- `other`: An`other` DeviceSpec
#### Returns:
Return `True` if `other` is also a DeviceSpec instance and has same value as the current instance. Return `False` `other`wise.
### from_string
View source

```
 from_string(
    cls,
    spec
)
```
Construct a `DeviceSpec` from a string.
#### Args:
- `spec`: a string of the form /job:/replica:/task:/device:CPU: or /job:/replica:/task:/device:GPU: as cpu and gpu are mutually exclusive. All entries are optional.
#### Returns:
A DeviceSpec.
### make_merged_spec
View source

```
 make_merged_spec(dev)
```
Returns a new DeviceSpec which incorporates `dev`.
When combining specs, `dev` will take precidence over the current spec. So for instance:

```
 first_spec = tf.DeviceSpec(job=0, device_type="CPU")
second_spec = tf.DeviceSpec(device_type="GPU")
combined_spec = first_spec.make_merged_spec(second_spec)
```
is equivalent to:

```
 combined_spec = tf.DeviceSpec(job=0, device_type="GPU")
```
#### Args:
- `dev`: a `DeviceSpec`
#### Returns:
A new `DeviceSpec` which combines `self` and `dev`
### merge_from
View source

```
 merge_from(dev)
```
Merge the properties of "dev" into this `DeviceSpec`.
#### Args:
- `dev`: a `DeviceSpec`.
### parse_from_string
View source

```
 parse_from_string(spec)
```
Parse a `DeviceSpec` name into its components.
2.x behavior change: In TensorFlow 1.x, this function mutates its own state and returns itself. In 2.x, DeviceSpecs are immutable, and this function will return a DeviceSpec which contains the spec.
Recommended:
Will work in 1.x and 2.x (though deprecated in 2.x):
Will NOT work in 2.x:
In general, `DeviceSpec.from_string` should completely replace `DeviceSpec.parse_from_string`, and `DeviceSpec.replace` should completely replace setting attributes directly.
#### Args:
- `spec`: an optional string of the form /job:/replica:/task:/device:CPU: or /job:/replica:/task:/device:GPU: as cpu and gpu are mutually exclusive. All entries are optional.
#### Returns:
The `DeviceSpec`.
#### Raises:
- `ValueError`: if the spec was not valid.
### replace
View source

```
 replace(**kwargs)
```
Convenience method for making a new DeviceSpec by overriding fields.
#### For instance:

```
 my_spec = DeviceSpec=(job="my_job", device="CPU")
my_updated_spec = my_spec.replace(device="GPU")
my_other_spec = my_spec.replace(device=None)
```
#### Args:
#### Returns:
A DeviceSpec with the fields specified in kwargs overridden.
### to_string
View source

```
 to_string()
```
Return a string representation of this `DeviceSpec`.
#### Returns:
a string of the form /job:/replica:/task:/device::.
