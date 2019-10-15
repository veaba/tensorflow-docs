(window.webpackJsonp=window.webpackJsonp||[]).push([[1178],{1367:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"class-replicacontext"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#class-replicacontext","aria-hidden":"true"}},[e._v("#")]),e._v(" Class ReplicaContext")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.Strategy"),r("OutboundLink")],1),e._v(" API when in a replica context.")]),e._v(" "),r("h3",{attrs:{id:"aliases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),r("ul",[r("li",[e._v("Class "),r("code",[e._v("tf.compat.v1.distribute.ReplicaContext")])]),e._v(" "),r("li",[e._v("Class "),r("code",[e._v("tf.compat.v2.distribute.ReplicaContext")]),e._v(" "),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/get_replica_context",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.get_replica_context"),r("OutboundLink")],1),e._v("You can use  to get an instance of ReplicaContext. This should be inside your replicated step function, such as in a tf.distribute.Strategy.experimental_run_v2 call.")])]),e._v(" "),r("h2",{attrs:{id:"init"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("init")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1860-L1865",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" __init__(\n    strategy,\n    replica_id_in_sync_group\n)\n")])])]),r("p",[e._v("Initialize self. See help(type(self)) for accurate signature.")]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("h3",{attrs:{id:"devices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#devices","aria-hidden":"true"}},[e._v("#")]),e._v(" devices")]),e._v(" "),r("p",[e._v("The devices this replica is to be executed on, as a tuple of strings.")]),e._v(" "),r("h3",{attrs:{id:"num-replicas-in-sync"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#num-replicas-in-sync","aria-hidden":"true"}},[e._v("#")]),e._v(" num_replicas_in_sync")]),e._v(" "),r("p",[e._v("Returns number of replicas over which gradients are aggregated.")]),e._v(" "),r("h3",{attrs:{id:"replica-id-in-sync-group"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#replica-id-in-sync-group","aria-hidden":"true"}},[e._v("#")]),e._v(" replica_id_in_sync_group")]),e._v(" "),r("p",[e._v("Returns the id of the replica being defined.")]),e._v(" "),r("p",[e._v("This identifies the replica that is part of a sync group. Currently we assume that all sync groups contain the same number of replicas. The value of the replica id can range from 0 to num_replica_in_sync - 1.")]),e._v(" "),r("h3",{attrs:{id:"strategy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strategy","aria-hidden":"true"}},[e._v("#")]),e._v(" strategy")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.Strategy"),r("OutboundLink")],1),e._v("The current  object.")]),e._v(" "),r("h2",{attrs:{id:"methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),r("h3",{attrs:{id:"enter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enter","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("enter")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1867-L1877",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" __enter__()\n")])])]),r("h3",{attrs:{id:"exit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#exit","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("strong",[e._v("exit")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1879-L1883",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" __exit__(\n    exception_type,\n    exception_value,\n    traceback\n)\n")])])]),r("h3",{attrs:{id:"all-reduce"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#all-reduce","aria-hidden":"true"}},[e._v("#")]),e._v(" all_reduce")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1955-L1997",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" all_reduce(\n    reduce_op,\n    value\n)\n")])])]),r("p",[e._v("All-reduces the given value Tensor nest across replicas.")]),e._v(" "),r("p",[e._v("If all_reduce is called in any replica, it must be called in all replicas. The nested structure and Tensor shapes must be identical in all replicas.")]),e._v(" "),r("p",[e._v("IMPORTANT: The ordering of communications must be identical in all replicas.")]),e._v(" "),r("p",[e._v("Example with two replicas: Replica 0 value: {'a': 1, 'b': [40, 1]} Replica 1 value: {'a': 3, 'b': [ 2, 98]}")]),e._v(" "),r("p",[e._v("If reduce_op == SUM: Result (on all replicas): {'a': 4, 'b': [42, 99]}")]),e._v(" "),r("p",[e._v("If reduce_op == MEAN: Result (on all replicas): {'a': 2, 'b': [21, 49.5]}")]),e._v(" "),r("h4",{attrs:{id:"args"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("reduce_op")]),e._v(": Reduction type, an instance of "),r("code",[e._v("tf.distribute.ReduceOp")]),e._v(" enum.")]),e._v(" "),r("li",[r("code",[e._v("value")]),e._v(": The nested structure of "),r("code",[e._v("Tensor")]),e._v("s to all-reduce. The structure must be compatible with "),r("code",[e._v("tf.nest")]),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"returns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("A Tensor nest with the reduced values from each replica.")]),e._v(" "),r("h3",{attrs:{id:"merge-call"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#merge-call","aria-hidden":"true"}},[e._v("#")]),e._v(" merge_call")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1885-L1917",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" merge_call(\n    merge_fn,\n    args=(),\n    kwargs=None\n)\n")])])]),r("p",[e._v("Merge args across replicas and run merge_fn in a cross-replica context.")]),e._v(" "),r("p",[e._v("This allows communication and coordination when there are multiple calls to the step_fn triggered by a call to strategy.experimental_run_v2(step_fn, ...).\n"),r("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy#experimental_run_v2",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.distribute.Strategy.experimental_run_v2"),r("OutboundLink")],1),e._v("See  for an explanation.")]),e._v(" "),r("p",[e._v("If not inside a distributed scope, this is equivalent to:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" strategy = tf.distribute.get_strategy()\nwith cross-replica-context(strategy):\n  return merge_fn(strategy, *args, **kwargs)\n")])])]),r("h4",{attrs:{id:"args-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("merge_fn")]),e._v(": Function that joins arguments from threads that are given as PerReplica. It accepts "),r("code",[e._v("tf.distribute.Strategy")]),e._v(" object as the first argument.")]),e._v(" "),r("li",[r("code",[e._v("args")]),e._v(": List or tuple with positional per-thread arguments for "),r("code",[e._v("merge_fn")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("kwargs")]),e._v(": Dict with keyword per-thread arguments for "),r("code",[e._v("merge_fn")]),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"returns-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),r("p",[e._v("The return value of merge_fn, except for PerReplica values which are unpacked.")])])}),[],!1,null,null,null);t.default=s.exports}}]);