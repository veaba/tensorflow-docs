Evaluation-related metrics.

## 功能
[ `accuracy(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/accuracy): Calculates how often  `predictions`  matches  `labels` .

[ `auc(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/auc): Computes the approximate AUC via a Riemann sum.

[ `average_precision_at_k(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/average_precision_at_k): Computes average precision@k of predictions with respect to sparse labels.

[ `false_negatives(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/false_negatives): Computes the total number of false negatives.

[ `false_negatives_at_thresholds(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/false_negatives_at_thresholds): Computes false negatives at provided threshold values.

[ `false_positives(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/false_positives): Sum the weights of false positives.

[ `false_positives_at_thresholds(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/false_positives_at_thresholds): Computes false positives at provided threshold values.

[ `mean(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/mean): Computes the (weighted) mean of the given values.

[ `mean_absolute_error(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/mean_absolute_error): Computes the mean absolute error between the labels and predictions.

[ `mean_cosine_distance(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/mean_cosine_distance): Computes the cosine distance between the labels and predictions.

[ `mean_iou(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/mean_iou): Calculate per-step mean Intersection-Over-Union (mIOU).

[ `mean_per_class_accuracy(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/mean_per_class_accuracy): Calculates the mean of the per-class accuracies.

[ `mean_relative_error(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/mean_relative_error): Computes the mean relative error by normalizing with the given values.

[ `mean_squared_error(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/mean_squared_error): Computes the mean squared error between the labels and predictions.

[ `mean_tensor(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/mean_tensor): Computes the element-wise (weighted) mean of the given tensors.

[ `percentage_below(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/percentage_below): Computes the percentage of values less than the given threshold.

[ `precision(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/precision): Computes the precision of the predictions with respect to the labels.

[ `precision_at_k(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/precision_at_k): Computes precision@k of the predictions with respect to sparse labels.

[ `precision_at_thresholds(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/precision_at_thresholds): Computes precision values for different  `thresholds`  on  `predictions` .

[ `precision_at_top_k(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/precision_at_top_k): Computes precision@k of the predictions with respect to sparse labels.

[ `recall(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/recall): Computes the recall of the predictions with respect to the labels.

[ `recall_at_k(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/recall_at_k): Computes recall@k of the predictions with respect to sparse labels.

[ `recall_at_thresholds(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/recall_at_thresholds): Computes various recall values for different  `thresholds`  on  `predictions` .

[ `recall_at_top_k(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/recall_at_top_k): Computes recall@k of top-k predictions with respect to sparse labels.

[ `root_mean_squared_error(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/root_mean_squared_error): Computes the root mean squared error between the labels and predictions.

[ `sensitivity_at_specificity(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/sensitivity_at_specificity): Computes the specificity at a given sensitivity.

[ `sparse_average_precision_at_k(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/sparse_average_precision_at_k): Renamed to  `average_precision_at_k` , please use that method instead. (deprecated)

[ `sparse_precision_at_k(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/sparse_precision_at_k): Renamed to  `precision_at_k` , please use that method instead. (deprecated)

[ `specificity_at_sensitivity(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/specificity_at_sensitivity): Computes the specificity at a given sensitivity.

[ `true_negatives(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/true_negatives): Sum the weights of true_negatives.

[ `true_negatives_at_thresholds(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/true_negatives_at_thresholds): Computes true negatives at provided threshold values.

[ `true_positives(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/true_positives): Sum the weights of true_positives.

[ `true_positives_at_thresholds(...)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/metrics/true_positives_at_thresholds): Computes true positives at provided threshold values.

