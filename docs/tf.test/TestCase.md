## Class TestCase
Base class for tests that need to test TensorFlow.
### Aliases:
- Class `tf.compat.v1.test.TestCase`
- Class `tf.compat.v2.test.TestCase`
## __init__
View source

```
 __init__(methodName='runTest')
```
Create an instance of the class that will use the named test method when executed. Raises a ValueError if the instance does not have a method with the specified name.
## Child Classes
`class failureException`
## Methods
### __call__

```
 __call__(
    *args,
    **kwds
)
```
Call self as a function.
### __eq__

```
 __eq__(other)
```
Return self==value.
### addCleanup

```
 addCleanup(
    function,
    *args,
    **kwargs
)
```
Add a function, with arguments, to be called when the test is completed. Functions added are called on a LIFO basis and are called after tearDown on test failure or success.
Cleanup items are called even if setUp fails (unlike tearDown).
### addTypeEqualityFunc

```
 addTypeEqualityFunc(
    typeobj,
    function
)
```
Add a type specific assertEqual style function to compare a type.
This method is for use by TestCase subclasses that need to register their own type equality functions to provide nicer error messages.
#### Args:
- `typeobj`: The data type to call this function on when both values are of the same type in assertEqual().
- `function`: The callable taking two arguments and an optional msg= argument that raises self.failureException with a useful error message when the two arguments are not equal.
### assertAllClose
View source

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
`a` `a`nd `b` c`a`n `b`e `a`r`b`itr`a`rily nested structures. A l`a`yer of `a` nested structure c`a`n `b`e `a` `dict`, `namedtuple`, `tuple` or `list`.
#### Args:
- `a`: The expected numpy `ndarray`, or `a`nything th`a`t c`a`n be converted into `a` numpy `ndarray` (including Tensor), or `a`ny `a`rbitr`a`rily nested of structure of these.
- `b`: The actual numpy `ndarray`, or anything that can `b`e converted into a numpy `ndarray` (including Tensor), or any ar`b`itrarily nested of structure of these.
- `rtol`: relative tolerance.
- `atol`: absolute tolerance.
- `msg`: Optional message to report on failure.
#### Raises:
### assertAllCloseAccordingToType
View source

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
In particular, the tolerance is reduced to 1e-3 if at least one of the arguments is of type float16.
#### Args:
- `a`: the expected numpy nd`a`rr`a`y or `a`nything c`a`n be converted to one.
- `b`: the actual numpy ndarray or anything can `b`e converted to one.
- `rtol`: relative tolerance.
- `atol`: absolute tolerance.
- `float_rtol`: relative tolerance for float32.
- `float_atol`: absolute tolerance for float32.
- `half_rtol`: relative tolerance for float16.
- `half_atol`: absolute tolerance for float16.
- `bfloat16_rtol`: relative tolerance for bfloat16.
- `bfloat16_atol`: absolute tolerance for bfloat16.
- `msg`: Optional message to report on failure.
### assertAllEqual
View source

```
 assertAllEqual(
    a,
    b,
    msg=None
)
```
Asserts that two numpy arrays or Tensors have the same values.
#### Args:
- `a`: the expected numpy nd`a`rr`a`y or `a`nything c`a`n be converted to one.
- `b`: the actual numpy ndarray or anything can `b`e converted to one.
- `msg`: Optional message to report on failure.
### assertAllGreater
View source

```
 assertAllGreater(
    a,
    comparison_target
)
```
Assert element values are all greater than a target value.
#### Args:
- `a`: The numpy `ndarray`, or `a`nything th`a`t c`a`n be converted into `a` numpy `ndarray` (including Tensor).
- `comparison_target`: The target value of comparison.
### assertAllGreaterEqual
View source

```
 assertAllGreaterEqual(
    a,
    comparison_target
)
```
Assert element values are all greater than or equal to a target value.
#### Args:
- `a`: The numpy `ndarray`, or `a`nything th`a`t c`a`n be converted into `a` numpy `ndarray` (including Tensor).
- `comparison_target`: The target value of comparison.
### assertAllInRange
View source

