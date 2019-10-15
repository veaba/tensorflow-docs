(window.webpackJsonp=window.webpackJsonp||[]).push([[714],{902:function(e,_,o){"use strict";o.r(_);var v=o(0),t=Object(v.a)({},(function(){var e=this,_=e.$createElement,o=e._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Draws deterministic pseudorandom samples from a multinomial distribution. (deprecated)")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" tf.compat.v1.random.stateless_multinomial(\n    logits,\n    num_samples,\n    seed,\n    output_dtype=tf.dtypes.int64,\n    name=None\n)\n")])])]),o("p",[o("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/random/categorical",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.random.categorical"),o("OutboundLink")],1),e._v("This is a stateless version of : if run twice with the same seeds, it will produce the same pseudorandom numbers. The output is consistent across multiple runs on the same hardware (and between CPU and GPU), but may change between versions of TensorFlow or on non-CPU/GPU hardware.")]),e._v(" "),o("h4",{attrs:{id:"example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" # samples has shape [1, 5], where each value is either 0 or 1 with equal\n# probability.\nsamples = tf.random.stateless_categorical(\n    tf.math.log([[0.5, 0.5]]), 5, seed=[7, 17])\n")])])]),o("h4",{attrs:{id:"args"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("logits``:``")]),e._v("2-D"),o("code"),e._v("T"),o("code",[e._v("e``n``s")]),e._v("or"),o("code"),e._v("w"),o("code",[e._v("i``t``h`` ``s``h``a")]),e._v("p"),o("code",[e._v("e``")]),e._v("["),o("code",[e._v("b``a``t``c``h``_``s``i``z``e``,`` ``n``u``m``_``c``l``a``s``s``e``s")]),e._v("]."),o("code"),e._v("E"),o("code",[e._v("a``c``h`` ``s``l``i``c``e``")]),e._v("["),o("code",[e._v("i``,`` ``:")]),e._v("]"),o("code"),e._v("r"),o("code",[e._v("e")]),e._v("pr"),o("code",[e._v("e``s``e``n``t``s`` ``t``h``e`` ``u``n``n")]),e._v("or"),o("code",[e._v("m``a``l``i``z``e")]),e._v("d"),o("code",[e._v("``l")]),e._v("og-pro"),o("code",[e._v("b``a``b``i``l``i``t``i``e``s``")]),e._v("for"),o("code",[e._v("``a``l``l`` ``c``l``a``s``s``e``s")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("n``u``m``_``s``a``m")]),e._v("p"),o("code",[e._v("l``e``s``:``")]),e._v("0-D."),o("code"),e._v("N"),o("code",[e._v("u``m``b``e")]),e._v("r"),o("code"),e._v("of"),o("code",[e._v("``i``n")]),e._v("d"),o("code",[e._v("e")]),e._v("p"),o("code",[e._v("e``n")]),e._v("d"),o("code",[e._v("e``n``t`` ``s``a``m")]),e._v("p"),o("code",[e._v("l``e``s`` ``t")]),e._v("o"),o("code"),e._v("dr"),o("code",[e._v("a")]),e._v("w"),o("code"),e._v("for"),o("code",[e._v("``e``a``c``h``")]),e._v("row"),o("code",[e._v("``s``l``i``c``e")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("s``e``e")]),e._v("d"),o("code",[e._v(":``")]),e._v("A"),o("code",[e._v("``s``h``a")]),e._v("p"),o("code",[e._v("e``")]),e._v("[2]"),o("code",[e._v("``i``n``t``e")]),e._v("g"),o("code",[e._v("e")]),e._v("r"),o("code"),e._v("T"),o("code",[e._v("e``n``s")]),e._v("or"),o("code"),e._v("of"),o("code",[e._v("``s``e``e")]),e._v("d"),o("code",[e._v("s`` ``t")]),e._v("o"),o("code",[e._v("``t``h``e``")]),e._v("r"),o("code",[e._v("a``n")]),e._v("do"),o("code",[e._v("m`` ``n``u``m``b``e")]),e._v("r"),o("code"),e._v("g"),o("code",[e._v("e``n``e")]),e._v("r"),o("code",[e._v("a``t")]),e._v("or.")]),e._v(" "),o("li",[o("code",[e._v("output_dtype``:`` ``i``n``t``e")]),e._v("g"),o("code",[e._v("e")]),e._v("r"),o("code",[e._v("``t")]),e._v("yp"),o("code",[e._v("e`` ``t")]),e._v("o"),o("code",[e._v("``u``s``e``")]),e._v("for"),o("code",[e._v("``t``h``e``")]),e._v("o"),o("code",[e._v("u``t")]),e._v("p"),o("code",[e._v("u``t")]),e._v("."),o("code"),e._v("D"),o("code",[e._v("e")]),e._v("f"),o("code",[e._v("a``u``l``t``s`` ``t")]),e._v("o"),o("code",[e._v("``i``n``t")]),e._v("64.")]),e._v(" "),o("li",[o("code",[e._v("n``a``m``e``:``")]),e._v("Op"),o("code",[e._v("t``i")]),e._v("o"),o("code",[e._v("n``a``l`` ``n``a``m``e``")]),e._v("for"),o("code",[e._v("``t``h``e``")]),e._v("op"),o("code",[e._v("e")]),e._v("r"),o("code",[e._v("a``t``i")]),e._v("o"),o("code",[e._v("n")]),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"returns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),o("p",[e._v("The drawn samples of shape [batch_size, num_samples].")])])}),[],!1,null,null,null);_.default=t.exports}}]);