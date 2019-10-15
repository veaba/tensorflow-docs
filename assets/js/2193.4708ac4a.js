(window.webpackJsonp=window.webpackJsonp||[]).push([[2193],{2381:function(e,a,t){"use strict";t.r(a);var s=t(0),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Merge repeated labels into single labels.")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("tf.compat.v1.nn.collapse_repeated")])]),e._v(" "),t("li",[t("code",[e._v("tf.compat.v2.nn.collapse_repeated")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.nn.collapse_repeated(\n    labels,\n    seq_length,\n    name=None\n)\n")])])]),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("labels")]),e._v(": Tensor of shape [batch, max value in seq_length]")]),e._v(" "),t("li",[t("code",[e._v("seq_length")]),e._v(": Tensor of shape [batch], sequence length of each batch element.")]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(": A "),t("code",[e._v("name")]),e._v(" for this "),t("code",[e._v("Op")]),e._v('. Defaults to "collapse_repeated_'),t("code",[e._v("labels")]),e._v('".')])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A tuple (collapsed_labels, new_seq_length) where")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("collapsed_labels")]),e._v(": Tensor of shape [batch, max_seq_length] with repeated labels collapsed and padded to max_seq_length, eg: [[A, A, B, B, A], [A, B, C, D, E]] => [[A, B, A, 0, 0], [A, B, C, D, E]]")]),e._v(" "),t("li",[t("code",[e._v("new_seq_length")]),e._v(": int tensor of shape [batch] with new sequence lengths.")])])])}),[],!1,null,null,null);a.default=l.exports}}]);