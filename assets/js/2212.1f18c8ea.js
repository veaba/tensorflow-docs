(window.webpackJsonp=window.webpackJsonp||[]).push([[2212],{2400:function(e,_,o){"use strict";o.r(_);var v=o(0),t=Object(v.a)({},(function(){var e=this,_=e.$createElement,o=e._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Defined in generated file: python/ops/gen_nn_ops.py")]),e._v(" "),o("p",[e._v("Computes the gradients of depthwise convolution with respect to the input.")]),e._v(" "),o("h3",{attrs:{id:"aliases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("tf.compat.v1.nn.depthwise_conv2d_backprop_input")])]),e._v(" "),o("li",[o("code",[e._v("tf.compat.v1.nn.depthwise_conv2d_native_backprop_input")])]),e._v(" "),o("li",[o("code",[e._v("tf.compat.v2.nn.depthwise_conv2d_backprop_input")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" tf.nn.depthwise_conv2d_backprop_input(\n    input_sizes,\n    filter,\n    out_backprop,\n    strides,\n    padding,\n    data_format='NHWC',\n    dilations=[1, 1, 1, 1],\n    name=None\n)\n")])])]),o("h4",{attrs:{id:"args"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("input_sizes")]),e._v(":"),o("code"),e._v("A"),o("code",[e._v("``Tensor``")]),e._v("of"),o("code",[e._v("``t")]),e._v("yp"),o("code",[e._v("e`` ``int32")]),e._v("."),o("code"),e._v("A"),o("code",[e._v("n`` ``i``n``t``e``g``e")]),e._v("r"),o("code"),e._v("v"),o("code",[e._v("e``c``t")]),e._v("or"),o("code"),e._v("r"),o("code",[e._v("e")]),e._v("pr"),o("code",[e._v("e``s``e``n``t``i``n``g`` ``t``h``e`` ``s``h``a")]),e._v("p"),o("code",[e._v("e``")]),e._v("of"),o("code",[e._v("``input``,`` ``b``a``s``e``d``")]),e._v("o"),o("code",[e._v("n`` ``data_format")]),e._v("."),o("code"),e._v("For"),o("code",[e._v("``e")]),e._v("x"),o("code",[e._v("a")]),e._v("mp"),o("code",[e._v("l``e``,`` ``i")]),e._v("f"),o("code",[e._v("``data_format`` ``i``s``")]),e._v("'NHWC'"),o("code",[e._v("``t``h``e``n`` ``input`` ``i``s`` ``a``")]),e._v("4-D"),o("code"),e._v("["),o("code",[e._v("b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s")]),e._v("]"),o("code",[e._v("``t``e``n``s")]),e._v("or.")]),e._v(" "),o("li",[o("code",[e._v("filter")]),e._v(":"),o("code"),e._v("A"),o("code",[e._v("``Tensor")]),e._v("."),o("code"),e._v("M"),o("code",[e._v("u``s``t`` ``b``e``")]),e._v("o"),o("code",[e._v("n``e``")]),e._v("o"),o("code",[e._v("f`` ``t``h``e`` ``f")]),e._v("o"),o("code",[e._v("l``l")]),e._v("o"),o("code",[e._v("w``i``n``g`` ``t")]),e._v("y"),o("code",[e._v("p``e``s")]),e._v(":"),o("code",[e._v("``h``a``l``f``,`` ``b``f``l")]),e._v("o"),o("code",[e._v("a``t")]),e._v("16"),o("code",[e._v(",`` ``float32``,`` ``float64")]),e._v("."),o("code"),e._v("4-D"),o("code",[e._v("``w``i``t``h`` ``s``h``a``p``e``")]),e._v("["),o("code",[e._v("filter``_``h``e``i``g``h``t``,`` ``filter``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``d``e``p``t``h``w``i``s``e``_``m``u``l``t``i``p``l``i``e``r")]),e._v("].")]),e._v(" "),o("li",[o("code",[e._v("out_backprop")]),e._v(":"),o("code"),e._v("A"),o("code",[e._v("``Tensor")]),e._v("."),o("code"),e._v("M"),o("code",[e._v("u``s``t`` ``h``a")]),e._v("v"),o("code",[e._v("e`` ``t``h``e`` ``s``a``m``e`` ``t")]),e._v("y"),o("code",[e._v("p``e`` ``a``s`` ``filter")]),e._v("."),o("code"),e._v("4-D"),o("code",[e._v("``w``i``t``h`` ``s``h``a``p``e`` ``b``a``s``e``d`` ``o``n`` ``data_format")]),e._v("."),o("code"),e._v("F"),o("code",[e._v("o``r`` ``e")]),e._v("x"),o("code",[e._v("a``m``p``l``e``,`` ``i``f`` ``data_format`` ``i``s``")]),e._v("'NHWC'"),o("code",[e._v("``t``h``e``n`` ``out_backprop`` ``s``h``a``p``e`` ``i``s``")]),e._v("["),o("code",[e._v("b``a``t``c``h``,`` ``o``u``t``_``h``e``i``g``h``t``,`` ``o``u``t``_``w``i``d``t``h``,`` ``o``u``t``_``c``h``a``n``n``e``l``s")]),e._v("]."),o("code"),e._v("G"),o("code",[e._v("r``a``d``i``e``n``t``s`` ``w")]),e._v("."),o("code",[e._v("r")]),e._v("."),o("code",[e._v("t")]),e._v("."),o("code",[e._v("``t``h``e`` ``o``u``t``p``u``t`` ``o``f`` ``t``h``e`` ``c``o``n")]),e._v("v"),o("code",[e._v("o``l``u``t``i``o``n")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("s``t``r``i``d``e``s")]),e._v(":"),o("code"),e._v("A"),o("code",[e._v("``l``i``s``t`` ``o``f`` ``i``n``t``s")]),e._v("."),o("code"),e._v("T"),o("code",[e._v("h``e`` ``s``t``r``i``d``e`` ``o``f`` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d``o``w`` ``f``o``r`` ``e``a``c``h`` ``d``i``m``e``n``s``i``o``n`` ``o``f`` ``t``h``e`` ``input`` ``o``f`` ``t``h``e`` ``c``o``n")]),e._v("v"),o("code",[e._v("o``l``u``t``i``o``n")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("p``a``d``d``i``n``g")]),e._v(":"),o("code"),e._v("A"),o("code",[e._v("``s``t``r``i``n``g`` ``f``r``o``m")]),e._v(":"),o("code",[e._v('``"SAME", "VALID"')]),e._v("."),o("code"),e._v("T"),o("code",[e._v("h``e`` ``t")]),e._v("y"),o("code",[e._v("p``e`` ``o``f`` ``p``a``d``d``i``n``g`` ``a``l``g``o``r``i``t``h``m`` ``t``o`` ``u``s``e")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("data_format")]),e._v(":"),o("code"),e._v("A"),o("code",[e._v("n`` ``o``p``t``i``o``n``a``l`` ``s``t``r``i``n``g`` ``f``r``o``m")]),e._v(":"),o("code",[e._v('``"NHWC", "NCHW"')]),e._v("."),o("code"),e._v("D"),o("code",[e._v('e``f``a``u``l``t``s`` ``t``o`` ``"NHWC"')]),e._v("."),o("code"),e._v("S"),o("code",[e._v("p``e``c``i``f")]),e._v("y"),o("code",[e._v("``t``h``e`` ``d``a``t``a`` ``f``o``r``m``a``t`` ``o``f`` ``t``h``e`` ``input`` ``a``n``d`` ``o``u``t``p``u``t`` ``d``a``t``a")]),e._v("."),o("code"),e._v("W"),o("code",[e._v('i``t``h`` ``t``h``e`` ``d``e``f``a``u``l``t`` ``f``o``r``m``a``t`` ``"NHWC"``,`` ``t``h``e`` ``d``a``t``a`` ``i``s`` ``s``t``o``r``e``d`` ``i``n`` ``t``h``e`` ``o``r``d``e``r`` ``o``f')]),e._v(":"),o("code"),e._v("["),o("code",[e._v("b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s")]),e._v("]."),o("code"),e._v("A"),o("code",[e._v("l``t``e``r``n``a``t``i")]),e._v("v"),o("code",[e._v("e``l")]),e._v("y"),o("code",[e._v(",`` ``t``h``e`` ``f``o``r``m``a``t`` ``c``o``u``l``d`` ``b``e``")]),e._v('"NCHW"'),o("code",[e._v(",`` ``t``h``e`` ``d``a``t``a`` ``s``t``o``r``a``g``e`` ``o``r``d``e``r`` ``o``f")]),e._v(":"),o("code"),e._v("["),o("code",[e._v("b``a``t``c``h``,`` ``c``h``a``n``n``e``l``s``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h")]),e._v("].")]),e._v(" "),o("li",[o("code",[e._v("d``i``l``a``t``i``o``n``s")]),e._v(":"),o("code"),e._v("A"),o("code",[e._v("n`` ``o``p``t``i``o``n``a``l`` ``l``i``s``t`` ``o``f`` ``i``n``t``s")]),e._v("."),o("code"),e._v("D"),o("code",[e._v("e``f``a``u``l``t``s`` ``t``o``")]),e._v("["),o("code",[e._v("1``,`` ``1``,`` ``1``,`` ``1")]),e._v("]."),o("code",[e._v("``1")]),e._v("-D"),o("code",[e._v("``t``e``n``s``o``r`` ``o``f`` ``l``e``n``g``t``h``")]),e._v("4."),o("code"),e._v("T"),o("code",[e._v("h``e`` ``d``i``l``a``t``i``o``n`` ``f``a``c``t``o``r`` ``f``o``r`` ``e``a``c``h`` ``d``i``m``e``n``s``i``o``n`` ``o``f`` ``input")]),e._v("."),o("code"),e._v("I"),o("code",[e._v("f`` ``s``e``t`` ``t``o``")]),e._v("k"),o("code"),e._v(">"),o("code",[e._v("``1``,`` ``t``h``e``r``e`` ``w``i``l``l`` ``b``e``")]),e._v("k-"),o("code",[e._v("1`` ``s")]),e._v("k"),o("code",[e._v("i``p``p``e``d`` ``c``e``l``l``s`` ``b``e``t``w``e``e``n`` ``e``a``c``h`` ``filter`` ``e``l``e``m``e``n``t`` ``o``n`` ``t``h``a``t`` ``d``i``m``e``n``s``i``o``n")]),e._v("."),o("code"),e._v("T"),o("code",[e._v("h``e`` ``d``i``m``e``n``s``i``o``n`` ``o``r``d``e``r`` ``i``s`` ``d``e``t``e``r``m``i``n``e``d`` ``b")]),e._v("y"),o("code",[e._v("``t``h``e``")]),e._v("v"),o("code",[e._v("a``l``u``e`` ``o``f`` ``data_format``,`` ``s``e``e`` ``a``b``o")]),e._v("v"),o("code",[e._v("e`` ``f``o``r`` ``d``e``t``a``i``l``s")]),e._v("."),o("code"),e._v("D"),o("code",[e._v("i``l``a``t``i``o``n``s`` ``i``n`` ``t``h``e`` ``b``a``t``c``h`` ``a``n``d`` ``d``e``p``t``h`` ``d``i``m``e``n``s``i``o``n``s`` ``m``u``s``t`` ``b``e`` ``1")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("n``a``m``e")]),e._v(":"),o("code"),e._v("A"),o("code",[e._v("``n``a``m``e`` ``f``o``r`` ``t``h``e`` ``o``p``e``r``a``t``i``o``n``")]),e._v("("),o("code",[e._v("o``p``t``i``o``n``a``l")]),e._v(").")])]),e._v(" "),o("h4",{attrs:{id:"returns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),o("p",[e._v("A Tensor. Has the same type as filter.")])])}),[],!1,null,null,null);_.default=t.exports}}]);