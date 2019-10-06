
Returns whether TensorFlow can access a GPU.
### Aliases:
- `tf.compat.v1.test.is_gpu_available`
- `tf.compat.v2.test.is_gpu_available`

```
 tf.test.is_gpu_available(
    cuda_only=False,
    min_cuda_compute_capability=None
)
```
#### Args:
- `cuda_only`: limit the search to CUDA GPUs.
- `min_cuda_compute_capability`: a (major,minor) pair that indicates the minimum CUDA compute capability required, or None if no requirement.

Note that the keyword arg name "cuda_only" is misleading (since routine will return true when a GPU device is available irrespective of whether TF was built with CUDA support or ROCm support. However no changes here because

++ Changing the name "cuda_only" to something more generic would break backward compatibility

++ Adding an equivalent "rocm_only" would require the implementation check the build type. This in turn would require doing the same for CUDA and thus potentially break backward compatibility

++ Adding a new "cuda_or_rocm_only" would not break backward compatibility, but would require most (if not all) callers to update the call to use "cuda_or_rocm_only" instead of "cuda_only"
#### Returns:

True if a GPU device of the requested kind is available.
