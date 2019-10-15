(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{839:function(e,t,o){"use strict";o.r(t);var _=o(0),n=Object(_.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Defined in generated file: python/ops/gen_nn_ops.py")]),e._v(" "),o("p",[e._v("Produces the max pool of the input tensor for quantized types.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" tf.compat.v1.nn.quantized_max_pool(\n    input,\n    min_input,\n    max_input,\n    ksize,\n    strides,\n    padding,\n    name=None\n)\n")])])]),o("h4",{attrs:{id:"args"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("input")]),e._v(": A "),o("code",[e._v("Tensor")]),e._v(". Must be one of the following types: "),o("code",[e._v("qint8")]),e._v(", "),o("code",[e._v("quint8")]),e._v(", "),o("code",[e._v("qint32")]),e._v(", "),o("code",[e._v("qint16")]),e._v(", "),o("code",[e._v("quint16")]),e._v(". The 4D (batch x rows x cols x depth) "),o("code",[e._v("Tensor")]),e._v(" to MaxReduce over.")]),e._v(" "),o("li",[o("code",[e._v("min_input")]),e._v(": A "),o("code",[e._v("Tensor")]),e._v(" of type "),o("code",[e._v("float32")]),e._v(". The float value that the lowest quantized "),o("code",[e._v("input")]),e._v(" value represents.")]),e._v(" "),o("li",[o("code",[e._v("max_input")]),e._v(": A "),o("code",[e._v("Tensor")]),e._v(" of type "),o("code",[e._v("float32")]),e._v(". The float value that the highest quantized "),o("code",[e._v("input")]),e._v(" value represents.")]),e._v(" "),o("li",[o("code",[e._v("ksize")]),e._v(": A list of "),o("code",[e._v("ints")]),e._v(". The size of the window for each dimension of the "),o("code",[e._v("input")]),e._v(" tensor. The length must be 4 to match the number of dimensions of the "),o("code",[e._v("input")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("strides")]),e._v(": A list of "),o("code",[e._v("ints")]),e._v(". The stride of the sliding window for each dimension of the "),o("code",[e._v("input")]),e._v(" tensor. The length must be 4 to match the number of dimensions of the "),o("code",[e._v("input")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("padding")]),e._v(": A "),o("code",[e._v("string")]),e._v(" from: "),o("code",[e._v('"SAME", "VALID"')]),e._v(". The type of "),o("code",[e._v("padding")]),e._v(" algorithm to use.")]),e._v(" "),o("li",[o("code",[e._v("name")]),e._v(": A "),o("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),o("h4",{attrs:{id:"returns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),o("p",[e._v("A tuple of Tensor objects (output, min_output, max_output).")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("output")]),e._v(": A "),o("code",[e._v("Tensor")]),e._v(". Has the same type as "),o("code",[e._v("input")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("min_output")]),e._v(": A "),o("code",[e._v("Tensor")]),e._v(" of type "),o("code",[e._v("float32")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("max_output")]),e._v(": A "),o("code",[e._v("Tensor")]),e._v(" of type "),o("code",[e._v("float32")]),e._v(".")])])])}),[],!1,null,null,null);t.default=n.exports}}]);