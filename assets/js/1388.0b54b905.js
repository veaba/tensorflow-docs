(window.webpackJsonp=window.webpackJsonp||[]).push([[1388],{1578:function(e,o,_){"use strict";_.r(o);var v=_(0),c=Object(v.a)({},(function(){var e=this,o=e.$createElement,_=e._self._c||o;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("Defined in generated file: python/ops/gen_image_ops.py")]),e._v(" "),_("p",[e._v("Decode and Crop a JPEG-encoded image to a uint8 tensor.")]),e._v(" "),_("h3",{attrs:{id:"aliases"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("tf.compat.v1.image.decode_and_crop_jpeg")])]),e._v(" "),_("li",[_("code",[e._v("tf.compat.v1.io.decode_and_crop_jpeg")])]),e._v(" "),_("li",[_("code",[e._v("tf.compat.v2.image.decode_and_crop_jpeg")])]),e._v(" "),_("li",[_("code",[e._v("tf.compat.v2.io.decode_and_crop_jpeg")])]),e._v(" "),_("li",[_("code",[e._v("tf.image.decode_and_crop_jpeg")])])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v(" tf.io.decode_and_crop_jpeg(\n    contents,\n    crop_window,\n    channels=0,\n    ratio=1,\n    fancy_upscaling=True,\n    try_recover_truncated=False,\n    acceptable_fraction=1,\n    dct_method='',\n    name=None\n)\n")])])]),_("p",[e._v("The attr channels indicates the desired number of color channels for the decoded image.")]),e._v(" "),_("h4",{attrs:{id:"accepted-values-are"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#accepted-values-are","aria-hidden":"true"}},[e._v("#")]),e._v(" Accepted values are:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("0")]),e._v(":"),_("code"),e._v("U"),_("code",[e._v("s")]),e._v("e"),_("code"),e._v("t"),_("code",[e._v("h")]),e._v("e"),_("code"),e._v("n"),_("code",[e._v("u")]),e._v("m"),_("code",[e._v("b")]),e._v("e"),_("code",[e._v("r")]),e._v(" "),_("code",[e._v("o")]),e._v("f"),_("code"),e._v("c"),_("code",[e._v("h")]),e._v("a"),_("code",[e._v("n")]),e._v("n"),_("code",[e._v("e")]),e._v("l"),_("code",[e._v("s")]),e._v(" "),_("code",[e._v("i")]),e._v("n"),_("code"),e._v("t"),_("code",[e._v("h")]),e._v("e"),_("code"),e._v("J"),_("code",[e._v("P")]),e._v("E"),_("code",[e._v("G")]),e._v("-"),_("code",[e._v("e")]),e._v("n"),_("code",[e._v("c")]),e._v("o"),_("code",[e._v("d")]),e._v("e"),_("code",[e._v("d")]),e._v(" "),_("code",[e._v("i")]),e._v("m"),_("code",[e._v("a")]),e._v("g"),_("code",[e._v("e")]),e._v(".``")]),e._v(" "),_("li",[_("code",[e._v("1")]),e._v(":"),_("code"),e._v("o"),_("code",[e._v("u")]),e._v("t"),_("code",[e._v("p")]),e._v("u"),_("code",[e._v("t")]),e._v(" "),_("code",[e._v("a")]),e._v(" "),_("code",[e._v("g")]),e._v("r"),_("code",[e._v("a")]),e._v("y"),_("code",[e._v("s")]),e._v("c"),_("code",[e._v("a")]),e._v("l"),_("code",[e._v("e")]),e._v(" "),_("code",[e._v("i")]),e._v("m"),_("code",[e._v("a")]),e._v("g"),_("code",[e._v("e")]),e._v(".``")]),e._v(" "),_("li",[_("code",[e._v("3")]),e._v(":"),_("code"),e._v("o"),_("code",[e._v("u")]),e._v("t"),_("code",[e._v("p")]),e._v("u"),_("code",[e._v("t")]),e._v(" "),_("code",[e._v("a")]),e._v("n"),_("code"),e._v("R"),_("code",[e._v("G")]),e._v("B"),_("code"),e._v("i"),_("code",[e._v("m")]),e._v("a"),_("code",[e._v("g")]),e._v("e"),_("code",[e._v(".")])])]),e._v(" "),_("p",[e._v("If needed, the JPEG-encoded image is transformed to match the requested number of color channels.")]),e._v(" "),_("p",[e._v("The attr ratio allows downscaling the image by an integer factor during decoding. Allowed values are: 1, 2, 4, and 8. This is much faster than downscaling the image later.")]),e._v(" "),_("p",[e._v("It is equivalent to a combination of decode and crop, but much faster by only decoding partial jpeg image.")]),e._v(" "),_("h4",{attrs:{id:"args"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("contents")]),e._v(": A "),_("code",[e._v("Tensor")]),e._v(" of type "),_("code",[e._v("string")]),e._v(". 0-D. The JPEG-encoded image.")]),e._v(" "),_("li",[_("code",[e._v("crop_window")]),e._v(": A "),_("code",[e._v("Tensor")]),e._v(" of type "),_("code",[e._v("int32")]),e._v(". 1-D. The crop window: [crop_y, crop_x, crop_height, crop_width].")]),e._v(" "),_("li",[_("code",[e._v("channels")]),e._v(": An optional "),_("code",[e._v("int")]),e._v(". Defaults to "),_("code",[e._v("0")]),e._v(". Number of color "),_("code",[e._v("channels")]),e._v(" for the decoded image.")]),e._v(" "),_("li",[_("code",[e._v("ratio")]),e._v(": An optional "),_("code",[e._v("int")]),e._v(". Defaults to "),_("code",[e._v("1")]),e._v(". Downscaling "),_("code",[e._v("ratio")]),e._v(".")]),e._v(" "),_("li",[_("code",[e._v("fancy_upscaling")]),e._v(": An optional "),_("code",[e._v("bool")]),e._v(". Defaults to "),_("code",[e._v("True")]),e._v(". If true use a slower but nicer upscaling of the chroma planes (yuv42"),_("code",[e._v("0")]),e._v("/422 only).")]),e._v(" "),_("li",[_("code",[e._v("try_recover_truncated")]),e._v(": An optional "),_("code",[e._v("bool")]),e._v(". Defaults to "),_("code",[e._v("False")]),e._v(". If true try to recover an image from truncated input.")]),e._v(" "),_("li",[_("code",[e._v("acceptable_fraction")]),e._v(": An optional "),_("code",[e._v("float")]),e._v(". Defaults to "),_("code",[e._v("1")]),e._v(". The minimum required fraction of lines before a truncated input is accepted.")]),e._v(" "),_("li",[_("code",[e._v("dct_method")]),e._v(": An optional "),_("code",[e._v("string")]),e._v(". Defaults to "),_("code",[e._v('""')]),e._v(". "),_("code",[e._v("string")]),e._v(" specifying a h"),_("code",[e._v("int")]),e._v(" about the algorithm used for decompression. Defaults to "),_("code",[e._v('""')]),e._v(' which maps to a system-specific default. Currently valid values are ["INTEGER_FAST", "INTEGER_ACCURATE"]. The h'),_("code",[e._v("int")]),e._v(" may be ignored (e.g., the "),_("code",[e._v("int")]),e._v("ernal jpeg library changes to a version that does not have that specific option.)")]),e._v(" "),_("li",[_("code",[e._v("name")]),e._v(": A "),_("code",[e._v("name")]),e._v(" for the ope"),_("code",[e._v("ratio")]),e._v("n (optional).")])]),e._v(" "),_("h4",{attrs:{id:"returns"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),_("p",[e._v("A Tensor of type uint8.")])])}),[],!1,null,null,null);o.default=c.exports}}]);