## Class Metric
Encapsulates metric logic and state.
Inherits From: `Layer`
### Aliases:
- Class `tf.compat.v1.keras.metrics.Metric`
- Class `tf.compat.v2.keras.metrics.Metric`
- Class `tf.compat.v2.metrics.Metric`
- Class `tf.metrics.Metric`
#### Usage:

```
 m = SomeMetric(...)
for input in ...:
  m.update_state(input)
print('Final result: ', m.result().numpy())
```
Usage with tf.keras API:

```
 model = tf.keras.Sequential()
model.add(tf.keras.layers.Dense(64, activation='relu'))
model.add(tf.keras.layers.Dense(64, activation='relu'))
model.add(tf.keras.layers.Dense(10, activation='softmax'))

model.compile(optimizer=tf.compat.v1.train.RMSPropOptimizer(0.01),
              loss=tf.keras.losses.categorical_crossentropy,
              metrics=[tf.keras.metrics.CategoricalAccuracy()])

data = np.random.random((1000, 32))
labels = np.random.random((1000, 10))

dataset = tf.data.Dataset.from_tensor_slices((data, labels))
dataset = dataset.batch(32)
dataset = dataset.repeat()

model.fit(dataset, epochs=10, steps_per_epoch=30)
```
