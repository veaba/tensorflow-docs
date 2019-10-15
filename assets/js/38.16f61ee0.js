(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{229:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("A conditional accumulator for aggregating gradients.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/compat/v1/ConditionalAccumulatorBase",target:"_blank",rel:"noopener noreferrer"}},[e._v("ConditionalAccumulatorBase"),a("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),a("p",[e._v("Up-to-date gradients (i.e., time step at which gradient was computed is equal to the accumulator's time step) are added to the accumulator.")]),e._v(" "),a("p",[e._v("Extraction of the average gradient is blocked until the required number of gradients has been accumulated.")]),e._v(" "),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1263-L1296",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    dtype,\n    shape=None,\n    shared_name=None,\n    name='conditional_accumulator',\n    reduction_type='MEAN'\n)\n")])])]),a("p",[e._v("Creates a new ConditionalAccumulator.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("dtype")]),e._v(": Datatype of the accumulated gradients.")]),e._v(" "),a("li",[a("code",[e._v("shape")]),e._v(": Shape of the accumulated gradients.")]),e._v(" "),a("li",[a("code",[e._v("shared_name")]),e._v(": Optional. If non-empty, this accumulator will be shared under the given name across multiple sessions.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": Optional "),a("code",[e._v("name")]),e._v(" for the accumulator.")]),e._v(" "),a("li",[a("code",[e._v("reduction_type")]),e._v(": Reduction type to use when taking the gradient.")])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("h3",{attrs:{id:"accumulator-ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accumulator-ref","aria-hidden":"true"}},[e._v("#")]),e._v(" accumulator_ref")]),e._v(" "),a("p",[e._v("The underlying accumulator reference.")]),e._v(" "),a("h3",{attrs:{id:"dtype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dtype","aria-hidden":"true"}},[e._v("#")]),e._v(" dtype")]),e._v(" "),a("p",[e._v("The datatype of the gradients accumulated by this accumulator.")]),e._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[e._v("#")]),e._v(" name")]),e._v(" "),a("p",[e._v("The name of the underlying accumulator.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"apply-grad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply-grad","aria-hidden":"true"}},[e._v("#")]),e._v(" apply_grad")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1298-L1326",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" apply_grad(\n    grad,\n    local_step=0,\n    name=None\n)\n")])])]),a("p",[e._v("Attempts to apply a gradient to the accumulator.")]),e._v(" "),a("p",[e._v("The attempt is silently dropped if the gradient is stale, i.e., local_step is less than the accumulator's global time step.")]),e._v(" "),a("h4",{attrs:{id:"args-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("grad")]),e._v(": The "),a("code",[e._v("grad")]),e._v("ient tensor to be applied.")]),e._v(" "),a("li",[a("code",[e._v("local_step")]),e._v(": Time step at which the "),a("code",[e._v("grad")]),e._v("ient was computed.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": Optional "),a("code",[e._v("name")]),e._v(" for the operation.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("The operation that (conditionally) applies a gradient to the accumulator.")]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": If grad is of the wrong shape")])]),e._v(" "),a("h3",{attrs:{id:"num-accumulated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#num-accumulated","aria-hidden":"true"}},[e._v("#")]),e._v(" num_accumulated")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1208-L1225",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" num_accumulated(name=None)\n")])])]),a("p",[e._v("Number of gradients that have currently been aggregated in accumulator.")]),e._v(" "),a("h4",{attrs:{id:"args-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("name")]),e._v(": Optional "),a("code",[e._v("name")]),e._v(" for the operation.")])]),e._v(" "),a("h4",{attrs:{id:"returns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("Number of accumulated gradients currently in accumulator.")]),e._v(" "),a("h3",{attrs:{id:"set-global-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-global-step","aria-hidden":"true"}},[e._v("#")]),e._v(" set_global_step")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1227-L1249",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" set_global_step(\n    new_global_step,\n    name=None\n)\n")])])]),a("p",[e._v("Sets the global time step of the accumulator.")]),e._v(" "),a("p",[e._v("The operation logs a warning if we attempt to set to a time step that is lower than the accumulator's own time step.")]),e._v(" "),a("h4",{attrs:{id:"args-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("new_global_step")]),e._v(": Value of new time step. Can be a variable or a constant")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": Optional "),a("code",[e._v("name")]),e._v(" for the operation.")])]),e._v(" "),a("h4",{attrs:{id:"returns-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("Operation that sets the accumulator's time step.")]),e._v(" "),a("h3",{attrs:{id:"take-grad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#take-grad","aria-hidden":"true"}},[e._v("#")]),e._v(" take_grad")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1328-L1357",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" take_grad(\n    num_required,\n    name=None\n)\n")])])]),a("p",[e._v("Attempts to extract the average gradient from the accumulator.")]),e._v(" "),a("p",[e._v("The operation blocks until sufficient number of gradients have been successfully applied to the accumulator.")]),e._v(" "),a("p",[e._v("Once successful, the following actions are also triggered:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("C")]),e._v("o"),a("code",[e._v("u")]),e._v("n"),a("code",[e._v("t")]),e._v("e"),a("code",[e._v("r")]),e._v(" "),a("code",[e._v("o")]),e._v("f"),a("code"),e._v("a"),a("code",[e._v("c")]),e._v("c"),a("code",[e._v("u")]),e._v("m"),a("code",[e._v("u")]),e._v("l"),a("code",[e._v("a")]),e._v("t"),a("code",[e._v("e")]),e._v("d"),a("code"),e._v("g"),a("code",[e._v("r")]),e._v("a"),a("code",[e._v("d")]),e._v("i"),a("code",[e._v("e")]),e._v("n"),a("code",[e._v("t")]),e._v("s"),a("code"),e._v("i"),a("code",[e._v("s")]),e._v(" "),a("code",[e._v("r")]),e._v("e"),a("code",[e._v("s")]),e._v("e"),a("code",[e._v("t")]),e._v(" "),a("code",[e._v("t")]),e._v("o"),a("code"),e._v("0"),a("code",[e._v(".")])]),e._v(" "),a("li",[a("code",[e._v("A")]),e._v("g"),a("code",[e._v("g")]),e._v("r"),a("code",[e._v("e")]),e._v("g"),a("code",[e._v("a")]),e._v("t"),a("code",[e._v("e")]),e._v("d"),a("code"),e._v("g"),a("code",[e._v("r")]),e._v("a"),a("code",[e._v("d")]),e._v("i"),a("code",[e._v("e")]),e._v("n"),a("code",[e._v("t")]),e._v(" "),a("code",[e._v("i")]),e._v("s"),a("code"),e._v("r"),a("code",[e._v("e")]),e._v("s"),a("code",[e._v("e")]),e._v("t"),a("code"),e._v("t"),a("code",[e._v("o")]),e._v(" "),a("code",[e._v("0")]),e._v(" "),a("code",[e._v("t")]),e._v("e"),a("code",[e._v("n")]),e._v("s"),a("code",[e._v("o")]),e._v("r"),a("code",[e._v(".")])]),e._v(" "),a("li",[a("code",[e._v("A")]),e._v("c"),a("code",[e._v("c")]),e._v("u"),a("code",[e._v("m")]),e._v("u"),a("code",[e._v("l")]),e._v("a"),a("code",[e._v("t")]),e._v("o"),a("code",[e._v("r")]),e._v("'"),a("code",[e._v("s")]),e._v(" "),a("code",[e._v("i")]),e._v("n"),a("code",[e._v("t")]),e._v("e"),a("code",[e._v("r")]),e._v("n"),a("code",[e._v("a")]),e._v("l"),a("code"),e._v("t"),a("code",[e._v("i")]),e._v("m"),a("code",[e._v("e")]),e._v(" "),a("code",[e._v("s")]),e._v("t"),a("code",[e._v("e")]),e._v("p"),a("code"),e._v("i"),a("code",[e._v("s")]),e._v(" "),a("code",[e._v("i")]),e._v("n"),a("code",[e._v("c")]),e._v("r"),a("code",[e._v("e")]),e._v("m"),a("code",[e._v("e")]),e._v("n"),a("code",[e._v("t")]),e._v("e"),a("code",[e._v("d")]),e._v(" "),a("code",[e._v("b")]),e._v("y"),a("code"),e._v("1"),a("code",[e._v(".")])])]),e._v(" "),a("h4",{attrs:{id:"args-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("num_required")]),e._v(": Number of gradients that needs to have been aggregated")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": Optional "),a("code",[e._v("name")]),e._v(" for the operation")])]),e._v(" "),a("h4",{attrs:{id:"returns-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A tensor holding the value of the average gradient.")]),e._v(" "),a("h4",{attrs:{id:"raises-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("InvalidArgumentError")]),e._v(": If num_required < 1")])])])}),[],!1,null,null,null);t.default=o.exports}}]);