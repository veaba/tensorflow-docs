(window.webpackJsonp=window.webpackJsonp||[]).push([[2329],{2517:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Mel-frequency_cepstrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("MFCCs"),a("OutboundLink")],1),e._v("Computes  of log_mel_spectrograms.")]),e._v(" "),a("h3",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("tf.compat.v1.signal.mfccs_from_log_mel_spectrograms")])]),e._v(" "),a("li",[a("code",[e._v("tf.compat.v2.signal.mfccs_from_log_mel_spectrograms")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.signal.mfccs_from_log_mel_spectrograms(\n    log_mel_spectrograms,\n    name=None\n)\n")])])]),a("p",[e._v("Implemented with GPU-compatible ops and supports gradients.\n"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Mel-frequency_cepstrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mel-Frequency Cepstral Coefficient (MFCC)"),a("OutboundLink")],1),e._v(" calculation consists of taking the DCT-II of a log-magnitude mel-scale spectrogram. HTK's MFCCs use a particular scaling of the DCT-II which is almost orthogonal normalization. We follow this convention.")]),e._v(" "),a("p",[e._v("All num_mel_bins MFCCs are returned and it is up to the caller to select a subset of the MFCCs based on their application. For example, it is typical to only use the first few for speech recognition, as this results in an approximately pitch-invariant representation of the signal.")]),e._v(" "),a("h4",{attrs:{id:"for-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-example","aria-hidden":"true"}},[e._v("#")]),e._v(" For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" sample_rate = 16000.0\n# A Tensor of [batch_size, num_samples] mono PCM samples in the range [-1, 1].\npcm = tf.compat.v1.placeholder(tf.float32, [None, None])\n\n# A 1024-point STFT with frames of 64 ms and 75% overlap.\nstfts = tf.signal.stft(pcm, frame_length=1024, frame_step=256,\n                       fft_length=1024)\nspectrograms = tf.abs(stfts)\n\n# Warp the linear scale spectrograms into the mel-scale.\nnum_spectrogram_bins = stfts.shape[-1].value\nlower_edge_hertz, upper_edge_hertz, num_mel_bins = 80.0, 7600.0, 80\nlinear_to_mel_weight_matrix = tf.signal.linear_to_mel_weight_matrix(\n  num_mel_bins, num_spectrogram_bins, sample_rate, lower_edge_hertz,\n  upper_edge_hertz)\nmel_spectrograms = tf.tensordot(\n  spectrograms, linear_to_mel_weight_matrix, 1)\nmel_spectrograms.set_shape(spectrograms.shape[:-1].concatenate(\n  linear_to_mel_weight_matrix.shape[-1:]))\n\n# Compute a stabilized log to get log-magnitude mel-scale spectrograms.\nlog_mel_spectrograms = tf.math.log(mel_spectrograms + 1e-6)\n\n# Compute MFCCs from log_mel_spectrograms and take the first 13.\nmfccs = tf.signal.mfccs_from_log_mel_spectrograms(\n  log_mel_spectrograms)[..., :13]\n")])])]),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("log_mel_spectrograms")]),e._v(":"),a("code"),e._v("A"),a("code"),e._v("["),a("code",[e._v(".``.``.``,`` ``n``u``m``_``m``e``l``_``b``i``n``s")]),e._v("]"),a("code",[e._v("``float32`` ``Tensor``")]),e._v("of"),a("code",[e._v("``l")]),e._v("og-"),a("code",[e._v("m")]),e._v("ag"),a("code",[e._v("n``i")]),e._v("t"),a("code",[e._v("u")]),e._v("d"),a("code",[e._v("e`` ``m``e``l")]),e._v("-"),a("code",[e._v("s")]),e._v("ca"),a("code",[e._v("l``e`` ``s")]),e._v("p"),a("code",[e._v("e")]),e._v("ctrogra"),a("code",[e._v("m``s``.")])]),e._v(" "),a("li",[a("code",[e._v("n")]),e._v("a"),a("code",[e._v("m``e")]),e._v(":"),a("code"),e._v("A"),a("code",[e._v("n``")]),e._v("opt"),a("code",[e._v("i")]),e._v("o"),a("code",[e._v("n")]),e._v("a"),a("code",[e._v("l`` ``n")]),e._v("a"),a("code",[e._v("m``e``")]),e._v("for"),a("code"),e._v("th"),a("code",[e._v("e``")]),e._v("op"),a("code",[e._v("e")]),e._v("rat"),a("code",[e._v("i")]),e._v("o"),a("code",[e._v("n``.")])])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),a("p",[e._v("A [..., num_mel_bins] float32 Tensor of the MFCCs of log_mel_spectrograms.")]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ValueError")]),e._v(": If "),a("code",[e._v("num_mel_bins")]),e._v(" is not positive.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);