```
 assertAllInRange(
    target,
    lower_bound,
    upper_bound,
    open_lower_bound=False,
    open_upper_bound=False
)
```
Assert that elements in a Tensor are all in a given range.
#### Args:
- `target`: The numpy `ndarray`, or anything that can be converted into a numpy `ndarray` (including Tensor).
- `lower_bound`: lower bound of the range
- `upper_bound`: upper bound of the range
- `open_lower_bound`: (`bool`) whether the lower bound is open (i.e., > rather than the default >=)
- `open_upper_bound`: (`bool`) whether the upper bound is open (i.e., < rather than the default <=)
#### Raises:
- `AssertionError`: if the value tensor does not have an ordered numeric type (float* or int*), or if there are nan values, or if any of the elements do not fall in the specified range.
### assertAllInSet
View source

```
 assertAllInSet(
    target,
    expected_set
)
```
Assert that elements of a Tensor are all in a given closed set.
#### Args:
- `target`: The numpy `ndarray`, or anything that can be converted into a numpy `ndarray` (including Tensor).
- `expected_set`: (`list`, `tuple` or `set`) The closed `set` that the elements of the value of `target` are expected to fall into.
#### Raises:
- `AssertionError`: if any of the elements do not fall into `expected_set`.
### assertAllLess
View source

```
 assertAllLess(
    a,
    comparison_target
)
```
Assert element values are all less than a target value.
#### Args:
- `a`: The numpy `ndarray`, or `a`nything th`a`t c`a`n be converted into `a` numpy `ndarray` (including Tensor).
- `comparison_target`: The target value of comparison.
### assertAllLessEqual
View source

```
 assertAllLessEqual(
    a,
    comparison_target
)
```
Assert element values are all less than or equal to a target value.
#### Args:
- `a`: The numpy `ndarray`, or `a`nything th`a`t c`a`n be converted into `a` numpy `ndarray` (including Tensor).
- `comparison_target`: The target value of comparison.
### assertAlmostEqual

```
 assertAlmostEqual(
    first,
    second,
    places=None,
    msg=None,
    delta=None
)
```
Fail if the two objects are unequal as determined by their difference rounded to the given number of decimal places (default 7) and comparing to zero, or by comparing that the between the two objects is more than the given delta.
Note that decimal places (from zero) are usually not the same as significant digits (measured from the most signficant digit).
If the two objects compare equal then they will automatically compare almost equal.
### assertAlmostEquals

```
 assertAlmostEquals(
    *args,
    **kwargs
)
```
### assertArrayNear
View source

```
 assertArrayNear(
    farray1,
    farray2,
    err,
    msg=None
)
```
Asserts that two float arrays are near each other.
Checks that for all elements of farray1 and farray2 |f1 - f2| < err. Asserts a test failure if not.
#### Args:
- `farray1`: a list of float values.
- `farray2`: a list of float values.
- `err`: a float value.
- `msg`: Optional message to report on failure.
### assertBetween

```
 assertBetween(
    value,
    minv,
    maxv,
    msg=None
)
```
Asserts that value is between minv and maxv (inclusive).
### assertCommandFails

```
 assertCommandFails(
    command,
    regexes,
    env=None,
    close_fds=True,
    msg=None
)
```
Asserts a shell command fails and the error matches a regex in a list.
#### Args:
- `command`: List or string representing the `command` to run.
- `regexes`: the list of regular expression strings.
- `env`: Dictionary of `env`ironment variable settings. If None, no `env`ironment variables will be set for the child process. This is to make tests more hermetic. NOTE: this behavior is different than the standard subprocess module.
- `close_fds`: Whether or not to close all open fd's in the child after forking.
- `msg`: Optional message to report on failure.
### assertCommandSucceeds

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
#### Args:
- `command`: List or string representing the `command` to run.
- `regexes`: List of regular expression byte strings that match success.
- `env`: Dictionary of `env`ironment variable settings. If None, no `env`ironment variables will be set for the child process. This is to make tests more hermetic. NOTE: this behavior is different than the standard subprocess module.
- `close_fds`: Whether or not to close all open fd's in the child after forking.
- `msg`: Optional message to report on failure.
### assertContainsExactSubsequence

