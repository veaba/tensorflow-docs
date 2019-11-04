

![](https://tensorflow.google.cn/images/tf_logo_32px.png)
Gather slices from params axis axis according to indices.

### Aliases:

- [ `tf.compat.v2.gather` ](/api_docs/python/tf/gather)


```python
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

 `output` </p><div>[p_0,          ..., p_{axis-1},        \hspace{5.1em}           p_{axis + 1}, ..., p_{N-1}]</script> </div> =<b>[p_0,          ..., p_{axis-1},        \hspace{1em}           indices,                              \hspace{1em}           p_{axis + 1}, ..., p_{N-1}]</script> </div>.<p>

For 1-D (vector)  `indices`  with  `batch_dims=0` :

 `output` </p><div><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMAIN-5B" x="0" y="0"></use><g transform="translate(278,0)"><use xlink:href="#MJMATHI-70" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-30" x="712" y="-213"></use></g><use xlink:href="#MJMAIN-2C" x="1235" y="0"></use><use xlink:href="#MJMAIN-2E" x="1681" y="0"></use><use xlink:href="#MJMAIN-2E" x="2126" y="0"></use><use xlink:href="#MJMAIN-2E" x="2571" y="0"></use><use xlink:href="#MJMAIN-2C" x="3016" y="0"></use><g transform="translate(3461,0)"><use xlink:href="#MJMATHI-70" x="0" y="0"></use><g transform="translate(503,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-78" x="529" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="1102" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-73" x="1447" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="1917" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="2695" y="0"></use></g></g><use xlink:href="#MJMAIN-2C" x="6325" y="0"></use><use xlink:href="#MJMATHI-69" x="9370" y="0"></use><use xlink:href="#MJMAIN-2C" x="9715" y="0"></use><g transform="translate(12760,0)"><use xlink:href="#MJMATHI-70" x="0" y="0"></use><g transform="translate(503,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-78" x="529" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="1102" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-73" x="1447" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2B" x="1917" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="2695" y="0"></use></g></g><use xlink:href="#MJMAIN-2C" x="15624" y="0"></use><use xlink:href="#MJMAIN-2E" x="16069" y="0"></use><use xlink:href="#MJMAIN-2E" x="16514" y="0"></use><use xlink:href="#MJMAIN-2E" x="16959" y="0"></use><use xlink:href="#MJMAIN-2C" x="17405" y="0"></use><g transform="translate(17850,0)"><use xlink:href="#MJMATHI-70" x="0" y="0"></use><g transform="translate(503,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-4E" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="888" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="1667" y="0"></use></g></g><use xlink:href="#MJMAIN-5D" x="19986" y="0"></use></g></svg></span><script type="math/tex" id="MathJax-Element-3">[p_0,          ..., p_{axis-1},        \hspace{2.6em}           i,                                    \hspace{2.6em}           p_{axis + 1}, ..., p_{N-1}]</script> </div> =<b><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMAIN-5B" x="0" y="0"></use><g transform="translate(278,0)"><use xlink:href="#MJMATHI-70" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-30" x="712" y="-213"></use></g><use xlink:href="#MJMAIN-2C" x="1235" y="0"></use><use xlink:href="#MJMAIN-2E" x="1681" y="0"></use><use xlink:href="#MJMAIN-2E" x="2126" y="0"></use><use xlink:href="#MJMAIN-2E" x="2571" y="0"></use><use xlink:href="#MJMAIN-2C" x="3016" y="0"></use><g transform="translate(3461,0)"><use xlink:href="#MJMATHI-70" x="0" y="0"></use><g transform="translate(503,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-78" x="529" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="1102" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-73" x="1447" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="1917" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="2695" y="0"></use></g></g><use xlink:href="#MJMAIN-2C" x="6325" y="0"></use><use xlink:href="#MJMATHI-69" x="7770" y="0"></use><use xlink:href="#MJMATHI-6E" x="8115" y="0"></use><use xlink:href="#MJMATHI-64" x="8716" y="0"></use><use xlink:href="#MJMATHI-69" x="9239" y="0"></use><use xlink:href="#MJMATHI-63" x="9585" y="0"></use><use xlink:href="#MJMATHI-65" x="10018" y="0"></use><use xlink:href="#MJMATHI-73" x="10485" y="0"></use><use xlink:href="#MJMAIN-5B" x="10954" y="0"></use><use xlink:href="#MJMATHI-69" x="11233" y="0"></use><use xlink:href="#MJMAIN-5D" x="11578" y="0"></use><use xlink:href="#MJMAIN-2C" x="11857" y="0"></use><g transform="translate(13302,0)"><use xlink:href="#MJMATHI-70" x="0" y="0"></use><g transform="translate(503,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-61" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-78" x="529" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="1102" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-73" x="1447" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2B" x="1917" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="2695" y="0"></use></g></g><use xlink:href="#MJMAIN-2C" x="16165" y="0"></use><use xlink:href="#MJMAIN-2E" x="16611" y="0"></use><use xlink:href="#MJMAIN-2E" x="17056" y="0"></use><use xlink:href="#MJMAIN-2E" x="17501" y="0"></use><use xlink:href="#MJMAIN-2C" x="17946" y="0"></use><g transform="translate(18391,0)"><use xlink:href="#MJMATHI-70" x="0" y="0"></use><g transform="translate(503,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-4E" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="888" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="1667" y="0"></use></g></g><use xlink:href="#MJMAIN-5D" x="20527" y="0"></use></g></svg></span><script type="math/tex" id="MathJax-Element-4">[p_0,          ..., p_{axis-1},        \hspace{1em}           indices[i],                           \hspace{1em}           p_{axis + 1}, ..., p_{N-1}]</script> </div>.<p>

In the general case, produces an output tensor where:

<span><span><span><span><span><span>o<span>u</span><span>t</span><span>p</span><span>u</span><span>t</span><span>[</span><span><span>p</span><span>0</span></span><span>,</span></span><span><span></span><span>.</span><span>.</span><span>.</span><span>,</span><span><span>p</span><span><span>a</span><span>x</span><span>i</span><span>s</span><span>−</span><span>1</span></span></span><span>,</span></span><span></span><span><span><span>i</span><span><span>B</span></span></span><span>,</span><span>.</span><span>.</span><span>.</span><span>,</span><span><span>i</span><span><span>M</span><span>−</span><span>1</span></span></span><span>,</span></span><span><span><span>p</span><span><span>a</span><span>x</span><span>i</span><span>s</span><span>+</span><span>1</span></span></span><span>,</span></span><span><span></span><span>.</span><span>.</span><span>.</span><span>,</span><span><span>p</span><span><span>N</span><span>−</span><span>1</span></span></span><span>]</span><span>=</span></span></span><span><span><span>p</span><span>a</span><span>r</span><span>a</span><span>m</span><span>s</span><span>[</span><span><span>p</span><span>0</span></span><span>,</span></span><span><span></span><span>.</span><span>.</span><span>.</span><span>,</span><span><span>p</span><span><span>a</span><span>x</span><span>i</span><span>s</span><span>−</span><span>1</span></span></span><span>,</span></span><span><span>i</span><span>n</span><span>d</span><span>i</span><span>c</span><span>e</span><span>s</span><span>[</span><span><span>p</span><span>0</span></span><span>,</span><span>.</span><span>.</span><span>.</span><span>,</span><span><span>p</span><span><span>B</span><span>−</span><span>1</span></span></span><span>,</span></span><span><span><span>i</span><span><span>B</span></span></span><span>,</span><span>.</span><span>.</span><span>.</span><span>,</span><span><span>i</span><span><span>M</span><span>−</span><span>1</span></span></span><span>]</span><span>,</span></span><span><span><span>p</span><span><span>a</span><span>x</span><span>i</span><span>s</span><span>+</span><span>1</span></span></span><span>,</span></span><span><span></span><span>.</span><span>.</span><span>.</span><span>,</span><span><span>p</span><span><span>N</span><span>−</span><span>1</span></span></span><span>]</span></span></span></span></span></span></span><div><span></span></div><script type="math/tex; mode=display" id="MathJax-Element-5">\begin{align*}output[p_0,             &..., p_{axis-1},                       &     &i_{B},           ..., i_{M-1},                          &     p_{axis + 1},    &..., p_{N-1}]                          = \\params[p_0,             &..., p_{axis-1},                       &     indices[p_0, ..., p_{B-1}, &i_{B}, ..., i_{M-1}],        &     p_{axis + 1},    &..., p_{N-1}]\end{align*}</script>

Where

<span><span><span>N</span></span></span><span><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="2.064ex" height="2.021ex" viewBox="0 -766.3 888.5 870.2" role="img" focusable="false" style="vertical-align: -0.241ex;"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-4E" x="0" y="0"></use></g></svg></span><script type="math/tex" id="MathJax-Element-6">N</script>

ndims(params)

<span><span><span>M</span></span></span><span><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="2.442ex" height="2.021ex" viewBox="0 -766.3 1051.5 870.2" role="img" focusable="false" style="vertical-align: -0.241ex;"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-4D" x="0" y="0"></use></g></svg></span><script type="math/tex" id="MathJax-Element-7">M</script>

ndims(indices)

<span></span><span><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.764ex" height="2.021ex" viewBox="0 -766.3 759.5 870.2" role="img" focusable="false" style="vertical-align: -0.241ex;"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-42" x="0" y="0"></use></g></svg></span><script type="math/tex" id="MathJax-Element-8">B</script>

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
