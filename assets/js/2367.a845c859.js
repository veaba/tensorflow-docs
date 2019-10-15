(window.webpackJsonp=window.webpackJsonp||[]).push([[2367],{2555:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Formats a string template using a list of tensors.")]),e._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("tf.compat.v1.strings.format")])]),e._v(" "),s("li",[s("code",[e._v("tf.compat.v2.strings.format")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.strings.format(\n    template,\n    inputs,\n    placeholder='{}',\n    summarize=3,\n    name=None\n)\n")])])]),s("p",[e._v("Formats a string template using a list of tensors, abbreviating tensors by only printing the first and last summarize elements of each dimension (recursively). If formatting only one tensor into a template, the tensor does not have to be wrapped in a list.")]),e._v(" "),s("h4",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),s("p",[e._v("Formatting a single-tensor template:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(' sess = tf.compat.v1.Session()\nwith sess.as_default():\n    tensor = tf.range(10)\n    formatted = tf.strings.format("tensor: {}, suffix", tensor)\n    out = sess.run(formatted)\n    expected = "tensor: [0 1 2 ... 7 8 9], suffix"\n\n    assert(out.decode() == expected)\n')])])]),s("p",[e._v("Formatting a multi-tensor template:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(' sess = tf.compat.v1.Session()\nwith sess.as_default():\n    tensor_one = tf.reshape(tf.range(100), [10, 10])\n    tensor_two = tf.range(10)\n    formatted = tf.strings.format("first: {}, second: {}, suffix",\n      (tensor_one, tensor_two))\n\n    out = sess.run(formatted)\n    expected = ("first: [[0 1 2 ... 7 8 9]\\n"\n          " [10 11 12 ... 17 18 19]\\n"\n          " [20 21 22 ... 27 28 29]\\n"\n          " ...\\n"\n          " [70 71 72 ... 77 78 79]\\n"\n          " [80 81 82 ... 87 88 89]\\n"\n          " [90 91 92 ... 97 98 99]], second: [0 1 2 ... 7 8 9], suffix")\n\n    assert(out.decode() == expected)\n')])])]),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("template")]),e._v(": A string "),s("code",[e._v("template")]),e._v(" to format tensor values into.")]),e._v(" "),s("li",[s("code",[e._v("inputs")]),e._v(": A list of "),s("code",[e._v("Tensor")]),e._v(" objects, or a single "),s("code",[e._v("Tensor")]),e._v(". The list of tensors to format into the "),s("code",[e._v("template")]),e._v(" string. If a solitary tensor is passed in, the input tensor will automatically be wrapped as a list.")]),e._v(" "),s("li",[s("code",[e._v("placeholder")]),e._v(": An optional "),s("code",[e._v("string")]),e._v(". Defaults to "),s("code",[e._v("{}")]),e._v(". At each "),s("code",[e._v("placeholder")]),e._v(" occurring in the "),s("code",[e._v("template")]),e._v(", a subsequent tensor will be inserted.")]),e._v(" "),s("li",[s("code",[e._v("summarize")]),e._v(": An optional "),s("code",[e._v("int")]),e._v(". Defaults to "),s("code",[e._v("3")]),e._v(". When formatting the tensors, show the first and last "),s("code",[e._v("summarize")]),e._v(" entries of each tensor dimension (recursively). If set to -1, all elements of the tensor will be shown.")]),e._v(" "),s("li",[s("code",[e._v("name")]),e._v(": A "),s("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("A scalar Tensor of type string.")]),e._v(" "),s("h4",{attrs:{id:"raises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ValueError")]),e._v(": if the number of placeholders does not match the number of inputs.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);