```
 assertContainsExactSubsequence(
    container,
    subsequence,
    msg=None
)
```
Asserts that "container" contains "subsequence" as an exact subsequence.
Asserts that "container" contains all the elements of "subsequence", in order, and without other elements interspersed. For example, [1, 2, 3] is an exact subsequence of [0, 0, 1, 2, 3, 0] but not of [0, 0, 1, 2, 0, 3, 0].
#### Args:
- `container`: the list we're testing for subsequence inclusion.
- `subsequence`: the list we hope will be an exact `subsequence` of container.
- `msg`: Optional message to report on failure.
### assertContainsInOrder

```
 assertContainsInOrder(
    strings,
    target,
    msg=None
)
```
Asserts that the strings provided are found in the target in order.
This may be useful for checking HTML output.
#### Args:
- `strings`: A list of `strings`, such as [ 'fox', 'dog' ]
- `target`: A `target` string in which to look for the strings, such as 'The quick brown fox jumped over the lazy dog'.
- `msg`: Optional message to report on failure.
### assertContainsSubsequence

```
 assertContainsSubsequence(
    container,
    subsequence,
    msg=None
)
```
Asserts that "container" contains "subsequence" as a subsequence.
Asserts that "container" contains all the elements of "subsequence", in order, but possibly with other elements interspersed. For example, [1, 2, 3] is a subsequence of [0, 0, 1, 2, 0, 3, 0] but not of [0, 0, 1, 3, 0, 2, 0].
#### Args:
- `container`: the list we're testing for subsequence inclusion.
- `subsequence`: the list we hope will be a `subsequence` of container.
- `msg`: Optional message to report on failure.
### assertContainsSubset

```
 assertContainsSubset(
    expected_subset,
    actual_set,
    msg=None
)
```
Checks whether actual iterable is a superset of expected iterable.
### assertCountEqual

```
 assertCountEqual(
    first,
    second,
    msg=None
)
```
An unordered sequence comparison asserting that the same elements, regardless of order. If the same element occurs more than once, it verifies that the elements occur the same number of times.

```
 self.assertEqual(Counter(list(first)),
                 Counter(list(second)))
```
Example: - [0, 1, 1] and [1, 0, 1] compare equal. - [0, 0, 1] and [0, 1] compare unequal.
### assertDTypeEqual
View source

```
 assertDTypeEqual(
    target,
    expected_dtype
)
```
Assert ndarray data type is equal to expected.
#### Args:
- `target`: The numpy `ndarray`, or anything that can be converted into a numpy `ndarray` (including Tensor).
- `expected_dtype`: Expected data type.
### assertDeviceEqual
View source

```
 assertDeviceEqual(
    device1,
    device2,
    msg=None
)
```
Asserts that the two given devices are the same.
#### Args:
- `device1`: A string device name or TensorFlow `DeviceSpec` object.
- `device2`: A string device name or TensorFlow `DeviceSpec` object.
- `msg`: Optional message to report on failure.
### assertDictContainsSubset

```
 assertDictContainsSubset(
    subset,
    dictionary,
    msg=None
)
```
Checks whether dictionary is a superset of subset.
### assertDictEqual

```
 assertDictEqual(
    a,
    b,
    msg=None
)
```
Raises AssertionError if a and b are not equal dictionaries.
#### Args:
- `a`: A dict, the expected v`a`lue.
- `b`: A dict, the actual value.
- `msg`: An optional str, the associated message.
#### Raises:
- `AssertionError`: if the dictionaries are not equal.
### assertEmpty

```
 assertEmpty(
    container,
    msg=None
)
```
Asserts that an object has zero length.
#### Args:
- `container`: Anything that implements the collections.abc.Sized interface.
- `msg`: Optional message to report on failure.
### assertEndsWith

```
 assertEndsWith(
    actual,
    expected_end,
    msg=None
)
```
Asserts that actual.endswith(expected_end) is True.
#### Args:
- `actual`: str
- `expected_end`: str
- `msg`: Optional message to report on failure.
### assertEqual

```
 assertEqual(
    first,
    second,
    msg=None
)
```
Fail if the two objects are unequal as determined by the '==' operator.
### assertEquals

```
 assertEquals(
    *args,
    **kwargs
)
```
### assertFalse

```
 assertFalse(
    expr,
    msg=None
)
```
Check that the expression is false.
### assertGreater

```
 assertGreater(
    a,
    b,
    msg=None
)
```
Just like self.assertTrue(a > b), but with a nicer default message.
### assertGreaterEqual

