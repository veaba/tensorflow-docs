## Class ExponentialMovingAverage
Maintains moving averages of variables by employing an exponential decay.
### Aliases:
- Class `tf.compat.v1.train.ExponentialMovingAverage`
- Class `tf.compat.v2.train.ExponentialMovingAverage`
When training a model, it is often beneficial to maintain moving averages of the trained parameters. Evaluations that use averaged parameters sometimes produce significantly better results than the final trained values.
