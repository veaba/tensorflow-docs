(window.webpackJsonp=window.webpackJsonp||[]).push([[2089],{2277:function(e,v,_){"use strict";_.r(v);var o=_(0),t=Object(o.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("Defined in generated file: python/ops/gen_math_ops.py")]),e._v(" "),_("p",[e._v("Computes exponential of x element-wise. y=ex.")]),e._v(" "),_("h3",{attrs:{id:"aliases"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("tf.compat.v1.exp")])]),e._v(" "),_("li",[_("code",[e._v("tf.compat.v1.math.exp")])]),e._v(" "),_("li",[_("code",[e._v("tf.compat.v2.exp")])]),e._v(" "),_("li",[_("code",[e._v("tf.compat.v2.math.exp")])]),e._v(" "),_("li",[_("code",[e._v("tf.exp")])])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v(" tf.math.exp(\n    x,\n    name=None\n)\n")])])]),_("h3",{attrs:{id:"used-in-the-guide"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the guide:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("E")]),e._v("a"),_("code",[e._v("g")]),e._v("e"),_("code",[e._v("r")]),e._v(" "),_("code",[e._v("e")]),e._v("x"),_("code",[e._v("e")]),e._v("c"),_("code",[e._v("u")]),e._v("t"),_("code",[e._v("i")]),e._v("o"),_("code",[e._v("n")])]),e._v(" "),_("li",[_("code",[e._v("W")]),e._v("r"),_("code",[e._v("i")]),e._v("t"),_("code",[e._v("i")]),e._v("n"),_("code",[e._v("g")]),e._v(" "),_("code",[e._v("c")]),e._v("u"),_("code",[e._v("s")]),e._v("t"),_("code",[e._v("o")]),e._v("m"),_("code"),e._v("l"),_("code",[e._v("a")]),e._v("y"),_("code",[e._v("e")]),e._v("r"),_("code",[e._v("s")]),e._v(" "),_("code",[e._v("a")]),e._v("n"),_("code",[e._v("d")]),e._v(" "),_("code",[e._v("m")]),e._v("o"),_("code",[e._v("d")]),e._v("e"),_("code",[e._v("l")]),e._v("s"),_("code"),e._v("w"),_("code",[e._v("i")]),e._v("t"),_("code",[e._v("h")]),e._v(" "),_("code",[e._v("K")]),e._v("e"),_("code",[e._v("r")]),e._v("a"),_("code",[e._v("s")])])]),e._v(" "),_("h3",{attrs:{id:"used-in-the-tutorials"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-tutorials","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the tutorials:")]),e._v(" "),_("ul",[_("li",[e._v("Convolutional Variational Auto"),_("code",[e._v("e")]),e._v("ncod"),_("code",[e._v("e")]),e._v("r\nThis function comput"),_("code",[e._v("e")]),e._v("s th"),_("code",[e._v("e")]),e._v(" "),_("code",[e._v("e``x")]),e._v("pon"),_("code",[e._v("e")]),e._v("ntial of "),_("code",[e._v("e")]),e._v("v"),_("code",[e._v("e")]),e._v("ry "),_("code",[e._v("e")]),e._v("l"),_("code",[e._v("e")]),e._v("m"),_("code",[e._v("e")]),e._v("nt in th"),_("code",[e._v("e")]),e._v(" input t"),_("code",[e._v("e")]),e._v("nsor. i."),_("code",[e._v("e")]),e._v(". "),_("code",[e._v("e``x")]),e._v("p("),_("code",[e._v("x")]),e._v(") or "),_("code",[e._v("e")]),e._v("^("),_("code",[e._v("x")]),e._v("), wh"),_("code",[e._v("e")]),e._v("r"),_("code",[e._v("e")]),e._v(" "),_("code",[e._v("x")]),e._v(" is th"),_("code",[e._v("e")]),e._v(" input t"),_("code",[e._v("e")]),e._v("nsor. "),_("code",[e._v("e")]),e._v(" d"),_("code",[e._v("e")]),e._v("not"),_("code",[e._v("e")]),e._v("s Eul"),_("code",[e._v("e")]),e._v("r's numb"),_("code",[e._v("e")]),e._v("r and is appro"),_("code",[e._v("x")]),e._v("imat"),_("code",[e._v("e")]),e._v("ly "),_("code",[e._v("e")]),e._v("qual to 2.718281. Output is positiv"),_("code",[e._v("e")]),e._v(" for any r"),_("code",[e._v("e")]),e._v("al input.")])]),e._v(" "),_("p",[e._v("For complex numbers, the exponential value is calculated as follows:")]),e._v(" "),_("p",[e._v("Let's consider complex number 1+1j as an example. e^1 * (cos 1 + i sin 1) = 2.7182818284590 * (0.54030230586+0.8414709848j)")]),e._v(" "),_("h4",{attrs:{id:"args"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("x")]),e._v(": A "),_("code",[e._v("Tensor")]),e._v(". Must be one of the following types: "),_("code",[e._v("bfloat16")]),e._v(", "),_("code",[e._v("half")]),e._v(", "),_("code",[e._v("float32")]),e._v(", "),_("code",[e._v("float64")]),e._v(", "),_("code",[e._v("complex64")]),e._v(", "),_("code",[e._v("complex128")]),e._v(".")]),e._v(" "),_("li",[_("code",[e._v("name")]),e._v(": A "),_("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),_("h4",{attrs:{id:"returns"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),_("p",[e._v("A Tensor. Has the same type as x.")])])}),[],!1,null,null,null);v.default=t.exports}}]);