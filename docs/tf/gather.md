


Gather slices from params axis axis according to indices.


### Aliases:
- [ `tf.compat.v2.gather` ](/api_docs/python/tf/gather)


```
tf.gather(
    params,
    indices,
    validate_indices=None,
    axis=None,
    batch_dims=0,
    name=None
)

```


Gather slices from params axis  `axis`  according to  `indices` .   `indices`  mustbe an integer tensor of any dimension (usually 0-D or 1-D).

For 0-D (scalar)  `indices` :

 `output` </p><div> ![](./gather.md_0.png) </div> =<br> `params` <div> ![](./gather.md_1.png) </div>.<p>

For 1-D (vector)  `indices`  with  `batch_dims=0` :

 `output` </p><div> ![](./gather.md_0.png) </div> =<br> `params` <div> ![](./gather.md_1.png) </div>.<p>

In the general case, produces an output tensor where:

<div class="MathJax_SVG_Display" style="text-align: center;">![](./gather.md_0.png)</div>

Where

![](./gather.md_0.png)

ndims(params)

![](./gather.md_0.png)

ndims(indices)

![](./gather.md_0.png)

batch_dims



The shape of the output tensor is:

 `output.shape = params.shape[:axis] + indices.shape[batch_dims:] +params.shape[axis + 1:]` .

Note that on CPU, if an out of bound index is found, an error is returned.On GPU, if an out of bound index is found, a 0 is stored in the correspondingoutput value.

See also [ `tf.gather_nd` ](https://tensorflow.google.cn/api_docs/python/tf/gather_nd).
![](https://tensorflow.google.cn/images/Gather.png)

#### Args:
- **`params`** : The  `Tensor`  from which to gather values. Must be at least rank `axis + 1` .
- **`indices`** : The index  `Tensor` .  Must be one of the following types:  `int32` , `int64` . Must be in range  `[0, params.shape[axis])` .
- **`validate_indices`** : Deprecated, does nothing.
- **`axis`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` . The `axis`  in  `params`  to gather  `indices`  from. Must be greater than or equalto  `batch_dims` .  Defaults to the first non-batch dimension. Supportsnegative indexes.
- **`batch_dims`** : An  `integer` .  The number of batch dimensions.  Must be lessthan  `rank(indices)` .
- **`name`** : A name for the operation (optional).


#### Returns:

A  `Tensor` . Has the same type as  `params` .
