Samples a set of classes using a log-uniform (Zipfian) base distribution.
### Aliases:
- `tf.compat.v1.nn.log_uniform_candidate_sampler`
- `tf.compat.v1.random.log_uniform_candidate_sampler`
- `tf.compat.v2.random.log_uniform_candidate_sampler`

```
 tf.random.log_uniform_candidate_sampler(
    true_classes,
    num_true,
    num_sampled,
    unique,
    range_max,
    seed=None,
    name=None
)
```
This operation randomly samples a tensor of sampled classes (`sampled_candidates`) from the range of integers `[0, range_max)`.
The elements of `sampled_candidates` are drawn without replacement (if `unique=True`) or with replacement (if `unique=False`) from the base distribution.
The base distribution for this operation is an approximately log-uniform or Zipfian distribution:
