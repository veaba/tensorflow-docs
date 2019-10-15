(window.webpackJsonp=window.webpackJsonp||[]).push([[1114],{1303:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("Creates a dataset that deterministically chooses elements from datasets.")]),a._v(" "),e("h3",{attrs:{id:"aliases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[a._v("#")]),a._v(" Aliases:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("tf.compat.v2.data.experimental.choose_from_datasets")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" tf.data.experimental.choose_from_datasets(\n    datasets,\n    choice_dataset\n)\n")])])]),e("p",[a._v("For example, given the following datasets:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(' datasets = [tf.data.Dataset.from_tensors("foo").repeat(),\n            tf.data.Dataset.from_tensors("bar").repeat(),\n            tf.data.Dataset.from_tensors("baz").repeat()]\n\n# Define a dataset containing `[0, 1, 2, 0, 1, 2, 0, 1, 2]`.\nchoice_dataset = tf.data.Dataset.range(3).repeat(3)\n\nresult = tf.data.experimental.choose_from_datasets(datasets, choice_dataset)\n')])])]),e("p",[a._v("The elements of result will be:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(' "foo", "bar", "baz", "foo", "bar", "baz", "foo", "bar", "baz"\n')])])]),e("h4",{attrs:{id:"args"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[a._v("#")]),a._v(" Args:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("datasets")]),a._v(": A list of "),e("code",[a._v("tf.data.Dataset")]),a._v(" objects with compatible structure.")]),a._v(" "),e("li",[e("code",[a._v("choice_dataset")]),a._v(": A "),e("code",[a._v("tf.data.Dataset")]),a._v(" of scalar "),e("code",[a._v("tf.int64")]),a._v(" tensors between "),e("code",[a._v("0")]),a._v(" and len("),e("code",[a._v("datasets")]),a._v(") - 1.")])]),a._v(" "),e("h4",{attrs:{id:"returns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[a._v("#")]),a._v(" Returns:")]),a._v(" "),e("p",[a._v("A dataset that interleaves elements from datasets according to the values of choice_dataset.")]),a._v(" "),e("h4",{attrs:{id:"raises"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[a._v("#")]),a._v(" Raises:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("TypeError")]),a._v(": If the "),e("code",[a._v("datasets")]),a._v(" or "),e("code",[a._v("choice_dataset")]),a._v(" arguments have the wrong type.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);