(window.webpackJsonp=window.webpackJsonp||[]).push([[676],{864:function(e,v,_){"use strict";_.r(v);var o=_(0),c=Object(o.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("Calculate the sufficient statistics for the mean and variance of x.")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v(" tf.compat.v1.nn.sufficient_statistics(\n    x,\n    axes,\n    shift=None,\n    keep_dims=None,\n    name=None,\n    keepdims=None\n)\n")])])]),_("p",[e._v("These sufficient statistics are computed using the one pass algorithm on an input that's optionally shifted. See: https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Computing_shifted_data")]),e._v(" "),_("h4",{attrs:{id:"args"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("x")]),e._v(": A "),_("code",[e._v("Tensor")]),e._v(".")]),e._v(" "),_("li",[_("code",[e._v("axes")]),e._v(": Array of ints. A"),_("code",[e._v("x")]),e._v("es along which to compute mean and variance.")]),e._v(" "),_("li",[_("code",[e._v("shift")]),e._v(": A "),_("code",[e._v("Tensor")]),e._v(" containing the value by which to "),_("code",[e._v("shift")]),e._v(" the data for numerical stability, or "),_("code",[e._v("None")]),e._v(" if no "),_("code",[e._v("shift")]),e._v(" is to be performed. A "),_("code",[e._v("shift")]),e._v(" close to the true mean provides the most numerically stable results.")]),e._v(" "),_("li",[_("code",[e._v("keep_dims")]),e._v(": produce statistics with the same dimensionality as the input.")]),e._v(" "),_("li",[_("code",[e._v("name")]),e._v(": Name used to scope the operations that compute the sufficient stats.")]),e._v(" "),_("li",[_("code",[e._v("keepdims")]),e._v(": Alias for "),_("code",[e._v("keep_dims")]),e._v(".")])]),e._v(" "),_("h4",{attrs:{id:"returns"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),_("p",[e._v("Four Tensor objects of the same type as x:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("t")]),e._v("h"),_("code",[e._v("e")]),e._v(" "),_("code",[e._v("c")]),e._v("o"),_("code",[e._v("u")]),e._v("n"),_("code",[e._v("t")]),e._v(" "),_("code",[e._v("(")]),e._v("n"),_("code",[e._v("u")]),e._v("m"),_("code",[e._v("b")]),e._v("e"),_("code",[e._v("r")]),e._v(" "),_("code",[e._v("o")]),e._v("f"),_("code"),e._v("e"),_("code",[e._v("l")]),e._v("e"),_("code",[e._v("m")]),e._v("e"),_("code",[e._v("n")]),e._v("t"),_("code",[e._v("s")]),e._v(" "),_("code",[e._v("t")]),e._v("o"),_("code"),e._v("a"),_("code",[e._v("v")]),e._v("e"),_("code",[e._v("r")]),e._v("a"),_("code",[e._v("g")]),e._v("e"),_("code"),e._v("o"),_("code",[e._v("v")]),e._v("e"),_("code",[e._v("r")]),e._v(")"),_("code",[e._v(".")])]),e._v(" "),_("li",[_("code",[e._v("t")]),e._v("h"),_("code",[e._v("e")]),e._v(" "),_("code",[e._v("(")]),e._v("p"),_("code",[e._v("o")]),e._v("s"),_("code",[e._v("s")]),e._v("i"),_("code",[e._v("b")]),e._v("l"),_("code",[e._v("y")]),e._v(" "),_("code",[e._v("s")]),e._v("h"),_("code",[e._v("i")]),e._v("f"),_("code",[e._v("t")]),e._v("e"),_("code",[e._v("d")]),e._v(")"),_("code"),e._v("s"),_("code",[e._v("u")]),e._v("m"),_("code"),e._v("o"),_("code",[e._v("f")]),e._v(" "),_("code",[e._v("t")]),e._v("h"),_("code",[e._v("e")]),e._v(" "),_("code",[e._v("e")]),e._v("l"),_("code",[e._v("e")]),e._v("m"),_("code",[e._v("e")]),e._v("n"),_("code",[e._v("t")]),e._v("s"),_("code"),e._v("i"),_("code",[e._v("n")]),e._v(" "),_("code",[e._v("t")]),e._v("h"),_("code",[e._v("e")]),e._v(" "),_("code",[e._v("a")]),e._v("r"),_("code",[e._v("r")]),e._v("a"),_("code",[e._v("y")]),e._v(".``")]),e._v(" "),_("li",[_("code",[e._v("t")]),e._v("h"),_("code",[e._v("e")]),e._v(" "),_("code",[e._v("(")]),e._v("p"),_("code",[e._v("o")]),e._v("s"),_("code",[e._v("s")]),e._v("i"),_("code",[e._v("b")]),e._v("l"),_("code",[e._v("y")]),e._v(" "),_("code",[e._v("s")]),e._v("h"),_("code",[e._v("i")]),e._v("f"),_("code",[e._v("t")]),e._v("e"),_("code",[e._v("d")]),e._v(")"),_("code"),e._v("s"),_("code",[e._v("u")]),e._v("m"),_("code"),e._v("o"),_("code",[e._v("f")]),e._v(" "),_("code",[e._v("s")]),e._v("q"),_("code",[e._v("u")]),e._v("a"),_("code",[e._v("r")]),e._v("e"),_("code",[e._v("s")]),e._v(" "),_("code",[e._v("o")]),e._v("f"),_("code"),e._v("t"),_("code",[e._v("h")]),e._v("e"),_("code"),e._v("e"),_("code",[e._v("l")]),e._v("e"),_("code",[e._v("m")]),e._v("e"),_("code",[e._v("n")]),e._v("t"),_("code",[e._v("s")]),e._v(" "),_("code",[e._v("i")]),e._v("n"),_("code"),e._v("t"),_("code",[e._v("h")]),e._v("e"),_("code"),e._v("a"),_("code",[e._v("r")]),e._v("r"),_("code",[e._v("a")]),e._v("y"),_("code",[e._v(".")])]),e._v(" "),_("li",[e._v("the "),_("code",[e._v("shift")]),e._v(" by which the mean must be corrected or None if "),_("code",[e._v("shift")]),e._v(" is None.")])])])}),[],!1,null,null,null);v.default=c.exports}}]);