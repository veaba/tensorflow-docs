
Instantiates an all-zeros variable and returns it.
### Aliases:
- `tf.compat.v1.keras.backend.zeros`
- `tf.compat.v2.keras.backend.zeros`

```
 tf.keras.backend.zeros(
    shape,
    dtype=None,
    name=None
)
```
#### Arguments:
- `shape`: Tuple or list of integers, `shape` of returned Keras variable
- `dtype`: data type of returned Keras variable
- `name`: `name` of returned Keras variable
#### Returns:

A variable (including Keras metadata), filled with 0.0. Note that if shape was symbolic, we cannot return a variable, and will return a dynamically-shaped tensor instead.
#### Example:

```
 from tensorflow.keras import backend as K
kvar = K.zeros((3,4))
K.eval(kvar)
# array([[ 0.,  0.,  0.,  0.], [ 0.,  0.,  0.,  0.],
#       [ 0.,  0.,  0.,  0.]], dtype=float32)
A = tf.constant([1,2,3])
kvar2 = K.zeros(A.shape) # [0., 0., 0.] float32 by default
kvar3 = K.zeros(A.shape,dtype=tf.int32) # [0, 0, 0] with int32 dtype
kvar4 = K.zeros([2,3]) # [[0., 0., 0.], [0., 0., 0.]]
```