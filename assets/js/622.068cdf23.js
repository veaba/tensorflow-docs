(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{810:function(e,_,v){"use strict";v.r(_);var o=v(0),d=Object(o.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("Computes a 2-D convolution given 4-D input and filter tensors.")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v(" tf.compat.v1.nn.conv2d(\n    input,\n    filter=None,\n    strides=None,\n    padding=None,\n    use_cudnn_on_gpu=True,\n    data_format='NHWC',\n    dilations=[1, 1, 1, 1],\n    name=None,\n    filters=None\n)\n")])])]),v("p",[e._v("Given an input tensor of shape [batch, in_height, in_width, in_channels] and a filter / kernel tensor of shape [filter_height, filter_width, in_channels, out_channels], this op performs the following:")]),e._v(" "),v("p",[e._v("In detail, with the default NHWC format,")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v(" output[b, i, j, k] =\n    sum_{di, dj, q} input[b, strides[1] * i + di, strides[2] * j + dj, q]\n                    * filter[di, dj, q, k]\n")])])]),v("p",[e._v("Must have strides[0] = strides[3] = 1. For the most common case of the same horizontal and vertices strides, strides = [1, stride, stride, 1].")]),e._v(" "),v("h4",{attrs:{id:"args"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("input")]),e._v(": A "),v("code",[e._v("Tensor")]),e._v(". Must be one of the following types: "),v("code",[e._v("half")]),e._v(", "),v("code",[e._v("bfloat16")]),e._v(", "),v("code",[e._v("float32")]),e._v(", "),v("code",[e._v("float64")]),e._v(". A 4-D tensor. The dimension order is interpreted according to the value of "),v("code",[e._v("data_format")]),e._v(", see below for details.")]),e._v(" "),v("li",[v("code",[e._v("filter")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("``Tensor")]),e._v("."),v("code"),e._v("M"),v("code",[e._v("u``s``t`` ``h``a")]),e._v("v"),v("code",[e._v("e`` ``t``h``e`` ``s``a")]),e._v("m"),v("code",[e._v("e`` ``t")]),e._v("yp"),v("code",[e._v("e`` ``a``s`` ``input")]),e._v("."),v("code"),e._v("A"),v("code"),e._v("4-D"),v("code",[e._v("``t``e``n``s``o``r`` ``o``f`` ``s``h``a")]),e._v("p"),v("code",[e._v("e``")]),e._v("["),v("code",[e._v("filter``_``h``e``i``g``h``t``,`` ``filter``_``w``i``d``t``h``,`` ``i``n``_``c``h``a``n``n``e``l``s``,`` ``o``u``t``_``c``h``a``n``n``e``l``s")]),e._v("]")]),e._v(" "),v("li",[v("code",[e._v("s``t``r``i``d``e``s")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("n`` ``i``n``t`` ``o``r`` ``l``i``s``t`` ``o``f`` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``1``,`` ``2`` ``o``r`` ``4")]),e._v("."),v("code"),e._v("T"),v("code",[e._v("h``e`` ``s``t``r``i``d``e`` ``o``f`` ``t``h``e`` ``s``l``i``d``i``n``g`` ``w``i``n``d``o``w`` ``f``o``r`` ``e``a``c``h`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n`` ``o``f`` ``input")]),e._v("."),v("code"),e._v("I"),v("code",[e._v("f`` ``a`` ``s``i``n``g``l``e``")]),e._v("v"),v("code",[e._v("a``l``u``e`` ``i``s`` ``g``i")]),e._v("v"),v("code",[e._v("e``n`` ``i``t`` ``i``s`` ``r``e")]),e._v("p"),v("code",[e._v("l``i``c``a``t``e``d`` ``i``n`` ``t``h``e`` ``H`` ``a``n``d`` ``W`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n")]),e._v("."),v("code"),e._v("By"),v("code",[e._v("``d``e``f``a``u``l``t`` ``t``h``e`` ``N`` ``a``n``d`` ``C`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n``s`` ``a``r``e`` ``s``e``t`` ``t``o`` ``1")]),e._v("."),v("code"),e._v("T"),v("code",[e._v("h``e`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n`` ``o``r``d``e``r`` ``i``s`` ``d``e``t``e``r")]),e._v("m"),v("code",[e._v("i``n``e``d``")]),e._v("by"),v("code",[e._v("``t``h``e``")]),e._v("v"),v("code",[e._v("a``l``u``e`` ``o``f`` ``data_format``,`` ``s``e``e``")]),e._v("b"),v("code",[e._v("e``l``o``w`` ``f``o``r`` ``d``e``t``a``i``l``s")]),e._v(".")]),e._v(" "),v("li",[v("code",[e._v("padding")]),e._v(":"),v("code"),e._v("E"),v("code",[e._v('i``t``h``e``r`` ``t``h``e`` ``s``t``r``i``n``g`` ``"SAME"`` ``o``r`` ``"VALID"`` ``i``n``d``i``c``a``t``i``n``g`` ``t``h``e`` ``t')]),e._v("yp"),v("code",[e._v("e`` ``o``f`` ``padding`` ``a``l``g``o``r``i``t``h")]),e._v("m"),v("code",[e._v("``t``o`` ``u``s``e``,`` ``o``r`` ``a`` ``l``i``s``t`` ``i``n``d``i``c``a``t``i``n``g`` ``t``h``e`` ``e")]),e._v("xp"),v("code",[e._v("l``i``c``i``t`` ``padding``s`` ``a``t`` ``t``h``e`` ``s``t``a``r``t`` ``a``n``d`` ``e``n``d`` ``o``f`` ``e``a``c``h`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n")]),e._v("."),v("code",[e._v("``W``h``e``n`` ``e")]),e._v("xp"),v("code",[e._v('l``i``c``i``t`` ``padding`` ``i``s`` ``u``s``e``d`` ``a``n``d`` ``data_format`` ``i``s`` ``"NHWC"``,`` ``t``h``i``s`` ``s``h``o``u``l``d``')]),e._v("b"),v("code",[e._v("e`` ``i``n`` ``t``h``e`` ``f``o``r")]),e._v("m"),v("code"),e._v("[[0"),v("code",[e._v(",``")]),e._v("0]"),v("code",[e._v(",``")]),e._v("[p"),v("code",[e._v("a``d``_``t``o")]),e._v("p"),v("code",[e._v(",``")]),e._v("p"),v("code",[e._v("a``d``_")]),e._v("b"),v("code",[e._v("o``t``t``o")]),e._v("m]"),v("code",[e._v(",``")]),e._v("[p"),v("code",[e._v("a``d``_``l``e``f``t``,``")]),e._v("p"),v("code",[e._v("a``d``_``r``i``g``h``t")]),e._v("]"),v("code",[e._v(",``")]),e._v("[0"),v("code",[e._v(",``")]),e._v("0]]."),v("code",[e._v("``W``h``e``n`` ``e")]),e._v("xp"),v("code",[e._v('l``i``c``i``t`` ``padding`` ``u``s``e``d`` ``a``n``d`` ``data_format`` ``i``s`` ``"NCHW"``,`` ``t``h``i``s`` ``s``h``o``u``l``d``')]),e._v("b"),v("code",[e._v("e`` ``i``n`` ``t``h``e`` ``f``o``r")]),e._v("m"),v("code"),e._v("[[0"),v("code",[e._v(",``")]),e._v("0]"),v("code",[e._v(",``")]),e._v("[0"),v("code",[e._v(",``")]),e._v("0]"),v("code",[e._v(",``")]),e._v("[p"),v("code",[e._v("a``d``_``t``o")]),e._v("p"),v("code",[e._v(",``")]),e._v("p"),v("code",[e._v("a``d``_")]),e._v("b"),v("code",[e._v("o``t``t``o")]),e._v("m]"),v("code",[e._v(",``")]),e._v("[p"),v("code",[e._v("a``d``_``l``e``f``t``,``")]),e._v("p"),v("code",[e._v("a``d``_``r``i``g``h``t")]),e._v("]].")]),e._v(" "),v("li",[v("code",[e._v("u``s``e``_``c``u``d``n``n``_``o``n``_``g")]),e._v("p"),v("code",[e._v("u")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("n`` ``o")]),e._v("p"),v("code",[e._v("t``i``o``n``a``l`` ``bool")]),e._v("."),v("code"),e._v("D"),v("code",[e._v("e``f``a``u``l``t``s`` ``t``o`` ``True")]),e._v(".")]),e._v(" "),v("li",[v("code",[e._v("data_format")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("n`` ``o")]),e._v("p"),v("code",[e._v("t``i``o``n``a``l`` ``s``t``r``i``n``g`` ``f``r``o")]),e._v("m:"),v("code",[e._v('``"NHWC"``,`` ``"NCHW"')]),e._v("."),v("code"),e._v("D"),v("code",[e._v('e``f``a``u``l``t``s`` ``t``o`` ``"NHWC"')]),e._v("."),v("code"),e._v("Sp"),v("code",[e._v("e``c``i``f")]),e._v("y"),v("code",[e._v("``t``h``e`` ``d``a``t``a`` ``f``o``r")]),e._v("m"),v("code",[e._v("a``t`` ``o``f`` ``t``h``e`` ``input`` ``a``n``d`` ``o``u``t")]),e._v("p"),v("code",[e._v("u``t`` ``d``a``t``a")]),e._v("."),v("code",[e._v("``W``i``t``h`` ``t``h``e`` ``d``e``f``a``u``l``t`` ``f``o``r")]),e._v("m"),v("code",[e._v('a``t`` ``"NHWC"``,`` ``t``h``e`` ``d``a``t``a`` ``i``s`` ``s``t``o``r``e``d`` ``i``n`` ``t``h``e`` ``o``r``d``e``r`` ``o``f')]),e._v(":"),v("code"),e._v("[b"),v("code",[e._v("a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``c``h``a``n``n``e``l``s")]),e._v("]."),v("code"),e._v("A"),v("code",[e._v("l``t``e``r``n``a``t``i")]),e._v("v"),v("code",[e._v("e``l")]),e._v("y"),v("code",[e._v(",`` ``t``h``e`` ``f``o``r")]),e._v("m"),v("code",[e._v("a``t`` ``c``o``u``l``d``")]),e._v("b"),v("code",[e._v('e`` ``"NCHW"``,`` ``t``h``e`` ``d``a``t``a`` ``s``t``o``r``a``g``e`` ``o``r``d``e``r`` ``o``f')]),e._v(":"),v("code"),e._v("[b"),v("code",[e._v("a``t``c``h``,`` ``c``h``a``n``n``e``l``s``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h")]),e._v("].")]),e._v(" "),v("li",[v("code",[e._v("d``i``l``a``t``i``o``n``s")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("n`` ``i``n``t`` ``o``r`` ``l``i``s``t`` ``o``f`` ``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n``g``t``h`` ``1``,`` ``2`` ``o``r`` ``4``,`` ``d``e``f``a``u``l``t``s`` ``t``o`` ``1")]),e._v("."),v("code"),e._v("T"),v("code",[e._v("h``e`` ``d``i``l``a``t``i``o``n`` ``f``a``c``t``o``r`` ``f``o``r`` ``e``a``c``h`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n`` ``o``f``input")]),e._v("."),v("code"),e._v("I"),v("code",[e._v("f`` ``a`` ``s``i``n``g``l``e``")]),e._v("v"),v("code",[e._v("a``l``u``e`` ``i``s`` ``g``i")]),e._v("v"),v("code",[e._v("e``n`` ``i``t`` ``i``s`` ``r``e")]),e._v("p"),v("code",[e._v("l``i``c``a``t``e``d`` ``i``n`` ``t``h``e`` ``H`` ``a``n``d`` ``W`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n")]),e._v("."),v("code"),e._v("By"),v("code",[e._v("``d``e``f``a``u``l``t`` ``t``h``e`` ``N`` ``a``n``d`` ``C`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n``s`` ``a``r``e`` ``s``e``t`` ``t``o`` ``1")]),e._v("."),v("code"),e._v("I"),v("code",[e._v("f`` ``s``e``t`` ``t``o``")]),e._v("k"),v("code"),e._v(">"),v("code",[e._v("``1``,`` ``t``h``e``r``e`` ``w``i``l``l``")]),e._v("b"),v("code",[e._v("e``")]),e._v("k-"),v("code",[e._v("1`` ``s")]),e._v("k"),v("code",[e._v("i")]),e._v("pp"),v("code",[e._v("e``d`` ``c``e``l``l``s``")]),e._v("b"),v("code",[e._v("e``t``w``e``e``n`` ``e``a``c``h`` ``filter`` ``e``l``e")]),e._v("m"),v("code",[e._v("e``n``t`` ``o``n`` ``t``h``a``t`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n")]),e._v("."),v("code"),e._v("T"),v("code",[e._v("h``e`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n`` ``o``r``d``e``r`` ``i``s`` ``d``e``t``e``r")]),e._v("m"),v("code",[e._v("i``n``e``d``")]),e._v("by"),v("code",[e._v("``t``h``e``")]),e._v("v"),v("code",[e._v("a``l``u``e`` ``o``f`` ``data_format``,`` ``s``e``e`` ``a")]),e._v("b"),v("code",[e._v("o")]),e._v("v"),v("code",[e._v("e`` ``f``o``r`` ``d``e``t``a``i``l``s")]),e._v("."),v("code"),e._v("D"),v("code",[e._v("i``l``a``t``i``o``n``s`` ``i``n`` ``t``h``e``")]),e._v("b"),v("code",[e._v("a``t``c``h`` ``a``n``d`` ``d``e")]),e._v("p"),v("code",[e._v("t``h`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n``s`` ``i``f`` ``a`` ``4")]),e._v("-"),v("code",[e._v("d`` ``t``e``n``s``o``r``")]),e._v("m"),v("code",[e._v("u``s``t``")]),e._v("b"),v("code",[e._v("e`` ``1")]),e._v(".")]),e._v(" "),v("li",[v("code",[e._v("n``a")]),e._v("m"),v("code",[e._v("e")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("``n``a")]),e._v("m"),v("code",[e._v("e`` ``f``o``r`` ``t``h``e`` ``o")]),e._v("p"),v("code",[e._v("e``r``a``t``i``o``n``")]),e._v("("),v("code",[e._v("o")]),e._v("p"),v("code",[e._v("t``i``o``n``a``l")]),e._v(").")]),e._v(" "),v("li",[v("code",[e._v("filter``s")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("l``i``a``s`` ``f``o``r`` ``filter")]),e._v(".")])]),e._v(" "),v("h4",{attrs:{id:"returns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),v("p",[e._v("A Tensor. Has the same type as input.")])])}),[],!1,null,null,null);_.default=d.exports}}]);