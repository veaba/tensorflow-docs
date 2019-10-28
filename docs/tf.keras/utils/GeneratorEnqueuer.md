## Class GeneratorEnqueuer
Builds a queue out of a data generator.
Inherits From: `SequenceEnqueuer`
### Aliases:
- Class `tf.compat.v1.keras.utils.GeneratorEnqueuer`
- Class `tf.compat.v2.keras.utils.GeneratorEnqueuer`
The provided generator can be finite in which case the class will throw a `StopIteration` exception.
Used in `fit_generator`, `evaluate_generator`, `predict_generator`.
#### Arguments:
- `generator`: a `generator` function which yields data
- `use_multiprocessing`: use multiprocessing if True, otherwise threading
## __init__
View source

```
 __init__(
    sequence,
    use_multiprocessing=False,
    random_seed=None
)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### get
View source

```
 get()
```
Creates a generator to extract data from the queue.
Skip the data if it is `None`.
#### Yields:
The next element in the queue, i.e. a tuple `inputs, targets)` or `inputs, targets, sample_weights)`.
### is_running
View source

```
 is_running()
```
### start
View source

```
 start(
    workers=1,
    max_queue_size=10
)
```
Starts the handler's workers.
#### Arguments:
- `workers`: Number of `workers`.
### stop
View source

```
 stop(timeout=None)
```
Stops running threads and wait for them to exit, if necessary.
