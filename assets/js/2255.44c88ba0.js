(window.webpackJsonp=window.webpackJsonp||[]).push([[2255],{2443:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Defined in generated file: python/ops/gen_array_ops.py")]),e._v(" "),a("p",[e._v("Dequantize the 'input' tensor into a float Tensor.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.compat.v1.dequantize")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v1.quantization.dequantize")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.quantization.dequantize")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.quantization.dequantize(\n    input,\n    min_range,\n    max_range,\n    mode='MIN_COMBINED',\n    name=None\n)\n")])])]),a("p",[e._v("[min_range, max_range] are scalar floats that specify the range for the 'input' data. The 'mode' attribute controls exactly which calculations are used to convert the float values to their quantized equivalents.")]),e._v(" "),a("p",[e._v("In 'MIN_COMBINED' mode, each value of the tensor will undergo the following:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" if T == qint8: in[i] += (range(T) + 1)/ 2.0\nout[i] = min_range + (in[i]* (max_range - min_range) / range(T))\n")])])]),a("p",[e._v("here range(T) = numeric_limits"),a("T",[e._v("::max() - numeric_limits"),a("T",[e._v("::min()")])],1)],1),e._v(" "),a("p",[e._v("MIN_COMBINED Mode Example")]),e._v(" "),a("p",[e._v("If the input comes from a QuantizedRelu6, the output type is quint8 (range of 0-255) but the possible range of QuantizedRelu6 is 0-6. The min_range and max_range values are therefore 0.0 and 6.0. Dequantize on quint8 will take each value, cast to float, and multiply by 6 / 255. Note that if quantizedtype is qint8, the operation will additionally add each value by 128 prior to casting.")]),e._v(" "),a("p",[e._v("If the mode is 'MIN_FIRST', then this approach is used:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" num_discrete_values = 1 << (# of bits in T)\nrange_adjust = num_discrete_values / (num_discrete_values - 1)\nrange = (range_max - range_min) * range_adjust\nrange_scale = range / num_discrete_values\nconst double offset_input = static_cast<double>(input) - lowest_quantized;\nresult = range_min + ((input - numeric_limits<T>::min()) * range_scale)\n")])])]),a("p",[e._v("SCALED mode Example")]),e._v(" "),a("p",[e._v("SCALED mode matches the quantization approach used in QuantizeAndDequantize{V2|V3}.")]),e._v(" "),a("p",[e._v("If the mode is SCALED, we do not use the full range of the output type, choosing to elide the lowest possible value for symmetry (e.g., output range is -127 to 127, not -128 to 127 for signed 8 bit quantization), so that 0.0 maps to 0.")]),e._v(" "),a("p",[e._v("We first find the range of values in our tensor. The range we use is always centered on 0, so we find m such that")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   m = max(abs(input_min), abs(input_max))\n")])])]),a("p",[e._v("Our input tensor range is then [-m, m].")]),e._v(" "),a("p",[e._v("Next, we choose our fixed-point quantization buckets, [min_fixed, max_fixed]. If T is signed, this is")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   num_bits = sizeof(T) * 8\n  [min_fixed, max_fixed] =\n      [-(1 << (num_bits - 1) - 1), (1 << (num_bits - 1)) - 1]\n")])])]),a("p",[e._v("Otherwise, if T is unsigned, the fixed-point range is")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   [min_fixed, max_fixed] = [0, (1 << num_bits) - 1]\n")])])]),a("p",[e._v("From this we compute our scaling factor, s:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   s = (2 * m) / (max_fixed - min_fixed)\n")])])]),a("p",[e._v("Now we can dequantize the elements of our tensor:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" result = input * s\n")])])]),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("input")]),e._v(": A "),a("code",[e._v("Tensor")]),e._v(". Must be one of the following types: "),a("code",[e._v("qint8")]),e._v(", "),a("code",[e._v("quint8")]),e._v(", "),a("code",[e._v("qint32")]),e._v(", "),a("code",[e._v("qint16")]),e._v(", "),a("code",[e._v("quint16")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("min_range")]),e._v(": A "),a("code",[e._v("Tensor")]),e._v(" of type "),a("code",[e._v("float32")]),e._v(". The minimum scalar value possibly produced for the "),a("code",[e._v("input")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("max_range")]),e._v(": A "),a("code",[e._v("Tensor")]),e._v(" of type "),a("code",[e._v("float32")]),e._v(". The maximum scalar value possibly produced for the "),a("code",[e._v("input")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("mode")]),e._v(": An optional "),a("code",[e._v("string")]),e._v(" from: "),a("code",[e._v('"MIN_COMBINED", "MIN_FIRST", "SCALED"')]),e._v(". Defaults to "),a("code",[e._v('"MIN_COMBINED"')]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("name")]),e._v(": A "),a("code",[e._v("name")]),e._v(" for the operation (optional).")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A Tensor of type float32.")])])}),[],!1,null,null,null);t.default=s.exports}}]);