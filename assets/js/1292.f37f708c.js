(window.webpackJsonp=window.webpackJsonp||[]).push([[1292],{1481:function(e,t,s){"use strict";s.r(t);var a=s(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Creates hook to stop if metric does not decrease within given max steps.")]),e._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("tf.compat.v1.estimator.experimental.stop_if_no_decrease_hook")])]),e._v(" "),s("li",[s("code",[e._v("tf.compat.v2.estimator.experimental.stop_if_no_decrease_hook")])])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" tf.estimator.experimental.stop_if_no_decrease_hook(\n    estimator,\n    metric_name,\n    max_steps_without_decrease,\n    eval_dir=None,\n    min_steps=0,\n    run_every_secs=60,\n    run_every_steps=None\n)\n")])])]),s("h4",{attrs:{id:"usage-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(' estimator = ...\n# Hook to stop training if loss does not decrease in over 100000 steps.\nhook = early_stopping.stop_if_no_decrease_hook(estimator, "loss", 100000)\ntrain_spec = tf.estimator.TrainSpec(..., hooks=[hook])\ntf.estimator.train_and_evaluate(estimator, train_spec, ...)\n')])])]),s("p",[e._v("Caveat: Current implementation supports early-stopping both training and evaluation in local mode. In distributed mode, training can be stopped but evaluation (where it's a separate job) will indefinitely wait for new model checkpoints to evaluate, so you will need other means to detect and stop it. Early-stopping evaluation in distributed mode requires changes in train_and_evaluate API and will be addressed in a future revision.")]),e._v(" "),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("estimator")]),e._v(": A "),s("code",[e._v("tf.estimator.Estimator")]),e._v(" instance.")]),e._v(" "),s("li",[s("code",[e._v("metric_name")]),e._v(": "),s("code",[e._v("str")]),e._v(', metric to track. "loss", "accuracy", etc.')]),e._v(" "),s("li",[s("code",[e._v("max_steps_without_decrease")]),e._v(": "),s("code",[e._v("int")]),e._v(", maximum number of training steps with no decrease in the given metric.")]),e._v(" "),s("li",[s("code",[e._v("eval_dir")]),e._v(": If set, directory containing summary files with eval metrics. By default, "),s("code",[e._v("estimator")]),e._v("."),s("code",[e._v("eval_dir")]),e._v("() will be used.")]),e._v(" "),s("li",[s("code",[e._v("min_steps")]),e._v(": "),s("code",[e._v("int")]),e._v(", stop is never requested if global step is less than this value. Defaults to 0.")]),e._v(" "),s("li",[s("code",[e._v("run_every_secs")]),e._v(": If specified, calls "),s("code",[e._v("should_stop_fn")]),e._v(" at an "),s("code",[e._v("int")]),e._v("erval of "),s("code",[e._v("run_every_secs")]),e._v(" seconds. Defaults to 60 seconds. Either this or "),s("code",[e._v("run_every_steps")]),e._v(" must be set.")]),e._v(" "),s("li",[s("code",[e._v("run_every_steps")]),e._v(": If specified, calls "),s("code",[e._v("should_stop_fn")]),e._v(" every "),s("code",[e._v("run_every_steps")]),e._v(" steps. Either this or "),s("code",[e._v("run_every_secs")]),e._v(" must be set.")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("An early-stopping hook of type SessionRunHook that periodically checks if the given metric shows no decrease over given maximum number of training steps, and initiates early stopping if true.")])])}),[],!1,null,null,null);t.default=i.exports}}]);