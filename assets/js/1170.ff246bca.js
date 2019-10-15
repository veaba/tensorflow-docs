(window.webpackJsonp=window.webpackJsonp||[]).push([[1170],{1359:function(e,t,i){"use strict";i.r(t);var a=i(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"class-inputcontext"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#class-inputcontext","aria-hidden":"true"}},[e._v("#")]),e._v(" Class InputContext")]),e._v(" "),i("p",[e._v("A class wrapping information needed by an input function.")]),e._v(" "),i("h3",{attrs:{id:"aliases"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),i("ul",[i("li",[e._v("Class "),i("code",[e._v("tf.compat.v1.distribute.InputContext")])]),e._v(" "),i("li",[e._v("Class "),i("code",[e._v("tf.compat.v2.distribute.InputContext")])])]),e._v(" "),i("p",[e._v("This is a context class that is passed to the user's input function and contains information about the compute replicas and input pipelines. The number of compute replicas (in sync training) helps compute the local batch size from the desired global batch size for each replica. The input pipeline information can be used to return a different subset of the input in each replica (for e.g. shard the input pipeline, use a different input source etc).")]),e._v(" "),i("h2",{attrs:{id:"init"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),i("strong",[e._v("init")])]),e._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L355-L369",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),i("OutboundLink")],1)]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v(" __init__(\n    num_input_pipelines=1,\n    input_pipeline_id=0,\n    num_replicas_in_sync=1\n)\n")])])]),i("p",[e._v("Initializes an InputContext object.")]),e._v(" "),i("h4",{attrs:{id:"args"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("num_input_pipelines")]),e._v(": the number of input pipelines in a cluster.")]),e._v(" "),i("li",[i("code",[e._v("input_pipeline_id")]),e._v(": the current input pipeline id, should be an int in [0,"),i("code",[e._v("num_input_pipelines")]),e._v(").")]),e._v(" "),i("li",[i("code",[e._v("num_replicas_in_sync")]),e._v(": the number of replicas that are in sync.")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("h3",{attrs:{id:"input-pipeline-id"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-pipeline-id","aria-hidden":"true"}},[e._v("#")]),e._v(" input_pipeline_id")]),e._v(" "),i("p",[e._v("Returns the input pipeline ID.")]),e._v(" "),i("h3",{attrs:{id:"num-input-pipelines"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#num-input-pipelines","aria-hidden":"true"}},[e._v("#")]),e._v(" num_input_pipelines")]),e._v(" "),i("p",[e._v("Returns the number of input pipelines.")]),e._v(" "),i("h3",{attrs:{id:"num-replicas-in-sync"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#num-replicas-in-sync","aria-hidden":"true"}},[e._v("#")]),e._v(" num_replicas_in_sync")]),e._v(" "),i("p",[e._v("Returns the number of compute replicas in sync.")]),e._v(" "),i("h2",{attrs:{id:"methods"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),i("h3",{attrs:{id:"get-per-replica-batch-size"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#get-per-replica-batch-size","aria-hidden":"true"}},[e._v("#")]),e._v(" get_per_replica_batch_size")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L386-L404",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),i("OutboundLink")],1)]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v(" get_per_replica_batch_size(global_batch_size)\n")])])]),i("p",[e._v("Returns the per-replica batch size.")]),e._v(" "),i("h4",{attrs:{id:"args-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("global_batch_size")]),e._v(": the global batch size which should be divisible by "),i("code",[e._v("num_replicas_in_sync")]),e._v(".")])]),e._v(" "),i("h4",{attrs:{id:"returns"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),i("p",[e._v("the per-replica batch size.")]),e._v(" "),i("h4",{attrs:{id:"raises"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("ValueError")]),e._v(": if "),i("code",[e._v("global_batch_size")]),e._v(" not divisible by "),i("code",[e._v("num_replicas_in_sync")]),e._v(".")])])])}),[],!1,null,null,null);t.default=r.exports}}]);