```
 assertGreaterEqual(
    a,
    b,
    msg=None
)
```
Just like self.assertTrue(a >= b), but with a nicer default message.
### assertIn

```
 assertIn(
    member,
    container,
    msg=None
)
```
Just like self.assertTrue(a in b), but with a nicer default message.
### assertIs

```
 assertIs(
    expr1,
    expr2,
    msg=None
)
```
Just like self.assertTrue(a is b), but with a nicer default message.
### assertIsInstance

```
 assertIsInstance(
    obj,
    cls,
    msg=None
)
```
Same as self.assertTrue(isinstance(obj, cls)), with a nicer default message.
### assertIsNone

```
 assertIsNone(
    obj,
    msg=None
)
```
Same as self.assertTrue(obj is None), with a nicer default message.
### assertIsNot

```
 assertIsNot(
    expr1,
    expr2,
    msg=None
)
```
Just like self.assertTrue(a is not b), but with a nicer default message.
### assertIsNotNone

```
 assertIsNotNone(
    obj,
    msg=None
)
```
Included for symmetry with assertIsNone.
### assertItemsEqual

```
 assertItemsEqual(
    first,
    second,
    msg=None
)
```
An unordered sequence comparison asserting that the same elements, regardless of order. If the same element occurs more than once, it verifies that the elements occur the same number of times.

```
 self.assertEqual(Counter(list(first)),
                 Counter(list(second)))
```
Example: - [0, 1, 1] and [1, 0, 1] compare equal. - [0, 0, 1] and [0, 1] compare unequal.
### assertJsonEqual

```
 assertJsonEqual(
    first,
    second,
    msg=None
)
```
Asserts that the JSON objects defined in two strings are equal.
A summary of the differences will be included in the failure message using assertSameStructure.
#### Args:
- `first`: A string containing JSON to decode and compare to second.
- `second`: A string containing JSON to decode and compare to first.
- `msg`: Additional text to include in the failure message.
### assertLen

```
 assertLen(
    container,
    expected_len,
    msg=None
)
```
Asserts that an object has the expected length.
#### Args:
- `container`: Anything that implements the collections.abc.Sized interface.
- `expected_len`: The expected length of the container.
- `msg`: Optional message to report on failure.
### assertLess

```
 assertLess(
    a,
    b,
    msg=None
)
```
Just like self.assertTrue(a < b), but with a nicer default message.
### assertLessEqual

```
 assertLessEqual(
    a,
    b,
    msg=None
)
```
Just like self.assertTrue(a <= b), but with a nicer default message.
### assertListEqual

```
 assertListEqual(
    list1,
    list2,
    msg=None
)
```
A list-specific equality assertion.
#### Args:
- `list1`: The first list to compare.
- `list2`: The second list to compare.
- `msg`: Optional message to use on failure instead of a list of differences.
### assertLogs

```
 assertLogs(
    logger=None,
    level=None
)
```
Fail unless a log message of level level or higher is emitted on logger_name or its children. If omitted, level defaults to INFO and logger defaults to the root logger.
This method must be used as a context manager, and will yield a recording object with two attributes: `output` and `records`. At the end of the context manager, the `output` attribute will be a list of the matching formatted log messages and the `records` attribute will be a list of the corresponding LogRecord objects.
Example::

```
 with self.assertLogs('foo', level='INFO') as cm:
    logging.getLogger('foo').info('first message')
    logging.getLogger('foo.bar').error('second message')
self.assertEqual(cm.output, ['INFO:foo:first message',
                             'ERROR:foo.bar:second message'])
```
### assertMultiLineEqual

```
 assertMultiLineEqual(
    first,
    second,
    msg=None,
    **kwargs
)
```
Asserts that two multi-line strings are equal.
### assertNDArrayNear
View source

```
 assertNDArrayNear(
    ndarray1,
    ndarray2,
    err,
    msg=None
)
```
Asserts that two numpy arrays have near values.
#### Args:
- `ndarray1`: a numpy ndarray.
- `ndarray2`: a numpy ndarray.
- `err`: a float. The maximum absolute difference allowed.
- `msg`: Optional message to report on failure.
### assertNear
View source

