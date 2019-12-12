

## Class  `TestCase` 
需要测试tensorflow的测试的基类。

**别名** : [ `tf.compat.v1.test.TestCase` ](/api_docs/python/tf/test/TestCase), [ `tf.compat.v2.test.TestCase` ](/api_docs/python/tf/test/TestCase)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L1757-L1769)

```
 __init__(methodName='runTest') 
```

Create an instance of the class that will use the named testmethod when executed. Raises a ValueError if the instance doesnot have a method with the specified name.

## 子类
[ `class failureException` ](https://tensorflow.google.cn/api_docs/python/tf/test/TestCase/failureException)

## 方法


###  `__call__` 


```
 __call__(    *args,    **kwds) 
```

作为函数调用self。

###  `__eq__` 


```
 __eq__(other)
 
```

Return self==value.

###  `addCleanup` 


```
 addCleanup(
    function,
    *args,
    **kwargs
)
 
```

Add a function, with arguments, to be called when the test iscompleted. Functions added are called on a LIFO basis and arecalled after tearDown on test failure or success.

即使安装失败，也会调用清理项（与拆卸不同）。

###  `addTypeEqualityFunc` 


```
 addTypeEqualityFunc(
    typeobj,
    function
)
 
```

添加特定于类型的asserteQual样式函数以比较类型。

This method is for use by TestCase subclasses that need to registertheir own type equality functions to provide nicer error messages.

#### 参数：
- **`typeobj`** : The data type to call this function on when both values    are of the same type in assertEqual().
- **`function`** : The callable taking two arguments and an optional    msg= argument that raises self.failureException with a    useful error message when the two arguments are not equal.


###  `assertAllClose` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2385-L2411)

```
 assertAllClose(
    a,
    b,
    rtol=1e-06,
    atol=1e-06,
    msg=None
)
 
```

Asserts that two structures of numpy arrays or Tensors, have near values.

 `a`  and  `b`  can be arbitrarily nested structures. A layer of a nestedstructure can be a  `dict` ,  `namedtuple` ,  `tuple`  or  `list` .

#### 参数：
- **`a`** : The expected numpy  `ndarray` , or anything that can be converted into anumpy  `ndarray`  (including Tensor), or any arbitrarily nested ofstructure of these.
- **`b`** : The actual numpy  `ndarray` , or anything that can be converted into anumpy  `ndarray`  (including Tensor), or any arbitrarily nested ofstructure of these.
- **`rtol`** : relative tolerance.
- **`atol`** : absolute tolerance.
- **`msg`** : Optional message to report on failure.


#### 加薪：
- **`ValueError`** : if only one of  `a[p]`  and  `b[p]`  is a dict or `a[p]`  and  `b[p]`  have different length, where  `[p]`  denotes a pathto the nested structure, e.g. given  `a = [(1, 1), {'d': (6, 7)}]`  and `[p] = [1]['d']` , then  `a[p] = (6, 7)` .


###  `assertAllCloseAccordingToType` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2413-L2459)

```
 assertAllCloseAccordingToType(
    a,
    b,
    rtol=1e-06,
    atol=1e-06,
    float_rtol=1e-06,
    float_atol=1e-06,
    half_rtol=0.001,
    half_atol=0.001,
    bfloat16_rtol=0.01,
    bfloat16_atol=0.01,
    msg=None
)
 
```

Like assertAllClose, but also suitable for comparing fp16 arrays.

In particular, the tolerance is reduced to 1e-3 if at leastone of the arguments is of type float16.

#### 参数：
- **`a`** : the expected numpy ndarray or anything can be converted to one.
- **`b`** : the actual numpy ndarray or anything can be converted to one.
- **`rtol`** : relative tolerance.
- **`atol`** : absolute tolerance.
- **`float_rtol`** : relative tolerance for float32.
- **`float_atol`** : absolute tolerance for float32.
- **`half_rtol`** : relative tolerance for float16.
- **`half_atol`** : absolute tolerance for float16.
- **`bfloat16_rtol`** : relative tolerance for bfloat16.
- **`bfloat16_atol`** : absolute tolerance for bfloat16.
- **`msg`** : Optional message to report on failure.


###  `assertAllEqual` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2480-L2523)

```
 assertAllEqual(
    a,
    b,
    msg=None
)
 
```

断言两个numpy数组或张量具有相同的值。

#### 参数：
- **`a`** : the expected numpy ndarray or anything can be converted to one.
- **`b`** : the actual numpy ndarray or anything can be converted to one.
- **`msg`** : Optional message to report on failure.


###  `assertAllGreater` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2540-L2550)

```
 assertAllGreater(
    a,
    comparison_target
)
 
```

断言元素值都大于目标值。

#### 参数：
- **`a`** : The numpy  `ndarray` , or anything that can be converted into a numpy `ndarray`  (including Tensor).
- **`comparison_target`** : The target value of comparison.


###  `assertAllGreaterEqual` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2564-L2574)

```
 assertAllGreaterEqual(
    a,
    comparison_target
)
 
```

断言元素值都大于或等于目标值。

#### 参数：
- **`a`** : The numpy  `ndarray` , or anything that can be converted into a numpy `ndarray`  (including Tensor).
- **`comparison_target`** : The target value of comparison.


###  `assertAllInRange` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2619-L2676)

```
 assertAllInRange(
    target,
    lower_bound,
    upper_bound,
    open_lower_bound=False,
    open_upper_bound=False
)
 
```

断言张量中的元素都在给定的范围内。

#### 参数：
- **`target`** : The numpy  `ndarray` , or anything that can be converted into anumpy  `ndarray`  (including Tensor).
- **`lower_bound`** : lower bound of the range
- **`upper_bound`** : upper bound of the range
- **`open_lower_bound`** : ( `bool` ) whether the lower bound is open (i.e., > ratherthan the default >=)
- **`open_upper_bound`** : ( `bool` ) whether the upper bound is open (i.e., < ratherthan the default <=)


#### 加薪：
- **`AssertionError`** :   if the value tensor does not have an ordered numeric type (float* orint*), orif there are nan values, orif any of the elements do not fall in the specified range.


###  `assertAllInSet` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2678-L2698)

```
 assertAllInSet(
    target,
    expected_set
)
 
```

断言张量的元素都在给定的闭集中。

#### 参数：
- **`target`** : The numpy  `ndarray` , or anything that can be converted into anumpy  `ndarray`  (including Tensor).
- **`expected_set`** : ( `list` ,  `tuple`  or  `set` ) The closed set that the elementsof the value of  `target`  are expected to fall into.


#### 加薪：
- **`AssertionError`** :   if any of the elements do not fall into  `expected_set` .


###  `assertAllLess` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2552-L2562)

```
 assertAllLess(
    a,
    comparison_target
)
 
```

断言元素值都小于目标值。

#### 参数：
- **`a`** : The numpy  `ndarray` , or anything that can be converted into a numpy `ndarray`  (including Tensor).
- **`comparison_target`** : The target value of comparison.


###  `assertAllLessEqual` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2576-L2586)

```
 assertAllLessEqual(
    a,
    comparison_target
)
 
```

断言元素值都小于或等于目标值。

#### 参数：
- **`a`** : The numpy  `ndarray` , or anything that can be converted into a numpy `ndarray`  (including Tensor).
- **`comparison_target`** : The target value of comparison.


###  `assertAlmostEqual` 


```
 assertAlmostEqual(
    first,
    second,
    places=None,
    msg=None,
    delta=None
)
 
```

Fail if the two objects are unequal as determined by theirdifference rounded to the given number of decimal places(default 7) and comparing to zero, or by comparing that thedifference between the two objects is more than the givendelta.

Note that decimal places (from zero) are usually not the sameas significant digits (measured from the most significant digit).

If the two objects compare equal then they will automaticallycompare almost equal.

###  `assertAlmostEquals` 


```
 assertAlmostEquals(
    *args,
    **kwargs
)
 
```

###  `assertArrayNear` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2227-L2242)

```
 assertArrayNear(
    farray1,
    farray2,
    err,
    msg=None
)
 
```

断言两个浮点数组彼此靠近。

Checks that for all elements of farray1 and farray2|f1 - f2| < err.  Asserts a test failure if not.

#### 参数：
- **`farray1`** : a list of float values.
- **`farray2`** : a list of float values.
- **`err`** : a float value.
- **`msg`** : Optional message to report on failure.


###  `assertBetween` 


```
 assertBetween(
    value,
    minv,
    maxv,
    msg=None
)
 
```

断言该值介于minv和maxv（包括）之间。

###  `assertCommandFails` 


```
 assertCommandFails(
    command,
    regexes,
    env=None,
    close_fds=True,
    msg=None
)
 
```

断言shell命令失败，错误与列表中的正则表达式匹配。

#### 参数：
- **`command`** : List or string representing the command to run.
- **`regexes`** : the list of regular expression strings.
- **`env`** : Dictionary of environment variable settings. If None, no environmentvariables will be set for the child process. This is to make testsmore hermetic. 注意：this behavior is different than the standardsubprocess module.
- **`close_fds`** : Whether or not to close all open fd's in the child afterforking.
- **`msg`** : Optional message to report on failure.


###  `assertCommandSucceeds` 


```
 assertCommandSucceeds(
    command,
    regexes=(b'',),
    env=None,
    close_fds=True,
    msg=None
)
 
```

Asserts that a shell command succeeds (i.e. exits with code 0).

#### 参数：
- **`command`** : List or string representing the command to run.
- **`regexes`** : List of regular expression byte strings that match success.
- **`env`** : Dictionary of environment variable settings. If None, no environmentvariables will be set for the child process. This is to make testsmore hermetic. 注意：this behavior is different than the standardsubprocess module.
- **`close_fds`** : Whether or not to close all open fd's in the child afterforking.
- **`msg`** : Optional message to report on failure.


###  `assertContainsExactSubsequence` 


```
 assertContainsExactSubsequence(
    container,
    subsequence,
    msg=None
)
 
```

断言“container”包含“subsequence”作为确切的子序列。

Asserts that "container" contains all the elements of "subsequence", inorder, and without other elements interspersed. For example, [1, 2, 3] is anexact subsequence of [0, 0, 1, 2, 3, 0] but not of [0, 0, 1, 2, 0, 3, 0].

#### 参数：
- **`container`** : the list we're testing for subsequence inclusion.
- **`subsequence`** : the list we hope will be an exact subsequence of container.
- **`msg`** : Optional message to report on failure.


###  `assertContainsInOrder` 


```
 assertContainsInOrder(
    strings,
    target,
    msg=None
)
 
```

断言提供的字符串按顺序在目标中找到。

这对于检查html输出可能很有用。

#### 参数：
- **`strings`** : A list of strings, such as [ 'fox', 'dog' ]
- **`target`** : A target string in which to look for the strings, such as'The quick brown fox jumped over the lazy dog'.
- **`msg`** : Optional message to report on failure.


###  `assertContainsSubsequence` 


```
 assertContainsSubsequence(
    container,
    subsequence,
    msg=None
)
 
```

断言“container”包含作为子序列的“subsequence”。

Asserts that "container" contains all the elements of "subsequence", inorder, but possibly with other elements interspersed. For example, [1, 2, 3]is a subsequence of [0, 0, 1, 2, 0, 3, 0] but not of [0, 0, 1, 3, 0, 2, 0].

#### 参数：
- **`container`** : the list we're testing for subsequence inclusion.
- **`subsequence`** : the list we hope will be a subsequence of container.
- **`msg`** : Optional message to report on failure.


###  `assertContainsSubset` 


```
 assertContainsSubset(
    expected_subset,
    actual_set,
    msg=None
)
 
```

检查实际iterable是否为预期iterable的超集。

###  `assertCountEqual` 


```
 assertCountEqual(
    first,
    second,
    msg=None
)
 
```

An unordered sequence comparison asserting that the same elements,regardless of order.  If the same element occurs more than once,it verifies that the elements occur the same number of times.

```
 self.assertEqual(Counter(list(first)),
                 Counter(list(second)))
 
```

Example:    - [0, 1, 1] and [1, 0, 1] compare equal.    - [0, 0, 1] and [0, 1] compare unequal.

###  `assertDTypeEqual` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2700-L2713)

```
 assertDTypeEqual(
    target,
    expected_dtype
)
 
```

assert ndarray数据类型等于预期值。

#### 参数：
- **`target`** : The numpy  `ndarray` , or anything that can be converted into anumpy  `ndarray`  (including Tensor).
- **`expected_dtype`** : Expected data type.


###  `assertDeviceEqual` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2781-L2793)

```
 assertDeviceEqual(
    device1,
    device2,
    msg=None
)
 
```

断言两个给定的设备是相同的。

#### 参数：
- **`device1`** : A string device name or TensorFlow  `DeviceSpec`  object.
- **`device2`** : A string device name or TensorFlow  `DeviceSpec`  object.
- **`msg`** : Optional message to report on failure.


###  `assertDictContainsSubset` 


```
 assertDictContainsSubset(
    subset,
    dictionary,
    msg=None
)
 
```

检查字典是否为子集的超集。

###  `assertDictEqual` 


```
 assertDictEqual(
    a,
    b,
    msg=None
)
 
```

如果a和b不是相等的字典，则引发断言错误。

#### 参数：
- **`a`** : A dict, the expected value.
- **`b`** : A dict, the actual value.
- **`msg`** : An optional str, the associated message.


#### 加薪：
- **`AssertionError`** : if the dictionaries are not equal.


###  `assertEmpty` 


```
 assertEmpty(
    container,
    msg=None
)
 
```

断言对象的长度为零。

#### 参数：
- **`container`** : Anything that implements the collections.abc.Sized interface.
- **`msg`** : Optional message to report on failure.


###  `assertEndsWith` 


```
 assertEndsWith(
    actual,
    expected_end,
    msg=None
)
 
```

Asserts that actual.endswith(expected_end) is True.

#### 参数：
- **`actual`** : str
- **`expected_end`** : str
- **`msg`** : Optional message to report on failure.


###  `assertEqual` 


```
 assertEqual(
    first,
    second,
    msg=None
)
 
```

Fail if the two objects are unequal as determined by the '=='operator.

###  `assertEquals` 


```
 assertEquals(
    *args,
    **kwargs
)
 
```

###  `assertFalse` 


```
 assertFalse(
    expr,
    msg=None
)
 
```

检查表达式是否为false。

###  `assertGreater` 


```
 assertGreater(
    a,
    b,
    msg=None
)
 
```

Just like self.assertTrue(a > b), but with a nicer default message.

###  `assertGreaterEqual` 


```
 assertGreaterEqual(
    a,
    b,
    msg=None
)
 
```

Just like self.assertTrue(a >= b), but with a nicer default message.

###  `assertIn` 


```
 assertIn(
    member,
    container,
    msg=None
)
 
```

Just like self.assertTrue(a in b), but with a nicer default message.

###  `assertIs` 


```
 assertIs(
    expr1,
    expr2,
    msg=None
)
 
```

Just like self.assertTrue(a is b), but with a nicer default message.

###  `assertIsInstance` 


```
 assertIsInstance(
    obj,
    cls,
    msg=None
)
 
```

Same as self.assertTrue(isinstance(obj, cls)), with a nicerdefault message.

###  `assertIsNone` 


```
 assertIsNone(
    obj,
    msg=None
)
 
```

Same as self.assertTrue(obj is None), with a nicer default message.

###  `assertIsNot` 


```
 assertIsNot(
    expr1,
    expr2,
    msg=None
)
 
```

Just like self.assertTrue(a is not b), but with a nicer default message.

###  `assertIsNotNone` 


```
 assertIsNotNone(
    obj,
    msg=None
)
 
```

包括对称与断言。

###  `assertItemsEqual` 


```
 assertItemsEqual(
    first,
    second,
    msg=None
)
 
```

An unordered sequence comparison asserting that the same elements,regardless of order.  If the same element occurs more than once,it verifies that the elements occur the same number of times.

```
 self.assertEqual(Counter(list(first)),
                 Counter(list(second)))
 
```

Example:    - [0, 1, 1] and [1, 0, 1] compare equal.    - [0, 0, 1] and [0, 1] compare unequal.

###  `assertJsonEqual` 


```
 assertJsonEqual(
    first,
    second,
    msg=None
)
 
```

断言在两个字符串中定义的json对象是相等的。

A summary of the differences will be included in the failure messageusing assertSameStructure.

#### 参数：
- **`first`** : A string containing JSON to decode and compare to second.
- **`second`** : A string containing JSON to decode and compare to first.
- **`msg`** : Additional text to include in the failure message.


###  `assertLen` 


```
 assertLen(
    container,
    expected_len,
    msg=None
)
 
```

断言对象具有预期的长度。

#### 参数：
- **`container`** : Anything that implements the collections.abc.Sized interface.
- **`expected_len`** : The expected length of the container.
- **`msg`** : Optional message to report on failure.


###  `assertLess` 


```
 assertLess(
    a,
    b,
    msg=None
)
 
```

Just like self.assertTrue(a < b), but with a nicer default message.

###  `assertLessEqual` 


```
 assertLessEqual(
    a,
    b,
    msg=None
)
 
```

Just like self.assertTrue(a <= b), but with a nicer default message.

###  `assertListEqual` 


```
 assertListEqual(
    list1,
    list2,
    msg=None
)
 
```

A list-specific equality assertion.

#### 参数：
- **`list1`** : The first list to compare.
- **`list2`** : The second list to compare.
- **`msg`** : Optional message to use on failure instead of a list of    differences.


###  `assertLogs` 


```
 assertLogs(
    logger=None,
    level=None
)
 
```

Fail unless a log message of level *level* or higher is emittedon *logger_name* or its children.  If omitted, *level* defaults toINFO and *logger* defaults to the root logger.

This method must be used as a context manager, and will yielda recording object with two attributes:  `output`  and  `records` .At the end of the context manager, the  `output`  attribute willbe a list of the matching formatted log messages and the `records`  attribute will be a list of the corresponding LogRecordobjects.

例子：：

```
 with self.assertLogs('foo', level='INFO') as cm:
    logging.getLogger('foo').info('first message')
    logging.getLogger('foo.bar').error('second message')
self.assertEqual(cm.output, ['INFO:foo:first message',
                             'ERROR:foo.bar:second message'])
 
```

###  `assertMultiLineEqual` 


```
 assertMultiLineEqual(
    first,
    second,
    msg=None,
    **kwargs
)
 
```

Asserts that two multi-line strings are equal.

###  `assertNDArrayNear` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2247-L2257)

```
 assertNDArrayNear(
    ndarray1,
    ndarray2,
    err,
    msg=None
)
 
```

断言两个numpy数组有接近的值。

#### 参数：
- **`ndarray1`** : a numpy ndarray.
- **`ndarray2`** : a numpy ndarray.
- **`err`** : a float. The maximum absolute difference allowed.
- **`msg`** : Optional message to report on failure.


###  `assertNear` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2209-L2225)

```
 assertNear(
    f1,
    f2,
    err,
    msg=None
)
 
```

断言两个浮标彼此靠近。

Checks that |f1 - f2| < err and asserts a test failureif not.

#### 参数：
- **`f1`** : A float value.
- **`f2`** : A float value.
- **`err`** : A float value.
- **`msg`** : An optional string message to append to the failure message.


###  `assertNoCommonElements` 


```
 assertNoCommonElements(
    expected_seq,
    actual_seq,
    msg=None
)
 
```

检查实际iterable和预期iterable是否不相交。

###  `assertNotAllClose` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2461-L2478)

```
 assertNotAllClose(
    a,
    b,
    **kwargs
)
 
```

Assert that two numpy arrays, or Tensors, do not have near values.

#### 参数：
- **`a`** : the first value to compare.
- **`b`** : the second value to compare.
- **`**kwargs`** : additional keyword arguments to be passed to the underlying `assertAllClose`  call.


#### 加薪：
- **`AssertionError`** : If  `a`  and  `b`  are unexpectedly close at all elements.


###  `assertNotAllEqual` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2525-L2538)

```
 assertNotAllEqual(
    a,
    b,
    msg=None
)
 
```

断言两个numpy数组或张量的值不相同。

#### 参数：
- **`a`** : the expected numpy ndarray or anything can be converted to one.
- **`b`** : the actual numpy ndarray or anything can be converted to one.
- **`msg`** : Optional message to report on failure.


###  `assertNotAlmostEqual` 


```
 assertNotAlmostEqual(
    first,
    second,
    places=None,
    msg=None,
    delta=None
)
 
```

Fail if the two objects are equal as determined by theirdifference rounded to the given number of decimal places(default 7) and comparing to zero, or by comparing that thedifference between the two objects is less than the given delta.

Note that decimal places (from zero) are usually not the sameas significant digits (measured from the most significant digit).

相等的对象将自动失败。

###  `assertNotAlmostEquals` 


```
 assertNotAlmostEquals(
    *args,
    **kwargs
)
 
```

###  `assertNotEmpty` 


```
 assertNotEmpty(
    container,
    msg=None
)
 
```

Asserts that an object has non-zero length.

#### 参数：
- **`container`** : Anything that implements the collections.abc.Sized interface.
- **`msg`** : Optional message to report on failure.


###  `assertNotEndsWith` 


```
 assertNotEndsWith(
    actual,
    unexpected_end,
    msg=None
)
 
```

Asserts that actual.endswith(unexpected_end) is False.

#### 参数：
- **`actual`** : str
- **`unexpected_end`** : str
- **`msg`** : Optional message to report on failure.


###  `assertNotEqual` 


```
 assertNotEqual(
    first,
    second,
    msg=None
)
 
```

Fail if the two objects are equal as determined by the '!='operator.

###  `assertNotEquals` 


```
 assertNotEquals(
    *args,
    **kwargs
)
 
```

###  `assertNotIn` 


```
 assertNotIn(
    member,
    container,
    msg=None
)
 
```

Just like self.assertTrue(a not in b), but with a nicer default message.

###  `assertNotIsInstance` 


```
 assertNotIsInstance(
    obj,
    cls,
    msg=None
)
 
```

包括对称性和断言性。

###  `assertNotRegex` 


```
 assertNotRegex(
    text,
    unexpected_regex,
    msg=None
)
 
```

如果文本与正则表达式匹配，则测试失败。

###  `assertNotRegexpMatches` 


```
 assertNotRegexpMatches(
    *args,
    **kwargs
)
 
```

###  `assertNotStartsWith` 


```
 assertNotStartsWith(
    actual,
    unexpected_start,
    msg=None
)
 
```

Asserts that actual.startswith(unexpected_start) is False.

#### 参数：
- **`actual`** : str
- **`unexpected_start`** : str
- **`msg`** : Optional message to report on failure.


###  `assertProtoEquals` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L1882-L1906)

```
 assertProtoEquals(
    expected_message_maybe_ascii,
    message,
    msg=None
)
 
```

Asserts that message is same as parsed expected_message_ascii.

Creates another prototype of message, reads the ascii message into it andthen compares them using self._AssertProtoEqual().

#### 参数：
- **`expected_message_maybe_ascii`** : proto message in original or ascii form.
- **`message`** : the message to validate.
- **`msg`** : Optional message to report on failure.


###  `assertProtoEqualsVersion` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L1908-L1917)

```
 assertProtoEqualsVersion(
    expected,
    actual,
    producer=versions.GRAPH_DEF_VERSION,
    min_consumer=versions.GRAPH_DEF_VERSION_MIN_CONSUMER,
    msg=None
)
 
```

###  `assertRaises` 


```
 assertRaises(
    expected_exception,
    *args,
    **kwargs
)
 
```

Fail unless an exception of class expected_exception is raisedby the callable when invoked with specified positional andkeyword arguments. If a different type of exception israised, it will not be caught, and the test case will bedeemed to have suffered an error, exactly as for anunexpected exception.

If called with the callable and arguments omitted, will return acontext object used like this::

```
  with self.assertRaises(SomeException):
     do_something()
 
```

An optional keyword argument 'msg' can be provided when assertRaisesis used as a context object.

The context manager keeps a reference to the exception asthe 'exception' attribute. This allows you to inspect theexception after the assertion::

```
 with self.assertRaises(SomeException) as cm:
    do_something()
the_exception = cm.exception
self.assertEqual(the_exception.error_code, 3)
 
```

###  `assertRaisesOpError` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2759-L2761)

```
 assertRaisesOpError(expected_err_re_or_predicate)
 
```

###  `assertRaisesRegex` 


```
 assertRaisesRegex(
    expected_exception,
    expected_regex,
    *args,
    **kwargs
)
 
```

断言引发的异常中的消息与正则表达式匹配。

#### 参数：
- **`expected_exception`** : Exception class expected to be raised.
- **`expected_regex`** : Regex (re pattern object or string) expected    to be found in error message.
- **`args`** : Function to be called and extra positional args.
- **`kwargs`** : Extra kwargs.
- **`msg`** : Optional message used in case of failure. Can only be used    when assertRaisesRegex is used as a context manager.


###  `assertRaisesRegexp` 


```
 assertRaisesRegexp(
    expected_exception,
    expected_regex,
    *args,
    **kwargs
)
 
```

断言引发的异常中的消息与正则表达式匹配。

#### 参数：
- **`expected_exception`** : Exception class expected to be raised.
- **`expected_regex`** : Regex (re pattern object or string) expected    to be found in error message.
- **`args`** : Function to be called and extra positional args.
- **`kwargs`** : Extra kwargs.
- **`msg`** : Optional message used in case of failure. Can only be used    when assertRaisesRegex is used as a context manager.


###  `assertRaisesWithLiteralMatch` 


```
 assertRaisesWithLiteralMatch(
    expected_exception,
    expected_exception_message,
    callable_obj=None,
    *args,
    **kwargs
)
 
```

断言引发的异常中的消息等于给定的字符串。

Unlike assertRaisesRegex, this method takes a literal string, nota regular expression.

with self.assertRaisesWithLiteralMatch(ExType, 'message'):  DoSomething()

#### 参数：
- **`expected_exception`** : Exception class expected to be raised.
- **`expected_exception_message`** : String message expected in the raisedexception.  For a raise exception e, expected_exception_message mustequal str(e).
- **`callable_obj`** : Function to be called, or None to return a context.
- **`*args`** : Extra args.
- **`**kwargs`** : Extra kwargs.


#### 返回：
A context manager if callable_obj is None. Otherwise, None.

#### 加薪：
self.failureException if callable_obj does not raise a matching exception.

###  `assertRaisesWithPredicateMatch` 


```
 assertRaisesWithPredicateMatch(
    *args,
    **kwds
)
 
```

返回一个上下文管理器，将引发异常的代码括起来。

If the exception is an OpError, the op stack is also included in the messagepredicate search.

#### 参数：
- **`exception_type`** : The expected type of exception that should be raised.
- **`expected_err_re_or_predicate`** : If this is callable, it should be a functionof one argument that inspects the passed-in exception and returns True(success) or False (please fail the test). Otherwise, the error messageis expected to match this regular expression partially.


#### 返回：
A context manager to surround code that is expected to raise anexception.

###  `assertRegex` 


```
 assertRegex(
    text,
    expected_regex,
    msg=None
)
 
```

除非文本与正则表达式匹配，否则测试将失败。

###  `assertRegexMatch` 


```
 assertRegexMatch(
    actual_str,
    regexes,
    message=None
)
 
```

断言正则表达式中至少有一个正则表达式与str匹配。

If possible you should use  `assertRegex` , which is a simplerversion of this method.  `assertRegex`  takes a single regularexpression (a string or re compiled object) instead of a list.

#### 注：
1. This function uses substring matching, i.e. the matchingsucceeds if *any* substring of the error message matches *any*regex in the list.  This is more convenient for the user thanfull-string matching.


2. If regexes is the empty list, the matching will always fail.


3. Use regexes=[''] for a regex that will always pass.


4. '.' matches any single character *except* the newline.  Tomatch any character, use '(.|\n)'.


5. '^' matches the beginning of each line, not just the beginningof the string.  Similarly, '$' matches the end of each line.


6. An exception will be thrown if regexes contains an invalidregex.


#### 参数：
- **`actual_str`** :  The string we try to match with the items in regexes.
- **`regexes`** :  The regular expressions we want to match against str.See "Notes" above for detailed notes on how this is interpreted.
- **`message`** :  The message to be printed if the test fails.


###  `assertRegexpMatches` 


```
 assertRegexpMatches(
    *args,
    **kwargs
)
 
```

###  `assertSameElements` 


```
 assertSameElements(
    expected_seq,
    actual_seq,
    msg=None
)
 
```

断言两个序列具有相同的元素（以任何顺序）。

This method, unlike assertCountEqual, doesn't care about anyduplicates in the expected and actual sequences.


> assertSameElements([1, 1, 1, 0, 0, 0], [0, 1])  # Doesn't raise an AssertionError


If possible, you should use assertCountEqual instead ofassertSameElements.

#### 参数：
- **`expected_seq`** : A sequence containing elements we are expecting.
- **`actual_seq`** : The sequence that we are testing.
- **`msg`** : The message to be printed if the test fails.


###  `assertSameStructure` 


```
 assertSameStructure(
    a,
    b,
    aname='a',
    bname='b',
    msg=None
)
 
```

断言两个值包含相同的结构内容。

The two arguments should be data trees consisting of trees of dicts andlists. They will be deeply compared by walking into the contents of dictsand lists; other items will be compared using the == operator.If the two structures differ in content, the failure message will indicatethe location within the structures where the first difference is found.This may be helpful when comparing large structures.

Mixed Sequence and Set types are supported. Mixed Mapping types aresupported, but the order of the keys will not be considered in thecomparison.

#### 参数：
- **`a`** : The first structure to compare.
- **`b`** : The second structure to compare.
- **`aname`** : Variable name to use for the first structure in assertion messages.
- **`bname`** : Variable name to use for the second structure.
- **`msg`** : Additional text to include in the failure message.


###  `assertSequenceAlmostEqual` 


```
 assertSequenceAlmostEqual(
    expected_seq,
    actual_seq,
    places=None,
    msg=None,
    delta=None
)
 
```

有序序列的近似相等断言。

Fail if the two sequences are unequal as determined by their valuedifferences rounded to the given number of decimal places (default 7) andcomparing to zero, or by comparing that the difference between each valuein the two sequences is more than the given delta.

Note that decimal places (from zero) are usually not the same as significantdigits (measured from the most significant digit).

If the two sequences compare equal then they will automatically comparealmost equal.

#### 参数：
- **`expected_seq`** : A sequence containing elements we are expecting.
- **`actual_seq`** : The sequence that we are testing.
- **`places`** : The number of decimal places to compare.
- **`msg`** : The message to be printed if the test fails.
- **`delta`** : The OK difference between compared values.


###  `assertSequenceEqual` 


```
 assertSequenceEqual(
    seq1,
    seq2,
    msg=None,
    seq_type=None
)
 
```

有序序列（如列表和元组）的相等断言。

For the purposes of this function, a valid ordered sequence type is onewhich can be indexed, has a length, and has an equality operator.

#### 参数：
- **`seq1`** : The first sequence to compare.
- **`seq2`** : The second sequence to compare.
- **`seq_type`** : The expected datatype of the sequences, or None if no    datatype should be enforced.
- **`msg`** : Optional message to use on failure instead of a list of    differences.


###  `assertSequenceStartsWith` 


```
 assertSequenceStartsWith(
    prefix,
    whole,
    msg=None
)
 
```

顺序序列开头的相等断言。

If prefix is an empty sequence, it will raise an error unless whole is alsoan empty sequence.

If prefix is not a sequence, it will raise an error if the first element ofwhole does not match.

#### 参数：
- **`prefix`** : A sequence expected at the beginning of the whole parameter.
- **`whole`** : The sequence in which to look for prefix.
- **`msg`** : Optional message to report on failure.


###  `assertSetEqual` 


```
 assertSetEqual(
    set1,
    set2,
    msg=None
)
 
```

A set-specific equality assertion.

#### 参数：
- **`set1`** : The first set to compare.
- **`set2`** : The second set to compare.
- **`msg`** : Optional message to use on failure instead of a list of    differences.
assertSetEqual uses ducktyping to support different types of sets, andis optimized for sets specifically (parameters must support adifference method).

###  `assertShapeEqual` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2763-L2779)

```
 assertShapeEqual(
    np_array,
    tf_tensor,
    msg=None
)
 
```

断言numpy-ndarray和tensorflow张量具有相同的形状。

#### 参数：
- **`np_array`** : A Numpy ndarray or Numpy scalar.
- **`tf_tensor`** : A Tensor.
- **`msg`** : Optional message to report on failure.


#### 加薪：
- **`TypeError`** : If the arguments have the wrong type.


###  `assertStartsWith` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L1919-L1930)

```
 assertStartsWith(
    actual,
    expected_start,
    msg=None
)
 
```

Assert that actual.startswith(expected_start) is True.

#### 参数：
- **`actual`** : str
- **`expected_start`** : str
- **`msg`** : Optional message to report on failure.


###  `assertTotallyOrdered` 


```
 assertTotallyOrdered(
    *groups,
    **kwargs
)
 
```

断言已正确实现总排序。

For example, say you have a class A that compares only on its attribute x.Comparators other than **lt**  are omitted for brevity.

class A(object):  def **init** (self, x, y):    self.x = x    self.y = y

def **hash** (self):    return hash(self.x)

def **lt** (self, other):    try:      return self.x < other.x    except AttributeError:      return NotImplemented

assertTotallyOrdered will check that instances can be ordered correctly.For example,

self.assertTotallyOrdered(  [None],  # None should come before everything else.  [1],     # Integers sort earlier.  [A(1, 'a')],  [A(2, 'b')],  # 2 is after 1.  [A(3, 'c'), A(3, 'd')],  # The second argument is irrelevant.  [A(4, 'z')],  ['foo'])  # Strings sort last.

#### 参数：
- **`*groups`** : A list of groups of elements.  Each group of elements is a listof objects that are equal.  The elements in each group must be lessthan the elements in the group after it.  For example, these groups aretotally ordered: [None], [1], [2, 2], [3].**kwargs: optional msg keyword argument can be passed.


###  `assertTrue` 


```
 assertTrue(
    expr,
    msg=None
)
 
```

检查表达式是否为真。

###  `assertTupleEqual` 


```
 assertTupleEqual(
    tuple1,
    tuple2,
    msg=None
)
 
```

A tuple-specific equality assertion.

#### 参数：
- **`tuple1`** : The first tuple to compare.
- **`tuple2`** : The second tuple to compare.
- **`msg`** : Optional message to use on failure instead of a list of    differences.


###  `assertUrlEqual` 


```
 assertUrlEqual(
    a,
    b,
    msg=None
)
 
```

Asserts that urls are equal, ignoring ordering of query params.

###  `assertWarns` 


```
 assertWarns(
    expected_warning,
    *args,
    **kwargs
)
 
```

Fail unless a warning of class warnClass is triggeredby the callable when invoked with specified positional andkeyword arguments.  If a different type of warning istriggered, it will not be handled: depending on the otherwarning filtering rules in effect, it might be silenced, printedout, or raised as an exception.

If called with the callable and arguments omitted, will return acontext object used like this::

```
  with self.assertWarns(SomeWarning):
     do_something()
 
```

An optional keyword argument 'msg' can be provided when assertWarnsis used as a context object.

The context manager keeps a reference to the first matchingwarning as the 'warning' attribute; similarly, the 'filename'and 'lineno' attributes give you information about the lineof Python code from which the warning was triggered.This allows you to inspect the warning after the assertion::

```
 with self.assertWarns(SomeWarning) as cm:
    do_something()
the_warning = cm.warning
self.assertEqual(the_warning.some_attribute, 147)
 
```

###  `assertWarnsRegex` 


```
 assertWarnsRegex(
    expected_warning,
    expected_regex,
    *args,
    **kwargs
)
 
```

Asserts that the message in a triggered warning matches a regexp.Basic functioning is similar to assertWarns() with the additionthat only warnings whose messages also match the regular expressionare considered successful matches.

#### 参数：
- **`expected_warning`** : Warning class expected to be triggered.
- **`expected_regex`** : Regex (re pattern object or string) expected    to be found in error message.
- **`args`** : Function to be called and extra positional args.
- **`kwargs`** : Extra kwargs.
- **`msg`** : Optional message used in case of failure. Can only be used    when assertWarnsRegex is used as a context manager.


###  `assert_` 


```
 assert_(
    *args,
    **kwargs
)
 
```

###  `cached_session` 


```
 cached_session(
    *args,
    **kwds
)
 
```

返回用于执行测试的tensorflow会话。

This method behaves differently than self.session(): for performance reasons `cached_session`  will by default reuse the same session within the sametest. The session returned by this function will only be closed at the endof the test (in the TearDown function).

Use the  `use_gpu`  and  `force_gpu`  options to control where ops are run. If `force_gpu`  is True, all ops are pinned to  `/device:GPU:0` . Otherwise, if `use_gpu`  is True, TensorFlow tries to run as many ops on the GPU aspossible. If both  `force_gpu and` use_gpu` are False, all ops are pinned tothe CPU.

#### 示例：


```
 class MyOperatorTest(test_util.TensorFlowTestCase):
  def testMyOperator(self):
    with self.cached_session(use_gpu=True) as sess:
      valid_input = [1.0, 2.0, 3.0, 4.0, 5.0]
      result = MyOperator(valid_input).eval()
      self.assertEqual(result, [1.0, 2.0, 3.0, 5.0, 8.0]
      invalid_input = [-1.0, 2.0, 7.0]
      with self.assertRaisesOpError("negative input not supported"):
        MyOperator(invalid_input).eval()
 
```

#### 参数：
- **`graph`** : Optional graph to use during the returned session.
- **`config`** : An optional config_pb2.ConfigProto to use to configure thesession.
- **`use_gpu`** : If True, attempt to run as many ops as possible on GPU.
- **`force_gpu`** : If True, pin all ops to  `/device:GPU:0` .


#### 收益率：
A Session object that should be used as a context manager to surroundthe graph building and execution code in a test case.

###  `captureWritesToStream` 


```
 captureWritesToStream(
    *args,
    **kwds
)
 
```

捕获对给定流的写入的上下文管理器。

This context manager captures all writes to a given stream inside of a `CapturedWrites`  object. When this context manager is created, it yieldsthe  `CapturedWrites`  object. The captured contents can be accessed  bycalling  `.contents()`  on the  `CapturedWrites` .

For this function to work, the stream must have a file descriptor thatcan be modified using  `os.dup`  and  `os.dup2` , and the stream must supporta  `.flush()`  method. The default python sys.stdout and sys.stderr areexamples of this. Note that this does not work in Colab or Jupyternotebooks, because those use alternate stdout streams.

#### 示例：


```
 class MyOperatorTest(test_util.TensorFlowTestCase):
  def testMyOperator(self):
    input = [1.0, 2.0, 3.0, 4.0, 5.0]
    with self.captureWritesToStream(sys.stdout) as captured:
      result = MyOperator(input).eval()
    self.assertStartsWith(captured.contents(), "This was printed.")
 
```

#### 参数：
- **`stream`** : The stream whose writes should be captured. This stream must havea file descriptor, support writing via using that file descriptor, andmust have a  `.flush()`  method.


#### 收益率：
A  `CapturedWrites`  object that contains all writes to the specified streammade during this context.

###  `checkedThread` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2188-L2206)

```
 checkedThread(
    target,
    args=None,
    kwargs=None
)
 
```

返回断言“target”已成功完成的线程包装器。

This method should be used to create all threads in test cases, asotherwise there is a risk that a thread will silently fail, and/orassertions made in the thread will not be respected.

#### 参数：
- **`target`** : A callable object to be executed in the thread.
- **`args`** : The argument tuple for the target invocation. Defaults to ().
- **`kwargs`** : A dictionary of keyword arguments for the target invocation.Defaults to {}.


#### 返回：
支持start（）和join（）方法的threading.thread的包装器。

###  `countTestCases` 


```
 countTestCases()
 
```

###  `create_tempdir` 


```
 create_tempdir(
    name=None,
    cleanup=None
)
 
```

创建特定于测试的临时目录。

注意：The directory and its contents will be recursively cleared beforecreation. This ensures that there is no pre-existing state.

This creates a named directory on disk that is isolated to this test, andwill be properly cleaned up by the test. This avoids several pitfalls ofcreating temporary directories for test purposes, as well as makes it easierto setup directories and verify their contents.

See also:  `create_tempfile()`  for creating temporary files.

#### 参数：
- **`name`** : Optional name of the directory. If not given, a uniquename will be generated and used.
- **`cleanup`** : Optional cleanup policy on when/if to remove the directory (andall its contents) at the end of the test. If None, then uses `self.tempfile_cleanup` .


#### 返回：
A _TempDir representing the created directory.

###  `create_tempfile` 


```
 create_tempfile(
    file_path=None,
    content=None,
    mode='w',
    encoding='utf8',
    errors='strict',
    cleanup=None
)
 
```

创建特定于测试的临时文件。

This creates a named file on disk that is isolated to this test, and willbe properly cleaned up by the test. This avoids several pitfalls ofcreating temporary files for test purposes, as well as makes it easierto setup files, their data, read them back, and inspect them whena test fails.

注意：This will zero-out the file. This ensures there is no pre-existingstate.注意：If the file already exists, it will be made writable and overwritten.

See also:  `create_tempdir()`  for creating temporary directories, and `_TempDir.create_file`  for creating files within a temporary directory.

#### 参数：
- **`file_path`** : Optional file path for the temp file. If not given, a uniquefile name will be generated and used. Slashes are allowed in the name;any missing intermediate directories will be created. 注意：This path isthe path that will be cleaned up, including any directories in the path,e.g., 'foo/bar/baz.txt' will  `rm -r foo` .
- **`content`** : Optional string orbytes to initially write to the file. If notspecified, then an empty file is created.
- **`mode`** : Mode string to use when writing content. Only used if  `content`  isnon-empty.
- **`encoding`** : Encoding to use when writing string content. Only used if `content`  is text.
- **`errors`** : How to handle text to bytes encoding errors. Only used if `content`  is text.
- **`cleanup`** : Optional cleanup policy on when/if to remove the directory (andall its contents) at the end of the test. If None, then uses `self.tempfile_cleanup` .


#### 返回：
A _TempFile representing the created file.

###  `debug` 


```
 debug()
 
```

在不收集测试结果错误的情况下运行测试

###  `defaultTestResult` 


```
 defaultTestResult()
 
```

###  `doCleanups` 


```
 doCleanups()
 
```

Execute all cleanup functions. Normally called for you aftertearDown.

###  `evaluate` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L1961-L1978)

```
 evaluate(tensors)
 
```

计算张量并返回numpy值。

#### 参数：
- **`tensors`** : A Tensor or a nested list/tuple of Tensors.


#### 返回：
张量numpy值。

###  `fail` 


```
 fail(
    msg=None,
    prefix=None
)
 
```

Fail immediately with the given message, optionally prefixed.

###  `failIf` 


```
 failIf(
    *args,
    **kwargs
)
 
```

###  `failIfAlmostEqual` 


```
 failIfAlmostEqual(
    *args,
    **kwargs
)
 
```

###  `failIfEqual` 


```
 failIfEqual(
    *args,
    **kwargs
)
 
```

###  `failUnless` 


```
 failUnless(
    *args,
    **kwargs
)
 
```

###  `failUnlessAlmostEqual` 


```
 failUnlessAlmostEqual(
    *args,
    **kwargs
)
 
```

###  `failUnlessEqual` 


```
 failUnlessEqual(
    *args,
    **kwargs
)
 
```

###  `failUnlessRaises` 


```
 failUnlessRaises(
    *args,
    **kwargs
)
 
```

###  `get_temp_dir` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L1803-L1819)

```
 get_temp_dir()
 
```

返回测试要使用的唯一临时目录。

If you call this method multiple times during in a test, it will return thesame folder. However, across different runs the directories will bedifferent. This will ensure that across different runs tests will not beable to pollute each others environment.If you need multiple unique directories within a single test, you shoulduse tempfile.mkdtemp as follows:  tempfile.mkdtemp(dir=self.get_temp_dir()):

#### 返回：
string, the path to the unique temporary directory created for this test.

###  `id` 


```
 id()
 
```

###  `run` 


```
 run(result=None)
 
```

###  `session` 


```
 session(
    *args,
    **kwds
)
 
```

返回用于执行测试的tensorflow会话。

请注意，这会将此会话和图形设置为全局默认值。

Use the  `use_gpu`  and  `force_gpu`  options to control where ops are run. If `force_gpu`  is True, all ops are pinned to  `/device:GPU:0` . Otherwise, if `use_gpu`  is True, TensorFlow tries to run as many ops on the GPU aspossible. If both  `force_gpu and` use_gpu` are False, all ops are pinned tothe CPU.

#### 示例：


```
 class MyOperatorTest(test_util.TensorFlowTestCase):
  def testMyOperator(self):
    with self.session(use_gpu=True):
      valid_input = [1.0, 2.0, 3.0, 4.0, 5.0]
      result = MyOperator(valid_input).eval()
      self.assertEqual(result, [1.0, 2.0, 3.0, 5.0, 8.0]
      invalid_input = [-1.0, 2.0, 7.0]
      with self.assertRaisesOpError("negative input not supported"):
        MyOperator(invalid_input).eval()
 
```

#### 参数：
- **`graph`** : Optional graph to use during the returned session.
- **`config`** : An optional config_pb2.ConfigProto to use to configure thesession.
- **`use_gpu`** : If True, attempt to run as many ops as possible on GPU.
- **`force_gpu`** : If True, pin all ops to  `/device:GPU:0` .


#### 收益率：
A Session object that should be used as a context manager to surroundthe graph building and execution code in a test case.

###  `setUp` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L1771-L1790)

```
 setUp()
 
```

在使用前设置测试夹具的钩子法。

###  `setUpClass` 


```
 setUpClass(cls)
 
```

在类中运行测试之前设置类fixture的钩子方法。

###  `shortDescription` 


```
 shortDescription()
 
```

格式化测试方法名及其docstring的第一行。

If no docstring is given, only returns the method name.

This method overrides unittest.TestCase.shortDescription(), whichonly returns the first line of the docstring, obscuring the nameof the test upon failure.

#### 返回：
- **`desc`** : A short description of a test method.


###  `skipTest` 


```
 skipTest(reason)
 
```

跳过这个测试。

###  `subTest` 


```
 subTest(
    *args,
    **kwds
)
 
```

Return a context manager that will return the enclosed blockof code in a subtest identified by the optional message andkeyword parameters.  A failure in the subtest marks the testcase as failed but resumes execution at the end of the enclosedblock, allowing further test code to be executed.

###  `tearDown` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L1792-L1796)

```
 tearDown()
 
```

试验夹具试验后解构的钩子法。

###  `tearDownClass` 


```
 tearDownClass(cls)
 
```

hook方法，用于在运行类中的所有测试之后解构类fixture。

###  `test_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/test_util.py#L2076-L2098)

```
 test_session(
    graph=None,
    config=None,
    use_gpu=False,
    force_gpu=False
)
 
```

Use cached_session instead. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use  `self.session()`  or  `self.cached_session()`  instead.


## Class 成员
-  `maxDiff = 1600`  []()
-  `tempfile_cleanup`  []()
