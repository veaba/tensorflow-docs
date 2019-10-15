(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{464:function(e,a,t){"use strict";t.r(a);var s=t(0),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Returns a linear prediction Tensor based on given feature_columns.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" tf.compat.v1.feature_column.linear_model(\n    features,\n    feature_columns,\n    units=1,\n    sparse_combiner='sum',\n    weight_collections=None,\n    trainable=True,\n    cols_to_vars=None\n)\n")])])]),t("p",[e._v("This function generates a weighted sum based on output dimension units. Weighted sum refers to logits in classification problems. It refers to the prediction itself for linear regression problems.")]),e._v(" "),t("p",[e._v("Note on supported columns: linear_model treats categorical columns as indicator_columns. To be specific, assume the input as SparseTensor looks like:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('   shape = [2, 2]\n  {\n      [0, 0]: "a"\n      [1, 0]: "b"\n      [1, 1]: "c"\n  }\n')])])]),t("p",[e._v('linear_model assigns weights for the presence of "a", "b", "c\' implicitly, just like indicator_column, while input_layer explicitly requires wrapping each of categorical columns with an embedding_column or an indicator_column.')]),e._v(" "),t("h4",{attrs:{id:"example-of-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-of-usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Example of usage:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" price = numeric_column('price')\nprice_buckets = bucketized_column(price, boundaries=[0., 10., 100., 1000.])\nkeywords = categorical_column_with_hash_bucket(\"keywords\", 10K)\nkeywords_price = crossed_column('keywords', price_buckets, ...)\ncolumns = [price_buckets, keywords, keywords_price ...]\nfeatures = tf.io.parse_example(..., features=make_parse_example_spec(columns))\nprediction = linear_model(features, columns)\n")])])]),t("p",[e._v("The sparse_combiner argument works as follows For example, for two features represented as the categorical columns:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('   # Feature 1\n\n  shape = [2, 2]\n  {\n      [0, 0]: "a"\n      [0, 1]: "b"\n      [1, 0]: "c"\n  }\n\n  # Feature 2\n\n  shape = [2, 3]\n  {\n      [0, 0]: "d"\n      [1, 0]: "e"\n      [1, 1]: "f"\n      [1, 2]: "f"\n  }\n')])])]),t("p",[e._v('with sparse_combiner as "mean", the linear model outputs consequently are:')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   y_0 = 1.0 / 2.0 * ( w_a + w_b ) + w_d + b\n  y_1 = w_c + 1.0 / 3.0 * ( w_e + 2.0 * w_f ) + b\n")])])]),t("p",[e._v("where y_i is the output, b is the bias, and w_x is the weight assigned to the presence of x in the input features.")]),e._v(" "),t("h4",{attrs:{id:"args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("features")]),e._v(": A mapping from key to tensors. "),t("code",[e._v("_FeatureColumn")]),e._v("s look up via these keys. For example numeric_column('price') will look at 'price' key in this dict. Values are "),t("code",[e._v("Tensor")]),e._v(" or "),t("code",[e._v("SparseTensor")]),e._v(" depending on corresponding "),t("code",[e._v("_FeatureColumn")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("feature_columns")]),e._v(": An iterable containing the FeatureColumns to use as inputs to your model. All items should be instances of classes derived from "),t("code",[e._v("_FeatureColumn")]),e._v("s.")]),e._v(" "),t("li",[t("code",[e._v("units")]),e._v(": An integer, dimensionality of the output space. Default value is 1.")]),e._v(" "),t("li",[t("code",[e._v("sparse_combiner")]),e._v(": A string specifying how to reduce if a categorical column is multivalent. Except "),t("code",[e._v("numeric_column")]),e._v(", almost all columns passed to "),t("code",[e._v("linear_model")]),e._v(' are considered as categorical columns. It combines each categorical column independently. Currently "mean", "sqrtn" and "sum" are supported, with "sum" the default for linear model. "sqrtn" often achieves good accuracy, in particular with bag-of-words columns.\n"sum": do not normalize '),t("code",[e._v("features")]),e._v(' in the column\n"mean": do l1 normalization on '),t("code",[e._v("features")]),e._v(' in the column\n"sqrtn": do l2 normalization on '),t("code",[e._v("features")]),e._v(" in the column")]),e._v(" "),t("li",[e._v('"sum": do not normalize '),t("code",[e._v("features")]),e._v(" in the column")]),e._v(" "),t("li",[e._v('"mean": do l1 normalization on '),t("code",[e._v("features")]),e._v(" in the column")]),e._v(" "),t("li",[e._v('"sqrtn": do l2 normalization on '),t("code",[e._v("features")]),e._v(" in the column")]),e._v(" "),t("li",[t("code",[e._v("weight_collections")]),e._v(": A list of collection names to which the Variable will be added. Note that, variables will also be added to collections "),t("code",[e._v("tf.GraphKeys.GLOBAL_VARIABLES")]),e._v(" and "),t("code",[e._v("ops.GraphKeys.MODEL_VARIABLES")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("trainable")]),e._v(": If "),t("code",[e._v("True")]),e._v(" also add the variable to the graph collection "),t("code",[e._v("GraphKeys.TRAINABLE_VARIABLES")]),e._v(" (see "),t("code",[e._v("tf.Variable")]),e._v(").")]),e._v(" "),t("li",[t("code",[e._v("cols_to_vars")]),e._v(": If not "),t("code",[e._v("None")]),e._v(", must be a dictionary that will be filled with a mapping from "),t("code",[e._v("_FeatureColumn")]),e._v(" to associated list of "),t("code",[e._v("Variable")]),e._v("s. For example, after the call, we might have "),t("code",[e._v("cols_to_vars")]),e._v(" = { _NumericColumn( key='numeric_feature1', shape=(1,): [], 'bias': [], _NumericColumn( key='numeric_feature2', shape=(2,)): []} If a column creates no variables, its value will be an empty list. Note that "),t("code",[e._v("cols_to_vars")]),e._v(" will also contain a string key 'bias' that maps to a list of "),t("code",[e._v("Variable")]),e._v("s.")])]),e._v(" "),t("h4",{attrs:{id:"returns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),t("p",[e._v("A Tensor which represents predictions/logits of a linear model. Its shape is (batch_size, units) and its dtype is float32.")]),e._v(" "),t("h4",{attrs:{id:"raises"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("ValueError")]),e._v(": if an item in "),t("code",[e._v("feature_columns")]),e._v(" is neither a "),t("code",[e._v("_DenseColumn")]),e._v(" nor "),t("code",[e._v("_CategoricalColumn")]),e._v(".")])])])}),[],!1,null,null,null);a.default=o.exports}}]);