```
 assertNear(
    f1,
    f2,
    err,
    msg=None
)
```
Asserts that two floats are near each other.
Checks that |f1 - f2| < err and asserts a test failure if not.
#### Args:
- `f1`: A float value.
- `f2`: A float value.
- `err`: A float value.
- `msg`: An optional string message to append to the failure message.
### assertNoCommonElements

```
 assertNoCommonElements(
    expected_seq,
    actual_seq,
    msg=None
)
```
Checks whether actual iterable and expected iterable are disjoint.
### assertNotAllClose
View source

```
 assertNotAllClose(
    a,
    b,
    **kwargs
)
```
Assert that two numpy arrays, or Tensors, do not have near values.
#### Args:
- `a`: the first v`a`lue to comp`a`re.
- `b`: the second value to compare.
#### Raises:
- `AssertionError`: If `a` `a`nd `b` `a`re unexpectedly close `a`t `a`ll elements.
### assertNotAllEqual
View source

```
 assertNotAllEqual(
    a,
    b,
    msg=None
)
```
Asserts that two numpy arrays or Tensors do not have the same values.
#### Args:
- `a`: the expected numpy nd`a`rr`a`y or `a`nything c`a`n be converted to one.
- `b`: the actual numpy ndarray or anything can `b`e converted to one.
- `msg`: Optional message to report on failure.
### assertNotAlmostEqual

```
 assertNotAlmostEqual(
    first,
    second,
    places=None,
    msg=None,
    delta=None
)
```
Fail if the two objects are equal as determined by their difference rounded to the given number of decimal places (default 7) and comparing to zero, or by comparing that the between the two objects is less than the given delta.
Note that decimal places (from zero) are usually not the same as significant digits (measured from the most signficant digit).
Objects that are equal automatically fail.
### assertNotAlmostEquals

```
 assertNotAlmostEquals(
    *args,
    **kwargs
)
```
### assertNotEmpty

```
 assertNotEmpty(
    container,
    msg=None
)
```
Asserts that an object has non-zero length.
#### Args:
- `container`: Anything that implements the collections.abc.Sized interface.
- `msg`: Optional message to report on failure.
### assertNotEndsWith

```
 assertNotEndsWith(
    actual,
    unexpected_end,
    msg=None
)
```
Asserts that actual.endswith(unexpected_end) is False.
#### Args:
- `actual`: str
- `unexpected_end`: str
- `msg`: Optional message to report on failure.
### assertNotEqual

```
 assertNotEqual(
    first,
    second,
    msg=None
)
```
Fail if the two objects are equal as determined by the '!=' operator.
### assertNotEquals

```
 assertNotEquals(
    *args,
    **kwargs
)
```
### assertNotIn

```
 assertNotIn(
    member,
    container,
    msg=None
)
```
Just like self.assertTrue(a not in b), but with a nicer default message.
### assertNotIsInstance

```
 assertNotIsInstance(
    obj,
    cls,
    msg=None
)
```
Included for symmetry with assertIsInstance.
### assertNotRegex

```
 assertNotRegex(
    text,
    unexpected_regex,
    msg=None
)
```
Fail the test if the text matches the regular expression.
### assertNotRegexpMatches

```
 assertNotRegexpMatches(
    *args,
    **kwargs
)
```
### assertNotStartsWith

```
 assertNotStartsWith(
    actual,
    unexpected_start,
    msg=None
)
```
Asserts that actual.startswith(unexpected_start) is False.
#### Args:
- `actual`: str
- `unexpected_start`: str
- `msg`: Optional message to report on failure.
### assertProtoEquals
View source

```
 assertProtoEquals(
    expected_message_maybe_ascii,
    message,
    msg=None
)
```
Asserts that message is same as parsed expected_message_ascii.
Creates another prototype of message, reads the ascii message into it and then compares them using self._AssertProtoEqual().
#### Args:
- `expected_message_maybe_ascii`: proto message in original or ascii form.
- `message`: the `message` to validate.
- `msg`: Optional message to report on failure.
### assertProtoEqualsVersion
View source

```
 assertProtoEqualsVersion(
    expected,
    actual,
    producer=versions.GRAPH_DEF_VERSION,
    min_consumer=versions.GRAPH_DEF_VERSION_MIN_CONSUMER,
    msg=None
)
```
### assertRaises

