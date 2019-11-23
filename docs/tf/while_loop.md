
Repeat  `body`  while the condition  `cond`  is true.


### Aliases:
- [ `tf.compat.v2.while_loop` ](/api_docs/python/tf/while_loop)


```
tf.while_loop(
    cond,
    body,
    loop_vars,
    shape_invariants=None,
    parallel_iterations=10,
    back_prop=True,
    swap_memory=False,
    maximum_iterations=None,
    name=None
)

```


 `cond`  is a callable returning a boolean scalar tensor.  `body`  is a callablereturning a (possibly nested) tuple, namedtuple or list of tensors of the samearity (length and structure) and types as  `loop_vars` .  `loop_vars`  is a(possibly nested) tuple, namedtuple or list of tensors that is passed to both `cond`  and  `body` .  `cond`  and  `body`  both take as many arguments as there are `loop_vars` .

In addition to regular Tensors or IndexedSlices, the body may accept andreturn TensorArray objects.  The flows of the TensorArray objects willbe appropriately forwarded between loops and during gradient calculations.

Note that  `while_loop`  calls  `cond`  and  `body`  <em>exactly once</em> (inside thecall to  `while_loop` , and not at all during  `Session.run()` ).  `while_loop` stitches together the graph fragments created during the  `cond`  and  `body` calls with some additional graph nodes to create the graph flow thatrepeats  `body`  until  `cond`  returns false.

For correctness, [ `tf.while_loop()` ](https://tensorflow.google.cn/api_docs/python/tf/while_loop) strictly enforces shape invariants forthe loop variables. A shape invariant is a (possibly partial) shape thatis unchanged across the iterations of the loop. An error will be raisedif the shape of a loop variable after an iteration is determined to be moregeneral than or incompatible with its shape invariant. For example, a shapeof [11, None] is more general than a shape of [11, 17], and [11, 21] is notcompatible with [11, 17]. By default (if the argument  `shape_invariants`  isnot specified), it is assumed that the initial shape of each tensor in `loop_vars`  is the same in every iteration. The  `shape_invariants`  argumentallows the caller to specify a less specific shape invariant for each loopvariable, which is needed if the shape varies between iterations. The[ `tf.Tensor.set_shape` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor#set_shape)function may also be used in the  `body`  function to indicate thatthe output loop variable has a particular shape. The shape invariant forSparseTensor and IndexedSlices are treated specially as follows:

a) If a loop variable is a SparseTensor, the shape invariant must beTensorShape([r]) where r is the rank of the dense tensor representedby the sparse tensor. It means the shapes of the three tensors of theSparseTensor are ([None], [None, r], [r]). NOTE: The shape invariant hereis the shape of the SparseTensor.dense_shape property. It must be the shape ofa vector.

b) If a loop variable is an IndexedSlices, the shape invariant must bea shape invariant of the values tensor of the IndexedSlices. It meansthe shapes of the three tensors of the IndexedSlices are (shape, [shape[0]],[shape.ndims]).

 `while_loop`  implements non-strict semantics, enabling multiple iterationsto run in parallel. The maximum number of parallel iterations can becontrolled by  `parallel_iterations` , which gives users some control overmemory consumption and execution order. For correct programs,  `while_loop` should return the same result for any parallel_iterations > 0.

For training, TensorFlow stores the tensors that are produced in theforward inference and are needed in back propagation. These tensors are amain source of memory consumption and often cause OOM errors when trainingon GPUs. When the flag swap_memory is true, we swap out these tensors fromGPU to CPU. This for example allows us to train RNN models with very longsequences and large batches.


#### Args:
- **`cond`** : A callable that represents the termination condition of the loop.
- **`body`** : A callable that represents the loop body.
- **`loop_vars`** : A (possibly nested) tuple, namedtuple or list of numpy array, `Tensor` , and  `TensorArray`  objects.
- **`shape_invariants`** : The shape invariants for the loop variables.
- **`parallel_iterations`** : The number of iterations allowed to run in parallel. Itmust be a positive integer.
- **`back_prop`** : Whether backprop is enabled for this while loop.
- **`swap_memory`** : Whether GPU-CPU memory swap is enabled for this loop.
- **`maximum_iterations`** : Optional maximum number of iterations of the while loopto run.  If provided, the  `cond`  output is AND-ed with an additionalcondition ensuring the number of iterations executed is no greater than `maximum_iterations` .
- **`name`** : Optional name prefix for the returned tensors.


#### Returns:

The output tensors for the loop variables after the loop. The return value  has the same structure as  `loop_vars` .


#### Raises:
- **`TypeError`** : if  `cond`  or  `body`  is not callable.
- **`ValueError`** : if  `loop_vars`  is empty.


#### Example:


```
i = tf.constant(0)
c = lambda i: tf.less(i, 10)
b = lambda i: tf.add(i, 1)
r = tf.while_loop(c, b, [i])

```


Example with nesting and a namedtuple:


```
import collections
Pair = collections.namedtuple('Pair', 'j, k')
ijk_0 = (tf.constant(0), Pair(tf.constant(1), tf.constant(2)))
c = lambda i, p: i < 10
b = lambda i, p: (i + 1, Pair((p.j + p.k), (p.j - p.k)))
ijk_final = tf.while_loop(c, b, ijk_0)

```


Example using shape_invariants:


```
i0 = tf.constant(0)
m0 = tf.ones([2, 2])
c = lambda i, m: i < 10
b = lambda i, m: [i+1, tf.concat([m, m], axis=0)]
tf.while_loop(
    c, b, loop_vars=[i0, m0],
    shape_invariants=[i0.get_shape(), tf.TensorShape([None, 2])])

```


Example which demonstrates non-strict semantics: In the followingexample, the final value of the counter  `i`  does not depend on  `x` . Sothe  `while_loop`  can increment the counter parallel to updates of  `x` .However, because the loop counter at one loop iteration dependson the value at the previous iteration, the loop counter itself cannotbe incremented in parallel. Hence if we just want the final value of thecounter (which we print on the line  `print(sess.run(i))` ), then `x`  will never be incremented, but the counter will be updated on asingle thread. Conversely, if we want the value of the output (which weprint on the line  `print(sess.run(out).shape)` ), then the counter may beincremented on its own thread, while  `x`  can be incremented inparallel on a separate thread. In the extreme case, it is conceivablethat the thread incrementing the counter runs until completion before `x`  is incremented even a single time. The only thing that can neverhappen is that the thread updating  `x`  can never get ahead of thecounter thread because the thread incrementing  `x`  depends on the valueof the counter.


```
import tensorflow as tf

n = 10000
x = tf.constant(list(range(n)))
c = lambda i, x: i < n
b = lambda i, x: (tf.compat.v1.Print(i + 1, [i]), tf.compat.v1.Print(x + 1,
[i], "x:"))
i, out = tf.while_loop(c, b, (0, x))
with tf.compat.v1.Session() as sess:
    print(sess.run(i))  # prints [0] ... [9999]

    # The following line may increment the counter and x in parallel.
    # The counter thread may get ahead of the other thread, but not the
    # other way around. So you may see things like
    # [9996] x:[9987]
    # meaning that the counter thread is on iteration 9996,
    # while the other thread is on iteration 9987
    print(sess.run(out).shape)

```

