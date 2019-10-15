Public API for tf.keras.experimental namespace.

## Classes
`class CosineDecay`: A LearningRateSchedule that uses a cosine decay schedule.

`class CosineDecayRestarts`: A LearningRateSchedule that uses a cosine decay schedule with restarts.

`class LinearCosineDecay`: A LearningRateSchedule that uses a linear cosine decay schedule.

`class LinearModel`: Linear Model for regression and classification problems.

`class NoisyLinearCosineDecay`: A LearningRateSchedule that uses a noisy linear cosine decay schedule.

`class PeepholeLSTMCell`: Equivalent to LSTMCell class but adds peephole connections.

`class SequenceFeatures`: A layer for sequence input.

`class WideDeepModel`: Wide & Deep Model for regression and classification problems.

## Functions
`export_saved_model(...)`: Exports a tf.keras.Model as a Tensorflow SavedModel. (deprecated)

`load_from_saved_model(...)`: Loads a keras Model from a SavedModel created by export_saved_model(). (deprecated)

`terminate_keras_multiprocessing_pools(...)`: Destroy Keras' multiprocessing pools to prevent deadlocks.