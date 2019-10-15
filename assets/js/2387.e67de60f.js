(window.webpackJsonp=window.webpackJsonp||[]).push([[2387],{2575:function(e,t,s){"use strict";s.r(t);var _=s(0),o=Object(_.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Splits each string into a sequence of code points with start offsets.")]),e._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("tf.compat.v1.strings.unicode_split_with_offsets")])]),e._v(" "),s("li",[s("code",[e._v("tf.compat.v2.strings.unicode_split_with_offsets")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.strings.unicode_split_with_offsets(\n    input,\n    input_encoding,\n    errors='replace',\n    replacement_char=65533,\n    name=None\n)\n")])])]),s("p",[e._v("This op is similar to tf.strings.decode(...), but it also returns the start offset for each character in its respective string. This information can be used to align the characters with the original byte sequence.")]),e._v(" "),s("p",[e._v("Returns a tuple (chars, start_offsets) where:")]),e._v(" "),s("ul",[s("li",[e._v("chars[i1...iN, "),s("code",[e._v("j")]),e._v("] is the substring of input[i1...iN] that encodes its "),s("code",[e._v("j")]),e._v("th character, when decoded using "),s("code",[e._v("input_encoding")]),e._v(".")]),e._v(" "),s("li",[e._v("start_offsets[i1...iN, "),s("code",[e._v("j")]),e._v("] is the start byte offset for the "),s("code",[e._v("j")]),e._v("th character in input[i1...iN], when decoded using "),s("code",[e._v("input_encoding")]),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("input")]),e._v(": An "),s("code",[e._v("N")]),e._v(" dimensional potentially ragged "),s("code",[e._v("string")]),e._v(" tensor with shape ["),s("code",[e._v("D``1``.``.``.``D``N")]),e._v("]"),s("code",[e._v(".")]),e._v(" "),s("code",[e._v("N")]),e._v(" must be statically known"),s("code",[e._v(".")])]),e._v(" "),s("li",[s("code",[e._v("input")]),e._v("_encoding: String name for the unicode encoding that should be used to decode each "),s("code",[e._v("string``.")])]),e._v(" "),s("li",[s("code",[e._v("errors")]),e._v(": Specifies the response when an "),s("code",[e._v("input")]),e._v(" "),s("code",[e._v("string")]),e._v(" can't be converted using the indicated encoding"),s("code",[e._v(".")]),e._v(" One of:\n"),s("code",[e._v("'strict'")]),e._v(": Raise an exception for any illegal sub"),s("code",[e._v("string")]),e._v("s"),s("code",[e._v(".")]),e._v(" "),s("code",[e._v("'replace'")]),e._v(": Replace illegal sub"),s("code",[e._v("string")]),e._v("s with "),s("code",[e._v("replacement_char``.")]),e._v(" "),s("code",[e._v("'ignore'")]),e._v(": Skip illegal sub"),s("code",[e._v("string")]),e._v("s"),s("code",[e._v(".")])]),e._v(" "),s("li",[s("code",[e._v("'strict'")]),e._v(": Raise an exception for any illegal sub"),s("code",[e._v("string")]),e._v("s"),s("code",[e._v(".")])]),e._v(" "),s("li",[s("code",[e._v("'replace'")]),e._v(": Replace illegal sub"),s("code",[e._v("string")]),e._v("s with "),s("code",[e._v("replacement_char``.")])]),e._v(" "),s("li",[s("code",[e._v("'ignore'")]),e._v(": Skip illegal sub"),s("code",[e._v("string")]),e._v("s"),s("code",[e._v(".")])]),e._v(" "),s("li",[s("code",[e._v("replacement_char")]),e._v(": The replacement codepoint to be used in place of invalid sub"),s("code",[e._v("string")]),e._v("s in "),s("code",[e._v("input")]),e._v(" when "),s("code",[e._v("errors")]),e._v("="),s("code",[e._v("'replace'``.")])]),e._v(" "),s("li",[s("code",[e._v("name")]),e._v(": A "),s("code",[e._v("name")]),e._v(" for the operation (optional)"),s("code",[e._v(".")])])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("A tuple of N+1 dimensional tensors (codepoints, start_offsets).")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("codepoints``")]),e._v("i"),s("code",[e._v("s`` ``a``n`` ``int32``")]),e._v("te"),s("code",[e._v("n``s")]),e._v("o"),s("code",[e._v("r``")]),e._v("wit"),s("code",[e._v("h`` ``s``h``a")]),e._v("pe"),s("code"),e._v("["),s("code",[e._v("D``1``.``.``.``D``N``,`` ``(``n``u``m``_``c``h``a``r``s``)")]),e._v("]"),s("code",[e._v(".")])]),e._v(" "),s("li",[s("code",[e._v("offsets``")]),e._v("i"),s("code",[e._v("s`` ``a``n`` ``int64``")]),e._v("te"),s("code",[e._v("n``s")]),e._v("o"),s("code",[e._v("r``")]),e._v("wit"),s("code",[e._v("h`` ``s``h``a")]),e._v("pe"),s("code"),e._v("["),s("code",[e._v("D``1``.``.``.``D``N``,`` ``(``n``u``m``_``c``h``a``r``s``)")]),e._v("]"),s("code",[e._v(".")]),e._v(" "),s("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/Tensor",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.Tensor"),s("OutboundLink")],1),e._v("The returned tensors are s if input is a scalar, or tf.RaggedTensors otherwise.")])]),e._v(" "),s("h4",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" Example:")])])}),[],!1,null,null,null);t.default=o.exports}}]);