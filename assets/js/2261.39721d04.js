(window.webpackJsonp=window.webpackJsonp||[]).push([[2261],{2449:function(_,e,v){"use strict";v.r(e);var o=v(0),a=Object(o.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("Defined in generated file: python/ops/gen_array_ops.py")]),_._v(" "),v("p",[_._v("Compute gradients for a FakeQuantWithMinMaxVarsPerChannel operation.")]),_._v(" "),v("h3",{attrs:{id:"aliases"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[_._v("#")]),_._v(" Aliases:")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("tf.compat.v1.fake_quant_with_min_max_vars_per_channel_gradient")])]),_._v(" "),v("li",[v("code",[_._v("tf.compat.v1.quantization.fake_quant_with_min_max_vars_per_channel_gradient")])]),_._v(" "),v("li",[v("code",[_._v("tf.compat.v2.quantization.fake_quant_with_min_max_vars_per_channel_gradient")])])]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v(" tf.quantization.fake_quant_with_min_max_vars_per_channel_gradient(\n    gradients,\n    inputs,\n    min,\n    max,\n    num_bits=8,\n    narrow_range=False,\n    name=None\n)\n")])])]),v("h4",{attrs:{id:"args"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[_._v("#")]),_._v(" Args:")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("gradients")]),_._v(":"),v("code"),_._v("A"),v("code",[_._v("``Tensor``")]),_._v("of"),v("code"),_._v("type"),v("code",[_._v("``float32")]),_._v("."),v("code"),_._v("Backpropagate"),v("code",[_._v("d`` ``gradients``")]),_._v("a"),v("code",[_._v("b")]),_._v("ove"),v("code"),_._v("t"),v("code",[_._v("h")]),_._v("e"),v("code"),_._v("FakeQuantWit"),v("code",[_._v("h")]),_._v("MinMaxVars"),v("code"),_._v("operation"),v("code",[_._v(",``")]),_._v("s"),v("code",[_._v("h")]),_._v("ape"),v("code"),_._v("one"),v("code"),_._v("of:"),v("code"),_._v("["),v("code",[_._v("d")]),_._v("]"),v("code",[_._v(",``")]),_._v("["),v("code",[_._v("b``,`` ``d")]),_._v("]"),v("code",[_._v(",``")]),_._v("["),v("code",[_._v("b``,`` ``h``,`` ``w``,`` ``d")]),_._v("].")]),_._v(" "),v("li",[v("code",[_._v("inputs")]),_._v(":"),v("code"),_._v("A"),v("code",[_._v("``Tensor``")]),_._v("of"),v("code"),_._v("type"),v("code",[_._v("``float32")]),_._v("."),v("code"),_._v("Values"),v("code"),_._v("passe"),v("code",[_._v("d``")]),_._v("as"),v("code",[_._v("``inputs``")]),_._v("to"),v("code"),_._v("t"),v("code",[_._v("h")]),_._v("e"),v("code"),_._v("FakeQuantWit"),v("code",[_._v("h")]),_._v("MinMaxVars"),v("code"),_._v("operation"),v("code",[_._v(",``")]),_._v("s"),v("code",[_._v("h")]),_._v("ape"),v("code"),_._v("same"),v("code"),_._v("as"),v("code",[_._v("``gradients")]),_._v("."),v("code"),_._v("min"),v("code",[_._v(",``")]),_._v("max:"),v("code"),_._v("Quantization"),v("code"),_._v("interval"),v("code",[_._v(",``")]),_._v("floats"),v("code"),_._v("of"),v("code"),_._v("s"),v("code",[_._v("h")]),_._v("ape"),v("code"),_._v("["),v("code",[_._v("d")]),_._v("].")]),_._v(" "),v("li",[v("code",[_._v("min")]),_._v(":"),v("code"),_._v("A"),v("code",[_._v("``Tensor``")]),_._v("of"),v("code"),_._v("type"),v("code",[_._v("``float32")]),_._v(".")]),_._v(" "),v("li",[v("code",[_._v("max")]),_._v(":"),v("code"),_._v("A"),v("code",[_._v("``Tensor``")]),_._v("of"),v("code"),_._v("type"),v("code",[_._v("``float32")]),_._v(".")]),_._v(" "),v("li",[v("code",[_._v("num_bits")]),_._v(":"),v("code"),_._v("An"),v("code"),_._v("optional"),v("code",[_._v("``int")]),_._v("."),v("code"),_._v("Defaults"),v("code"),_._v("to"),v("code",[_._v("``8")]),_._v("."),v("code"),_._v("T"),v("code",[_._v("h")]),_._v("e"),v("code",[_._v("``b")]),_._v("it"),v("code",[_._v("w")]),_._v("i"),v("code",[_._v("d")]),_._v("t"),v("code",[_._v("h``")]),_._v("of"),v("code"),_._v("t"),v("code",[_._v("h")]),_._v("e"),v("code"),_._v("quantization;"),v("code",[_._v("``b")]),_._v("et"),v("code",[_._v("w")]),_._v("een"),v("code"),_._v("2"),v("code"),_._v("an"),v("code",[_._v("d``")]),_._v("16"),v("code",[_._v(",``")]),_._v("inclusive.")]),_._v(" "),v("li",[v("code",[_._v("narrow_range")]),_._v(":"),v("code"),_._v("An"),v("code"),_._v("optional"),v("code",[_._v("``b")]),_._v("ool."),v("code"),_._v("Defaults"),v("code"),_._v("to"),v("code",[_._v("``False")]),_._v("."),v("code"),_._v("W"),v("code",[_._v("h")]),_._v("et"),v("code",[_._v("h")]),_._v("er"),v("code"),_._v("to"),v("code"),_._v("quantize"),v("code",[_._v("``int")]),_._v("o"),v("code"),_._v("2^"),v("code",[_._v("num_bits``")]),_._v("-"),v("code"),_._v("1"),v("code",[_._v("``d")]),_._v("istinct"),v("code"),_._v("values.")]),_._v(" "),v("li",[v("code",[_._v("name")]),_._v(":"),v("code"),_._v("A"),v("code",[_._v("``name``")]),_._v("for"),v("code"),_._v("t"),v("code",[_._v("h")]),_._v("e"),v("code"),_._v("operation"),v("code"),_._v("(optional).")])]),_._v(" "),v("h4",{attrs:{id:"returns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[_._v("#")]),_._v(" Returns:")]),_._v(" "),v("p",[_._v("A tuple of Tensor objects (backprops_wrt_input, backprop_wrt_min, backprop_wrt_max).")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("backprops_wrt_input")]),_._v(": A "),v("code",[_._v("Tensor")]),_._v(" of type "),v("code",[_._v("float32")]),_._v(".")]),_._v(" "),v("li",[v("code",[_._v("backprop_wrt_min")]),_._v(": A "),v("code",[_._v("Tensor")]),_._v(" of type "),v("code",[_._v("float32")]),_._v(".")]),_._v(" "),v("li",[v("code",[_._v("backprop_wrt_max")]),_._v(": A "),v("code",[_._v("Tensor")]),_._v(" of type "),v("code",[_._v("float32")]),_._v(".")])])])}),[],!1,null,null,null);e.default=a.exports}}]);