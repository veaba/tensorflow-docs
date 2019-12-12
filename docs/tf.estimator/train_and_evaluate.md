

Train and evaluate the  `estimator` .

**Aliases** : [ `tf.compat.v1.estimator.train_and_evaluate` ](/api_docs/python/tf/estimator/train_and_evaluate), [ `tf.compat.v2.estimator.train_and_evaluate` ](/api_docs/python/tf/estimator/train_and_evaluate)

```
 tf.estimator.train_and_evaluate(
    estimator,
    train_spec,
    eval_spec
)
 
```

### Used in the guide:
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)


### Used in the tutorials:
- [Multi-worker training with Estimator](https://tensorflow.google.cn/tutorials/distribute/multi_worker_with_estimator)
This utility function trains, evaluates, and (optionally) exports the model byusing the given  `estimator` . All training related specification is held in `train_spec` , including training  `input_fn`  and training max steps, etc. Allevaluation and export related specification is held in  `eval_spec` , includingevaluation  `input_fn` , steps, etc.

This utility function provides consistent behavior for both local(non-distributed) and distributed configurations. The default distributionconfiguration is parameter server-based between-graph replication. For othertypes of distribution configurations such as all-reduce training, please use[DistributionStrategies](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/distribute).

Overfitting: In order to avoid overfitting, it is recommended to set up thetraining  `input_fn`  to shuffle the training data properly.

Stop condition: In order to support both distributed and non-distributedconfiguration reliably, the only supported stop condition for modeltraining is  `train_spec.max_steps` . If  `train_spec.max_steps`  is  `None` , themodel is trained forever. *Use with care* if model stop condition isdifferent. For example, assume that the model is expected to be trained withone epoch of training data, and the training  `input_fn`  is configured to throw `OutOfRangeError`  after going through one epoch, which stops the[ `Estimator.train` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/estimator/Estimator#train). For a three-training-worker distributed configuration, eachtraining worker is likely to go through the whole epoch independently. So, themodel will be trained with three epochs of training data instead of one epoch.

Example of local (non-distributed) training:

```
 # Set up feature columns.
categorial_feature_a = categorial_column_with_hash_bucket(...)
categorial_feature_a_emb = embedding_column(
    categorical_column=categorial_feature_a, ...)
...  # other feature columns

estimator = DNNClassifier(
    feature_columns=[categorial_feature_a_emb, ...],
    hidden_units=[1024, 512, 256])

# Or set up the model directory
#   estimator = DNNClassifier(
#       config=tf.estimator.RunConfig(
#           model_dir='/my_model', save_summary_steps=100),
#       feature_columns=[categorial_feature_a_emb, ...],
#       hidden_units=[1024, 512, 256])

# Input pipeline for train and evaluate.
def train_input_fn(): # returns x, y
  # please shuffle the data.
  pass
def eval_input_fn(): # returns x, y
  pass

train_spec = tf.estimator.TrainSpec(input_fn=train_input_fn, max_steps=1000)
eval_spec = tf.estimator.EvalSpec(input_fn=eval_input_fn)

tf.estimator.train_and_evaluate(estimator, train_spec, eval_spec)
 
```

Note that in current implementation  `estimator.evaluate`  will be calledmultiple times. This means that evaluation graph (including eval_input_fn)will be re-created for each  `evaluate`  call.  `estimator.train`  will be calledonly once.

Example of distributed training:

Regarding the example of distributed training, the code above can be usedwithout a change (Please do make sure that the [ `RunConfig.model_dir` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/RunConfig#model_dir) for allworkers is set to the same directory, i.e., a shared file system all workerscan read and write). The only extra work to do is setting the environmentvariable  `TF_CONFIG`  properly for each worker correspondingly.

Also see[Distributed TensorFlow](https://tensorflow.google.cn/deploy/distributed).

Setting environment variable depends on the platform. For example, on Linux,it can be done as follows ( `$`  is the shell prompt):

```
 $ TF_CONFIG='<replace_with_real_content>' python train_model.py
 
```

For the content in  `TF_CONFIG` , assume that the training cluster spec lookslike:

```
 cluster = {"chief": ["host0:2222"],
           "worker": ["host1:2222", "host2:2222", "host3:2222"],
           "ps": ["host4:2222", "host5:2222"]}
 
```

Example of  `TF_CONFIG`  for chief training worker (must have one and only one):

```
 # This should be a JSON string, which is set as environment variable. Usually
# the cluster manager handles that.
TF_CONFIG='{
    "cluster": {
        "chief": ["host0:2222"],
        "worker": ["host1:2222", "host2:2222", "host3:2222"],
        "ps": ["host4:2222", "host5:2222"]
    },
    "task": {"type": "chief", "index": 0}
}'
 
```

Note that the chief worker also does the model training job, similar to othernon-chief training workers (see next paragraph). In addition to the modeltraining, it manages some extra work, e.g., checkpoint saving and restoring,writing summaries, etc.

Example of  `TF_CONFIG`  for non-chief training worker (optional, could bemultiple):

```
 # This should be a JSON string, which is set as environment variable. Usually
# the cluster manager handles that.
TF_CONFIG='{
    "cluster": {
        "chief": ["host0:2222"],
        "worker": ["host1:2222", "host2:2222", "host3:2222"],
        "ps": ["host4:2222", "host5:2222"]
    },
    "task": {"type": "worker", "index": 0}
}'
 
```

where the  `task.index`  should be set as 0, 1, 2, in this example, respectivelyfor non-chief training workers.

Example of  `TF_CONFIG`  for parameter server, aka ps (could be multiple):

```
 # This should be a JSON string, which is set as environment variable. Usually
# the cluster manager handles that.
TF_CONFIG='{
    "cluster": {
        "chief": ["host0:2222"],
        "worker": ["host1:2222", "host2:2222", "host3:2222"],
        "ps": ["host4:2222", "host5:2222"]
    },
    "task": {"type": "ps", "index": 0}
}'
 
```

where the  `task.index`  should be set as 0 and 1, in this example, respectivelyfor parameter servers.

Example of  `TF_CONFIG`  for evaluator task. Evaluator is a special task that isnot part of the training cluster. There could be only one. It is used formodel evaluation.

```
 # This should be a JSON string, which is set as environment variable. Usually
# the cluster manager handles that.
TF_CONFIG='{
    "cluster": {
        "chief": ["host0:2222"],
        "worker": ["host1:2222", "host2:2222", "host3:2222"],
        "ps": ["host4:2222", "host5:2222"]
    },
    "task": {"type": "evaluator", "index": 0}
}'
 
```

When  `distribute`  or  `experimental_distribute.train_distribute`  and `experimental_distribute.remote_cluster`  is set, this method will start aclient running on the current host which connects to the  `remote_cluster`  fortraining and evaluation.

#### Args:
- **`estimator`** : An  `Estimator`  instance to train and evaluate.
- **`train_spec`** : A  `TrainSpec`  instance to specify the training specification.
- **`eval_spec`** : A  `EvalSpec`  instance to specify the evaluation and exportspecification.


#### Returns:
A tuple of the result of the  `evaluate`  call to the  `Estimator`  and theexport results using the specified  `ExportStrategy` .Currently, the return value is undefined for distributed training mode.

#### Raises:
- **`ValueError`** : if environment variable  `TF_CONFIG`  is incorrectly set.
