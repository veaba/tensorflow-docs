[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/v2/test)  
---  
  
Testing.

See the [Testing](https://tensorflow.org/api_docs/python/tf/test) guide.

**Note:** `tf.compat.v1.test.mock` is an alias to the python `mock` or
`unittest.mock` depending on the python version.

## Classes

[`class
Benchmark`](https://tensorflow.google.cn/api_docs/python/tf/test/Benchmark):
Abstract class that provides helpers for TensorFlow benchmarks.

[`class
TestCase`](https://tensorflow.google.cn/api_docs/python/tf/test/TestCase):
Base class for tests that need to test TensorFlow.

## Functions

[`assert_equal_graph_def(...)`](https://tensorflow.google.cn/api_docs/python/tf/test/assert_equal_graph_def):
Asserts that two `GraphDef`s are (mostly) the same.

[`benchmark_config(...)`](https://tensorflow.google.cn/api_docs/python/tf/test/benchmark_config):
Returns a tf.compat.v1.ConfigProto for disabling the dependency optimizer.

[`compute_gradient(...)`](https://tensorflow.google.cn/api_docs/python/tf/test/compute_gradient):
Computes the theoretical and numeric Jacobian of `f`.

[`create_local_cluster(...)`](https://tensorflow.google.cn/api_docs/python/tf/test/create_local_cluster):
Create and start local servers and return the associated `Server` objects.

[`gpu_device_name(...)`](https://tensorflow.google.cn/api_docs/python/tf/test/gpu_device_name):
Returns the name of a GPU device if available or the empty string.

[`is_built_with_cuda(...)`](https://tensorflow.google.cn/api_docs/python/tf/test/is_built_with_cuda):
Returns whether TensorFlow was built with CUDA (GPU) support.

[`is_built_with_gpu_support(...)`](https://tensorflow.google.cn/api_docs/python/tf/test/is_built_with_gpu_support):
Returns whether TensorFlow was built with GPU (i.e. CUDA or ROCm) support.

[`is_built_with_rocm(...)`](https://tensorflow.google.cn/api_docs/python/tf/test/is_built_with_rocm):
Returns whether TensorFlow was built with ROCm (GPU) support.

[`is_gpu_available(...)`](https://tensorflow.google.cn/api_docs/python/tf/test/is_gpu_available):
Returns whether TensorFlow can access a GPU.

[`main(...)`](https://tensorflow.google.cn/api_docs/python/tf/test/main): Runs
all unit tests.

