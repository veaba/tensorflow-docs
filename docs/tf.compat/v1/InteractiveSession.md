## Class InteractiveSession
A TensorFlow `Session` for use in interactive contexts, such as a shell.
The only difference with a regular `Session` is that an `InteractiveSession` installs itself as the default session on construction. The methods `tf.Tensor.eval` and `tf.Operation.run` will use that session to run ops.
This is convenient in interactive shells and IPython notebooks, as it avoids having to pass an explicit `Session` object to run ops.
#### For example:

```
 sess = tf.compat.v1.InteractiveSession()
a = tf.constant(5.0)
b = tf.constant(6.0)
c = a * b
# We can just use 'c.eval()' without passing 'sess'
print(c.eval())
sess.close()
```
Note that a regular session installs itself as the default session when it is created in a `with` statement. The common usage in non-interactive programs is to follow that pattern:

```
 a = tf.constant(5.0)
b = tf.constant(6.0)
c = a * b
with tf.compat.v1.Session():
  # We can also use 'c.eval()' here.
  print(c.eval())
```
## __init__
View source

```
 __init__(
    target='',
    graph=None,
    config=None
)
```
Creates a new interactive TensorFlow session.
