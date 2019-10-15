(window.webpackJsonp=window.webpackJsonp||[]).push([[923],{1111:function(e,t,s){"use strict";s.r(t);var r=s(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Return a device function to use when building a Graph for replicas.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.compat.v1.train.replica_device_setter(\n    ps_tasks=0,\n    ps_device='/job:ps',\n    worker_device='/job:worker',\n    merge_devices=True,\n    cluster=None,\n    ps_ops=None,\n    ps_strategy=None\n)\n")])])]),s("p",[e._v("Device Functions are used in with tf.device(device_function): statement to automatically assign devices to Operation objects as they are constructed, Device constraints are added from the inner-most context first, working outwards. The merging behavior adds constraints to fields that are yet unset by a more inner context. Currently the fields are (job, task, cpu/gpu).")]),e._v(" "),s("p",[e._v("If cluster is None, and ps_tasks is 0, the returned function is a no-op. Otherwise, the value of ps_tasks is derived from cluster.")]),e._v(" "),s("p",[e._v("By default, only Variable ops are placed on ps tasks, and the placement strategy is round-robin over all ps tasks. A custom ps_strategy may be used to do more intelligent placement, such as tf.contrib.training.GreedyLoadBalancingStrategy.")]),e._v(" "),s("p",[e._v("For example,")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(' # To build a cluster with two ps jobs on hosts ps0 and ps1, and 3 worker\n# jobs on hosts worker0, worker1 and worker2.\ncluster_spec = {\n    "ps": ["ps0:2222", "ps1:2222"],\n    "worker": ["worker0:2222", "worker1:2222", "worker2:2222"]}\nwith\ntf.device(tf.compat.v1.train.replica_device_setter(cluster=cluster_spec)):\n  # Build your graph\n  v1 = tf.Variable(...)  # assigned to /job:ps/task:0\n  v2 = tf.Variable(...)  # assigned to /job:ps/task:1\n  v3 = tf.Variable(...)  # assigned to /job:ps/task:0\n# Run compute\n')])])]),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ps_tasks")]),e._v(": Number of tasks in the "),s("code",[e._v("ps")]),e._v(" job. Ignored if "),s("code",[e._v("cluster")]),e._v(" is provided.")]),e._v(" "),s("li",[s("code",[e._v("ps")]),e._v("_device: String. Device of the "),s("code",[e._v("ps")]),e._v(" job. If empty no "),s("code",[e._v("ps")]),e._v(" job is used. Defaults to "),s("code",[e._v("ps")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("worker_device")]),e._v(": String. Device of the "),s("code",[e._v("worker")]),e._v(" job. If empty no "),s("code",[e._v("worker")]),e._v(" job is used.")]),e._v(" "),s("li",[s("code",[e._v("merge_devices")]),e._v(": "),s("code",[e._v("Boolean")]),e._v(". If "),s("code",[e._v("True")]),e._v(", merges or only sets a device if the device constraint is completely unset. merges device specification rather than overriding them.")]),e._v(" "),s("li",[s("code",[e._v("cluster")]),e._v(": "),s("code",[e._v("ClusterDef")]),e._v(" proto or "),s("code",[e._v("ClusterSpec")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("ps")]),e._v("_o"),s("code",[e._v("ps")]),e._v(": List of strings representing "),s("code",[e._v("Operation")]),e._v(" types that need to be placed on "),s("code",[e._v("ps")]),e._v(" devices. If "),s("code",[e._v("None")]),e._v(", defaults to "),s("code",[e._v("STANDARD_PS_OPS")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("ps")]),e._v("_strategy: A callable invoked for every "),s("code",[e._v("ps")]),e._v(" "),s("code",[e._v("Operation")]),e._v(" (i.e. matched by "),s("code",[e._v("ps")]),e._v("_o"),s("code",[e._v("ps")]),e._v("), that takes the "),s("code",[e._v("Operation")]),e._v(" and returns the "),s("code",[e._v("ps")]),e._v(" task index to use. If "),s("code",[e._v("None")]),e._v(", defaults to a round-robin strategy across all "),s("code",[e._v("ps")]),e._v(" devices.")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/device",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.device()"),s("OutboundLink")],1),e._v("A function to pass to .")]),e._v(" "),s("h4",{attrs:{id:"raises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),s("p",[e._v("TypeError if cluster is not a dictionary or ClusterDef protocol buffer, or if ps_strategy is provided but not a callable.")])])}),[],!1,null,null,null);t.default=o.exports}}]);