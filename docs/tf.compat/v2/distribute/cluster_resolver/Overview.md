用于ClusterResolver的库导入。

This library contains all implementations of ClusterResolvers.ClusterResolvers are a way of specifying cluster information for distributedexecution. Built on top of existing  `ClusterSpec`  framework, ClusterResolversare a way for TensorFlow to communicate with various cluster managementsystems (e.g. GCE, AWS, etc...).

## Class 
[ `class ClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/ClusterResolver): Abstract class for all implementations of ClusterResolvers.

[ `class GCEClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/GCEClusterResolver): ClusterResolver for Google Compute Engine.

[ `class KubernetesClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/KubernetesClusterResolver): ClusterResolver for Kubernetes.

[ `class SimpleClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/SimpleClusterResolver): Simple implementation of ClusterResolver that accepts a ClusterSpec.

[ `class SlurmClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/SlurmClusterResolver): ClusterResolver for system with Slurm workload manager.

[ `class TFConfigClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/TFConfigClusterResolver): Implementation of a ClusterResolver which reads the TF_CONFIG EnvVar.

[ `class TPUClusterResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/TPUClusterResolver): Cluster Resolver for Google Cloud TPUs.

[ `class UnionResolver` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/cluster_resolver/UnionResolver): Performs a union on underlying ClusterResolvers.

