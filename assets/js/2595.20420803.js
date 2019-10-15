(window.webpackJsonp=window.webpackJsonp||[]).push([[2595],{2786:function(v,_,e){"use strict";e.r(_);var o=e(0),d=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("Defined in generated file: "),e("code",[v._v("python/ops/gen_array_ops.py")]),v._v("\nStops gradient computation.")]),v._v(" "),e("h3",{attrs:{id:"aliases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[v._v("#")]),v._v(" Aliases:")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("tf.compat.v1.stop_gradient")])]),v._v(" "),e("li",[e("code",[v._v("tf.compat.v2.stop_gradient")])])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v(" tf.stop_gradient(\n    input,\n    name=None\n)\n")])])]),e("p",[v._v("When executed in a graph, this op outputs its input tensor as-is.\nWhen building ops to compute gradients, this op prevents the contribution of its inputs to be taken into account. Normally, the gradient generator adds ops to a graph to compute the derivatives of a specified 'loss' by recursively finding out inputs that contributed to its computation. If you insert this op in the graph it inputs are masked from the gradient generator. They are not taken into account for computing gradients.\nThis is useful any time you want to compute a value with TensorFlow but need to pretend that the value was a constant. Some examples include:")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("T")]),v._v("h"),e("code",[v._v("e")]),v._v(" "),e("code",[v._v("E")]),v._v("M"),e("code"),v._v("a"),e("code",[v._v("l")]),v._v("g"),e("code",[v._v("o")]),v._v("r"),e("code",[v._v("i")]),v._v("t"),e("code",[v._v("h")]),v._v("m"),e("code"),v._v("w"),e("code",[v._v("h")]),v._v("e"),e("code",[v._v("r")]),v._v("e"),e("code"),v._v("t"),e("code",[v._v("h")]),v._v("e"),e("code"),v._v("M"),e("code",[v._v("-")]),v._v("s"),e("code",[v._v("t")]),v._v("e"),e("code",[v._v("p")]),v._v(" "),e("code",[v._v("s")]),v._v("h"),e("code",[v._v("o")]),v._v("u"),e("code",[v._v("l")]),v._v("d"),e("code"),v._v("n"),e("code",[v._v("o")]),v._v("t"),e("code"),v._v("i"),e("code",[v._v("n")]),v._v("v"),e("code",[v._v("o")]),v._v("l"),e("code",[v._v("v")]),v._v("e"),e("code"),v._v("b"),e("code",[v._v("a")]),v._v("c"),e("code",[v._v("k")]),v._v("p"),e("code",[v._v("r")]),v._v("o"),e("code",[v._v("p")]),v._v("a"),e("code",[v._v("g")]),v._v("a"),e("code",[v._v("t")]),v._v("i"),e("code",[v._v("o")]),v._v("n"),e("code"),v._v("t"),e("code",[v._v("h")]),v._v("r"),e("code",[v._v("o")]),v._v("u"),e("code",[v._v("g")]),v._v("h"),e("code"),v._v("t"),e("code",[v._v("h")]),v._v("e"),e("code"),v._v("o"),e("code",[v._v("u")]),v._v("t"),e("code",[v._v("p")]),v._v("u"),e("code",[v._v("t")]),v._v(" "),e("code",[v._v("o")]),v._v("f"),e("code"),v._v("t"),e("code",[v._v("h")]),v._v("e"),e("code"),v._v("E"),e("code",[v._v("-")]),v._v("s"),e("code",[v._v("t")]),v._v("e"),e("code",[v._v("p")]),v._v(".``")]),v._v(" "),e("li",[e("code",[v._v("C")]),v._v("o"),e("code",[v._v("n")]),v._v("t"),e("code",[v._v("r")]),v._v("a"),e("code",[v._v("s")]),v._v("t"),e("code",[v._v("i")]),v._v("v"),e("code",[v._v("e")]),v._v(" "),e("code",[v._v("d")]),v._v("i"),e("code",[v._v("v")]),v._v("e"),e("code",[v._v("r")]),v._v("g"),e("code",[v._v("e")]),v._v("n"),e("code",[v._v("c")]),v._v("e"),e("code"),v._v("t"),e("code",[v._v("r")]),v._v("a"),e("code",[v._v("i")]),v._v("n"),e("code",[v._v("i")]),v._v("n"),e("code",[v._v("g")]),v._v(" "),e("code",[v._v("o")]),v._v("f"),e("code"),v._v("B"),e("code",[v._v("o")]),v._v("l"),e("code",[v._v("t")]),v._v("z"),e("code",[v._v("m")]),v._v("a"),e("code",[v._v("n")]),v._v("n"),e("code"),v._v("m"),e("code",[v._v("a")]),v._v("c"),e("code",[v._v("h")]),v._v("i"),e("code",[v._v("n")]),v._v("e"),e("code",[v._v("s")]),v._v(" "),e("code",[v._v("w")]),v._v("h"),e("code",[v._v("e")]),v._v("r"),e("code",[v._v("e")]),v._v(","),e("code"),v._v("w"),e("code",[v._v("h")]),v._v("e"),e("code",[v._v("n")]),v._v(" "),e("code",[v._v("d")]),v._v("i"),e("code",[v._v("f")]),v._v("f"),e("code",[v._v("e")]),v._v("r"),e("code",[v._v("e")]),v._v("n"),e("code",[v._v("t")]),v._v("i"),e("code",[v._v("a")]),v._v("t"),e("code",[v._v("i")]),v._v("n"),e("code",[v._v("g")]),v._v(" "),e("code",[v._v("t")]),v._v("h"),e("code",[v._v("e")]),v._v(" "),e("code",[v._v("e")]),v._v("n"),e("code",[v._v("e")]),v._v("r"),e("code",[v._v("g")]),v._v("y"),e("code"),v._v("f"),e("code",[v._v("u")]),v._v("n"),e("code",[v._v("c")]),v._v("t"),e("code",[v._v("i")]),v._v("o"),e("code",[v._v("n")]),v._v(","),e("code"),v._v("t"),e("code",[v._v("h")]),v._v("e"),e("code"),v._v("t"),e("code",[v._v("r")]),v._v("a"),e("code",[v._v("i")]),v._v("n"),e("code",[v._v("i")]),v._v("n"),e("code",[v._v("g")]),v._v(" "),e("code",[v._v("m")]),v._v("u"),e("code",[v._v("s")]),v._v("t"),e("code"),v._v("n"),e("code",[v._v("o")]),v._v("t"),e("code"),v._v("b"),e("code",[v._v("a")]),v._v("c"),e("code",[v._v("k")]),v._v("p"),e("code",[v._v("r")]),v._v("o"),e("code",[v._v("p")]),v._v("a"),e("code",[v._v("g")]),v._v("a"),e("code",[v._v("t")]),v._v("e"),e("code"),v._v("t"),e("code",[v._v("h")]),v._v("r"),e("code",[v._v("o")]),v._v("u"),e("code",[v._v("g")]),v._v("h"),e("code"),v._v("t"),e("code",[v._v("h")]),v._v("e"),e("code"),v._v("g"),e("code",[v._v("r")]),v._v("a"),e("code",[v._v("p")]),v._v("h"),e("code"),v._v("t"),e("code",[v._v("h")]),v._v("a"),e("code",[v._v("t")]),v._v(" "),e("code",[v._v("g")]),v._v("e"),e("code",[v._v("n")]),v._v("e"),e("code",[v._v("r")]),v._v("a"),e("code",[v._v("t")]),v._v("e"),e("code",[v._v("d")]),v._v(" "),e("code",[v._v("t")]),v._v("h"),e("code",[v._v("e")]),v._v(" "),e("code",[v._v("s")]),v._v("a"),e("code",[v._v("m")]),v._v("p"),e("code",[v._v("l")]),v._v("e"),e("code",[v._v("s")]),v._v(" "),e("code",[v._v("f")]),v._v("r"),e("code",[v._v("o")]),v._v("m"),e("code"),v._v("t"),e("code",[v._v("h")]),v._v("e"),e("code"),v._v("m"),e("code",[v._v("o")]),v._v("d"),e("code",[v._v("e")]),v._v("l"),e("code",[v._v(".")])]),v._v(" "),e("li",[e("code",[v._v("A")]),v._v("d"),e("code",[v._v("v")]),v._v("e"),e("code",[v._v("r")]),v._v("s"),e("code",[v._v("a")]),v._v("r"),e("code",[v._v("i")]),v._v("a"),e("code",[v._v("l")]),v._v(" "),e("code",[v._v("t")]),v._v("r"),e("code",[v._v("a")]),v._v("i"),e("code",[v._v("n")]),v._v("i"),e("code",[v._v("n")]),v._v("g"),e("code",[v._v(",")]),v._v(" "),e("code",[v._v("w")]),v._v("h"),e("code",[v._v("e")]),v._v("r"),e("code",[v._v("e")]),v._v(" "),e("code",[v._v("n")]),v._v("o"),e("code"),v._v("b"),e("code",[v._v("a")]),v._v("c"),e("code",[v._v("k")]),v._v("p"),e("code",[v._v("r")]),v._v("o"),e("code",[v._v("p")]),v._v(" "),e("code",[v._v("s")]),v._v("h"),e("code",[v._v("o")]),v._v("u"),e("code",[v._v("l")]),v._v("d"),e("code"),v._v("h"),e("code",[v._v("a")]),v._v("p"),e("code",[v._v("p")]),v._v("e"),e("code",[v._v("n")]),v._v(" "),e("code",[v._v("t")]),v._v("h"),e("code",[v._v("r")]),v._v("o"),e("code",[v._v("u")]),v._v("g"),e("code",[v._v("h")]),v._v(" "),e("code",[v._v("t")]),v._v("h"),e("code",[v._v("e")]),v._v(" "),e("code",[v._v("a")]),v._v("d"),e("code",[v._v("v")]),v._v("e"),e("code",[v._v("r")]),v._v("s"),e("code",[v._v("a")]),v._v("r"),e("code",[v._v("i")]),v._v("a"),e("code",[v._v("l")]),v._v(" "),e("code",[v._v("e")]),v._v("x"),e("code",[v._v("a")]),v._v("m"),e("code",[v._v("p")]),v._v("l"),e("code",[v._v("e")]),v._v(" "),e("code",[v._v("g")]),v._v("e"),e("code",[v._v("n")]),v._v("e"),e("code",[v._v("r")]),v._v("a"),e("code",[v._v("t")]),v._v("i"),e("code",[v._v("o")]),v._v("n"),e("code"),v._v("p"),e("code",[v._v("r")]),v._v("o"),e("code",[v._v("c")]),v._v("e"),e("code",[v._v("s")]),v._v("s"),e("code",[v._v(".")])])]),v._v(" "),e("h4",{attrs:{id:"args"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[v._v("#")]),v._v(" Args:")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("input")]),v._v(": A "),e("code",[v._v("Tensor")]),v._v(".")]),v._v(" "),e("li",[e("code",[v._v("name")]),v._v(": A "),e("code",[v._v("name")]),v._v(" for the operation (optional).")])]),v._v(" "),e("h4",{attrs:{id:"returns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[v._v("#")]),v._v(" Returns:")]),v._v(" "),e("p",[v._v("A "),e("code",[v._v("Tensor")]),v._v(". Has the same type as "),e("code",[v._v("input")]),v._v(".")])])}),[],!1,null,null,null);_.default=d.exports}}]);