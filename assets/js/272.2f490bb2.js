(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{460:function(e,_,v){"use strict";v.r(_);var o=v(0),c=Object(o.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v('Extract patches from images and put them in the "depth" output dimension.')]),e._v(" "),v("h3",{attrs:{id:"aliases"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("tf.compat.v1.image.extract_image_patches")])])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v(" tf.compat.v1.extract_image_patches(\n    images,\n    ksizes=None,\n    strides=None,\n    rates=None,\n    padding=None,\n    name=None,\n    sizes=None\n)\n")])])]),v("h4",{attrs:{id:"args"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("images")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("``Tensor")]),e._v("."),v("code"),e._v("Mu"),v("code",[e._v("s``t`` ``b``e`` ``o``n``e`` ``o")]),e._v("f"),v("code",[e._v("``t``h``e``")]),e._v("f"),v("code",[e._v("o``l``l``o``w``i``n")]),e._v("g"),v("code",[e._v("``t")]),e._v("y"),v("code",[e._v("p``e``s")]),e._v(":"),v("code",[e._v("``float32``,`` ``float64``,`` ``int32``,`` ``uint8``,`` ``int16``,`` ``int8``,`` ``int64``,`` ``bfloat16``,`` ``uint16``,`` ``half``,`` ``uint32``,`` ``uint64")]),e._v("."),v("code"),e._v("4-D"),v("code",[e._v("``Tensor`` ``w``i``t``h`` ``s``h``a``p``e``")]),e._v("["),v("code",[e._v("b``a``t``c``h``,`` ``i``n``_``r``o``w``s``,`` ``i``n``_``c``o``l``s``,`` ``d``e``p``t``h")]),e._v("].")]),e._v(" "),v("li",[v("code",[e._v("ksizes")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("``l``i``s``t`` ``o")]),e._v("f"),v("code",[e._v("``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n")]),e._v("g"),v("code",[e._v("t``h`` ``>= 4")]),e._v("."),v("code"),e._v("T"),v("code",[e._v("h``e`` ``s``i")]),e._v("z"),v("code",[e._v("e`` ``o")]),e._v("f"),v("code",[e._v("``t``h``e`` ``s``l``i``d``i``n")]),e._v("g"),v("code",[e._v("``w``i``n``d``o``w``")]),e._v("f"),v("code",[e._v("o``r`` ``e``a``c``h`` ``d``i")]),e._v("m"),v("code",[e._v("e``n``s``i``o``n`` ``o")]),e._v("f"),v("code",[e._v("``images")]),e._v(".")]),e._v(" "),v("li",[v("code",[e._v("s``t``r``i``d``e``s")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("``l``i``s``t`` ``o")]),e._v("f"),v("code",[e._v("``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n")]),e._v("g"),v("code",[e._v("t``h`` ``>= 4")]),e._v("."),v("code"),e._v("H"),v("code",[e._v("o``w``")]),e._v("f"),v("code",[e._v("a``r`` ``t``h``e`` ``c``e``n``t``e``r``s`` ``o")]),e._v("f"),v("code",[e._v("``t``w``o`` ``c``o``n``s``e``c")]),e._v("u"),v("code",[e._v("t``i")]),e._v("v"),v("code",[e._v("e`` ``p``a``t``c``h``e``s`` ``a``r``e`` ``i``n`` ``t``h``e`` ``images")]),e._v("."),v("code"),e._v("Mu"),v("code",[e._v("s``t`` ``b``e")]),e._v(":"),v("code"),e._v("["),v("code",[e._v("1``,`` ``s``t``r``i``d``e``_``r``o``w``s``,`` ``s``t``r``i``d``e``_``c``o``l``s``,`` ``1")]),e._v("].")]),e._v(" "),v("li",[v("code",[e._v("r``a``t``e``s")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("``l``i``s``t`` ``o")]),e._v("f"),v("code",[e._v("``i``n``t``s`` ``t``h``a``t`` ``h``a``s`` ``l``e``n")]),e._v("g"),v("code",[e._v("t``h`` ``>= 4")]),e._v("."),v("code"),e._v("Mu"),v("code",[e._v("s``t`` ``b``e")]),e._v(":"),v("code"),e._v("["),v("code",[e._v("1``,`` ``r``a``t``e``_``r``o``w``s``,`` ``r``a``t``e``_``c``o``l``s``,`` ``1")]),e._v("]."),v("code"),e._v("T"),v("code",[e._v("h``i``s`` ``i``s`` ``t``h``e`` ``i``n``p")]),e._v("u"),v("code",[e._v("t`` ``s``t``r``i``d``e``,`` ``s``p``e``c``i")]),e._v("fy"),v("code",[e._v("i``n")]),e._v("g"),v("code",[e._v("``h``o``w``")]),e._v("f"),v("code",[e._v("a``r`` ``t``w``o`` ``c``o``n``s``e``c")]),e._v("u"),v("code",[e._v("t``i")]),e._v("v"),v("code",[e._v("e`` ``p``a``t``c``h`` ``s``a")]),e._v("m"),v("code",[e._v("p``l``e``s`` ``a``r``e`` ``i``n`` ``t``h``e`` ``i``n``p")]),e._v("u"),v("code",[e._v("t")]),e._v("."),v("code"),e._v("Equ"),v("code",[e._v("i")]),e._v("v"),v("code",[e._v("a``l``e``n``t`` ``t``o`` ``e")]),e._v("x"),v("code",[e._v("t``r``a``c``t``i``n")]),e._v("g"),v("code",[e._v("``p``a``t``c``h``e``s`` ``w``i``t``h`` ``p``a``t``c``h``_``s``i")]),e._v("z"),v("code",[e._v("e``s``_``e")]),e._v("ff"),v("code"),e._v("="),v("code",[e._v("``p``a``t``c``h``_``s``i")]),e._v("z"),v("code",[e._v("e``s``")]),e._v("+"),v("code"),e._v("("),v("code",[e._v("p``a``t``c``h``_``s``i")]),e._v("z"),v("code",[e._v("e``s``")]),e._v("-"),v("code",[e._v("``1")]),e._v(")"),v("code"),e._v("*"),v("code"),e._v("("),v("code",[e._v("r``a``t``e``s``")]),e._v("-"),v("code",[e._v("``1")]),e._v(")"),v("code",[e._v(",``")]),e._v("f"),v("code",[e._v("o``l``l``o``w``e``d`` ``b")]),e._v("y"),v("code",[e._v("``s")]),e._v("u"),v("code",[e._v("b``s``a")]),e._v("m"),v("code",[e._v("p``l``i``n")]),e._v("g"),v("code",[e._v("``t``h``e")]),e._v("m"),v("code",[e._v("``s``p``a``t``i``a``l``l")]),e._v("y"),v("code",[e._v("``b")]),e._v("y"),v("code",[e._v("``a``")]),e._v("f"),v("code",[e._v("a``c``t``o``r`` ``o")]),e._v("f"),v("code",[e._v("``r``a``t``e``s")]),e._v("."),v("code"),e._v("T"),v("code",[e._v("h``i``s`` ``i``s`` ``e")]),e._v("qu"),v("code",[e._v("i")]),e._v("v"),v("code",[e._v("a``l``e``n``t`` ``t``o`` ``r``a``t``e`` ``i``n`` ``d``i``l``a``t``e``d``")]),e._v("("),v("code",[e._v("a")]),e._v(".k."),v("code",[e._v("a")]),e._v("."),v("code"),e._v("A"),v("code",[e._v("t``r``o")]),e._v("u"),v("code",[e._v("s")]),e._v(")"),v("code",[e._v("``c``o``n")]),e._v("v"),v("code",[e._v("o``l")]),e._v("u"),v("code",[e._v("t``i``o``n``s")]),e._v(".")]),e._v(" "),v("li",[v("code",[e._v("p``a``d``d``i``n")]),e._v("g:"),v("code"),e._v("A"),v("code",[e._v("``s``t``r``i``n")]),e._v("g"),v("code"),e._v("f"),v("code",[e._v("r``o")]),e._v("m:"),v("code",[e._v('``"SAME", "VALID"')]),e._v("."),v("code"),e._v("T"),v("code",[e._v("h``e`` ``t")]),e._v("y"),v("code",[e._v("p``e`` ``o")]),e._v("f"),v("code",[e._v("``p``a``d``d``i``n")]),e._v("g"),v("code",[e._v("``a``l")]),e._v("g"),v("code",[e._v("o``r``i``t``h")]),e._v("m"),v("code",[e._v("``t``o``")]),e._v("u"),v("code",[e._v("s``e")]),e._v(".")]),e._v(" "),v("li",[v("code",[e._v("n``a")]),e._v("m"),v("code",[e._v("e")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("``n``a")]),e._v("m"),v("code",[e._v("e``")]),e._v("f"),v("code",[e._v("o``r`` ``t``h``e`` ``o``p``e``r``a``t``i``o``n``")]),e._v("("),v("code",[e._v("o``p``t``i``o``n``a``l")]),e._v(").")])]),e._v(" "),v("h4",{attrs:{id:"returns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),v("p",[e._v("A Tensor. Has the same type as images.")])])}),[],!1,null,null,null);_.default=c.exports}}]);