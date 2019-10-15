(window.webpackJsonp=window.webpackJsonp||[]).push([[1193],{1382:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-multiworkermirroredstrategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-multiworkermirroredstrategy","aria-hidden":"true"}},[e._v("#")]),e._v(" Class MultiWorkerMirroredStrategy")]),e._v(" "),a("p",[e._v("A distribution strategy for synchronous training on multiple workers.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Strategy"),a("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.distribute.experimental.MultiWorkerMirroredStrategy")])])]),e._v(" "),a("h3",{attrs:{id:"used-in-the-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the guide:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("D")]),e._v("i"),a("code",[e._v("s")]),e._v("t"),a("code",[e._v("r")]),e._v("i"),a("code",[e._v("b")]),e._v("u"),a("code",[e._v("t")]),e._v("e"),a("code",[e._v("d")]),e._v(" "),a("code",[e._v("t")]),e._v("r"),a("code",[e._v("a")]),e._v("i"),a("code",[e._v("n")]),e._v("i"),a("code",[e._v("n")]),e._v("g"),a("code"),e._v("w"),a("code",[e._v("i")]),e._v("t"),a("code",[e._v("h")]),e._v(" "),a("code",[e._v("T")]),e._v("e"),a("code",[e._v("n")]),e._v("s"),a("code",[e._v("o")]),e._v("r"),a("code",[e._v("F")]),e._v("l"),a("code",[e._v("o")]),e._v("w``")])]),e._v(" "),a("h3",{attrs:{id:"used-in-the-tutorials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-tutorials","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the tutorials:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("M")]),e._v("u"),a("code",[e._v("l")]),e._v("t"),a("code",[e._v("i")]),e._v("-"),a("code",[e._v("w")]),e._v("o"),a("code",[e._v("r")]),e._v("k"),a("code",[e._v("e")]),e._v("r"),a("code"),e._v("t"),a("code",[e._v("r")]),e._v("a"),a("code",[e._v("i")]),e._v("n"),a("code",[e._v("i")]),e._v("n"),a("code",[e._v("g")]),e._v(" "),a("code",[e._v("w")]),e._v("i"),a("code",[e._v("t")]),e._v("h"),a("code"),e._v("E"),a("code",[e._v("s")]),e._v("t"),a("code",[e._v("i")]),e._v("m"),a("code",[e._v("a")]),e._v("t"),a("code",[e._v("o")]),e._v("r``")]),e._v(" "),a("li",[a("code",[e._v("M")]),e._v("u"),a("code",[e._v("l")]),e._v("t"),a("code",[e._v("i")]),e._v("-"),a("code",[e._v("w")]),e._v("o"),a("code",[e._v("r")]),e._v("k"),a("code",[e._v("e")]),e._v("r"),a("code"),e._v("t"),a("code",[e._v("r")]),e._v("a"),a("code",[e._v("i")]),e._v("n"),a("code",[e._v("i")]),e._v("n"),a("code",[e._v("g")]),e._v(" "),a("code",[e._v("w")]),e._v("i"),a("code",[e._v("t")]),e._v("h"),a("code"),e._v("K"),a("code",[e._v("e")]),e._v("r"),a("code",[e._v("a")]),e._v("s``\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/MirroredStrategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.MirroredStrategy"),a("OutboundLink")],1),e._v("This strategy implements synchronous distributed training across multiple workers, each with potentially multiple GPUs. Similar to , it creates copies of all variables in the model on each device across all workers.")])]),e._v(" "),a("p",[e._v("It uses CollectiveOps's implementation of multi-worker all-reduce to to keep variables in sync. A collective op is a single op in the TensorFlow graph which can automatically choose an all-reduce algorithm in the TensorFlow runtime according to hardware, network topology and tensor sizes.")]),e._v(" "),a("p",[e._v("By default it uses all local GPUs or CPU for single-worker training.")]),e._v(" "),a("p",[e._v("When 'TF_CONFIG' environment variable is set, it parses cluster_spec, task_type and task_id from 'TF_CONFIG' and turns into a multi-worker strategy which mirrores models on GPUs of all machines in a cluster. In the current implementation, it uses all GPUs in a cluster and it assumes all workers have the same number of GPUs.")]),e._v(" "),a("p",[e._v("It supports both eager mode and graph mode. However, for eager mode, it has to set up the eager context in its constructor and therefore all ops in eager mode have to run after the strategy object is created.")]),e._v(" "),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/collective_all_reduce_strategy.py#L76-L90",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(communication=tf.distribute.experimental.CollectiveCommunication.AUTO)\n")])])]),a("p",[e._v("Creates the strategy.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("communication")]),e._v(": optional Enum of type "),a("code",[e._v("distribute.experimental.CollectiveCommunication")]),e._v(". This provides a way for the user to override the choice of collective op "),a("code",[e._v("communication")]),e._v(". Possible values include "),a("code",[e._v("AUTO")]),e._v(", "),a("code",[e._v("RING")]),e._v(", and "),a("code",[e._v("NCCL")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("h3",{attrs:{id:"extended"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended","aria-hidden":"true"}},[e._v("#")]),e._v(" extended")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/StrategyExtended",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.StrategyExtended"),a("OutboundLink")],1),e._v(" with additional methods.")]),e._v(" "),a("h3",{attrs:{id:"num-replicas-in-sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#num-replicas-in-sync","aria-hidden":"true"}},[e._v("#")]),e._v(" num_replicas_in_sync")]),e._v(" "),a("p",[e._v("Returns number of replicas over which gradients are aggregated.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"experimental-distribute-dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experimental-distribute-dataset","aria-hidden":"true"}},[e._v("#")]),e._v(" experimental_distribute_dataset")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L610-L674",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" experimental_distribute_dataset(dataset)\n")])])]),a("p",[e._v("Distributes a tf.data.Dataset instance provided via dataset.")]),e._v(" "),a("p",[e._v("The returned distributed dataset can be iterated over similar to how regular datasets can. NOTE: Currently, the user cannot add any more transformations to a distributed dataset.")]),e._v(" "),a("p",[e._v("The following is an example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' strategy = tf.distribute.MirroredStrategy()\n\n# Create a dataset\ndataset = dataset_ops.Dataset.TFRecordDataset([\n  "/a/1.tfr", "/a/2.tfr", "/a/3.tfr", "/a/4.tfr"])\n\n# Distribute that dataset\ndist_dataset = strategy.experimental_distribute_dataset(dataset)\n# Iterate over the distributed dataset\nfor x in dist_dataset:\n  # process dataset elements\n  strategy.experimental_run_v2(train_step, args=(x,))\n')])])]),a("p",[e._v("We will assume that the input dataset is batched by the global batch size. With this assumption, we will make a best effort to divide each batch across all the replicas (one or more workers).")]),e._v(" "),a("p",[e._v("In a multi-worker setting, we will first attempt to distribute the dataset by attempting to detect whether the dataset is being created out of ReaderDatasets (e.g. TFRecordDataset, TextLineDataset, etc.) and if so, attempting to shard the input files. Note that there has to be at least one input file per worker. If you have less than one input file per worker, we suggest that you should disable distributing your dataset using the method below.")]),e._v(" "),a("p",[e._v("If that attempt is unsuccessful (e.g. the dataset is created from a Dataset.range), we will shard the dataset evenly at the end by appending a .shard operation to the end of the processing pipeline. This will cause the entire preprocessing pipeline for all the data to be run on every worker, and each worker will do redundant work. We will print a warning if this method of sharding is selected. In this case, consider using experimental_distribute_datasets_from_function instead.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/experimental/DistributeOptions",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.data.experimental.DistributeOptions"),a("OutboundLink")],1),e._v("You can disable dataset sharding across workers using the auto_shard option in .")]),e._v(" "),a("p",[e._v("Within each worker, we will also split the data among all the worker devices (if more than one a present), and this will happen even if multi-worker sharding is disabled using the method above.")]),e._v(" "),a("p",[e._v("If the above batch splitting and dataset sharding logic is undesirable, please use experimental_distribute_datasets_from_function instead, which does not do any automatic splitting or sharding.")]),e._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("dataset")]),e._v(": "),a("code",[e._v("tf.data.Dataset")]),e._v(" that will be sharded across all replicas using the rules stated above.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.data.Dataset"),a("OutboundLink")],1),e._v('A "distributed Dataset", which acts like a  except it produces "per-replica" values.')]),e._v(" "),a("h3",{attrs:{id:"experimental-distribute-datasets-from-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experimental-distribute-datasets-from-function","aria-hidden":"true"}},[e._v("#")]),e._v(" experimental_distribute_datasets_from_function")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L676-L724",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" experimental_distribute_datasets_from_function(dataset_fn)\n")])])]),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.data.Dataset"),a("OutboundLink")],1),e._v("Distributes  instances created by calls to dataset_fn.")]),e._v(" "),a("p",[e._v("dataset_fn will be called once for each worker in the strategy. Each replica on that worker will dequeue one batch of inputs from the local Dataset (i.e. if a worker has two replicas, two batches will be dequeued from the Dataset every step).")]),e._v(" "),a("p",[e._v("This method can be used for several purposes. For example, where experimental_distribute_dataset is unable to shard the input files, this method might be used to manually shard the dataset (avoiding the slow fallback behavior in experimental_distribute_dataset). In cases where the dataset is infinite, this sharding can be done by creating dataset replicas that differ only in their random seed. experimental_distribute_dataset may also sometimes fail to split the batch across replicas on a worker. In that case, this method can be used where that limitation does not exist.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/InputContext",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.InputContext"),a("OutboundLink")],1),e._v("The dataset_fn should take an  instance where information about batching and input replication can be accessed:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" def dataset_fn(input_context):\n  batch_size = input_context.get_per_replica_batch_size(global_batch_size)\n  d = tf.data.Dataset.from_tensors([[1.]]).repeat().batch(batch_size)\n  return d.shard(\n      input_context.num_input_pipelines, input_context.input_pipeline_id)\n\ninputs = strategy.experimental_distribute_datasets_from_function(dataset_fn)\n\nfor batch in inputs:\n  replica_results = strategy.experimental_run_v2(replica_fn, args=(batch,))\n")])])]),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.data.Dataset"),a("OutboundLink")],1),e._v("IMPORTANT: The  returned by dataset_fn should have a per-replica batch size, unlike experimental_distribute_dataset, which uses the global batch size. This may be computed using input_context.get_per_replica_batch_size.")]),e._v(" "),a("h4",{attrs:{id:"args-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("dataset_fn")]),e._v(": A function taking a "),a("code",[e._v("tf.distribute.InputContext")]),e._v(" instance and returning a "),a("code",[e._v("tf.data.Dataset")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"returns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.data.Dataset"),a("OutboundLink")],1),e._v('A "distributed Dataset", which acts like a  except it produces "per-replica" values.')]),e._v(" "),a("h3",{attrs:{id:"experimental-local-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experimental-local-results","aria-hidden":"true"}},[e._v("#")]),e._v(" experimental_local_results")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L878-L895",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" experimental_local_results(value)\n")])])]),a("p",[e._v("Returns the list of all local per-replica values contained in value.")]),e._v(" "),a("h4",{attrs:{id:"args-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("value")]),e._v(": A "),a("code",[e._v("value")]),e._v(" returned by "),a("code",[e._v("experimental_run")]),e._v("(), "),a("code",[e._v("experimental_run")]),e._v("_v2(), "),a("code",[e._v("extended.call_for_each_replica")]),e._v("(), or a variable created in "),a("code",[e._v("scope")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"returns-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A tuple of values contained in value. If value represents a single value, this returns (value,).")]),e._v(" "),a("h3",{attrs:{id:"experimental-make-numpy-dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experimental-make-numpy-dataset","aria-hidden":"true"}},[e._v("#")]),e._v(" experimental_make_numpy_dataset")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L575-L601",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" experimental_make_numpy_dataset(numpy_input)\n")])])]),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.data.Dataset"),a("OutboundLink")],1),e._v("Makes a  for input provided via a numpy array.")]),e._v(" "),a("p",[e._v("This avoids adding numpy_input as a large constant in the graph, and copies the data to the machine or machines that will be processing the input.")]),e._v(" "),a("p",[e._v("Note that you will likely need to use experimental_distribute_dataset with the returned dataset to further distribute it with the strategy.")]),e._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" numpy_input = np.ones([10], dtype=np.float32)\ndataset = strategy.experimental_make_numpy_dataset(numpy_input)\ndist_dataset = strategy.experimental_distribute_dataset(dataset)\n")])])]),a("h4",{attrs:{id:"args-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("numpy_input")]),e._v(": A nest of NumPy input arrays that will be converted into a dataset. Note that lists of Numpy arrays are stacked, as that is normal "),a("code",[e._v("tf.data.Dataset")]),e._v(" behavior.")])]),e._v(" "),a("h4",{attrs:{id:"returns-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.data.Dataset"),a("OutboundLink")],1),e._v("A  representing numpy_input.")]),e._v(" "),a("h3",{attrs:{id:"experimental-run-v2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experimental-run-v2","aria-hidden":"true"}},[e._v("#")]),e._v(" experimental_run_v2")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L726-L760",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" experimental_run_v2(\n    fn,\n    args=(),\n    kwargs=None\n)\n")])])]),a("p",[e._v("Run fn on each replica, with the given arguments.")]),e._v(" "),a("p",[e._v('Executes ops specified by fn on each replica. If args or kwargs have "per-replica" values, such as those produced by a "distributed Dataset", when fn is executed on a particular replica, it will be executed with the component of those "per-replica" values that correspond to that replica.\n'),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/get_replica_context",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.get_replica_context()"),a("OutboundLink")],1),e._v("fn may call  to access members such as all_reduce.")]),e._v(" "),a("p",[e._v("All arguments in args or kwargs should either be nest of tensors or per-replica objects containing tensors or composite tensors.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.Strategy"),a("OutboundLink")],1),e._v("IMPORTANT: Depending on the implementation of  and whether eager execution is enabled, fn may be called one or more times ( once for each replica).")]),e._v(" "),a("h4",{attrs:{id:"args-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("fn")]),e._v(": The function to run. The output must be a "),a("code",[e._v("tf.nest")]),e._v(" of "),a("code",[e._v("Tensor")]),e._v("s.")]),e._v(" "),a("li",[a("code",[e._v("args")]),e._v(": (Optional) Positional arguments to "),a("code",[e._v("fn")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("kwargs")]),e._v(": (Optional) Keyword arguments to "),a("code",[e._v("fn")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"returns-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v('Merged return value of fn across replicas. The structure of the return value is the same as the return value from fn. Each element in the structure can either be "per-replica" Tensor objects or Tensors (for example, if running on a single replica).')]),e._v(" "),a("h3",{attrs:{id:"reduce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reduce","aria-hidden":"true"}},[e._v("#")]),e._v(" reduce")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L762-L854",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" reduce(\n    reduce_op,\n    value,\n    axis\n)\n")])])]),a("p",[e._v("Reduce value across replicas.")]),e._v(" "),a("p",[e._v('Given a per-replica value returned by experimental_run_v2, say a per-example loss, the batch will be divided across all the replicas. This function allows you to aggregate across replicas and optionally also across batch elements. For example, if you have a global batch size of 8 and 2 replicas, values for examples [0, 1, 2, 3] will be on replica 0 and [4, 5, 6, 7] will be on replica 1. By default, reduce will just aggregate across replicas, returning [0+4, 1+5, 2+6, 3+7]. This is useful when each replica is computing a scalar or some other value that doesn\'t have a "batch" dimension (like a gradient). More often you will want to aggregate across the global batch, which you can get by specifying the batch dimension as the axis, typically axis=0. In this case it would return a scalar 0+1+2+3+4+5+6+7.\n'),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/ReduceOp#MEAN",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.ReduceOp.MEAN"),a("OutboundLink")],1),e._v("If there is a last partial batch, you will need to specify an axis so that the resulting shape is consistent across replicas. So if the last batch has size 6 and it is divided into [0, 1, 2, 3] and [4, 5], you would get a shape mismatch unless you specify axis=0. If you specify , using axis=0 will use the correct denominator of 6. Contrast this with computing reduce_mean to get a scalar value on each replica and this function to average those means, which will weigh some values 1/8 and others 1/4.")]),e._v(" "),a("h4",{attrs:{id:"args-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("reduce_op")]),e._v(": A "),a("code",[e._v("tf.distribute.ReduceOp")]),e._v(" value specifying how values should be combined.")]),e._v(" "),a("li",[a("code",[e._v("value")]),e._v(': A "per replica" '),a("code",[e._v("value")]),e._v(", e.g. returned by "),a("code",[e._v("experimental_run_v2")]),e._v(" to be combined into a single tensor.")]),e._v(" "),a("li",[a("code",[e._v("axis")]),e._v(": Specifies the dimension to reduce along within each replica's tensor. Should typically be set to the batch dimension, or "),a("code",[e._v("None")]),e._v(" to only reduce across replicas (e.g. if the tensor has no batch dimension).")])]),e._v(" "),a("h4",{attrs:{id:"returns-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-6","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A Tensor.")]),e._v(" "),a("h3",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope","aria-hidden":"true"}},[e._v("#")]),e._v(" scope")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/collective_all_reduce_strategy.py#L99-L114",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" scope()\n")])])]),a("p",[e._v("Returns a context manager selecting this Strategy as current.")]),e._v(" "),a("p",[e._v('Inside a with strategy.scope(): code block, this thread will use a variable creator set by strategy, and will enter its "cross-replica context".')]),e._v(" "),a("p",[e._v("In MultiWorkerMirroredStrategy, all variables created inside `strategy.scope() will be mirrored on all replicas of each worker. Moreover, it also sets a default device scope so that ops without specified devices will end up on the correct worker.")]),e._v(" "),a("h4",{attrs:{id:"returns-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-7","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A context manager to use for creating variables with this strategy.")])])}),[],!1,null,null,null);t.default=s.exports}}]);