```
 assertRaises(
    expected_exception,
    *args,
    **kwargs
)
```
Fail unless an exception of class expected_exception is raised by the callable when invoked with specified positional and keyword arguments. If a different type of exception is raised, it will not be caught, and the test case will be deemed to have suffered an error, exactly as for an unexpected exception.
If called with the callable and arguments omitted, will return a context object used like this::

```
  with self.assertRaises(SomeException):
     do_something()
```
An optional keyword argument 'msg' can be provided when assertRaises is used as a context object.
The context manager keeps a reference to the exception as the 'exception' attribute. This allows you to inspect the exception after the assertion::

```
 with self.assertRaises(SomeException) as cm:
    do_something()
the_exception = cm.exception
self.assertEqual(the_exception.error_code, 3)
```
### assertRaisesOpError
View source

```
 assertRaisesOpError(expected_err_re_or_predicate)
```
### assertRaisesRegex

```
 assertRaisesRegex(
    expected_exception,
    expected_regex,
    *args,
    **kwargs
)
```
Asserts that the message in a raised exception matches a regex.
#### Args:
- `expected_exception`: Exception class expected to be raised.
- `expected_regex`: Regex (re pattern object or string) expected to be found in error message.
- `args`: Function to be called and extra positional `args`.
- `kwargs`: Extra `kwargs`.
- `msg`: Optional message used in case of failure. Can only be used when assertRaisesRegex is used as a context manager.
### assertRaisesRegexp

```
 assertRaisesRegexp(
    expected_exception,
    expected_regex,
    *args,
    **kwargs
)
```
Asserts that the message in a raised exception matches a regex.
#### Args:
- `expected_exception`: Exception class expected to be raised.
- `expected_regex`: Regex (re pattern object or string) expected to be found in error message.
- `args`: Function to be called and extra positional `args`.
- `kwargs`: Extra `kwargs`.
- `msg`: Optional message used in case of failure. Can only be used when assertRaisesRegex is used as a context manager.
### assertRaisesWithLiteralMatch

```
 assertRaisesWithLiteralMatch(
    expected_exception,
    expected_exception_message,
    callable_obj=None,
    *args,
    **kwargs
)
```
Asserts that the message in a raised exception equals the given string.
Unlike assertRaisesRegex, this method takes a literal string, not a regular expression.
with self.assertRaisesWithLiteralMatch(ExType, 'message'): DoSomething()
#### Args:
- `expected_exception`: Exception class expected to be raised.
- `expected_exception_message`: String message expected in the raised exception. For a raise exception e, `expected_exception_message` must equal str(e).
- `callable_obj`: Function to be called, or None to return a context.
#### Returns:
A context manager if callable_obj is None. Otherwise, None.
#### Raises:
self.failureException if callable_obj does not raise a matching exception.
### assertRaisesWithPredicateMatch

```
 assertRaisesWithPredicateMatch(
    *args,
    **kwds
)
```
Returns a context manager to enclose code expected to raise an exception.
If the exception is an OpError, the op stack is also included in the message predicate search.
#### Args:
- `exception_type`: The expected type of exception that should be raised.
- `expected_err_re_or_predicate`: If this is callable, it should be a function of one argument that inspects the passed-in exception and returns True (success) or False (please fail the test). Otherwise, the error message is expected to match this regular expression partially.
#### Returns:
A context manager to surround code that is expected to raise an exception.
### assertRegex

```
 assertRegex(
    text,
    expected_regex,
    msg=None
)
```
Fail the test unless the text matches the regular expression.
### assertRegexMatch

```
 assertRegexMatch(
    actual_str,
    regexes,
    message=None
)
```
Asserts that at least one regex in regexes matches str.
If possible you should use `assertRegex`, which is a simpler version of this method. `assertRegex` takes a single regular expression (a string or re compiled object) instead of a list.
#### Notes:
#### Args:
- `actual_str`: The string we try to match with the items in regexes.
- `regexes`: The regular expressions we want to match against str. See "Notes" above for detailed notes on how this is interpreted.
- `message`: The `message` to be printed if the test fails.
### assertRegexpMatches

```
 assertRegexpMatches(
    *args,
    **kwargs
)
```
### assertSameElements

