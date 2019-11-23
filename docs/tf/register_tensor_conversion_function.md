
Registers a function for converting objects of  `base_type`  to  `Tensor` .


### Aliases:
- [ `tf.compat.v1.register_tensor_conversion_function` ](/api_docs/python/tf/register_tensor_conversion_function)
- [ `tf.compat.v2.register_tensor_conversion_function` ](/api_docs/python/tf/register_tensor_conversion_function)


```
tf.register_tensor_conversion_function(
    base_type,
    conversion_func,
    priority=100
)

```


The conversion function must have the following signature:


```
    def conversion_func(value, dtype=None, name=None, as_ref=False):
      # ...

```


It must return a  `Tensor`  with the given  `dtype`  if specified. If theconversion function creates a new  `Tensor` , it should use the given `name`  if specified. All exceptions will be propagated to the caller.

The conversion function may return  `NotImplemented`  for someinputs. In this case, the conversion process will continue to trysubsequent conversion functions.

If  `as_ref`  is true, the function must return a  `Tensor`  reference,such as a  `Variable` .

NOTE: The conversion functions will execute in order of priority,followed by order of registration. To ensure that a conversion function `F`  runs before another conversion function  `G` , ensure that  `F`  isregistered with a smaller priority than  `G` .


#### Args:
- **`base_type`** : The base type or tuple of base types for all objects that `conversion_func`  accepts.
- **`conversion_func`** : A function that converts instances of  `base_type`  to `Tensor` .
- **`priority`** : Optional integer that indicates the priority for applying thisconversion function. Conversion functions with smaller priority values runearlier than conversion functions with larger priority values. Defaults to100.


#### Raises:
- **`TypeError`** : If the arguments do not have the appropriate type.
