Callbacks: utilities called at certain points during model training.
`class BaseLogger`: Callback that accumulates epoch averages of metrics.
`class CSVLogger`: Callback that streams epoch results to a csv file.
`class Callback`: Abstract base class used to build new callbacks.
`class EarlyStopping`: Stop training when a monitored quantity has stopped improving.
`class History`: Callback that records events into a `History` object.
`class LambdaCallback`: Callback for creating simple, custom callbacks on-the-fly.
`class LearningRateScheduler`: Learning rate scheduler.
`class ModelCheckpoint`: Save the model after every epoch.
`class ProgbarLogger`: Callback that prints metrics to stdout.
`class ReduceLROnPlateau`: Reduce learning rate when a metric has stopped improving.
`class RemoteMonitor`: Callback used to stream events to a server.
`class TensorBoard`: Enable visualizations for TensorBoard.
`class TerminateOnNaN`: Callback that terminates training when a NaN loss is encountered.