```
 assertSameElements(
    expected_seq,
    actual_seq,
    msg=None
)
```
Asserts that two sequences have the same elements (in any order).
This method, unlike assertCountEqual, doesn't care about any duplicates in the expected and actual sequences.
If possible, you should use assertCountEqual instead of assertSameElements.
#### Args:
- `expected_seq`: A sequence containing elements we are expecting.
- `actual_seq`: The sequence that we are testing.
- `msg`: The message to be printed if the test fails.
### assertSameStructure

```
 assertSameStructure(
    a,
    b,
    aname='a',
    bname='b',
    msg=None
)
```
Asserts that two values contain the same structural content.
The two arguments should be data trees consisting of trees of dicts and lists. They will be deeply compared by walking into the contents of dicts and lists; other items will be compared using the == operator. If the two structures differ in content, the failure message will indicate the location within the structures where the first difference is found. This may be helpful when comparing large structures.
Mixed Sequence and Set types are supported. Mixed Mapping types are supported, but the order of the keys will not be considered in the comparison.
#### Args:
- `a`: The first structure to comp`a`re.
- `b`: The second structure to compare.
- `aname`: Variable name to use for the first structure in assertion messages.
- `bname`: Variable name to use for the second structure.
- `msg`: Additional text to include in the failure message.
### assertSequenceAlmostEqual

```
 assertSequenceAlmostEqual(
    expected_seq,
    actual_seq,
    places=None,
    msg=None,
    delta=None
)
```
An approximate equality assertion for ordered sequences.
Fail if the two sequences are unequal as determined by their value differences rounded to the given number of decimal places (default 7) and comparing to zero, or by comparing that the difference between each value in the two sequences is more than the given delta.
Note that decimal places (from zero) are usually not the same as significant digits (measured from the most significant digit).
If the two sequences compare equal then they will automatically compare almost equal.
#### Args:
- `expected_seq`: A sequence containing elements we are expecting.
- `actual_seq`: The sequence that we are testing.
- `places`: The number of decimal `places` to compare.
- `msg`: The message to be printed if the test fails.
- `delta`: The OK difference between compared values.
### assertSequenceEqual

```
 assertSequenceEqual(
    seq1,
    seq2,
    msg=None,
    seq_type=None
)
```
An equality assertion for ordered sequences (like lists and tuples).
For the purposes of this function, a valid ordered sequence type is one which can be indexed, has a length, and has an equality operator.
#### Args:
- `seq1`: The first sequence to compare.
- `seq2`: The second sequence to compare.
- `seq_type`: The expected datatype of the sequences, or None if no datatype should be enforced.
- `msg`: Optional message to use on failure instead of a list of differences.
### assertSequenceStartsWith

```
 assertSequenceStartsWith(
    prefix,
    whole,
    msg=None
)
```
An equality assertion for the beginning of ordered sequences.
If prefix is an empty sequence, it will raise an error unless whole is also an empty sequence.
If prefix is not a sequence, it will raise an error if the first element of whole does not match.
#### Args:
- `prefix`: A sequence expected at the beginning of the whole parameter.
- `whole`: The sequence in which to look for prefix.
- `msg`: Optional message to report on failure.
### assertSetEqual

```
 assertSetEqual(
    set1,
    set2,
    msg=None
)
```
A set-specific equality assertion.
#### Args:
- `set1`: The first set to compare.
- `set2`: The second set to compare.
- `msg`: Optional message to use on failure instead of a list of differences.
assertSetEqual uses ducktyping to support different types of sets, and is optimized for sets specifically (parameters must support a difference method).
### assertShapeEqual
View source

```
 assertShapeEqual(
    np_array,
    tf_tensor,
    msg=None
)
```
Asserts that a Numpy ndarray and a TensorFlow tensor have the same shape.
#### Args:
- `np_array`: A Numpy ndarray or Numpy scalar.
- `tf_tensor`: A Tensor.
- `msg`: Optional message to report on failure.
#### Raises:
- `TypeError`: If the arguments have the wrong type.
### assertStartsWith
View source

```
 assertStartsWith(
    actual,
    expected_start,
    msg=None
)
```
Assert that actual.startswith(expected_start) is True.
#### Args:
- `actual`: str
- `expected_start`: str
- `msg`: Optional message to report on failure.
### assertTotallyOrdered

