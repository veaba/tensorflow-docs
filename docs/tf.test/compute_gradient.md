Computes the theoretical and numeric Jacobian of  `f` .

```
 tf.test.compute_gradient(    f,    x,    delta=0.001) 
```

With y = f(x), computes the theoretical and numeric Jacobian dy/dx.

#### 参数：
- **`f`** : the function.
- **`x`** : a list arguments for the function
- **`delta`** : (optional) perturbation used to compute numeric Jacobian.


#### 返回：
A pair of lists, where the first is a list of 2-d numpy arrays representingthe theoretical Jacobians for each argument, and the second list is thenumerical ones. Each 2-d array has "x_size" rowsand "y_size" columns where "x_size" is the number of elements in thecorresponding argument and "y_size" is the number of elements in f(x).

#### 加薪：
- **`ValueError`** : If result is empty but the gradient is nonzero.
- **`ValueError`** : If x is not list, but any other type.


#### 示例：


```
 @tf.function
def test_func(x):
  return x*x

theoretical, numerical = tf.test.compute_gradient(test_func, [1.0])
theoretical, numerical
# ((array([[2.]], dtype=float32),), (array([[2.000004]], dtype=float32),))
 
```

