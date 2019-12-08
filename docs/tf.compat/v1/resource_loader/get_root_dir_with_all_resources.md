Get a root directory containing all the data attributes in the build rule.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.resource_loader.get_root_dir_with_all_resources()
</code></pre></devsite-code>


#### Returns:
The path to the specified file present in the data attribute of py_test
or py_binary. Falls back to returning the same as get_data_files_path if it
fails to detect a bazel runfiles directory.

