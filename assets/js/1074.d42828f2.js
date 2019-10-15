(window.webpackJsonp=window.webpackJsonp||[]).push([[1074],{1263:function(e,t,o){"use strict";o.r(t);var a=o(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Connects to a single machine to enable remote execution on it.")]),e._v(" "),o("h3",{attrs:{id:"aliases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("tf.compat.v1.config.experimental_connect_to_host")])]),e._v(" "),o("li",[o("code",[e._v("tf.compat.v2.config.experimental_connect_to_host")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" tf.config.experimental_connect_to_host(\n    remote_host=None,\n    job_name='worker'\n)\n")])])]),o("p",[e._v("Will make devices on the remote host available to use. Note that calling this more than once will work, but will invalidate any tensor handles on the old remote devices. Using the default job_name of worker, you can schedule ops to run remotely as follows:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(' # Enable eager execution, and connect to the remote host.\ntf.compat.v1.enable_eager_execution()\ntf.contrib.eager.connect_to_remote_host("exampleaddr.com:9876")\nwith ops.device("job:worker/replica:0/task:1/device:CPU:0"):\n  # The following tensors should be resident on the remote device, and the op\n  # will also execute remotely.\n  x1 = array_ops.ones([2, 2])\n  x2 = array_ops.ones([2, 2])\n  y = math_ops.matmul(x1, x2)\n')])])]),o("p",[e._v("Args: remote_host: a single or a list the remote server addr in host-port format. job_name: The job name under which the new server will be accessible. Raises: ValueError: if remote_host is None.")])])}),[],!1,null,null,null);t.default=n.exports}}]);