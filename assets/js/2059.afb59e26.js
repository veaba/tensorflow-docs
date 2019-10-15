(window.webpackJsonp=window.webpackJsonp||[]).push([[2059],{2247:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Adds all input tensors element-wise.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.add_n")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v1.add_n")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v1.math.add_n")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.add_n")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.math.add_n")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.math.add_n(\n    inputs,\n    name=None\n)\n")])])]),a("h3",{attrs:{id:"used-in-the-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the guide:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("M")]),e._v("i"),a("code",[e._v("g")]),e._v("r"),a("code",[e._v("a")]),e._v("t"),a("code",[e._v("e")]),e._v(" "),a("code",[e._v("y")]),e._v("o"),a("code",[e._v("u")]),e._v("r"),a("code"),e._v("T"),a("code",[e._v("e")]),e._v("n"),a("code",[e._v("s")]),e._v("o"),a("code",[e._v("r")]),e._v("F"),a("code",[e._v("l")]),e._v("o"),a("code",[e._v("w")]),e._v(" "),a("code",[e._v("1")]),e._v(" "),a("code",[e._v("c")]),e._v("o"),a("code",[e._v("d")]),e._v("e"),a("code"),e._v("t"),a("code",[e._v("o")]),e._v(" "),a("code",[e._v("T")]),e._v("e"),a("code",[e._v("n")]),e._v("s"),a("code",[e._v("o")]),e._v("r"),a("code",[e._v("F")]),e._v("l"),a("code",[e._v("o")]),e._v("w"),a("code"),e._v("2``")]),e._v(" "),a("li",[a("code",[e._v("U")]),e._v("s"),a("code",[e._v("e")]),e._v(" "),a("code",[e._v("a")]),e._v(" "),a("code",[e._v("G")]),e._v("P"),a("code",[e._v("U")])])]),e._v(" "),a("h3",{attrs:{id:"used-in-the-tutorials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-tutorials","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the tutorials:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("N")]),e._v("e"),a("code",[e._v("u")]),e._v("r"),a("code",[e._v("a")]),e._v("l"),a("code"),e._v("s"),a("code",[e._v("t")]),e._v("y"),a("code",[e._v("l")]),e._v("e"),a("code"),e._v("t"),a("code",[e._v("r")]),e._v("a"),a("code",[e._v("n")]),e._v("s"),a("code",[e._v("f")]),e._v("e"),a("code",[e._v("r")])])]),e._v(" "),a("p",[e._v("Converts IndexedSlices objects into dense tensors prior to adding.\n"),a("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/math/add_n",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.math.add_n"),a("OutboundLink")],1),e._v(" performs the same operation as tf.math.accumulate_n, but it waits for all of its inputs to be ready before beginning to sum. This buffering can result in higher memory consumption when inputs are ready at different times, since the minimum temporary storage required is proportional to the input size rather than the output size.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("broadcast"),a("OutboundLink")],1),e._v("This op does not  its inputs. If you need ing, use tf.math.add (or the + operator) instead.")]),e._v(" "),a("h4",{attrs:{id:"for-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-example","aria-hidden":"true"}},[e._v("#")]),e._v(" For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" a = tf.constant([[3, 5], [4, 8]])\nb = tf.constant([[1, 6], [2, 9]])\ntf.math.add_n([a, b, a])  # [[7, 16], [10, 25]]\n")])])]),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("inputs")]),e._v(": A list of "),a("code",[e._v("tf.Tensor")]),e._v(" or "),a("code",[e._v("tf.IndexedSlices")]),e._v(" objects, each with same shape and type.")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": A "),a("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A Tensor of same shape and type as the elements of inputs.")]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": If "),a("code",[e._v("inputs")]),e._v(" don't all have same shape and dtype or the shape cannot be inferred.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);