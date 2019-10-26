Creates a dataset that deterministically chooses elements from datasets.

```
 tf.compat.v1.data.experimental.choose_from_datasets(
    datasets,
    choice_dataset
)
```
For example, given the following datasets:

```
 datasets = [tf.data.Dataset.from_tensors("foo").repeat(),
            tf.data.Dataset.from_tensors("bar").repeat(),
            tf.data.Dataset.from_tensors("baz").repeat()]

# Define a dataset containing `[0, 1, 2, 0, 1, 2, 0, 1, 2]`.
choice_dataset = tf.data.Dataset.range(3).repeat(3)

result = tf.data.experimental.choose_from_datasets(datasets, choice_dataset)
```
The elements of result will be:

```
 "foo", "bar", "baz", "foo", "bar", "baz", "foo", "bar", "baz"
```
#### Args:
- datasets: A list of tf.data.Dataset objects with compatible structure.
- choice_dataset: A tf.data.Dataset of scalar tf.int64 tensors between 0 and len`(datasets)` - 1.
#### Returns:
A dataset that interleaves elements from datasets according to the values of choice_dataset.
#### Raises:
- TypeError: If the datasets or choice_dataset arguments have the wrong type.
