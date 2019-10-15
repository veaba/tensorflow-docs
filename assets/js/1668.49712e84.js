(window.webpackJsonp=window.webpackJsonp||[]).push([[1668],{1859:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"class-minmaxnorm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-minmaxnorm","aria-hidden":"true"}},[e._v("#")]),e._v(" Class MinMaxNorm")]),e._v(" "),a("p",[e._v("MinMaxNorm weight constraint.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/keras/constraints/Constraint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Constraint"),a("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[e._v("Class "),a("code",[e._v("tf.compat.v1.keras.constraints.MinMaxNorm")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v1.keras.constraints.min_max_norm")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.keras.constraints.MinMaxNorm")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.compat.v2.keras.constraints.min_max_norm")])]),e._v(" "),a("li",[e._v("Class "),a("code",[e._v("tf.keras.constraints.min_max_norm")])])]),e._v(" "),a("p",[e._v("Constrains the weights incident to each hidden unit to have the norm between a lower bound and an upper bound.")]),e._v(" "),a("h4",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),e._v(" Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("min_value")]),e._v(": the minimum norm for the incoming weights.")]),e._v(" "),a("li",[a("code",[e._v("max_value")]),e._v(": the maximum norm for the incoming weights.")]),e._v(" "),a("li",[a("code",[e._v("rate")]),e._v(": "),a("code",[e._v("rate")]),e._v(" for enforcing the constraint: weights will be rescaled to yield (1 - "),a("code",[e._v("rate")]),e._v(") * norm + "),a("code",[e._v("rate")]),e._v(" * norm.clip("),a("code",[e._v("min_value")]),e._v(", "),a("code",[e._v("max_value")]),e._v("). Effectively, this means that "),a("code",[e._v("rate")]),e._v("=1.0 stands for strict enforcement of the constraint, while "),a("code",[e._v("rate")]),e._v("<1.0 means that weights will be rescaled at each step to slowly move towards a value inside the desired interval.")]),e._v(" "),a("li",[a("code",[e._v("axis")]),e._v(":"),a("code"),e._v("integer"),a("code",[e._v(",`` ``axis``")]),e._v("along"),a("code"),e._v("which"),a("code"),e._v("to"),a("code"),e._v("calculate"),a("code"),e._v("weight"),a("code"),e._v("norms."),a("code"),e._v("For"),a("code"),e._v("instance"),a("code",[e._v(",``")]),e._v("in"),a("code"),e._v("a"),a("code",[e._v("``Dense``")]),e._v("layer"),a("code"),e._v("the"),a("code"),e._v("weight"),a("code"),e._v("matrix"),a("code"),e._v("has"),a("code"),e._v("shape"),a("code"),e._v("("),a("code",[e._v("input_dim, output_dim")]),e._v(")"),a("code",[e._v(",``")]),e._v("set"),a("code",[e._v("``axis``")]),e._v("to"),a("code",[e._v("``0``")]),e._v("to"),a("code"),e._v("constrain"),a("code"),e._v("each"),a("code"),e._v("weight"),a("code"),e._v("vector"),a("code"),e._v("of"),a("code"),e._v("length"),a("code"),e._v("("),a("code",[e._v("input_dim,")]),e._v(")."),a("code"),e._v("In"),a("code"),e._v("a"),a("code",[e._v("``Conv2D``")]),e._v("layer"),a("code"),e._v("with"),a("code",[e._v('``data_format="channels_last"``,``')]),e._v("the"),a("code"),e._v("weight"),a("code"),e._v("tensor"),a("code"),e._v("has"),a("code"),e._v("shape"),a("code"),e._v("("),a("code",[e._v("rows, cols, input_depth, output_depth")]),e._v(")"),a("code",[e._v(",``")]),e._v("set"),a("code",[e._v("``axis``")]),e._v("to"),a("code"),e._v("["),a("code",[e._v("0``,`` ``1``,`` ``2")]),e._v("]"),a("code"),e._v("to"),a("code"),e._v("constrain"),a("code"),e._v("the"),a("code"),e._v("weights"),a("code"),e._v("of"),a("code"),e._v("each"),a("code"),e._v("filter"),a("code"),e._v("tensor"),a("code"),e._v("of"),a("code"),e._v("size"),a("code"),e._v("("),a("code",[e._v("rows, cols, input_depth")]),e._v(").")])]),e._v(" "),a("h2",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("init")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L151-L155",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __init__(\n    min_value=0.0,\n    max_value=1.0,\n    rate=1.0,\n    axis=0\n)\n")])])]),a("p",[e._v("Initialize self. See help(type(self)) for accurate signature.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("strong",[e._v("call")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L157-L163",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" __call__(w)\n")])])]),a("p",[e._v("Call self as a function.")]),e._v(" "),a("h3",{attrs:{id:"get-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-config","aria-hidden":"true"}},[e._v("#")]),e._v(" get_config")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/constraints.py#L165-L171",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" get_config()\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);