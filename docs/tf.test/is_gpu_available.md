返回TensorFlow是否可以访问GPU。

**别名** : [ `tf.compat.v1.test.is_gpu_available` ](/api_docs/python/tf/test/is_gpu_available), [ `tf.compat.v2.test.is_gpu_available` ](/api_docs/python/tf/test/is_gpu_available)

```
 tf.test.is_gpu_available(    cuda_only=False,    min_cuda_compute_capability=None) 
```


**Warning:**  if a non-GPU version of the package is installed, the function wouldalso return False. Use [ `tf.test.is_built_with_cuda` ](https://tensorflow.google.cn/api_docs/python/tf/test/is_built_with_cuda) to validate if TensorFlowwas build with CUDA support.


#### 参数：
- **`cuda_only`** : limit the search to CUDA GPUs.
- **`min_cuda_compute_capability`** : a (major,minor) pair that indicates the minimumCUDA compute capability required, or None if no requirement.
Note that the keyword arg name "cuda_only" is misleading (since routine willreturn true when a GPU device is available irrespective of whether TF wasbuilt with CUDA support or ROCm support. However no changes here because

++ Changing the name "cuda_only" to something more generic would break   backward compatibility

++ Adding an equivalent "rocm_only" would require the implementation check   the build type. This in turn would require doing the same for CUDA and thus   potentially break backward compatibility

++ Adding a new "cuda_or_rocm_only" would not break backward compatibility,   but would require most (if not all) callers to update the call to use   "cuda_or_rocm_only" instead of "cuda_only"

#### 返回：
如果请求类型的GPU设备可用，则为true。

