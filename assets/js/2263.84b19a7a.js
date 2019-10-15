(window.webpackJsonp=window.webpackJsonp||[]).push([[2263],{2451:function(e,n,t){"use strict";t.r(n);var a=t(0),i=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Quantizes then dequantizes a tensor.")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("tf.compat.v1.quantization.quantize_and_dequantize")])]),e._v(" "),t("li",[t("code",[e._v("tf.compat.v2.quantization.quantize_and_dequantize")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.quantization.quantize_and_dequantize(\n    input,\n    input_min,\n    input_max,\n    signed_input=True,\n    num_bits=8,\n    range_given=False,\n    round_mode='HALF_TO_EVEN',\n    name=None,\n    narrow_range=False\n)\n")])])]),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("input")]),e._v(": A "),t("code",[e._v("Tensor")]),e._v(" to quantize and dequantize.")]),e._v(" "),t("li",[t("code",[e._v("input")]),e._v("_min: If range_given=True, the minimum "),t("code",[e._v("input")]),e._v(" value that needs to be represented in the quantized representation.")]),e._v(" "),t("li",[t("code",[e._v("input")]),e._v("_max: If range_given=True, the maximum "),t("code",[e._v("input")]),e._v(" value that needs to be represented in the quantized representation.")]),e._v(" "),t("li",[t("code",[e._v("signed_input")]),e._v(": True if the quantization is signed or unsigned.")]),e._v(" "),t("li",[t("code",[e._v("num_bits")]),e._v(": The bitwidth of the quantization.")]),e._v(" "),t("li",[t("code",[e._v("range_given")]),e._v(": If true use "),t("code",[e._v("input")]),e._v("_min and "),t("code",[e._v("input")]),e._v("_max for the range of the "),t("code",[e._v("input")]),e._v(", otherwise determine min and max from the "),t("code",[e._v("input")]),e._v(" "),t("code",[e._v("Tensor")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("round_mode")]),e._v(": Rounding mode when rounding from float values to quantized ones.")]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(": Optional "),t("code",[e._v("name")]),e._v(" for the operation.")]),e._v(" "),t("li",[t("code",[e._v("narrow_range")]),e._v(": If true, then the absolute value of the quantized minimum value is the same as the quantized maximum value, instead of 1 greater. i.e. for 8 bit quantization, the minimum value is -127 instead of -128.")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A Tensor. Each element is the result of quantizing and dequantizing the corresponding element of input.")])])}),[],!1,null,null,null);n.default=i.exports}}]);