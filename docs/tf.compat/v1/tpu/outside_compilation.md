Builds part of a computation outside any current TPU replicate scope.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.tpu.outside_compilation(
    computation,
    *args,
    **kwargs
)
</code></pre></devsite-code>


#### Args:

- **`computation`** : A Python function that builds the computation to
place on the host.

- **`*args`** : the positional arguments for the computation.

- **`**kwargs`** : the keyword arguments for the computation.



#### Returns:
The Tensors returned by computation.

