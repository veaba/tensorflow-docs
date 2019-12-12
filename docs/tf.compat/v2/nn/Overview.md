原始神经网络（nn）操作的包装器。

## Class 
[ `class RNNCellDeviceWrapper` ](https://tensorflow.google.cn/api_docs/python/tf/nn/RNNCellDeviceWrapper): Operator that ensures an RNNCell runs on a particular device.

[ `class RNNCellDropoutWrapper` ](https://tensorflow.google.cn/api_docs/python/tf/nn/RNNCellDropoutWrapper): Operator adding dropout to inputs and outputs of the given cell.

[ `class RNNCellResidualWrapper` ](https://tensorflow.google.cn/api_docs/python/tf/nn/RNNCellResidualWrapper): RNNCell wrapper that ensures cell inputs are added to the outputs.

## 功能
[ `all_candidate_sampler(...)` ](https://tensorflow.google.cn/api_docs/python/tf/random/all_candidate_sampler): Generate the set of all classes.

[ `atrous_conv2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/atrous_conv2d): Atrous convolution (a.k.a. convolution with holes or dilated convolution).

[ `atrous_conv2d_transpose(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/atrous_conv2d_transpose): The transpose of  `atrous_conv2d` .

[ `avg_pool(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/avg_pool): Performs the avg pooling on the input.

[ `avg_pool1d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/avg_pool1d): Performs the average pooling on the input.

[ `avg_pool2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/avg_pool2d): Performs the average pooling on the input.

[ `avg_pool3d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/avg_pool3d): Performs the average pooling on the input.

[ `batch_norm_with_global_normalization(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/batch_norm_with_global_normalization): Batch normalization.

[ `batch_normalization(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/batch_normalization): Batch normalization.

[ `bias_add(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/bias_add): Adds  `bias`  to  `value` .

[ `collapse_repeated(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/collapse_repeated): Merge repeated labels into single labels.

[ `compute_accidental_hits(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/compute_accidental_hits): Compute the position ids in  `sampled_candidates`  matching  `true_classes` .

[ `compute_average_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/compute_average_loss): Scales per-example losses with sample_weights and computes their average.

[ `conv1d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/conv1d): Computes a 1-D convolution given 3-D input and filter tensors.

[ `conv1d_transpose(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/conv1d_transpose): The transpose of  `conv1d` .

[ `conv2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/conv2d): Computes a 2-D convolution given 4-D  `input`  and  `filters`  tensors.

[ `conv2d_transpose(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/conv2d_transpose): The transpose of  `conv2d` .

[ `conv3d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/conv3d): Computes a 3-D convolution given 5-D  `input`  and  `filters`  tensors.

[ `conv3d_transpose(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/conv3d_transpose): The transpose of  `conv3d` .

[ `conv_transpose(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/conv_transpose): The transpose of  `convolution` .

[ `convolution(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/convolution): Computes sums of N-D convolutions (actually cross-correlation).

[ `crelu(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/crelu): Computes Concatenated ReLU.

[ `ctc_beam_search_decoder(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/ctc_beam_search_decoder): Performs beam search decoding on the logits given in input.

[ `ctc_greedy_decoder(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/ctc_greedy_decoder): Performs greedy decoding on the logits given in input (best path).

[ `ctc_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/ctc_loss): Computes CTC (Connectionist Temporal Classification) loss.

[ `ctc_unique_labels(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/ctc_unique_labels): Get unique labels and indices for batched labels for [ `tf.nn.ctc_loss` ](https://tensorflow.google.cn/api_docs/python/tf/nn/ctc_loss).

[ `depth_to_space(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/depth_to_space): DepthToSpace for tensors of type T.

[ `depthwise_conv2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/depthwise_conv2d): Depthwise 2-D convolution.

[ `depthwise_conv2d_backprop_filter(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/depthwise_conv2d_backprop_filter): Computes the gradients of depthwise convolution with respect to the filter.

[ `depthwise_conv2d_backprop_input(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/depthwise_conv2d_backprop_input): Computes the gradients of depthwise convolution with respect to the input.

[ `dilation2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/dilation2d): Computes the grayscale dilation of 4-D  `input`  and 3-D  `filters`  tensors.

[ `dropout(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/dropout): Computes dropout.

[ `elu(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/elu): Computes exponential linear:  `exp(features) - 1`  if < 0,  `features`  otherwise.

[ `embedding_lookup(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/embedding_lookup): Looks up  `ids`  in a list of embedding tensors.

[ `embedding_lookup_sparse(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/embedding_lookup_sparse): Computes embeddings for the given ids and weights.

[ `erosion2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/erosion2d): Computes the grayscale erosion of 4-D  `value`  and 3-D  `filters`  tensors.

[ `fixed_unigram_candidate_sampler(...)` ](https://tensorflow.google.cn/api_docs/python/tf/random/fixed_unigram_candidate_sampler): Samples a set of classes using the provided (fixed) base distribution.

[ `fractional_avg_pool(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/fractional_avg_pool): Performs fractional average pooling on the input.

[ `fractional_max_pool(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/fractional_max_pool): Performs fractional max pooling on the input.

[ `in_top_k(...)` ](https://tensorflow.google.cn/api_docs/python/tf/math/in_top_k): Says whether the targets are in the top  `K`  predictions.

[ `l2_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/l2_loss): L2 Loss.

[ `l2_normalize(...)` ](https://tensorflow.google.cn/api_docs/python/tf/math/l2_normalize): Normalizes along dimension  `axis`  using an L2 norm.

[ `leaky_relu(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/leaky_relu): Compute the Leaky ReLU activation function.

[ `learned_unigram_candidate_sampler(...)` ](https://tensorflow.google.cn/api_docs/python/tf/random/learned_unigram_candidate_sampler): Samples a set of classes from a distribution learned during training.

[ `local_response_normalization(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/local_response_normalization): Local Response Normalization.

[ `log_poisson_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/log_poisson_loss): Computes log Poisson loss given  `log_input` .

[ `log_softmax(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/log_softmax): Computes log softmax activations.

[ `lrn(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/local_response_normalization): Local Response Normalization.

[ `max_pool(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/max_pool): Performs the max pooling on the input.

[ `max_pool1d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/max_pool1d): Performs the max pooling on the input.

[ `max_pool2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/max_pool2d): Performs the max pooling on the input.

[ `max_pool3d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/max_pool3d): Performs the max pooling on the input.

[ `max_pool_with_argmax(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/max_pool_with_argmax): Performs max pooling on the input and outputs both max values and indices.

[ `moments(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/moments): Calculates the mean and variance of  `x` .

[ `nce_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/nce_loss): Computes and returns the noise-contrastive estimation training loss.

[ `normalize_moments(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/normalize_moments): Calculate the mean and variance of based on the sufficient statistics.

[ `pool(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/pool): Performs an N-D pooling operation.

[ `relu(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/relu): Computes rectified linear:  `max(features, 0)` .

[ `relu6(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/relu6): Computes Rectified Linear 6:  `min(max(features, 0), 6)` .

[ `safe_embedding_lookup_sparse(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/safe_embedding_lookup_sparse): Lookup embedding results, accounting for invalid IDs and empty features.

[ `sampled_softmax_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/sampled_softmax_loss): Computes and returns the sampled softmax training loss.

[ `scale_regularization_loss(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/scale_regularization_loss): Scales the sum of the given regularization losses by number of replicas.

[ `selu(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/selu): Computes scaled exponential linear:  `scale * alpha * (exp(features) - 1)` 

[ `separable_conv2d(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/separable_conv2d): 2-D convolution with separable filters.

[ `sigmoid(...)` ](https://tensorflow.google.cn/api_docs/python/tf/math/sigmoid): Computes sigmoid of  `x`  element-wise.

[ `sigmoid_cross_entropy_with_logits(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/sigmoid_cross_entropy_with_logits): Computes sigmoid cross entropy given  `logits` .

[ `softmax(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/softmax): Computes softmax activations.

[ `softmax_cross_entropy_with_logits(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/softmax_cross_entropy_with_logits): Computes softmax cross entropy between  `logits`  and  `labels` .

[ `softplus(...)` ](https://tensorflow.google.cn/api_docs/python/tf/math/softplus): Computes softplus:  `log(exp(features) + 1)` .

[ `softsign(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/softsign): Computes softsign:  `features / (abs(features) + 1)` .

[ `space_to_batch(...)` ](https://tensorflow.google.cn/api_docs/python/tf/space_to_batch): SpaceToBatch for N-D tensors of type T.

[ `space_to_depth(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/space_to_depth): SpaceToDepth for tensors of type T.

[ `sparse_softmax_cross_entropy_with_logits(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/sparse_softmax_cross_entropy_with_logits): Computes sparse softmax cross entropy between  `logits`  and  `labels` .

[ `sufficient_statistics(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/sufficient_statistics): Calculate the sufficient statistics for the mean and variance of  `x` .

[ `tanh(...)` ](https://tensorflow.google.cn/api_docs/python/tf/math/tanh): Computes hyperbolic tangent of  `x`  element-wise.

[ `top_k(...)` ](https://tensorflow.google.cn/api_docs/python/tf/math/top_k): Finds values and indices of the  `k`  largest entries for the last dimension.

[ `weighted_cross_entropy_with_logits(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/weighted_cross_entropy_with_logits): Computes a weighted cross entropy.

[ `weighted_moments(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/weighted_moments): Returns the frequency-weighted mean and variance of  `x` .

[ `with_space_to_batch(...)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/with_space_to_batch): Performs  `op`  on the space-to-batch representation of  `input` .

[ `zero_fraction(...)` ](https://tensorflow.google.cn/api_docs/python/tf/math/zero_fraction): Returns the fraction of zeros in  `value` .

## 其他成员
-  `swish`  []()
