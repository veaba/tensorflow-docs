(window.webpackJsonp=window.webpackJsonp||[]).push([[636],{824:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Computes dropout. (deprecated arguments)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.compat.v1.nn.dropout(\n    x,\n    keep_prob=None,\n    noise_shape=None,\n    seed=None,\n    name=None,\n    rate=None\n)\n")])])]),a("p",[e._v("For each element of x, with probability rate, outputs 0, and otherwise scales up the input by 1 / (1-rate). The scaling is such that the expected sum is unchanged.\n"),a("a",{attrs:{href:"http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("broadcastable"),a("OutboundLink")],1),e._v("By default, each element is kept or dropped independently. If noise_shape is specified, it must be  to the shape of x, and only dimensions with noise_shape[i] == shape(x)[i] will make independent decisions. For example, if shape(x) = [k, l, m, n] and noise_shape = [k, 1, 1, n], each batch and channel component will be kept independently and each row and column will be kept or not kept together.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("x")]),e._v(": A floating point tensor.")]),e._v(" "),a("li",[a("code",[e._v("keep_prob")]),e._v(": (deprecated) A deprecated alias for ("),a("code",[e._v("1-rate")]),e._v(").")]),e._v(" "),a("li",[a("code",[e._v("noise_shape")]),e._v(": A 1-D "),a("code",[e._v("Tensor")]),e._v(" of type "),a("code",[e._v("int32")]),e._v(", representing the shape for randomly generated keep/drop flags.")]),e._v(" "),a("li",[a("code",[e._v("seed")]),e._v(": A Python integer. Used to create random "),a("code",[e._v("seed")]),e._v("s. See "),a("code",[e._v("tf.compat.v1.set_random_seed")]),e._v(" for behavior.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": A "),a("code",[e._v("name")]),e._v(" for this operation (optional).")]),e._v(" "),a("li",[a("code",[e._v("rate")]),e._v(": A scalar "),a("code",[e._v("Tensor")]),e._v(" with the same type as "),a("code",[e._v("x")]),e._v(". The probability that each element of "),a("code",[e._v("x")]),e._v(" is discarded.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A Tensor of the same shape of x.")]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")])])}),[],!1,null,null,null);t.default=s.exports}}]);