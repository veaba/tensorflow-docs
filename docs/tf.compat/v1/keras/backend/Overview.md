
Keras backend API.
## Classes
[class name_scope](https://www.tensorflow.org/api_docs/python/tf/compat/v1/keras/backend/name_scope): A context manager for use when defining a Python op.

## Functions
[abs(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/abs): Element-wise absolute value.

[all(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/all): Bitwise reduction (logical AND).

[any(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/any): Bitwise reduction (logical OR).

[arange(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/arange): Creates a 1D tensor containing a sequence of integers.

[argmax(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/argmax): Returns the index of the maximum value along an axis.

[argmin(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/argmin): Returns the index of the minimum value along an axis.

[backend(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/backend): Publicly accessible method for determining the current backend.

[batch_dot(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/batch_dot): Batchwise dot product.

[batch_flatten(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/batch_flatten): Turn a nD tensor into a 2D tensor with same 0th dimension.

[batch_get_value(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/batch_get_value): Returns the value of more than one tensor variable.

[batch_normalization(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/batch_normalization): Applies batch normalization on x given mean, var, beta and gamma.

[batch_set_value(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/batch_set_value): Sets the values of many tensor variables at once.

[bias_add(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/bias_add): Adds a bias vector to a tensor.

[binary_crossentropy(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/binary_crossentropy): Binary crossentropy between an output tensor and a target tensor.

[cast(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/cast): Casts a tensor to a different dtype and returns it.

[cast_to_floatx(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/cast_to_floatx): Cast a Numpy array to the default Keras float type.

[categorical_crossentropy(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/categorical_crossentropy): Categorical crossentropy between an output tensor and a target tensor.

[clear_session(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/clear_session): Destroys the current TF graph and creates a new one.

[clip(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/clip): Element-wise value clipping.

[concatenate(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/concatenate): Concatenates a list of tensors alongside the specified axis.

[constant(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/constant): Creates a constant tensor.

[conv1d(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/conv1d): 1D convolution.

[conv2d(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/conv2d): 2D convolution.

[conv2d_transpose(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/conv2d_transpose): 2D deconvolution (i.e.

[conv3d(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/conv3d): 3D convolution.

[cos(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/cos): Computes cos of x element-wise.

[count_params(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/count_params): Returns the static number of elements in a variable or tensor.

[ctc_batch_cost(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/ctc_batch_cost): Runs CTC loss algorithm on each batch element.

[ctc_decode(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/ctc_decode): Decodes the output of a softmax.

[ctc_label_dense_to_sparse(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/ctc_label_dense_to_sparse): Converts CTC labels from dense to sparse.

[cumprod(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/cumprod): Cumulative product of the values in a tensor, alongside the specified axis.

[cumsum(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/cumsum): Cumulative sum of the values in a tensor, alongside the specified axis.

[dot(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/dot): Multiplies 2 tensors (and/or variables) and returns a tensor.

[dropout(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/dropout): Sets entries in x to zero at random, while scaling the entire tensor.

[dtype(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/dtype): Returns the dtype of a Keras tensor or variable, as a string.

[elu(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/elu): Exponential linear unit.

[epsilon(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/epsilon): Returns the value of the fuzz factor used in numeric expressions.

[equal(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/equal): Element-wise equality between two tensors.

[eval(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/eval): Evaluates the value of a variable.

[exp(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/exp): Element-wise exponential.

[expand_dims(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/expand_dims): Adds a 1-sized dimension at index "axis".

[eye(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/eye): Instantiate an identity matrix and returns it.

[flatten(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/flatten): Flatten a tensor.

[floatx(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/floatx): Returns the default float type, as a string.

[foldl(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/foldl): Reduce elems using fn to combine them from left to right.

[foldr(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/foldr): Reduce elems using fn to combine them from right to left.

[function(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/function): Instantiates a Keras function.

[gather(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/gather): Retrieves the elements of indices indices in the tensor reference.

[get_session(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/keras/backend/get_session): Returns the TF session to be used by the backend.

[get_uid(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/get_uid): Associates a string prefix with an integer counter in a TensorFlow graph.

[get_value(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/get_value): Returns the value of a variable.

[gradients(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/gradients): Returns the gradients of loss w.r.t. variables.

[greater(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/greater): Element-wise truth value of (x > y).

[greater_equal(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/greater_equal): Element-wise truth value of (x >= y).

[hard_sigmoid(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/hard_sigmoid): Segment-wise linear approximation of sigmoid.

[image_data_format(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/image_data_format): Returns the default image data format convention.

[in_test_phase(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/in_test_phase): Selects x in test phase, and alt otherwise.

[in_top_k(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/in_top_k): Returns whether the targets are in the top k predictions.

[in_train_phase(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/in_train_phase): Selects x in train phase, and alt otherwise.

[int_shape(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/int_shape): Returns the shape of tensor or variable as a tuple of int or None entries.

[is_keras_tensor(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/is_keras_tensor): Returns whether x is a Keras tensor.

[is_sparse(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/is_sparse): Returns whether a tensor is a sparse tensor.

[l2_normalize(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/l2_normalize): Normalizes a tensor wrt the L2 norm alongside the specified axis.

[learning_phase(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/learning_phase): Returns the learning phase flag.

[learning_phase_scope(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/learning_phase_scope): Provides a scope within which the learning phase is equal to value.

[less(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/less): Element-wise truth value of (x < y).

[less_equal(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/less_equal): Element-wise truth value of (x <= y).

[local_conv1d(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/local_conv1d): Apply 1D conv with un-shared weights.

[local_conv2d(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/local_conv2d): Apply 2D conv with un-shared weights.

[log(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/log): Element-wise log.

[manual_variable_initialization(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/manual_variable_initialization): Sets the manual variable initialization flag.

[map_fn(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/map_fn): Map the function fn over the elements elems and return the outputs.

[max(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/max): Maximum value in a tensor.

[maximum(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/maximum): Element-wise maximum of two tensors.

[mean(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/mean): Mean of a tensor, alongside the specified axis.

[min(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/min): Minimum value in a tensor.

[minimum(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/minimum): Element-wise minimum of two tensors.

[moving_average_update(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/moving_average_update): Compute the moving average of a variable.

[ndim(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/ndim): Returns the number of axes in a tensor, as an integer.

[normalize_batch_in_training(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/normalize_batch_in_training): Computes mean and std for batch then apply batch_normalization on batch.

[not_equal(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/not_equal): Element-wise inequality between two tensors.

[one_hot(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/one_hot): Computes the one-hot representation of an integer tensor.

[ones(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/ones): Instantiates an all-ones variable and returns it.

[ones_like(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/ones_like): Instantiates an all-ones variable of the same shape as another tensor.

[permute_dimensions(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/permute_dimensions): Permutes axes in a tensor.

[placeholder(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/placeholder): Instantiates a placeholder tensor and returns it.

[pool2d(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/pool2d): 2D Pooling.

[pool3d(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/pool3d): 3D Pooling.

[pow(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/pow): Element-wise exponentiation.

[print_tensor(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/print_tensor): Prints message and the tensor value when evaluated.

[prod(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/prod): Multiplies the values in a tensor, alongside the specified axis.

[random_binomial(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/random_binomial): Returns a tensor with random binomial distribution of values.

[random_normal(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/random_normal): Returns a tensor with normal distribution of values.

[random_normal_variable(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/random_normal_variable): Instantiates a variable with values drawn from a normal distribution.

[random_uniform(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/random_uniform): Returns a tensor with uniform distribution of values.

[random_uniform_variable(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/random_uniform_variable): Instantiates a variable with values drawn from a uniform distribution.

[relu(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/relu): Rectified linear unit.

[repeat(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/repeat): Repeats a 2D tensor.

[repeat_elements(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/repeat_elements): Repeats the elements of a tensor along an axis, like np.repeat.

[reset_uids(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/reset_uids): Resets graph identifiers.

[reshape(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/reshape): Reshapes a tensor to the specified shape.

[resize_images(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/resize_images): Resizes the images contained in a 4D tensor.

[resize_volumes(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/resize_volumes): Resizes the volume contained in a 5D tensor.

[reverse(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/reverse): Reverse a tensor along the specified axes.

[rnn(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/rnn): Iterates over the time dimension of a tensor.

[round(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/round): Element-wise rounding to the closest integer.

[separable_conv2d(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/separable_conv2d): 2D convolution with separable filters.

[set_epsilon(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/set_epsilon): Sets the value of the fuzz factor used in numeric expressions.

[set_floatx(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/set_floatx): Sets the default float type.

[set_image_data_format(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/set_image_data_format): Sets the value of the image data format convention.

[set_learning_phase(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/set_learning_phase): Sets the learning phase to a fixed value.

[set_session(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/keras/backend/set_session): Sets the global TensorFlow session.

[set_value(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/set_value): Sets the value of a variable, from a Numpy array.

[shape(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/shape): Returns the symbolic shape of a tensor or variable.

[sigmoid(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/sigmoid): Element-wise sigmoid.

[sign(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/sign): Element-wise sign.

[sin(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/sin): Computes sin of x element-wise.

[softmax(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/softmax): Softmax of a tensor.

[softplus(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/softplus): Softplus of a tensor.

[softsign(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/softsign): Softsign of a tensor.

[sparse_categorical_crossentropy(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/sparse_categorical_crossentropy): Categorical crossentropy with integer targets.

[spatial_2d_padding(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/spatial_2d_padding): Pads the 2nd and 3rd dimensions of a 4D tensor.

[spatial_3d_padding(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/spatial_3d_padding): Pads 5D tensor with zeros along the depth, height, width dimensions.

[sqrt(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/sqrt): Element-wise square root.

[square(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/square): Element-wise square.

[squeeze(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/squeeze): Removes a 1-dimension from the tensor at index "axis".

[stack(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/stack): Stacks a list of rank R tensors into a rank R+1 tensor.

[std(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/std): Standard deviation of a tensor, alongside the specified axis.

[stop_gradient(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/stop_gradient): Returns variables but with zero gradient w.r.t. every other variable.

[sum(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/sum): Sum of the values in a tensor, alongside the specified axis.

[switch(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/switch): Switches between two operations depending on a scalar value.

[tanh(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/tanh): Element-wise tanh.

[temporal_padding(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/temporal_padding): Pads the middle dimension of a 3D tensor.

[tile(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/tile): Creates a tensor by tiling x by n.

[to_dense(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/to_dense): Converts a sparse tensor into a dense tensor and returns it.

[transpose(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/transpose): Transposes a tensor and returns it.

[truncated_normal(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/truncated_normal): Returns a tensor with truncated random normal distribution of values.

[update(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/update)

[update_add(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/update_add): Update the value of x by adding increment.

[update_sub(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/update_sub): Update the value of x by subtracting decrement.

[var(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/var): Variance of a tensor, alongside the specified axis.

[variable(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/variable): Instantiates a variable and returns it.

[zeros(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/zeros): Instantiates an all-zeros variable and returns it.

[zeros_like(...)](https://www.tensorflow.org/api_docs/python/tf/keras/backend/zeros_like): Instantiates an all-zeros variable of the same shape as another tensor.

