(window.webpackJsonp=window.webpackJsonp||[]).push([[933],{1121:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Updates the content of the 'checkpoint' file. (deprecated)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" tf.compat.v1.train.update_checkpoint_state(\n    save_dir,\n    model_checkpoint_path,\n    all_model_checkpoint_paths=None,\n    latest_filename=None,\n    all_model_checkpoint_timestamps=None,\n    last_preserved_timestamp=None\n)\n")])])]),a("p",[e._v("This updates the checkpoint file containing a CheckpointState proto.")]),e._v(" "),a("h4",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("save_dir")]),e._v(": Directory where the model was saved.")]),e._v(" "),a("li",[a("code",[e._v("model_checkpoint_path")]),e._v(": The checkpoint file.")]),e._v(" "),a("li",[a("code",[e._v("all_model_checkpoint_paths")]),e._v(": List of strings. Paths to all not-yet-deleted checkpoints, sorted from oldest to newest. If this is a non-empty list, the last element must be equal to "),a("code",[e._v("model_checkpoint_path")]),e._v(". These paths are also saved in the CheckpointState proto.")]),e._v(" "),a("li",[a("code",[e._v("latest_filename")]),e._v(": Optional name of the checkpoint file. Default to 'checkpoint'.")]),e._v(" "),a("li",[a("code",[e._v("all_model_checkpoint_timestamps")]),e._v(": Optional list of timestamps (floats, seconds since the Epoch) indicating when the checkpoints in "),a("code",[e._v("all_model_checkpoint_paths")]),e._v(" were created.")]),e._v(" "),a("li",[a("code",[e._v("last_preserved_timestamp")]),e._v(": A float, indicating the number of seconds since the Epoch when the last preserved checkpoint was written, e.g. due to a "),a("code",[e._v("keep_checkpoint_every_n_hours")]),e._v(" parameter (see "),a("code",[e._v("tf.contrib.checkpoint.CheckpointManager")]),e._v(" for an implementation).")])]),e._v(" "),a("h4",{attrs:{id:"raises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("RuntimeError")]),e._v(": If any of the model checkpoint paths conflict with the file containing CheckpointSate.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);