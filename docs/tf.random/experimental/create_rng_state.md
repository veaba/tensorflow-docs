Creates a RNG state.



### Aliases:

- [ `tf.compat.v1.random.experimental.create_rng_state` ](/api_docs/python/tf/random/experimental/create_rng_state)

- [ `tf.compat.v2.random.experimental.create_rng_state` ](/api_docs/python/tf/random/experimental/create_rng_state)


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.random.experimental.create_rng_state(
    seed,
    algorithm
)
</code></pre></devsite-code>


#### Args:

- **`seed`** : an integer or 1-D tensor.

- **`algorithm`** : an integer representing the RNG algorithm.



#### Returns:
a 1-D tensor whose size depends on the algorithm.

