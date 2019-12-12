Public API for tf.io namespace.

## Modules
[ `gfile` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v2/io/gfile) module: Public API for tf.io.gfile namespace.

## Classes
[ `class FixedLenFeature` ](https://tensorflow.google.cn/api_docs/python/tf/io/FixedLenFeature): Configuration for parsing a fixed-length input feature.

[ `class FixedLenSequenceFeature` ](https://tensorflow.google.cn/api_docs/python/tf/io/FixedLenSequenceFeature): Configuration for parsing a variable-length input feature into a  `Tensor` .

[ `class SparseFeature` ](https://tensorflow.google.cn/api_docs/python/tf/io/SparseFeature): Configuration for parsing a sparse input feature from an  `Example` .

[ `class TFRecordOptions` ](https://tensorflow.google.cn/api_docs/python/tf/io/TFRecordOptions): Options used for manipulating TFRecord files.

[ `class TFRecordWriter` ](https://tensorflow.google.cn/api_docs/python/tf/io/TFRecordWriter): A class to write records to a TFRecords file.

[ `class VarLenFeature` ](https://tensorflow.google.cn/api_docs/python/tf/io/VarLenFeature): Configuration for parsing a variable-length input feature.

## Functions
[ `decode_and_crop_jpeg(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_and_crop_jpeg): Decode and Crop a JPEG-encoded image to a uint8 tensor.

[ `decode_base64(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_base64): Decode web-safe base64-encoded strings.

[ `decode_bmp(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_bmp): Decode the first frame of a BMP-encoded image to a uint8 tensor.

[ `decode_compressed(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_compressed): Decompress strings.

[ `decode_csv(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_csv): Convert CSV records to tensors. Each column maps to one tensor.

[ `decode_gif(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_gif): Decode the frame(s) of a GIF-encoded image to a uint8 tensor.

[ `decode_image(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_image): Function for  `decode_bmp` ,  `decode_gif` ,  `decode_jpeg` , and  `decode_png` .

[ `decode_jpeg(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_jpeg): Decode a JPEG-encoded image to a uint8 tensor.

[ `decode_json_example(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_json_example): Convert JSON-encoded Example records to binary protocol buffer strings.

[ `decode_png(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_png): Decode a PNG-encoded image to a uint8 or uint16 tensor.

[ `decode_proto(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_proto): The op extracts fields from a serialized protocol buffers message into tensors.

[ `decode_raw(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/decode_raw): Convert raw byte strings into tensors.

[ `deserialize_many_sparse(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/deserialize_many_sparse): Deserialize and concatenate  `SparseTensors`  from a serialized minibatch.

[ `encode_base64(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/encode_base64): Encode strings into web-safe base64 format.

[ `encode_jpeg(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/encode_jpeg): JPEG-encode an image.

[ `encode_proto(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/encode_proto): The op serializes protobuf messages provided in the input tensors.

[ `extract_jpeg_shape(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/extract_jpeg_shape): Extract the shape information of a JPEG-encoded image.

[ `is_jpeg(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/is_jpeg): Convenience function to check if the 'contents' encodes a JPEG image.

[ `match_filenames_once(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/match_filenames_once): Save the list of files matching pattern, so it is only computed once.

[ `matching_files(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/matching_files): Returns the set of files matching one or more glob patterns.

[ `parse_example(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/parse_example): Parses  `Example`  protos into a  `dict`  of tensors.

[ `parse_sequence_example(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/parse_sequence_example): Parses a batch of  `SequenceExample`  protos.

[ `parse_single_example(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/parse_single_example): Parses a single  `Example`  proto.

[ `parse_single_sequence_example(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/parse_single_sequence_example): Parses a single  `SequenceExample`  proto.

[ `parse_tensor(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/parse_tensor): Transforms a serialized tensorflow.TensorProto proto into a Tensor.

[ `read_file(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/read_file): Reads and outputs the entire contents of the input filename.

[ `serialize_many_sparse(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/serialize_many_sparse): Serialize  `N` -minibatch  `SparseTensor`  into an  `[N, 3]`   `Tensor` .

[ `serialize_sparse(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/serialize_sparse): Serialize a  `SparseTensor`  into a 3-vector (1-D  `Tensor` ) object.

[ `serialize_tensor(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/serialize_tensor): Transforms a Tensor into a serialized TensorProto proto.

[ `write_file(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/write_file): Writes contents to the file at input filename. Creates file and recursively

[ `write_graph(...)` ](https://tensorflow.google.cn/api_docs/python/tf/io/write_graph): Writes a graph proto to a file.

