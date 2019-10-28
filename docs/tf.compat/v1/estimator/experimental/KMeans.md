## Class KMeans
An Estimator for K-Means clustering.
Inherits From: `Estimator`
#### Example:

```
 import numpy as np
import tensorflow as tf

num_points = 100
dimensions = 2
points = np.random.uniform(0, 1000, [num_points, dimensions])

def input_fn():
  return tf.train.limit_epochs(
      tf.convert_to_tensor(points, dtype=tf.float32), num_epochs=1)

num_clusters = 5
kmeans = tf.estimator.experimental.KMeans(
    num_clusters=num_clusters, use_mini_batch=False)

# train
num_iterations = 10
previous_centers = None
for _ in xrange(num_iterations):
  kmeans.train(input_fn)
  cluster_centers = kmeans.cluster_centers()
  if previous_centers is not None:
    print 'delta:', cluster_centers - previous_centers
  previous_centers = cluster_centers
  print 'score:', kmeans.score(input_fn)
print 'cluster centers:', cluster_centers

# map the input points to their clusters
cluster_indices = list(kmeans.predict_cluster_index(input_fn))
for i, point in enumerate(points):
  cluster_index = cluster_indices[i]
  center = cluster_centers[cluster_index]
  print 'point:', point, 'is in cluster', cluster_index, 'centered at', center
```
The `SavedModel` saved by the `export_saved_model` method does not include the cluster centers. However, the cluster centers may be retrieved by the latest checkpoint saved during training. Specifically,

```
 kmeans.cluster_centers()
```
is equivalent to

```
 tf.train.load_variable(
    kmeans.model_dir, KMeansClustering.CLUSTER_CENTERS_VAR_NAME)
```
## __init__
View source

```
 __init__(
    num_clusters,
    model_dir=None,
    initial_clusters=RANDOM_INIT,
    distance_metric=SQUARED_EUCLIDEAN_DISTANCE,
    seed=None,
    use_mini_batch=True,
    mini_batch_steps_per_iteration=1,
    kmeans_plus_plus_num_retries=2,
    relative_tolerance=None,
    config=None,
    feature_columns=None
)
```
Creates an Estimator for running KMeans training and inference.
This Estimator implements the following variants of the K-means algorithm:
If `use_mini_batch` is False, it runs standard full batch K-means. Each `train`ing step runs a single iteration of K-Means and must process the full input at once. To run in this mode, the `input_fn` passed to `train` must return the entire input dataset.
If `use_mini_batch` is True, it runs a generalization of the mini-batch K-means algorithm. It runs multiple iterations, where each iteration is composed of `mini_batch_steps_per_iteration` steps. Each training step accumulates the contribution from one mini-batch into temporary storage. Every `mini_batch_steps_per_iteration` steps, the cluster centers are updated and the temporary storage cleared for the next iteration. For example: the entire dataset contains 64k examples, where the batch size is 64. User can choose `mini_batch_steps_per_iteration` = 100 to run 10% of the entire data every iteration in order to update the cluster centers. Note that: * If `mini_batch_steps_per_iteration`=1, the algorithm reduces to the standard K-means mini-batch algorithm. * If `mini_batch_steps_per_iteration` = num_inputs / batch_size, the algorithm becomes an asynchronous version of the full-batch algorithm. However, there is no guarantee by this implementation that each input is seen exactly once per iteration. Also, different updates are applied asynchronously without locking. So this asynchronous version may not behave exactly like a full-batch version.
#### Args:
- `num_clusters`: An integer tensor specifying the number of clusters. This argument is ignored if `initial_clusters` is a tensor or numpy array.
- `model_dir`: The directory to save the model results and log files.
#### Raises:
- `ValueError`: An invalid argument was passed to `initial_clusters` or `distance_metric`.
## Properties
### config
### model_dir
### model_fn
Returns the `model_fn` which is bound to `self.params`.
#### Returns:
