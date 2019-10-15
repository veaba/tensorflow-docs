(window.webpackJsonp=window.webpackJsonp||[]).push([[1337],{1526:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Convert image to dtype, scaling its values if needed.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.compat.v1.image.convert_image_dtype")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.image.convert_image_dtype")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.image.convert_image_dtype(\n    image,\n    dtype,\n    saturate=False,\n    name=None\n)\n")])])]),a("h3",{attrs:{id:"used-in-the-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the guide:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("t")]),e._v("f"),a("code",[e._v(".")]),e._v("d"),a("code",[e._v("a")]),e._v("t"),a("code",[e._v("a")]),e._v(":"),a("code"),e._v("B"),a("code",[e._v("u")]),e._v("i"),a("code",[e._v("l")]),e._v("d"),a("code"),e._v("T"),a("code",[e._v("e")]),e._v("n"),a("code",[e._v("s")]),e._v("o"),a("code",[e._v("r")]),e._v("F"),a("code",[e._v("l")]),e._v("o"),a("code",[e._v("w")]),e._v(" "),a("code",[e._v("i")]),e._v("n"),a("code",[e._v("p")]),e._v("u"),a("code",[e._v("t")]),e._v(" "),a("code",[e._v("p")]),e._v("i"),a("code",[e._v("p")]),e._v("e"),a("code",[e._v("l")]),e._v("i"),a("code",[e._v("n")]),e._v("e"),a("code",[e._v("s")])])]),e._v(" "),a("h3",{attrs:{id:"used-in-the-tutorials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-tutorials","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the tutorials:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("L")]),e._v("o"),a("code",[e._v("a")]),e._v("d"),a("code"),e._v("i"),a("code",[e._v("m")]),e._v("a"),a("code",[e._v("g")]),e._v("e"),a("code",[e._v("s")])]),e._v(" "),a("li",[a("code",[e._v("N")]),e._v("e"),a("code",[e._v("u")]),e._v("r"),a("code",[e._v("a")]),e._v("l"),a("code"),e._v("s"),a("code",[e._v("t")]),e._v("y"),a("code",[e._v("l")]),e._v("e"),a("code"),e._v("t"),a("code",[e._v("r")]),e._v("a"),a("code",[e._v("n")]),e._v("s"),a("code",[e._v("f")]),e._v("e"),a("code",[e._v("r")])])]),e._v(" "),a("p",[e._v("Images that are represented using floating point values are expected to have values in the range [0,1). Image data stored in integer data types are expected to have values in the range [0,MAX], where MAX is the largest positive representable number for the data type.")]),e._v(" "),a("p",[e._v("This op converts between data types, scaling the values appropriately before casting.")]),e._v(" "),a("p",[e._v("Note that converting from floating point inputs to integer types may lead to over/underflow problems. Set saturate to True to avoid such problem in problematic conversions. If enabled, saturation will clip the output into the allowed range before performing a potentially dangerous cast (and only before performing such a cast, i.e., when casting from a floating point to an integer type, and when casting from a signed to an unsigned type; saturate has no effect on casts between floats, or on casts that increase the type's range).")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("image")]),e._v(": An "),a("code",[e._v("image")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("dtype")]),e._v(": A "),a("code",[e._v("DType")]),e._v(" to convert "),a("code",[e._v("image")]),e._v(" to.")]),e._v(" "),a("li",[a("code",[e._v("saturate")]),e._v(": If "),a("code",[e._v("True")]),e._v(", clip the input before casting (if necessary).")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": A "),a("code",[e._v("name")]),e._v(" for this operation (optional).")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("image, converted to dtype.")]),e._v(" "),a("h4",{attrs:{id:"usage-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage Example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" >> import tensorflow as tf\n>> x = tf.random.normal(shape=(256, 256, 3), dtype=tf.float32)\n>> tf.image.convert_image_dtype(x, dtype=tf.float16, saturate=False)\n")])])]),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("AttributeError")]),e._v(": Raises an attribute error when dtype is neither float nor integer")])])])}),[],!1,null,null,null);t.default=s.exports}}]);