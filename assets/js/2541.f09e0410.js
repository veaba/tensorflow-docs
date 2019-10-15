(window.webpackJsonp=window.webpackJsonp||[]).push([[2541],{2732:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Return histogram of values.")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("tf.compat.v1.histogram_fixed_width")])]),e._v(" "),t("li",[t("code",[e._v("tf.compat.v2.histogram_fixed_width")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.histogram_fixed_width(\n    values,\n    value_range,\n    nbins=100,\n    dtype=tf.dtypes.int32,\n    name=None\n)\n")])])]),t("p",[e._v("Given the tensor "),t("code",[e._v("values")]),e._v(", this operation returns a rank 1 histogram counting the number of entries in "),t("code",[e._v("values")]),e._v(" that fell into every bin. The bins are equal width and determined by the arguments "),t("code",[e._v("value_range")]),e._v(" and "),t("code",[e._v("nbins")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("values")]),e._v(": Numeric "),t("code",[e._v("Tensor")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("value_range")]),e._v(": Shape [2] "),t("code",[e._v("Tensor")]),e._v(" of same "),t("code",[e._v("dtype")]),e._v(" as "),t("code",[e._v("values")]),e._v(". "),t("code",[e._v("values")]),e._v(" <= "),t("code",[e._v("value_range")]),e._v("[0] will be mapped to hist[0], "),t("code",[e._v("values")]),e._v(" >= "),t("code",[e._v("value_range")]),e._v("[1] will be mapped to hist[-1].")]),e._v(" "),t("li",[t("code",[e._v("nbins")]),e._v(": Scalar "),t("code",[e._v("int32 Tensor")]),e._v(". Number of histogram bins.")]),e._v(" "),t("li",[t("code",[e._v("dtype")]),e._v(": "),t("code",[e._v("dtype")]),e._v(" for returned histogram.")]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(": A "),t("code",[e._v("name")]),e._v(" for this operation (defaults to 'histogram_fixed_width').")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A 1-D "),t("code",[e._v("Tensor")]),e._v(" holding histogram of values.")]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("TypeError")]),e._v(": If any unsupported dtype is provided.")]),e._v(" "),t("li",[t("code",[e._v("tf.errors.InvalidArgumentError")]),e._v(": If value_range does not satisfy value_range[0] < value_range[1].")])]),e._v(" "),t("h4",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" # Bins will be:  (-inf, 1), [1, 2), [2, 3), [3, 4), [4, inf)\nnbins = 5\nvalue_range = [0.0, 5.0]\nnew_values = [-1.0, 0.0, 1.5, 2.0, 5.0, 15]\n\nwith tf.compat.v1.get_default_session() as sess:\n  hist = tf.histogram_fixed_width(new_values, value_range, nbins=5)\n  variables.global_variables_initializer().run()\n  sess.run(hist) => [2, 1, 1, 0, 2]\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);