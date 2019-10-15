(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{771:function(e,o,v){"use strict";v.r(o);var _=v(0),d=Object(_.a)({},(function(){var e=this,o=e.$createElement,v=e._self._c||o;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("Computes false negatives at provided threshold values.")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v(" tf.compat.v1.metrics.false_negatives_at_thresholds(\n    labels,\n    predictions,\n    thresholds,\n    weights=None,\n    metrics_collections=None,\n    updates_collections=None,\n    name=None\n)\n")])])]),v("p",[e._v("If weights is None, weights default to 1. Use weights of 0 to mask values.")]),e._v(" "),v("h4",{attrs:{id:"args"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("labels")]),e._v(": A "),v("code",[e._v("Tensor")]),e._v(" whose shape matches "),v("code",[e._v("predictions")]),e._v(". Will be cast to "),v("code",[e._v("bool")]),e._v(".")]),e._v(" "),v("li",[v("code",[e._v("predictions")]),e._v(":"),v("code"),e._v("A"),v("code"),e._v("floating"),v("code"),e._v("point"),v("code",[e._v("``Tensor``")]),e._v("of"),v("code"),e._v("arbitrary"),v("code"),e._v("shape"),v("code"),e._v("and"),v("code"),e._v("whose"),v("code"),e._v("values"),v("code"),e._v("are"),v("code"),e._v("in"),v("code"),e._v("the"),v("code"),e._v("range"),v("code"),e._v("["),v("code",[e._v("0``,`` ``1")]),e._v("].")]),e._v(" "),v("li",[v("code",[e._v("thresholds")]),e._v(":"),v("code"),e._v("A"),v("code"),e._v("python"),v("code"),e._v("list"),v("code"),e._v("or"),v("code"),e._v("tuple"),v("code"),e._v("of"),v("code"),e._v("float"),v("code",[e._v("``thresholds``")]),e._v("in"),v("code"),e._v("["),v("code",[e._v("0``,`` ``1")]),e._v("].")]),e._v(" "),v("li",[v("code",[e._v("weights")]),e._v(":"),v("code"),e._v("Optional"),v("code",[e._v("``Tensor``")]),e._v("whose"),v("code"),e._v("rank"),v("code"),e._v("is"),v("code"),e._v("either"),v("code",[e._v("``0``,``")]),e._v("or"),v("code"),e._v("the"),v("code"),e._v("same"),v("code"),e._v("rank"),v("code"),e._v("as"),v("code",[e._v("``labels``,``")]),e._v("and"),v("code"),e._v("must"),v("code"),e._v("be"),v("code"),e._v("broadcastable"),v("code"),e._v("to"),v("code",[e._v("``labels``")]),e._v("(i.e."),v("code",[e._v(",``")]),e._v("all"),v("code"),e._v("dimensions"),v("code"),e._v("must"),v("code"),e._v("be"),v("code"),e._v("either"),v("code",[e._v("``1``,``")]),e._v("or"),v("code"),e._v("the"),v("code"),e._v("same"),v("code"),e._v("as"),v("code"),e._v("the"),v("code"),e._v("corresponding"),v("code",[e._v("``labels``")]),e._v("dimension).")]),e._v(" "),v("li",[v("code",[e._v("metrics_collections")]),e._v(":"),v("code"),e._v("An"),v("code"),e._v("optional"),v("code"),e._v("list"),v("code"),e._v("of"),v("code"),e._v("collections"),v("code"),e._v("that"),v("code",[e._v("``false_negatives``")]),e._v("should"),v("code"),e._v("be"),v("code"),e._v("added"),v("code"),e._v("to.")]),e._v(" "),v("li",[v("code",[e._v("updates_collections")]),e._v(":"),v("code"),e._v("An"),v("code"),e._v("optional"),v("code"),e._v("list"),v("code"),e._v("of"),v("code"),e._v("collections"),v("code"),e._v("that"),v("code",[e._v("``update_op``")]),e._v("should"),v("code"),e._v("be"),v("code"),e._v("added"),v("code"),e._v("to.")]),e._v(" "),v("li",[v("code",[e._v("name")]),e._v(":"),v("code"),e._v("An"),v("code"),e._v("optional"),v("code"),e._v("variable_scope"),v("code",[e._v("``name")]),e._v(".")])]),e._v(" "),v("h4",{attrs:{id:"returns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("false_negatives")]),e._v(": A f"),v("code",[e._v("l``o")]),e._v("a"),v("code",[e._v("t")]),e._v(" "),v("code",[e._v("Tensor")]),e._v(" "),v("code",[e._v("o")]),e._v("f "),v("code",[e._v("s``h")]),e._v("ap"),v("code",[e._v("e")]),e._v(" ["),v("code",[e._v("l``e``n``(``t``h``r``e``s``h``o``l``d``s``)")]),e._v("].")]),e._v(" "),v("li",[v("code",[e._v("update_op")]),e._v(": A"),v("code",[e._v("n")]),e._v(" "),v("code",[e._v("o")]),e._v("p"),v("code",[e._v("e``r")]),e._v("a"),v("code",[e._v("t")]),e._v("i"),v("code",[e._v("o``n")]),e._v(" "),v("code",[e._v("t``h")]),e._v("a"),v("code",[e._v("t")]),e._v(" up"),v("code",[e._v("d")]),e._v("a"),v("code",[e._v("t``e``s")]),e._v(" "),v("code",[e._v("t``h``e")]),e._v(" "),v("code",[e._v("false_negatives")]),e._v(" va"),v("code",[e._v("r")]),e._v("iab"),v("code",[e._v("l``e")]),e._v(" a"),v("code",[e._v("n``d")]),e._v(" "),v("code",[e._v("r``e``t")]),e._v("u"),v("code",[e._v("r``n``s")]),e._v(" i"),v("code",[e._v("t``s")]),e._v(" cu"),v("code",[e._v("r``r``e``n``t")]),e._v(" va"),v("code",[e._v("l")]),e._v("u"),v("code",[e._v("e")]),e._v(".")])]),e._v(" "),v("h4",{attrs:{id:"raises"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("ValueError")]),e._v(": If "),v("code",[e._v("predictions")]),e._v(" and "),v("code",[e._v("labels")]),e._v(" have mismatched shapes, or if "),v("code",[e._v("weights")]),e._v(" is not "),v("code",[e._v("None")]),e._v(" and its shape doesn't match "),v("code",[e._v("predictions")]),e._v(", or if either "),v("code",[e._v("metrics_collections")]),e._v(" or "),v("code",[e._v("updates_collections")]),e._v(" are not a list or tuple.")]),e._v(" "),v("li",[v("code",[e._v("RuntimeError")]),e._v(": If eager execution is enabled.")])])])}),[],!1,null,null,null);o.default=d.exports}}]);