## Class CriticalSection
Critical section.
### Aliases:
- Class `tf.compat.v1.CriticalSection`
- Class `tf.compat.v2.CriticalSection`
A `CriticalSection` object is a resource in the graph which executes subgraphs in serial order. A common example of a subgraph one may wish to run exclusively is the one given by the following function:

```
 v = resource_variable_ops.ResourceVariable(0.0, name="v")

def count():
  value = v.read_value()
  with tf.control_dependencies([value]):
    with tf.control_dependencies([v.assign_add(1)]):
      return tf.identity(value)
```
Here, a snapshot of `v` is captured in `v`alue; and then `v` is updated. The snapshot `v`alue is returned.
If multiple workers or threads all execute `count` in parallel, there is no guarantee that access to the `v`ariable `v` is atomic at any point within any thread's calculation of `count`. In fact, e`v`en implementing an atomic `count`er that guarantees that the user will see each `v`alue `0, 1, ...,` is currently impossible.
The solution is to ensure any access to the underlying resource `v` is only processed through a critical section:

```
 cs = CriticalSection()
f1 = cs.execute(count)
f2 = cs.execute(count)
output = f1 + f2
session.run(output)
```
The functions `f1` and `f2` will be executed serially, and updates to `v` will be atomic.
NOTES
All resource objects, including the critical section and any captured variables of functions executed on that critical section, will be colocated to the same device (host and cpu/gpu).
When using multiple critical sections on the same resources, there is no guarantee of exclusive access to those resources. This behavior is disallowed by default (but see the kwarg `exclusive_resource_access`).
For example, running the same function in two separate critical sections will not ensure serial execution:

```
 v = tf.compat.v1.get_variable("v", initializer=0.0, use_resource=True)
def accumulate(up):
  x = v.read_value()
  with tf.control_dependencies([x]):
    with tf.control_dependencies([v.assign_add(up)]):
      return tf.identity(x)
ex1 = CriticalSection().execute(
  accumulate, 1.0, exclusive_resource_access=False)
ex2 = CriticalSection().execute(
  accumulate, 1.0, exclusive_resource_access=False)
bad_sum = ex1 + ex2
sess.run(v.initializer)
sess.run(bad_sum)  # May return 0.0
```
## __init__
View source

```
 __init__(
    name=None,
    shared_name=None,
    critical_section_def=None,
    import_scope=None
)
```
Creates a critical section.
## Properties
### name
## Methods
### execute
View source

```
 execute(
    fn,
    exclusive_resource_access=True,
    name=None
)
```
