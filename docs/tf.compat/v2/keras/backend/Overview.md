[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/v2/keras/backend)  
---  
  
Keras backend API.

## Functions

[`abs(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/abs):
Element-wise absolute value.

[`all(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/all):
Bitwise reduction (logical AND).

[`any(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/any):
Bitwise reduction (logical OR).

[`arange(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/arange):
Creates a 1D tensor containing a sequence of integers.

[`argmax(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/argmax):
Returns the index of the maximum value along an axis.

[`argmin(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/argmin):
Returns the index of the minimum value along an axis.

[`backend(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/backend):
Publicly accessible method for determining the current backend.

[`batch_dot(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/batch_dot):
Batchwise dot product.

[`batch_flatten(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/batch_flatten):
Turn a nD tensor into a 2D tensor with same 0th dimension.

[`batch_get_value(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/batch_get_value):
Returns the value of more than one tensor variable.

[`batch_normalization(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/batch_normalization):
Applies batch normalization on x given mean, var, beta and gamma.

[`batch_set_value(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/batch_set_value):
Sets the values of many tensor variables at once.

[`bias_add(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/bias_add):
Adds a bias vector to a tensor.

[`binary_crossentropy(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/binary_crossentropy):
Binary crossentropy between an output tensor and a target tensor.

[`cast(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/cast):
Casts a tensor to a different dtype and returns it.

[`cast_to_floatx(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/cast_to_floatx):
Cast a Numpy array to the default Keras float type.

[`categorical_crossentropy(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/categorical_crossentropy):
Categorical crossentropy between an output tensor and a target tensor.

[`clear_session(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/clear_session):
Destroys the current TF graph and creates a new one.

[`clip(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/clip):
Element-wise value clipping.

[`concatenate(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/concatenate):
Concatenates a list of tensors alongside the specified axis.

[`constant(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/constant):
Creates a constant tensor.

[`conv1d(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/conv1d):
1D convolution.

[`conv2d(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/conv2d):
2D convolution.

[`conv2d_transpose(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/conv2d_transpose):
2D deconvolution (i.e.

[`conv3d(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/conv3d):
3D convolution.

[`cos(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/cos):
Computes cos of x element-wise.

[`count_params(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/count_params):
Returns the static number of elements in a variable or tensor.

[`ctc_batch_cost(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/ctc_batch_cost):
Runs CTC loss algorithm on each batch element.

[`ctc_decode(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/ctc_decode):
Decodes the output of a softmax.

[`ctc_label_dense_to_sparse(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/ctc_label_dense_to_sparse):
Converts CTC labels from dense to sparse.

[`cumprod(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/cumprod):
Cumulative product of the values in a tensor, alongside the specified axis.

[`cumsum(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/cumsum):
Cumulative sum of the values in a tensor, alongside the specified axis.

[`dot(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/dot):
Multiplies 2 tensors (and/or variables) and returns a _tensor_.

[`dropout(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/dropout):
Sets entries in `x` to zero at random, while scaling the entire tensor.

[`dtype(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/dtype):
Returns the dtype of a Keras tensor or variable, as a string.

[`elu(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/elu):
Exponential linear unit.

[`epsilon(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/epsilon):
Returns the value of the fuzz factor used in numeric expressions.

[`equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/equal):
Element-wise equality between two tensors.

[`eval(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/eval):
Evaluates the value of a variable.

[`exp(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/exp):
Element-wise exponential.

[`expand_dims(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/expand_dims):
Adds a 1-sized dimension at index "axis".

[`eye(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/eye):
Instantiate an identity matrix and returns it.

[`flatten(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/flatten):
Flatten a tensor.

[`floatx(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/floatx):
Returns the default float type, as a string.

[`foldl(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/foldl):
Reduce elems using fn to combine them from left to right.

[`foldr(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/foldr):
Reduce elems using fn to combine them from right to left.

[`function(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/function):
Instantiates a Keras function.

[`gather(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/gather):
Retrieves the elements of indices `indices` in the tensor `reference`.

[`get_uid(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/get_uid):
Associates a string prefix with an integer counter in a TensorFlow graph.

[`get_value(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/get_value):
Returns the value of a variable.

[`gradients(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/gradients):
Returns the gradients of `loss` w.r.t. `variables`.

[`greater(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/greater):
Element-wise truth value of (x > y).

[`greater_equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/greater_equal):
Element-wise truth value of (x >= y).

[`hard_sigmoid(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/hard_sigmoid):
Segment-wise linear approximation of sigmoid.

[`image_data_format(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/image_data_format):
Returns the default image data format convention.

[`in_test_phase(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/in_test_phase):
Selects `x` in test phase, and `alt` otherwise.

[`in_top_k(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/in_top_k):
Returns whether the `targets` are in the top `k` `predictions`.

[`in_train_phase(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/in_train_phase):
Selects `x` in train phase, and `alt` otherwise.

[`int_shape(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/int_shape):
Returns the shape of tensor or variable as a tuple of int or None entries.

[`is_keras_tensor(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/is_keras_tensor):
Returns whether `x` is a Keras tensor.

[`is_sparse(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/is_sparse):
Returns whether a tensor is a sparse tensor.

[`l2_normalize(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/l2_normalize):
Normalizes a tensor wrt the L2 norm alongside the specified axis.

[`learning_phase(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/learning_phase):
Returns the learning phase flag.

[`learning_phase_scope(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/learning_phase_scope):
Provides a scope within which the learning phase is equal to `value`.

[`less(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/less):
Element-wise truth value of (x < y).

[`less_equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/less_equal):
Element-wise truth value of (x <= y).

[`local_conv1d(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/local_conv1d):
Apply 1D conv with un-shared weights.

[`local_conv2d(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/local_conv2d):
Apply 2D conv with un-shared weights.

[`log(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/log):
Element-wise log.

[`manual_variable_initialization(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/manual_variable_initialization):
Sets the manual variable initialization flag.

[`map_fn(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/map_fn):
Map the function fn over the elements elems and return the outputs.

[`max(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/max):
Maximum value in a tensor.

[`maximum(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/maximum):
Element-wise maximum of two tensors.

[`mean(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/mean):
Mean of a tensor, alongside the specified axis.

[`min(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/min):
Minimum value in a tensor.

[`minimum(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/minimum):
Element-wise minimum of two tensors.

[`moving_average_update(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/moving_average_update):
Compute the moving average of a variable.

[`name_scope(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/name_scope):
A context manager for use when defining a Python op.

[`ndim(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/ndim):
Returns the number of axes in a tensor, as an integer.

[`normalize_batch_in_training(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/normalize_batch_in_training):
Computes mean and std for batch then apply batch_normalization on batch.

[`not_equal(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/not_equal):
Element-wise inequality between two tensors.

[`one_hot(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/one_hot):
Computes the one-hot representation of an integer tensor.

[`ones(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/ones):
Instantiates an all-ones variable and returns it.

[`ones_like(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/ones_like):
Instantiates an all-ones variable of the same shape as another tensor.

[`permute_dimensions(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/permute_dimensions):
Permutes axes in a tensor.

[`placeholder(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/placeholder):
Instantiates a placeholder tensor and returns it.

[`pool2d(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/pool2d):
2D Pooling.

[`pool3d(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/pool3d):
3D Pooling.

[`pow(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/pow):
Element-wise exponentiation.

[`print_tensor(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/print_tensor):
Prints `message` and the tensor value when evaluated.

[`prod(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/prod):
Multiplies the values in a tensor, alongside the specified axis.

[`random_binomial(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/random_binomial):
Returns a tensor with random binomial distribution of values.

[`random_normal(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/random_normal):
Returns a tensor with normal distribution of values.

[`random_normal_variable(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/random_normal_variable):
Instantiates a variable with values drawn from a normal distribution.

[`random_uniform(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/random_uniform):
Returns a tensor with uniform distribution of values.

[`random_uniform_variable(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/random_uniform_variable):
Instantiates a variable with values drawn from a uniform distribution.

[`relu(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/relu):
Rectified linear unit.

[`repeat(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/repeat):
Repeats a 2D tensor.

[`repeat_elements(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/repeat_elements):
Repeats the elements of a tensor along an axis, like `np.repeat`.

[`reset_uids(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/reset_uids):
Resets graph identifiers.

[`reshape(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/reshape):
Reshapes a tensor to the specified shape.

[`resize_images(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/resize_images):
Resizes the images contained in a 4D tensor.

[`resize_volumes(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/resize_volumes):
Resizes the volume contained in a 5D tensor.

[`reverse(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/reverse):
Reverse a tensor along the specified axes.

[`rnn(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/rnn):
Iterates over the time dimension of a tensor.

[`round(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/round):
Element-wise rounding to the closest integer.

[`separable_conv2d(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/separable_conv2d):
2D convolution with separable filters.

[`set_epsilon(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/set_epsilon):
Sets the value of the fuzz factor used in numeric expressions.

[`set_floatx(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/set_floatx):
Sets the default float type.

[`set_image_data_format(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/set_image_data_format):
Sets the value of the image data format convention.

[`set_learning_phase(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/set_learning_phase):
Sets the learning phase to a fixed value.

[`set_value(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/set_value):
Sets the value of a variable, from a Numpy array.

[`shape(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/shape):
Returns the symbolic shape of a tensor or variable.

[`sigmoid(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/sigmoid):
Element-wise sigmoid.

[`sign(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/sign):
Element-wise sign.

[`sin(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/sin):
Computes sin of x element-wise.

[`softmax(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/softmax):
Softmax of a tensor.

[`softplus(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/softplus):
Softplus of a tensor.

[`softsign(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/softsign):
Softsign of a tensor.

[`sparse_categorical_crossentropy(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/sparse_categorical_crossentropy):
Categorical crossentropy with integer targets.

[`spatial_2d_padding(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/spatial_2d_padding):
Pads the 2nd and 3rd dimensions of a 4D tensor.

[`spatial_3d_padding(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/spatial_3d_padding):
Pads 5D tensor with zeros along the depth, height, width dimensions.

[`sqrt(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/sqrt):
Element-wise square root.

[`square(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/square):
Element-wise square.

[`squeeze(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/squeeze):
Removes a 1-dimension from the tensor at index "axis".

[`stack(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/stack):
Stacks a list of rank `R` tensors into a rank `R+1` tensor.

[`std(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/std):
Standard deviation of a tensor, alongside the specified axis.

[`stop_gradient(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/stop_gradient):
Returns `variables` but with zero gradient w.r.t. every other variable.

[`sum(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/sum):
Sum of the values in a tensor, alongside the specified axis.

[`switch(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/switch):
Switches between two operations depending on a scalar value.

[`tanh(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/tanh):
Element-wise tanh.

[`temporal_padding(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/temporal_padding):
Pads the middle dimension of a 3D tensor.

[`tile(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/tile):
Creates a tensor by tiling `x` by `n`.

[`to_dense(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/to_dense):
Converts a sparse tensor into a dense tensor and returns it.

[`transpose(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/transpose):
Transposes a tensor and returns it.

[`truncated_normal(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/truncated_normal):
Returns a tensor with truncated random normal distribution of values.

[`update(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/update)

[`update_add(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/update_add):
Update the value of `x` by adding `increment`.

[`update_sub(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/update_sub):
Update the value of `x` by subtracting `decrement`.

[`var(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/var):
Variance of a tensor, alongside the specified axis.

[`variable(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/variable):
Instantiates a variable and returns it.

[`zeros(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/zeros):
Instantiates an all-zeros variable and returns it.

[`zeros_like(...)`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/zeros_like):
Instantiates an all-zeros variable of the same shape as another tensor.

