(window.webpackJsonp=window.webpackJsonp||[]).push([[621],{809:function(e,t,n){"use strict";n.r(t);var a=n(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Computes a 1-D convolution given 3-D input and filter tensors. (deprecated argument values) (deprecated argument values)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" tf.compat.v1.nn.conv1d(\n    value=None,\n    filters=None,\n    stride=None,\n    padding=None,\n    use_cudnn_on_gpu=None,\n    data_format=None,\n    name=None,\n    input=None,\n    dilations=None\n)\n")])])]),n("p",[e._v('Given an input tensor of shape [batch, in_width, in_channels] if data_format is "NWC", or [batch, in_channels, in_width] if data_format is "NCW", and a filter / kernel tensor of shape [filter_width, in_channels, out_channels], this op reshapes the arguments to pass them to conv2d to perform the equivalent convolution operation.\n'),n("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/nn/conv2d",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.nn.conv2d"),n("OutboundLink")],1),e._v('Internally, this op reshapes the input tensors and invokes . For example, if data_format does not start with "NC", a tensor of shape [batch, in_width, in_channels] is reshaped to [batch, 1, in_width, in_channels], and the filter is reshaped to [1, filter_width, in_channels, out_channels]. The result is then reshaped back to [batch, out_width, out_channels] (where out_width is a function of the stride and padding as in conv2d) and returned to the caller.')]),e._v(" "),n("h4",{attrs:{id:"args"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("value")]),e._v(": A 3D "),n("code",[e._v("Tensor")]),e._v(". Must be of type "),n("code",[e._v("float16")]),e._v(", "),n("code",[e._v("float32")]),e._v(", or "),n("code",[e._v("float64")]),e._v(".")]),e._v(" "),n("li",[n("code",[e._v("filters")]),e._v(": A 3D "),n("code",[e._v("Tensor")]),e._v(". Must have the same type as "),n("code",[e._v("value")]),e._v(".")]),e._v(" "),n("li",[n("code",[e._v("stride")]),e._v(": An int or list of "),n("code",[e._v("ints")]),e._v(" that has length "),n("code",[e._v("1")]),e._v(" or "),n("code",[e._v("3")]),e._v(". The number of entries by which the filter is moved right at each step.")]),e._v(" "),n("li",[n("code",[e._v("padding")]),e._v(": 'SAME' or 'VALID'")]),e._v(" "),n("li",[n("code",[e._v("use_cudnn_on_gpu")]),e._v(": An optional "),n("code",[e._v("bool")]),e._v(". Defaults to "),n("code",[e._v("True")]),e._v(".")]),e._v(" "),n("li",[n("code",[e._v("data_format")]),e._v(": An optional "),n("code",[e._v("string")]),e._v(" from "),n("code",[e._v('"NWC", "NCW"')]),e._v(". Defaults to "),n("code",[e._v('"NWC"')]),e._v(", the data is stored in the order of [batch, in_width, in_channels]. The "),n("code",[e._v('"NCW"')]),e._v(" format stores data as [batch, in_channels, in_width].")]),e._v(" "),n("li",[n("code",[e._v("name")]),e._v(": A "),n("code",[e._v("name")]),e._v(" for the operation (optional).")]),e._v(" "),n("li",[n("code",[e._v("input")]),e._v(": Alias for "),n("code",[e._v("value")]),e._v(".")]),e._v(" "),n("li",[n("code",[e._v("dilations")]),e._v(": An int or list of "),n("code",[e._v("ints")]),e._v(" that has length "),n("code",[e._v("1")]),e._v(" or "),n("code",[e._v("3")]),e._v(" which defaults to "),n("code",[e._v("1")]),e._v(". The dilation factor for each dimension of "),n("code",[e._v("input")]),e._v(". If set to k > "),n("code",[e._v("1")]),e._v(", there will be k-"),n("code",[e._v("1")]),e._v(" skipped cells between each filter element on that dimension. Dilations in the batch and depth dimensions must be "),n("code",[e._v("1")]),e._v(".")])]),e._v(" "),n("h4",{attrs:{id:"returns"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),n("p",[e._v("A Tensor. Has the same type as input.")]),e._v(" "),n("h4",{attrs:{id:"raises"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("ValueError")]),e._v(": if "),n("code",[e._v("data_format")]),e._v(" is invalid.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);