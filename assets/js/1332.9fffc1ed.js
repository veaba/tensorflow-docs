(window.webpackJsonp=window.webpackJsonp||[]).push([[1332],{1521:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Adjust hue of RGB images.")]),e._v(" "),t("h3",{attrs:{id:"aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("tf.compat.v1.image.adjust_hue")])]),e._v(" "),t("li",[t("code",[e._v("tf.compat.v2.image.adjust_hue")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.image.adjust_hue(\n    image,\n    delta,\n    name=None\n)\n")])])]),t("p",[e._v("This is a convenience method that converts an RGB image to float representation, converts it to HSV, add an offset to the hue channel, converts back to RGB and then back to the original data type. If several adjustments are chained it is advisable to minimize the number of redundant conversions.")]),e._v(" "),t("p",[e._v("image is an RGB image. The image hue is adjusted by converting the image(s) to HSV and rotating the hue channel (H) by delta. The image is then converted back to RGB.")]),e._v(" "),t("p",[e._v("delta must be in the interval [-1, 1].")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("image")]),e._v(": RGB "),t("code",[e._v("image")]),e._v(" or "),t("code",[e._v("image")]),e._v("s. Size of the last dimension must be 3.")]),e._v(" "),t("li",[t("code",[e._v("delta")]),e._v(": float. How much to add to the hue channel.")]),e._v(" "),t("li",[t("code",[e._v("name")]),e._v(": A "),t("code",[e._v("name")]),e._v(" for this operation (optional).")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("Adjusted image(s), same shape and DType as image.")]),e._v(" "),t("h4",{attrs:{id:"usage-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" >> import tensorflow as tf\n>> x = tf.random.normal(shape=(256, 256, 3))\n>> tf.image.adjust_hue(x, 0.2)\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);