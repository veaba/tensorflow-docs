(window.webpackJsonp=window.webpackJsonp||[]).push([[1264],{1453:function(e,t,s){"use strict";s.r(t);var o=s(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"class-poissonregressionhead"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-poissonregressionhead","aria-hidden":"true"}},[e._v("#")]),e._v(" Class PoissonRegressionHead")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/nn/log_poisson_loss",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.nn.log_poisson_loss"),s("OutboundLink")],1),e._v("Creates a Head for poisson regression using .")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.tensorflow.org/api_docs/python/tf/estimator/RegressionHead",target:"_blank",rel:"noopener noreferrer"}},[e._v("RegressionHead"),s("OutboundLink")],1),e._v("Inherits From:")]),e._v(" "),s("h3",{attrs:{id:"aliases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),s("ul",[s("li",[e._v("Class "),s("code",[e._v("tf.compat.v1.estimator.PoissonRegressionHead")])]),e._v(" "),s("li",[e._v("Class "),s("code",[e._v("tf.compat.v2.estimator.PoissonRegressionHead")])])]),e._v(" "),s("p",[e._v("The loss is the weighted sum over all input dimensions. Namely, if the input labels have shape [batch_size, label_dimension], the loss is the weighted sum over both batch_size and label_dimension.")]),e._v(" "),s("p",[e._v("The head expects logits with shape [D0, D1, ... DN, label_dimension]. In many applications, the shape is [batch_size, label_dimension].")]),e._v(" "),s("p",[e._v("The labels shape must match logits, namely [D0, D1, ... DN, label_dimension]. If label_dimension=1, shape [D0, D1, ... DN] is also supported.")]),e._v(" "),s("p",[e._v("If weight_column is specified, weights must be of shape [D0, D1, ... DN], [D0, D1, ... DN, 1] or [D0, D1, ... DN, label_dimension].")]),e._v(" "),s("p",[e._v("This is implemented as a generalized linear model, see https://en.wikipedia.org/wiki/Generalized_linear_model.")]),e._v(" "),s("p",[e._v("The head can be used with a canned estimator. Example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" my_head = tf.estimator.PoissonRegressionHead()\nmy_estimator = tf.estimator.DNNEstimator(\n    head=my_head,\n    hidden_units=...,\n    feature_columns=...)\n")])])]),s("p",[e._v("It can also be used with a custom model_fn. Example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" def _my_model_fn(features, labels, mode):\n  my_head = tf.estimator.PoissonRegressionHead()\n  logits = tf.keras.Model(...)(features)\n\n  return my_head.create_estimator_spec(\n      features=features,\n      mode=mode,\n      labels=labels,\n      optimizer=tf.keras.optimizers.Adagrad(lr=0.1),\n      logits=logits)\n\nmy_estimator = tf.estimator.Estimator(model_fn=_my_model_fn)\n")])])]),s("h4",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("weight_column")]),e._v(": A string or a "),s("code",[e._v("NumericColumn")]),e._v(" created by "),s("code",[e._v("tf.feature_column.numeric_column")]),e._v(" defining feature column representing weights. It is used to down weight or boost examples during training. It will be multiplied by the loss of the example.")]),e._v(" "),s("li",[s("code",[e._v("label_dimension")]),e._v(":"),s("code"),e._v("Nu"),s("code",[e._v("m``b``e")]),e._v("r"),s("code",[e._v("``o")]),e._v("f"),s("code"),e._v("r"),s("code",[e._v("e")]),e._v("gr"),s("code",[e._v("e``s``s``i``o``n`` ``l``a``b``e``l``s``")]),e._v("p"),s("code",[e._v("e")]),e._v("r"),s("code",[e._v("``e")]),e._v("x"),s("code",[e._v("a``m")]),e._v("p"),s("code",[e._v("l``e")]),e._v("."),s("code"),e._v("T"),s("code",[e._v("h``i``s`` ``i``s`` ``t``h``e`` ``s``i``z``e`` ``o")]),e._v("f"),s("code",[e._v("``t``h``e`` ``l``a``s``t`` ``d``i``m``e``n``s``i``o``n`` ``o")]),e._v("f"),s("code",[e._v("``t``h``e`` ``l``a``b``e``l``s`` ``Tensor``")]),e._v("("),s("code",[e._v("t")]),e._v("yp"),s("code",[e._v("i``c``a``l``l")]),e._v("y"),s("code",[e._v(",`` ``t``h``i``s`` ``h``a``s`` ``s``h``a")]),e._v("p"),s("code",[e._v("e``")]),e._v("["),s("code",[e._v("b``a``t``c``h``_``s``i``z``e``,`` ``label_dimension")]),e._v("]).")]),e._v(" "),s("li",[s("code",[e._v("l``o``s``s``_")]),e._v("r"),s("code",[e._v("e``d")]),e._v("u"),s("code",[e._v("c``t``i``o``n")]),e._v(":"),s("code"),e._v("O"),s("code",[e._v("n``e`` ``o")]),e._v("f"),s("code",[e._v("``t")]),e._v("f."),s("code",[e._v("l``o``s``s``e``s")]),e._v(".R"),s("code",[e._v("e``d")]),e._v("u"),s("code",[e._v("c``t``i``o``n`` ``e")]),e._v("x"),s("code",[e._v("c``e")]),e._v("p"),s("code",[e._v("t`` ``NONE")]),e._v("."),s("code"),e._v("D"),s("code",[e._v("e``c``i``d``e``s`` ``h``o")]),e._v("w"),s("code",[e._v("``t``o``")]),e._v("r"),s("code",[e._v("e``d")]),e._v("u"),s("code",[e._v("c``e`` ``t")]),e._v("r"),s("code",[e._v("a``i``n``i``n")]),e._v("g"),s("code",[e._v("``l``o``s``s`` ``o")]),e._v("v"),s("code",[e._v("e")]),e._v("r"),s("code",[e._v("``b``a``t``c``h`` ``a``n``d`` ``l``a``b``e``l`` ``d``i``m``e``n``s``i``o``n")]),e._v("."),s("code"),e._v("D"),s("code",[e._v("e")]),e._v("f"),s("code",[e._v("a")]),e._v("u"),s("code",[e._v("l``t``s`` ``t``o`` ``SUM_OVER_BATCH_SIZE``,`` ``n``a``m``e``l")]),e._v("y"),s("code"),e._v("w"),s("code",[e._v("e``i")]),e._v("g"),s("code",[e._v("h``t``e``d`` ``s")]),e._v("u"),s("code",[e._v("m`` ``o")]),e._v("f"),s("code",[e._v("``l``o``s``s``e``s`` ``d``i")]),e._v("v"),s("code",[e._v("i``d``e``d`` ``b")]),e._v("y"),s("code",[e._v("``b``a``t``c``h`` ``s``i``z``e``")]),e._v("*"),s("code",[e._v("``label_dimension")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("c``o``m")]),e._v("pu"),s("code",[e._v("t``e``_")]),e._v("fu"),s("code",[e._v("l``l``_``l``o``s``s")]),e._v(":"),s("code"),e._v("W"),s("code",[e._v("h``e``t``h``e")]),e._v("r"),s("code",[e._v("``t``o`` ``i``n``c``l")]),e._v("u"),s("code",[e._v("d``e`` ``t``h``e`` ``c``o``n``s``t``a``n``t`` ``l``o")]),e._v("g("),s("code",[e._v("z")]),e._v("!)"),s("code",[e._v("``t``e")]),e._v("r"),s("code",[e._v("m`` ``i``n`` ``c``o``m")]),e._v("pu"),s("code",[e._v("t``i``n")]),e._v("g"),s("code",[e._v("``t``h``e``")]),e._v("p"),s("code",[e._v("o``i``s``s``o``n`` ``l``o``s``s")]),e._v("."),s("code"),e._v("S"),s("code",[e._v("e``e`` ``t")]),e._v("f."),s("code",[e._v("n``n")]),e._v("."),s("code",[e._v("l``o")]),e._v("g"),s("code",[e._v("_")]),e._v("p"),s("code",[e._v("o``i``s``s``o``n``_``l``o``s``s``")]),e._v("f"),s("code",[e._v("o")]),e._v("r"),s("code",[e._v("``t``h``e``")]),e._v("fu"),s("code",[e._v("l``l`` ``d``o``c")]),e._v("u"),s("code",[e._v("m``e``n``t``a``t``i``o``n")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("n``a``m``e")]),e._v(":"),s("code",[e._v("``n``a``m``e`` ``o")]),e._v("f"),s("code",[e._v("``t``h``e`` ``h``e``a``d")]),e._v("."),s("code"),e._v("If"),s("code"),e._v("pr"),s("code",[e._v("o")]),e._v("v"),s("code",[e._v("i``d``e``d``,`` ``s")]),e._v("u"),s("code",[e._v("m``m``a")]),e._v("ry"),s("code",[e._v("``a``n``d`` ``m``e``t")]),e._v("r"),s("code",[e._v("i``c``s``")]),e._v("k"),s("code",[e._v("e")]),e._v("y"),s("code",[e._v("s``")]),e._v("w"),s("code",[e._v("i``l``l`` ``b``e`` ``s")]),e._v("uff"),s("code",[e._v("i")]),e._v("x"),s("code",[e._v("e``d`` ``b")]),e._v("y"),s("code"),e._v('"/"'),s("code"),e._v("+"),s("code",[e._v("``n``a``m``e")]),e._v("."),s("code"),e._v("A"),s("code",[e._v("l``s``o``")]),e._v("u"),s("code",[e._v("s``e``d`` ``a``s`` ``n``a``m``e``_``s``c``o")]),e._v("p"),s("code",[e._v("e``")]),e._v("w"),s("code",[e._v("h``e``n`` ``c")]),e._v("r"),s("code",[e._v("e``a``t``i``n")]),e._v("g"),s("code",[e._v("``o")]),e._v("p"),s("code",[e._v("s")]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[e._v("#")]),e._v(" "),s("strong",[e._v("init")])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" __init__(\n    label_dimension=1,\n    weight_column=None,\n    loss_reduction=losses_utils.ReductionV2.SUM_OVER_BATCH_SIZE,\n    compute_full_loss=True,\n    name=None\n)\n")])])]),s("p",[e._v("Initialize self. See help(type(self)) for accurate signature.")]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("h3",{attrs:{id:"logits-dimension"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logits-dimension","aria-hidden":"true"}},[e._v("#")]),e._v(" logits_dimension")]),e._v(" "),s("p",[e._v("See base_head.Head for details.")]),e._v(" "),s("h3",{attrs:{id:"loss-reduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loss-reduction","aria-hidden":"true"}},[e._v("#")]),e._v(" loss_reduction")]),e._v(" "),s("p",[e._v("See base_head.Head for details.")]),e._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[e._v("#")]),e._v(" name")]),e._v(" "),s("p",[e._v("See base_head.Head for details.")]),e._v(" "),s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),s("h3",{attrs:{id:"create-estimator-spec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-estimator-spec","aria-hidden":"true"}},[e._v("#")]),e._v(" create_estimator_spec")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/base_head.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" create_estimator_spec(\n    features,\n    mode,\n    logits,\n    labels=None,\n    optimizer=None,\n    trainable_variables=None,\n    train_op_fn=None,\n    update_ops=None,\n    regularization_losses=None\n)\n")])])]),s("p",[e._v("Returns EstimatorSpec that a model_fn can return.")]),e._v(" "),s("p",[e._v("It is recommended to pass all args via name.")]),e._v(" "),s("h4",{attrs:{id:"args-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("features")]),e._v(": Input "),s("code",[e._v("dict")]),e._v(" mapping string feature names to "),s("code",[e._v("Tensor")]),e._v(" or "),s("code",[e._v("SparseTensor")]),e._v(" objects containing the values for that feature in a minibatch. Often to be used to fetch example-weight tensor.")]),e._v(" "),s("li",[s("code",[e._v("mode")]),e._v(": Estimator's "),s("code",[e._v("ModeKeys")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("logits")]),e._v(": Logits "),s("code",[e._v("Tensor")]),e._v(" to be used by the head.")]),e._v(" "),s("li",[s("code",[e._v("labels")]),e._v(": Labels "),s("code",[e._v("Tensor")]),e._v(", or "),s("code",[e._v("dict")]),e._v(" mapping string label names to "),s("code",[e._v("Tensor")]),e._v(" objects of the label values.")]),e._v(" "),s("li",[s("code",[e._v("optimizer")]),e._v(": An "),s("code",[e._v("tf.keras.optimizers.Optimizer")]),e._v(" instance to optimize the "),s("code",[e._v("loss")]),e._v(" in TRAIN "),s("code",[e._v("mode")]),e._v(". Namely, sets train_op = "),s("code",[e._v("optimizer")]),e._v(".get_updates("),s("code",[e._v("loss")]),e._v(", trainable_variables), which updates variables to minimize "),s("code",[e._v("loss")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("trainable_variables")]),e._v(": A list or tuple of "),s("code",[e._v("Variable")]),e._v(" objects to update to minimize "),s("code",[e._v("loss")]),e._v(". In "),s("code",[e._v("Tensor")]),e._v("flow 1.x, by default these are the list of variables collected in the graph under the key "),s("code",[e._v("GraphKeys.TRAINABLE_VARIABLES")]),e._v(". As "),s("code",[e._v("Tensor")]),e._v("flow 2.x doesn't have collections and GraphKeys, "),s("code",[e._v("trainable_variables")]),e._v(" need to be passed explicitly here.")]),e._v(" "),s("li",[s("code",[e._v("train_op_fn")]),e._v(": Function that takes a scalar "),s("code",[e._v("loss")]),e._v(" "),s("code",[e._v("Tensor")]),e._v(" and returns an op to optimize the "),s("code",[e._v("mode")]),e._v("l with the "),s("code",[e._v("loss")]),e._v(" in TRAIN "),s("code",[e._v("mode")]),e._v(". Used if "),s("code",[e._v("optimizer")]),e._v(" is "),s("code",[e._v("None")]),e._v(". Exactly one of "),s("code",[e._v("train_op_fn")]),e._v(" and "),s("code",[e._v("optimizer")]),e._v(" must be set in TRAIN "),s("code",[e._v("mode")]),e._v(". By default, it is "),s("code",[e._v("None")]),e._v(" in other "),s("code",[e._v("mode")]),e._v("s. If you want to optimize "),s("code",[e._v("loss")]),e._v(" yourself, you can pass "),s("code",[e._v("lambda _: tf.no_op")]),e._v("() and then use "),s("code",[e._v("EstimatorSpec.loss")]),e._v(" to compute and apply gradients.")]),e._v(" "),s("li",[s("code",[e._v("update_ops")]),e._v(": A list or tuple of update ops to be run at training time. For example, layers such as BatchNormalization create mean and variance update ops that need to be run at training time. In "),s("code",[e._v("Tensor")]),e._v("flow 1.x, these are thrown into an UPDATE_OPS collection. As "),s("code",[e._v("Tensor")]),e._v("flow 2.x doesn't have collections, "),s("code",[e._v("update_ops")]),e._v(" need to be passed explicitly here.")]),e._v(" "),s("li",[s("code",[e._v("regularization_losses")]),e._v(": A list of additional scalar "),s("code",[e._v("loss")]),e._v("es to be added to the training "),s("code",[e._v("loss")]),e._v(", such as regularization "),s("code",[e._v("loss")]),e._v("es.")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("EstimatorSpec.")]),e._v(" "),s("h3",{attrs:{id:"loss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loss","aria-hidden":"true"}},[e._v("#")]),e._v(" loss")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" loss(\n    labels,\n    logits,\n    features=None,\n    mode=None,\n    regularization_losses=None\n)\n")])])]),s("p",[e._v("Return predictions based on keys. See base_head.Head for details.")]),e._v(" "),s("h3",{attrs:{id:"metrics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metrics","aria-hidden":"true"}},[e._v("#")]),e._v(" metrics")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" metrics(regularization_losses=None)\n")])])]),s("p",[e._v("Creates metrics. See base_head.Head for details.")]),e._v(" "),s("h3",{attrs:{id:"predictions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#predictions","aria-hidden":"true"}},[e._v("#")]),e._v(" predictions")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" predictions(logits)\n")])])]),s("p",[e._v("Return predictions based on keys. See base_head.Head for details.")]),e._v(" "),s("h4",{attrs:{id:"args-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("logits")]),e._v(":"),s("code",[e._v("``logits`` ``Tensor``")]),e._v("w"),s("code",[e._v("i``t``h`` ``s``h``a")]),e._v("p"),s("code",[e._v("e``")]),e._v("["),s("code",[e._v("D``0``,`` ``D``1``,`` ``.``.``.`` ``D``N``,`` ``logits``_``d``i``m``e``n``s``i``o``n")]),e._v("]"),s("code",[e._v(".``")]),e._v("F"),s("code",[e._v("o")]),e._v("r"),s("code",[e._v("``m``a``n")]),e._v("y"),s("code",[e._v("``a")]),e._v("pp"),s("code",[e._v("l``i``c``a``t``i``o``n``s``,`` ``t``h``e`` ``s``h``a")]),e._v("p"),s("code",[e._v("e`` ``i``s``")]),e._v("["),s("code",[e._v("b``a``t``c``h``_``s``i``z``e``,`` ``logits``_``d``i``m``e``n``s``i``o``n")]),e._v("]"),s("code",[e._v(".")])])]),e._v(" "),s("h4",{attrs:{id:"returns-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),s("p",[e._v("A dict of predictions.")]),e._v(" "),s("h3",{attrs:{id:"update-metrics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-metrics","aria-hidden":"true"}},[e._v("#")]),e._v(" update_metrics")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("View source"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" update_metrics(\n    eval_metrics,\n    features,\n    logits,\n    labels,\n    regularization_losses=None\n)\n")])])]),s("p",[e._v("Updates eval metrics. See base_head.Head for details.")])])}),[],!1,null,null,null);t.default=a.exports}}]);