(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{342:function(e,v,o){"use strict";o.r(v);var _=o(0),a=Object(_.a)({},(function(){var e=this,v=e.$createElement,o=e._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Create a list of partitioned variables according to the given slicing. (deprecated)")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(" tf.compat.v1.create_partitioned_variables(\n    shape,\n    slicing,\n    initializer,\n    dtype=tf.dtypes.float32,\n    trainable=True,\n    collections=None,\n    name=None,\n    reuse=None\n)\n")])])]),o("p",[e._v("Currently only one dimension of the full variable can be sliced, and the full variable can be reconstructed by the concatenation of the returned list along that dimension.")]),e._v(" "),o("h4",{attrs:{id:"args"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("shape")]),e._v(": List of integers. The "),o("code",[e._v("shape")]),e._v(" of the full variable.")]),e._v(" "),o("li",[o("code",[e._v("slicing")]),e._v(": List of integers. How to partition the variable. Must be of the same length as "),o("code",[e._v("shape")]),e._v(". Each value indicate how many slices to create in the corresponding dimension. Presently only one of the values can be more than 1; that is, the variable can only be sliced along one dimension.\nFor convenience, The requested number of partitions does not have to divide the corresponding dimension evenly. If it does not, the "),o("code",[e._v("shape")]),e._v("s of the partitions are incremented by 1 starting from partition 0 until all slack is absorbed. The adjustment rules may change in the future, but as you can save/restore these variables with different "),o("code",[e._v("slicing")]),e._v(" specifications this should not be a problem.")]),e._v(" "),o("li",[o("code",[e._v("initializer")]),e._v(": A "),o("code",[e._v("Tensor")]),e._v(" of "),o("code",[e._v("shape")]),e._v(" "),o("code",[e._v("shape")]),e._v(" or a variable "),o("code",[e._v("initializer")]),e._v(" function. If a function, it will be called once for each slice, passing the "),o("code",[e._v("shape")]),e._v(" and data type of the slice as parameters. The function must return a tensor with the same "),o("code",[e._v("shape")]),e._v(" as the slice.")]),e._v(" "),o("li",[o("code",[e._v("dtype")]),e._v(": Type of the variables. Ignored if "),o("code",[e._v("initializer")]),e._v(" is a "),o("code",[e._v("Tensor")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("trainable")]),e._v(": If True also add all the variables to the graph collection "),o("code",[e._v("GraphKeys.TRAINABLE_VARIABLES")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("collections")]),e._v(": "),o("code",[e._v("L")]),e._v("i"),o("code",[e._v("s")]),e._v("t of g"),o("code",[e._v("r``a``p``h")]),e._v(" "),o("code",[e._v("collections")]),e._v(" k"),o("code",[e._v("e``y``s")]),e._v(" to "),o("code",[e._v("a")]),e._v("dd t"),o("code",[e._v("h``e")]),e._v(" v"),o("code",[e._v("a``r")]),e._v("i"),o("code",[e._v("a")]),e._v("bl"),o("code",[e._v("e``s")]),e._v(" to"),o("code",[e._v(".")]),e._v(" D"),o("code",[e._v("e")]),e._v("f"),o("code",[e._v("a")]),e._v("ult"),o("code",[e._v("s")]),e._v(" to ["),o("code",[e._v("G``r``a``p``h``K``e``y``s``.``G``L``O``B``A``L``_``V``A``R``I``A``B``L``E``S")]),e._v("]"),o("code",[e._v(".")])]),e._v(" "),o("li",[o("code",[e._v("name")]),e._v(": "),o("code",[e._v("O``p")]),e._v("tion"),o("code",[e._v("a")]),e._v("l "),o("code",[e._v("name")]),e._v(" fo"),o("code",[e._v("r")]),e._v(" t"),o("code",[e._v("h``e")]),e._v(" full v"),o("code",[e._v("a``r")]),e._v("i"),o("code",[e._v("a")]),e._v("bl"),o("code",[e._v("e``.")]),e._v(" D"),o("code",[e._v("e")]),e._v("f"),o("code",[e._v("a")]),e._v("ult"),o("code",[e._v("s")]),e._v(" to "),o("code",[e._v('"PartitionedVariable"')]),e._v(" "),o("code",[e._v("a")]),e._v("nd g"),o("code",[e._v("e")]),e._v("t"),o("code",[e._v("s")]),e._v(" uniquifi"),o("code",[e._v("e")]),e._v("d "),o("code",[e._v("a")]),e._v("utom"),o("code",[e._v("a")]),e._v("tic"),o("code",[e._v("a")]),e._v("ll"),o("code",[e._v("y``.")])]),e._v(" "),o("li",[o("code",[e._v("r``e")]),e._v("u"),o("code",[e._v("s``e")]),e._v(": "),o("code",[e._v("B")]),e._v("ool"),o("code",[e._v("e``a")]),e._v("n o"),o("code",[e._v("r")]),e._v(" "),o("code",[e._v("None")]),e._v("; if "),o("code",[e._v("True")]),e._v(" "),o("code",[e._v("a")]),e._v("nd "),o("code",[e._v("name")]),e._v(" i"),o("code",[e._v("s")]),e._v(" "),o("code",[e._v("s``e")]),e._v("t, it would "),o("code",[e._v("r``e")]),e._v("u"),o("code",[e._v("s``e")]),e._v(" "),o("code",[e._v("p``r``e")]),e._v("viou"),o("code",[e._v("s")]),e._v("l"),o("code",[e._v("y")]),e._v(" c"),o("code",[e._v("r``e``a")]),e._v("t"),o("code",[e._v("e")]),e._v("d v"),o("code",[e._v("a``r")]),e._v("i"),o("code",[e._v("a")]),e._v("bl"),o("code",[e._v("e``s``.")]),e._v(" if "),o("code",[e._v("False")]),e._v(" it will c"),o("code",[e._v("r``e``a")]),e._v("t"),o("code",[e._v("e")]),e._v(" n"),o("code",[e._v("e")]),e._v("w v"),o("code",[e._v("a``r")]),e._v("i"),o("code",[e._v("a")]),e._v("bl"),o("code",[e._v("e``s``.")]),e._v(" if "),o("code",[e._v("None")]),e._v(", it would in"),o("code",[e._v("h``e``r")]),e._v("it t"),o("code",[e._v("h``e")]),e._v(" "),o("code",[e._v("p``a``r``e")]),e._v("nt "),o("code",[e._v("s")]),e._v("co"),o("code",[e._v("p``e")]),e._v(" "),o("code",[e._v("r``e")]),e._v("u"),o("code",[e._v("s``e``.")])])]),e._v(" "),o("h4",{attrs:{id:"returns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),o("p",[e._v("A list of Variables corresponding to the slicing.")]),e._v(" "),o("h4",{attrs:{id:"raises"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ValueError")]),e._v(": If any of the arguments is malformed.")])])])}),[],!1,null,null,null);v.default=a.exports}}]);