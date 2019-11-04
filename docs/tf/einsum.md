![](https://tensorflow.google.cn/images/tf_logo_32px.png)
A generalized contraction between tensors of arbitrary dimension.

### Aliases:

- [ `tf.compat.v1.einsum` ](/api_docs/python/tf/einsum)

- [ `tf.compat.v1.linalg.einsum` ](/api_docs/python/tf/einsum)

- [ `tf.compat.v2.einsum` ](/api_docs/python/tf/einsum)

- [ `tf.compat.v2.linalg.einsum` ](/api_docs/python/tf/einsum)

- [ `tf.linalg.einsum` ](/api_docs/python/tf/einsum)


```python
tf.einsum(
  equation,
  *inputs,
  **kwargs
)

```


### Used in the guide:

- [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)

### Used in the tutorials:

- [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)

This function returns a tensor whose elements are defined by  `equation` ,which is written in a shorthand form inspired by the Einstein summationconvention.  As an example, consider multiplying two matricesA and B to form a matrix C.  The elements of C are given by:


```python
&nbsp; C[i,k] = sum_j A[i,j] * B[j,k]

```


The corresponding  `equation`  is:


```python
&nbsp; ij,jk-&gt;ik

```


In general, the  `equation`  is obtained from the more familiar element-wiseequation by  1. removing variable names, brackets, and commas,  2. replacing "*" with ",",  3. dropping summation signs, and  4. moving the output to the right, and replacing "=" with "-&gt;".

Many common operations can be expressed in this way.  For example:


```python
# Matrix multiplication
&gt;&gt;&gt; einsum('ij,jk-&gt;ik', m0, m1) &nbsp;# output[i,k] = sum_j m0[i,j] * m1[j, k]

# Dot product
&gt;&gt;&gt; einsum('i,i-&gt;', u, v) &nbsp;# output = sum_i u[i]*v[i]

# Outer product
&gt;&gt;&gt; einsum('i,j-&gt;ij', u, v) &nbsp;# output[i,j] = u[i]*v[j]

# Transpose
&gt;&gt;&gt; einsum('ij-&gt;ji', m) &nbsp;# output[j,i] = m[i,j]

# Trace
&gt;&gt;&gt; einsum('ii', m) &nbsp;# output[j,i] = trace(m) = sum_i m[i, i]

# Batch matrix multiplication
&gt;&gt;&gt; einsum('aij,ajk-&gt;aik', s, t) &nbsp;# out[a,i,k] = sum_j s[a,i,j] * t[a, j, k]

```


To enable and control broadcasting, use an ellipsis.  For example, to dobatch matrix multiplication, you could use:


```python
>>" dir="ltr">einsum('...ij,...jk-&gt;...ik', u, v)
```


This function behaves like  `numpy.einsum` , but does not support:

- Subscripts where an axis appears more than once for a single input(e.g. <code translate="no" dir="ltr">ijj,k-&gt;ik</code>) unless it is a trace (e.g. <code translate="no" dir="ltr">ijji</code>).
#### Args:

- **`equation`** : a  `str`  describing the contraction, in the same format as `numpy.einsum` .

- **`*inputs`** : the inputs to contract (each one a  `Tensor` ), whose shapes shouldbe consistent with  `equation` .

- **`name`** : A name for the operation (optional).

#### Returns:

The contracted  `Tensor` , with shape determined by  `equation` .

#### Raises:

- ValueError</code></b>: If<ul><li>the format of <code translate="no" dir="ltr">equation</code> is incorrect,</li><li>the number of inputs implied by <code translate="no" dir="ltr">equation</code> does not match <code translate="no" dir="ltr">len(inputs)</code>,</li><li>an axis appears in the output subscripts but not in any of the inputs,</li><li>the number of dimensions of an input differs from the number ofindices in its subscript, or</li><li>the input shapes are inconsistent along a particular axis.