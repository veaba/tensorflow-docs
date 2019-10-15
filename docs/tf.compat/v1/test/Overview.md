
Testing.
[Testing](https://tensorflow.org/api_docs/python/tf/test)See the  guide.

## Classes
[class Benchmark](https://www.tensorflow.org/api_docs/python/tf/test/Benchmark): Abstract class that provides helpers for TensorFlow benchmarks.

[class StubOutForTesting](https://www.tensorflow.org/api_docs/python/tf/compat/v1/test/StubOutForTesting): Support class for stubbing methods out for unit testing.

[class TestCase](https://www.tensorflow.org/api_docs/python/tf/test/TestCase): Base class for tests that need to test TensorFlow.

## Functions
[assert_equal_graph_def(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/test/assert_equal_graph_def): Asserts that two GraphDefs are (mostly) the same.

[benchmark_config(...)](https://www.tensorflow.org/api_docs/python/tf/test/benchmark_config): Returns a tf.compat.v1.ConfigProto for disabling the dependency optimizer.

[compute_gradient(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/test/compute_gradient): Computes and returns the theoretical and numerical Jacobian. (deprecated)

[compute_gradient_error(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/test/compute_gradient_error): Computes the gradient error. (deprecated)

[create_local_cluster(...)](https://www.tensorflow.org/api_docs/python/tf/test/create_local_cluster): Create and start local servers and return the associated Server objects.

[get_temp_dir(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/test/get_temp_dir): Returns a temporary directory for use during tests.

[gpu_device_name(...)](https://www.tensorflow.org/api_docs/python/tf/test/gpu_device_name): Returns the name of a GPU device if available or the empty string.

[is_built_with_cuda(...)](https://www.tensorflow.org/api_docs/python/tf/test/is_built_with_cuda): Returns whether TensorFlow was built with CUDA (GPU) support.

[is_built_with_gpu_support(...)](https://www.tensorflow.org/api_docs/python/tf/test/is_built_with_gpu_support): Returns whether TensorFlow was built with GPU (i.e. CUDA or ROCm) support.

[is_built_with_rocm(...)](https://www.tensorflow.org/api_docs/python/tf/test/is_built_with_rocm): Returns whether TensorFlow was built with ROCm (GPU) support.

[is_gpu_available(...)](https://www.tensorflow.org/api_docs/python/tf/test/is_gpu_available): Returns whether TensorFlow can access a GPU.

[main(...)](https://www.tensorflow.org/api_docs/python/tf/test/main): Runs all unit tests.

[test_src_dir_path(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/test/test_src_dir_path): Creates an absolute test srcdir path given a relative path.

