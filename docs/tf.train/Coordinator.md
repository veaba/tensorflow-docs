## Class Coordinator
A coordinator for threads.
### Aliases:
- Class `tf.compat.v1.train.Coordinator`
- Class `tf.compat.v2.train.Coordinator`
This class implements a simple mechanism to coordinate the termination of a set of threads.
#### Usage:

```
 # Create a coordinator.
coord = Coordinator()
# Start a number of threads, passing the coordinator to each of them.
...start thread 1...(coord, ...)
...start thread N...(coord, ...)
# Wait for all the threads to terminate.
coord.join(threads)
```
