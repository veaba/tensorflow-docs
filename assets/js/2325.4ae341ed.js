(window.webpackJsonp=window.webpackJsonp||[]).push([[2325],{2513:function(e,t,n){"use strict";n.r(t);var o=n(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Inverse real-valued fast Fourier transform.")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("tf.compat.v1.signal.irfft")])]),e._v(" "),n("li",[n("code",[e._v("tf.compat.v1.spectral.irfft")])]),e._v(" "),n("li",[n("code",[e._v("tf.compat.v2.signal.irfft")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" tf.signal.irfft(\n    input_tensor,\n    fft_length=None,\n    name=None\n)\n")])])]),n("p",[e._v("Computes the inverse 1-dimensional discrete Fourier transform of a real-valued signal over the inner-most dimension of input.")]),e._v(" "),n("p",[e._v("The inner-most dimension of input is assumed to be the result of RFFT: the fft_length / 2 + 1 unique components of the DFT of a real-valued signal. If fft_length is not provided, it is computed from the size of the inner-most dimension of input (fft_length = 2 * (inner - 1)). If the FFT length used to compute input is odd, it should be provided since it cannot be inferred properly.")]),e._v(" "),n("p",[e._v("Along the axis IRFFT is computed on, if fft_length / 2 + 1 is smaller than the corresponding dimension of input, the dimension is cropped. If it is larger, the dimension is padded with zeros.")]),e._v(" "),n("h4",{attrs:{id:"args"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("input")]),e._v(": A "),n("code",[e._v("Tensor")]),e._v(" of type "),n("code",[e._v("complex64")]),e._v(". A "),n("code",[e._v("complex64")]),e._v(" tensor.")]),e._v(" "),n("li",[n("code",[e._v("fft_length")]),e._v(": A "),n("code",[e._v("Tensor")]),e._v(" of type "),n("code",[e._v("int32")]),e._v(". An "),n("code",[e._v("int32")]),e._v(" tensor of shape [1]. The FFT length.")]),e._v(" "),n("li",[n("code",[e._v("name")]),e._v(": A "),n("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),n("h4",{attrs:{id:"returns"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),n("p",[e._v("A Tensor of type float32.")])])}),[],!1,null,null,null);t.default=i.exports}}]);