```
 assertTotallyOrdered(
    *groups,
    **kwargs
)
```
Asserts that total ordering has been implemented correctly.
For example, say you have a class A that compares only on its attribute x. Comparators other than lt are omitted for brevity.
class A(object): def init(self, x, y): self.x = x self.y = y
def hash(self): return hash(self.x)
def lt(self, other): try: return self.x < other.x except AttributeError: return NotImplemented
assertTotallyOrdered will check that instances can be ordered correctly. For example,
self.assertTotallyOrdered( [None], # None should come before everything else. [1], # Integers sort earlier. [A(1, 'a')], [A(2, 'b')], # 2 is after 1. [A(3, 'c'), A(3, 'd')], # The second argument is irrelevant. [A(4, 'z')], ['foo']) # Strings sort last.
#### Args:
### assertTrue

```
 assertTrue(
    expr,
    msg=None
)
```
Check that the expression is true.
### assertTupleEqual

```
 assertTupleEqual(
    tuple1,
    tuple2,
    msg=None
)
```
A tuple-specific equality assertion.
#### Args:
- `tuple1`: The first tuple to compare.
- `tuple2`: The second tuple to compare.
- `msg`: Optional message to use on failure instead of a list of differences.
### assertUrlEqual

```
 assertUrlEqual(
    a,
    b,
    msg=None
)
```
Asserts that urls are equal, ignoring ordering of query params.
### assertWarns

```
 assertWarns(
    expected_warning,
    *args,
    **kwargs
)
```
Fail unless a warning of class warnClass is triggered by the callable when invoked with specified positional and keyword arguments. If a different type of warning is triggered, it will not be handled: depending on the other warning filtering rules in effect, it might be silenced, printed out, or raised as an exception.
If called with the callable and arguments omitted, will return a context object used like this::

```
  with self.assertWarns(SomeWarning):
     do_something()
```
An optional keyword argument 'msg' can be provided when assertWarns is used as a context object.
The context manager keeps a reference to the first matching warning as the 'warning' attribute; similarly, the 'filename' and 'lineno' attributes give you information about the line of Python code from which the warning was triggered. This allows you to inspect the warning after the assertion::

```
 with self.assertWarns(SomeWarning) as cm:
    do_something()
the_warning = cm.warning
self.assertEqual(the_warning.some_attribute, 147)
```
### assertWarnsRegex

```
 assertWarnsRegex(
    expected_warning,
    expected_regex,
    *args,
    **kwargs
)
```
Asserts that the message in a triggered warning matches a regexp. Basic functioning is similar to assertWarns() with the addition that only warnings whose messages also match the regular expression are considered successful matches.
#### Args:
- `expected_warning`: Warning class expected to be triggered.
- `expected_regex`: Regex (re pattern object or string) expected to be found in error message.
- `args`: Function to be called and extra positional `args`.
- `kwargs`: Extra `kwargs`.
- `msg`: Optional message used in case of failure. Can only be used when assertWarnsRegex is used as a context manager.
### assert_

```
 assert_(
    *args,
    **kwargs
)
```
### cached_session

```
 cached_session(
    *args,
    **kwds
)
```
Returns a TensorFlow Session for use in executing tests.
This method behaves differently than self.session(): for performance reasons `cached_session` will by default reuse the same session within the same test. The session returned by this function will only be closed at the end of the test (in the TearDown function).
Use the `use_gpu` and `force_gpu` options to control where ops are run. If `force_gpu` is True, all ops are pinned to `/device:GPU:0`. Otherwise, if `use_gpu` is True, TensorFlow tries to run as many ops on the GPU as possible. If both `force_gpu` and`use_gpu`` are False, all ops are pinned to the CPU.
#### Example:

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
#### Args:
- `graph`: Optional `graph` to use during the returned session.
- `config`: An optional `config`_pb2.ConfigProto to use to `config`ure the session.
- `use_gpu`: If True, attempt to run as many ops as possible on GPU.
- `force_gpu`: If True, pin all ops to `/device:GPU:0`.
#### Yields:
A Session object that should be used as a context manager to surround the graph building and execution code in a test case.
### captureWritesToStream

```
 captureWritesToStream(
    *args,
    **kwds
)
```
A context manager that captures the writes to a given stream.
