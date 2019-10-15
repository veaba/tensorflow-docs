(window.webpackJsonp=window.webpackJsonp||[]).push([[2315],{2503:function(e,_,v){"use strict";v.r(_);var o=v(0),d=Object(o.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("Expands signal's axis dimension into frames of frame_length.")]),e._v(" "),v("h3",{attrs:{id:"aliases"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("tf.compat.v1.signal.frame")])]),e._v(" "),v("li",[v("code",[e._v("tf.compat.v2.signal.frame")])])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v(" tf.signal.frame(\n    signal,\n    frame_length,\n    frame_step,\n    pad_end=False,\n    pad_value=0,\n    axis=-1,\n    name=None\n)\n")])])]),v("p",[e._v("Slides a window of size frame_length over signal's axis dimension with a stride of frame_step, replacing the axis dimension with [frames, frame_length] frames.")]),e._v(" "),v("p",[e._v("If pad_end is True, window positions that are past the end of the axis dimension are padded with pad_value until the window moves fully past the end of the dimension. Otherwise, only window positions that fully overlap the axis dimension are produced.")]),e._v(" "),v("h4",{attrs:{id:"for-example"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#for-example","aria-hidden":"true"}},[e._v("#")]),e._v(" For example:")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v(" pcm = tf.compat.v1.placeholder(tf.float32, [None, 9152])\nframes = tf.signal.frame(pcm, 512, 180)\nmagspec = tf.abs(tf.signal.rfft(frames, [512]))\nimage = tf.expand_dims(magspec, 3)\n")])])]),v("h4",{attrs:{id:"args"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("signal")]),e._v(":"),v("code"),e._v("A"),v("code"),e._v("["),v("code",[e._v(".``.``.``,`` ``s``a``m``p``l``e``s``,`` ``.``.``.")]),e._v("]"),v("code",[e._v("``Tensor``.``")]),e._v("Th"),v("code",[e._v("e``")]),e._v("r"),v("code",[e._v("a")]),e._v("nk"),v("code",[e._v("``a")]),e._v("nd"),v("code"),e._v("di"),v("code",[e._v("m``e")]),e._v("n"),v("code",[e._v("s")]),e._v("ion"),v("code",[e._v("s`` ``m``a")]),e._v("y"),v("code"),e._v("b"),v("code",[e._v("e``")]),e._v("unknown"),v("code",[e._v(".``")]),e._v("R"),v("code",[e._v("a")]),e._v("nk"),v("code",[e._v("``m")]),e._v("u"),v("code",[e._v("s")]),e._v("t"),v("code"),e._v("b"),v("code",[e._v("e`` ``a")]),e._v("t"),v("code",[e._v("``l``e``a``s")]),e._v("t"),v("code"),e._v("1"),v("code",[e._v(".")])]),e._v(" "),v("li",[v("code",[e._v("frame_length")]),e._v(":"),v("code"),e._v("Th"),v("code",[e._v("e``")]),e._v("fr"),v("code",[e._v("a``m``e`` ``l``e")]),e._v("ngth"),v("code"),e._v("in"),v("code",[e._v("``s``a``m``p``l``e``s``.``")]),e._v("An"),v("code"),e._v("int"),v("code",[e._v("e")]),e._v("g"),v("code",[e._v("e")]),e._v("r"),v("code"),e._v("or"),v("code",[e._v("``s")]),e._v("c"),v("code",[e._v("a``l``a")]),e._v("r"),v("code",[e._v("``Tensor``.")])]),e._v(" "),v("li",[v("code",[e._v("frame_step")]),e._v(":"),v("code"),e._v("Th"),v("code",[e._v("e``")]),e._v("fr"),v("code",[e._v("a``m``e``")]),e._v("ho"),v("code",[e._v("p`` ``s")]),e._v("iz"),v("code",[e._v("e``")]),e._v("in"),v("code",[e._v("``s``a``m``p``l``e``s``.``")]),e._v("An"),v("code"),e._v("int"),v("code",[e._v("e")]),e._v("g"),v("code",[e._v("e")]),e._v("r"),v("code"),e._v("or"),v("code",[e._v("``s")]),e._v("c"),v("code",[e._v("a``l``a")]),e._v("r"),v("code",[e._v("``Tensor``.")])]),e._v(" "),v("li",[v("code",[e._v("p``a")]),e._v("d_"),v("code",[e._v("e")]),e._v("nd:"),v("code"),e._v("Wh"),v("code",[e._v("e")]),e._v("th"),v("code",[e._v("e")]),e._v("r"),v("code"),e._v("to"),v("code",[e._v("``p``a")]),e._v("d"),v("code"),e._v("th"),v("code",[e._v("e`` ``e")]),e._v("nd"),v("code"),e._v("of"),v("code",[e._v("``signal``")]),e._v("with"),v("code",[e._v("``p``a")]),e._v("d_v"),v("code",[e._v("a``l")]),e._v("u"),v("code",[e._v("e``.")])]),e._v(" "),v("li",[v("code",[e._v("p``a")]),e._v("d_v"),v("code",[e._v("a``l")]),e._v("u"),v("code",[e._v("e")]),e._v(":"),v("code"),e._v("An"),v("code"),e._v("o"),v("code",[e._v("p")]),e._v("tion"),v("code",[e._v("a``l`` ``s")]),e._v("c"),v("code",[e._v("a``l``a")]),e._v("r"),v("code",[e._v("``Tensor``")]),e._v("to"),v("code"),e._v("u"),v("code",[e._v("s``e``")]),e._v("wh"),v("code",[e._v("e")]),e._v("r"),v("code",[e._v("e``")]),e._v("th"),v("code",[e._v("e``")]),e._v("in"),v("code",[e._v("p")]),e._v("ut"),v("code",[e._v("``signal``")]),e._v("do"),v("code",[e._v("e``s``")]),e._v("not"),v("code",[e._v("``e")]),e._v("xi"),v("code",[e._v("s")]),e._v("t"),v("code"),e._v("wh"),v("code",[e._v("e")]),e._v("n"),v("code",[e._v("``p``a")]),e._v("d_"),v("code",[e._v("e")]),e._v("nd"),v("code"),e._v("i"),v("code",[e._v("s``")]),e._v("Tru"),v("code",[e._v("e``.")])]),e._v(" "),v("li",[v("code",[e._v("a")]),e._v("xi"),v("code",[e._v("s")]),e._v(":"),v("code"),e._v("A"),v("code",[e._v("``s")]),e._v("c"),v("code",[e._v("a``l``a")]),e._v("r"),v("code"),e._v("int"),v("code",[e._v("e")]),e._v("g"),v("code",[e._v("e")]),e._v("r"),v("code",[e._v("``Tensor``")]),e._v("indic"),v("code",[e._v("a")]),e._v("ting"),v("code"),e._v("th"),v("code",[e._v("e`` ``a")]),e._v("xi"),v("code",[e._v("s``")]),e._v("to"),v("code"),e._v("fr"),v("code",[e._v("a``m``e``.``")]),e._v("D"),v("code",[e._v("e")]),e._v("f"),v("code",[e._v("a")]),e._v("u"),v("code",[e._v("l")]),e._v("t"),v("code",[e._v("s``")]),e._v("to"),v("code"),e._v("th"),v("code",[e._v("e`` ``l``a``s")]),e._v("t"),v("code",[e._v("``a")]),e._v("xi"),v("code",[e._v("s``.``")]),e._v("Su"),v("code",[e._v("p``p")]),e._v("ort"),v("code",[e._v("s``")]),e._v("n"),v("code",[e._v("e")]),e._v("g"),v("code",[e._v("a")]),e._v("tiv"),v("code",[e._v("e``")]),e._v("v"),v("code",[e._v("a``l")]),e._v("u"),v("code",[e._v("e``s``")]),e._v("for"),v("code"),e._v("ind"),v("code",[e._v("e")]),e._v("xing"),v("code"),e._v("fro"),v("code",[e._v("m``")]),e._v("th"),v("code",[e._v("e`` ``e")]),e._v("nd"),v("code",[e._v(".")])]),e._v(" "),v("li",[v("code",[e._v("name")]),e._v(":"),v("code"),e._v("An"),v("code"),e._v("o"),v("code",[e._v("p")]),e._v("tion"),v("code",[e._v("a``l`` ``name``")]),e._v("for"),v("code"),e._v("th"),v("code",[e._v("e``")]),e._v("o"),v("code",[e._v("p``e")]),e._v("r"),v("code",[e._v("a")]),e._v("tion"),v("code",[e._v(".")])])]),e._v(" "),v("h4",{attrs:{id:"returns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),v("p",[e._v("A Tensor of frames with shape [..., frames, frame_length, ...].")]),e._v(" "),v("h4",{attrs:{id:"raises"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("ValueError")]),e._v(": If "),v("code",[e._v("frame_length")]),e._v(", "),v("code",[e._v("frame_step")]),e._v(", "),v("code",[e._v("pad_value")]),e._v(", or "),v("code",[e._v("axis")]),e._v(" are not scalar.")])])])}),[],!1,null,null,null);_.default=d.exports}}]);