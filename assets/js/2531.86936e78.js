(window.webpackJsonp=window.webpackJsonp||[]).push([[2531],{2722:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Creates a callable TensorFlow graph from a Python function.")]),e._v(" "),n("h3",{attrs:{id:"aliases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[e._v("#")]),e._v(" Aliases:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("tf.compat.v1.function")])]),e._v(" "),n("li",[n("code",[e._v("tf.compat.v2.function")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" tf.function(\n    func=None,\n    input_signature=None,\n    autograph=True,\n    experimental_autograph_options=None,\n    experimental_relax_shapes=False\n)\n")])])]),n("h3",{attrs:{id:"used-in-the-guide"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the guide:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("U")]),e._v("s"),n("code",[e._v("i")]),e._v("n"),n("code",[e._v("g")]),e._v(" "),n("code",[e._v("t")]),e._v("h"),n("code",[e._v("e")]),e._v(" "),n("code",[e._v("S")]),e._v("a"),n("code",[e._v("v")]),e._v("e"),n("code",[e._v("d")]),e._v("M"),n("code",[e._v("o")]),e._v("d"),n("code",[e._v("e")]),e._v("l"),n("code"),e._v("f"),n("code",[e._v("o")]),e._v("r"),n("code",[e._v("m")]),e._v("a"),n("code",[e._v("t")])])]),e._v(" "),n("h3",{attrs:{id:"used-in-the-tutorials"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#used-in-the-tutorials","aria-hidden":"true"}},[e._v("#")]),e._v(" Used in the tutorials:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("B")]),e._v("e"),n("code",[e._v("t")]),e._v("t"),n("code",[e._v("e")]),e._v("r"),n("code"),e._v("p"),n("code",[e._v("e")]),e._v("r"),n("code",[e._v("f")]),e._v("o"),n("code",[e._v("r")]),e._v("m"),n("code",[e._v("a")]),e._v("n"),n("code",[e._v("c")]),e._v("e"),n("code"),e._v("w"),n("code",[e._v("i")]),e._v("t"),n("code",[e._v("h")]),e._v(" "),n("code",[e._v("t")]),e._v("f"),n("code",[e._v(".")]),e._v("f"),n("code",[e._v("u")]),e._v("n"),n("code",[e._v("c")]),e._v("t"),n("code",[e._v("i")]),e._v("o"),n("code",[e._v("n")])]),e._v(" "),n("li",[n("code",[e._v("N")]),e._v("e"),n("code",[e._v("u")]),e._v("r"),n("code",[e._v("a")]),e._v("l"),n("code"),e._v("s"),n("code",[e._v("t")]),e._v("y"),n("code",[e._v("l")]),e._v("e"),n("code"),e._v("t"),n("code",[e._v("r")]),e._v("a"),n("code",[e._v("n")]),e._v("s"),n("code",[e._v("f")]),e._v("e"),n("code",[e._v("r")])]),e._v(" "),n("li",[n("code",[e._v("P")]),e._v("i"),n("code",[e._v("x")]),e._v("2"),n("code",[e._v("P")]),e._v("i"),n("code",[e._v("x")])]),e._v(" "),n("li",[n("code",[e._v("T")]),e._v("r"),n("code",[e._v("a")]),e._v("n"),n("code",[e._v("s")]),e._v("f"),n("code",[e._v("o")]),e._v("r"),n("code",[e._v("m")]),e._v("e"),n("code",[e._v("r")]),e._v(" "),n("code",[e._v("m")]),e._v("o"),n("code",[e._v("d")]),e._v("e"),n("code",[e._v("l")]),e._v(" "),n("code",[e._v("f")]),e._v("o"),n("code",[e._v("r")]),e._v(" "),n("code",[e._v("l")]),e._v("a"),n("code",[e._v("n")]),e._v("g"),n("code",[e._v("u")]),e._v("a"),n("code",[e._v("g")]),e._v("e"),n("code"),e._v("u"),n("code",[e._v("n")]),e._v("d"),n("code",[e._v("e")]),e._v("r"),n("code",[e._v("s")]),e._v("t"),n("code",[e._v("a")]),e._v("n"),n("code",[e._v("d")]),e._v("i"),n("code",[e._v("n")]),e._v("g``\n"),n("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/Graph",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.Graph"),n("OutboundLink")],1),e._v("function constructs a callable that executes a TensorFlow graph () created by tracing the TensorFlow operations in func. This allows the TensorFlow runtime to apply optimizations and exploit parallelism in the computation defined by func.")])]),e._v(" "),n("p",[e._v("Example Usage")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" def f(x, y):\n  return tf.reduce_mean(tf.multiply(x ** 2, 3) + y)\n\ng = tf.function(f)\n\nx = tf.constant([[2.0, 3.0]])\ny = tf.constant([[3.0, -2.0]])\n\n# `f` and `g` will return the same value, but `g` will be executed as a\n# TensorFlow graph.\nassert f(x, y).numpy() == g(x, y).numpy()\n\n# Tensors and tf.Variables used by the Python function are captured in the\n# graph.\n@tf.function\ndef h():\n  return f(x, y)\n\nassert (h().numpy() == f(x, y).numpy()).all()\n\n# Data-dependent control flow is also captured in the graph. Supported\n# control flow statements include `if`, `for`, `while`, `break`, `continue`,\n# `return`.\n@tf.function\ndef g(x):\n  if tf.reduce_sum(x) > 0:\n    return x * x\n  else:\n    return -x // 2\n\n# print and TensorFlow side effects are supported, but exercise caution when\n# using Python side effects like mutating objects, saving to files, etc.\nl = []\n\n@tf.function\ndef g(x):\n  for i in x:\n    print(i)                              # Works\n    tf.compat.v1.assign(v, i)                       # Works\n    tf.compat.v1.py_func(lambda i: l.append(i))(i)  # Works\n    l.append(i)                           # Caution! Doesn't work.\n")])])]),n("p",[e._v("Note that unlike other TensorFlow operations, we don't convert python numerical inputs to tensors. Moreover, a new graph is generated for each distinct python numerical value, for example calling g(2) and g(3) will generate two new graphs (while only one is generated if you call g(tf.constant(2)) and g(tf.constant(3))). Therefore, python numerical inputs should be restricted to arguments that will have few distinct values, such as hyperparameters like the number of layers in a neural network. This allows TensorFlow to optimize each variant of the neural network.\n"),n("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/Variable",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.Variable"),n("OutboundLink")],1),e._v("Referencing s")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/Variable",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.Variable"),n("OutboundLink")],1),e._v("The Python function func may reference stateful objects (such as ). These are captured as implicit inputs to the callable returned by function. For example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" c = tf.Variable(0)\n\n@tf.function\ndef f(x):\n  c.assign_add(1)\n  return x + tf.compat.v1.to_float(c)\n\nassert int(c) == 0\nassert f(1.0) == 2.0\nassert int(c) == 1\nassert f(1.0) == 3.0\nassert int(c) == 2\n")])])]),n("p",[n("code",[e._v("function")]),e._v(" can be applied to methods of an object. For example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" class Dense(object):\n  def __init__(self):\n    self.W = tf.Variable(tf.compat.v1.glorot_uniform_initializer()((10, 10)))\n    self.b = tf.Variable(tf.zeros(10))\n\n  @tf.function\n  def compute(self, x):\n    return tf.matmul(x, self.W) + self.b\n\nd1 = Dense()\nd2 = Dense()\nx = tf.random.uniform((10, 10))\n# d1 and d2 are using distinct variables\nassert not (d1.compute(x).numpy() == d2.compute(x).numpy()).all()\n")])])]),n("p",[n("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/keras",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.keras"),n("OutboundLink")],1),e._v("Usage with")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/keras/Model",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.keras.Model"),n("OutboundLink")],1),e._v("The call methods of a  subclass can be decorated with function in order to apply graph execution optimizations on it. For example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" class MyModel(tf.keras.Model):\n  def __init__(self, keep_probability=0.2):\n    super(MyModel, self).__init__()\n    self.dense1 = tf.keras.layers.Dense(4)\n    self.dense2 = tf.keras.layers.Dense(5)\n    self.keep_probability = keep_probability\n\n  @tf.function\n  def call(self, inputs, training=True):\n    y = self.dense2(self.dense1(inputs))\n    if training:\n      return tf.nn.dropout(y, self.keep_probability)\n    else:\n      return y\n\nmodel = MyModel()\nmodel(x, training=True)  # executes a graph, with dropout\nmodel(x, training=False) # executes a graph, without dropout\n")])])]),n("p",[e._v("Input Signatures\n"),n("code",[e._v("function")]),e._v(" instantiates a separate graph for every unique set of input shapes and datatypes. For example, the following code snippet will result in three distinct graphs being traced, as each input has a different shape.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" @tf.function\ndef f(x): return tf.add(x, 1.)\n\nscalar = tf.constant(1.0)\nvector = tf.constant([1.0, 1.0])\nmatrix = tf.constant([[3.0]])\n\nf(scalar)\nf(vector)\nf(matrix)\n")])])]),n("p",[n("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/TensorSpec",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.TensorSpec"),n("OutboundLink")],1),e._v('An "input signature" can be optionally provided to function to control the graphs traced. The input signature specifies the shape and type of each Tensor argument to the function using a  object. For example, the following code snippet ensures that a single graph is created where the input Tensor is required to be a floating point tensor with no restrictions on shape.')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" @tf.function(input_signature=[tf.TensorSpec(shape=None, dtype=tf.float32)])\ndef f(x): return tf.add(x, 1.)\n")])])]),n("p",[e._v("When an "),n("code",[e._v("input_signature")]),e._v(" is specified, the callable will convert the inputs to the specified TensorSpecs.\nTracing and staging\nWhen "),n("code",[e._v("autograph")]),e._v(" is "),n("code",[e._v("True")]),e._v(", all Python control flow that depends on "),n("code",[e._v("Tensor")]),e._v(" values is staged into a "),n("code",[e._v("Tensor")]),e._v("Flow graph. When "),n("code",[e._v("autograph")]),e._v(" is "),n("code",[e._v("False")]),e._v(", the function is traced and control flow is not allowed to depend on data.\nNote that "),n("code",[e._v("function")]),e._v(" only stages TensorFlow operations, all Python code that "),n("code",[e._v("func")]),e._v(" executes and does not depend on data will shape the construction of the graph. For example, consider the following:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" import numpy as np\n\ndef add_noise():\n  return tf.eye(5) + np.random.randn(5, 5)\n\ntraced = tf.function(add_noise)\n")])])]),n("p",[n("code",[e._v("add_noise")]),e._v("() will return a different output every time it is invoked. However, "),n("code",[e._v("traced")]),e._v("() will return the same value every time it is called, since a particular random value generated by the "),n("code",[e._v("np.random.randn")]),e._v(" call will be inserted in the "),n("code",[e._v("traced")]),e._v("/staged TensorFlow graph as a constant. In this particular example, replacing "),n("code",[e._v("np.random.randn")]),e._v("(5, 5) with tf.random.normal((5, 5)) will result in the same behavior for "),n("code",[e._v("add_noise")]),e._v("() and "),n("code",[e._v("traced")]),e._v("().\nPython Side-Effects\nA corollary of the previous discussion on tracing is the following: If a Python "),n("code",[e._v("func")]),e._v("tion "),n("code",[e._v("func")]),e._v(" has Python side-effects, then executing "),n("code",[e._v("func")]),e._v(" multiple times may not be semantically equivalent to executing F = tf."),n("code",[e._v("func")]),e._v("tion("),n("code",[e._v("func")]),e._v(") multiple times; this difference is due to the fact that "),n("code",[e._v("func")]),e._v("tion only captures the subgraph of TensorFlow operations that is constructed when "),n("code",[e._v("func")]),e._v(" is invoked to trace a graph.\n"),n("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/compat/v1/py_func",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.compat.v1.py_func"),n("OutboundLink")],1),e._v("The same is true if code with Python side effects is used inside control flow, such as a loop. If your code uses side effects that are not intended to control graph construction, wrap them inside .")]),e._v(" "),n("p",[e._v("Retracing\nA single tf.function object might need to map to multiple computation graphs under the hood. This should be visible only as performance (tracing graphs has a nonzero computational and memory cost) but should not affect the correctness of the program. A traced function should return the same result as it would when run eagerly, assuming no unintended Python side-effects.\n"),n("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/function",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.function"),n("OutboundLink")],1),e._v("Calling a  with tensor arguments of different dtypes should lead to at least one computational graph per distinct set of dtypes. Alternatively, always calling a  with tensor arguments of the same shapes and dtypes and the same non-tensor arguments should not lead to additional retracings of your function.")]),e._v(" "),n("p",[e._v("Other than that, TensorFlow reserves the right to retrace functions as many times as needed, to ensure that traced functions behave as they would when run eagerly and to provide the best end-to-end performance. For example, the behavior of how many traces TensorFlow will do when the function is repeatedly called with different python scalars as arguments is left undefined to allow for future optimizations.\n"),n("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/function",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.function"),n("OutboundLink")],1),e._v("To control the tracing behavior, use the following tools: - different  objects are guaranteed to not share traces; and - specifying a signature or using concrete function objects returned from get_concrete_function() guarantees that only one function graph will be built.")]),e._v(" "),n("h4",{attrs:{id:"args"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#args","aria-hidden":"true"}},[e._v("#")]),e._v(" Args:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("func")]),e._v(": "),n("code",[e._v("func")]),e._v("tion to be compiled. If "),n("code",[e._v("func")]),e._v(" is None, returns a decorator that can be invoked with a single argument - "),n("code",[e._v("func")]),e._v(". The end result is equivalent to providing all the arguments up front. In other words, tf."),n("code",[e._v("func")]),e._v("tion(input_signature=...)("),n("code",[e._v("func")]),e._v(") is equivalent to tf."),n("code",[e._v("func")]),e._v("tion("),n("code",[e._v("func")]),e._v(", input_signature=...). The former can be used to decorate Python "),n("code",[e._v("func")]),e._v("tions, for example: @tf."),n("code",[e._v("func")]),e._v("tion(input_signature=...) def foo(...): ...")])]),e._v(" "),n("h4",{attrs:{id:"returns"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#returns","aria-hidden":"true"}},[e._v("#")]),e._v(" Returns:")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/Tensor",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf.Tensor"),n("OutboundLink")],1),e._v("If func is not None, returns a callable that will execute the compiled function (and return zero or more  objects). If func is None, returns a decorator that, when invoked with a single func argument, returns a callable equivalent to the case above.")]),e._v(" "),n("h4",{attrs:{id:"raises"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#raises","aria-hidden":"true"}},[e._v("#")]),e._v(" Raises:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("TypeError")]),e._v(": If "),n("code",[e._v("input_signature")]),e._v(" is neither "),n("code",[e._v("None")]),e._v(" nor a sequence of "),n("code",[e._v("TensorSpec")]),e._v(" objects.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);