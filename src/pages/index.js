import Homepage from "./Homepage";
import CheatSheet from "./CheatSheet";

// basics
import KubernetesIntro from "./basics/Intro";
import KubernetesArchitecture from "./basics/Architecture";
import MonolithicVsMicroservices from "./basics/Monolithic-vs-Microservices";
import KindClusterInstallation from "./basics/Kind-cluster-installation";

// clusters
import NamespacesPage from "./clusters/Namespaces";
import MinikubeCluster from "./clusters/MinikubeCluster";
import KindClusterConfig from "./clusters/KindClusterConfig";

// workloads
import PodsPage from "./workloads/Pods";
import Deployment from "./workloads/Deployment";
import ReplicaSetVsStatefulSetPage from "./workloads/ReplicaSetVsStatefulSetPage";
import RollingUpdatesPage from "./workloads/RollingUpdatesPage";
import DaemonSets from "./workloads/DaemonSets";
import JobsAndCronJobs from "./workloads/JobsAndCronJobs";

// storage
import PersistentVolume from "./storage/PersistentVolume";
import PersistentVolumeClaim from "./storage/PersistentVolumeClaim";
import StorageClass from "./storage/StorageClass";
import StorageOverview from "./storage/StorageOverview";

// networking
import ServicesPage from "./networking/Services";
import IngressPage from "./networking/Ingress";

// configuration
import Secrets from "./configuration/Secrets";
import Annotations from "./configuration/Annotations";
import ConfigMaps from "./configuration/ConfigMaps";

// sc and sch
import HPA from "./sc-and-sch/HPA";
import VPA from "./sc-and-sch/VPA";
import NodeAffinity from "./sc-and-sch/NodeAffinity";
import Probes from "./sc-and-sch/Probes";
import TaintsTolerations from "./sc-and-sch/TaintsAndTolerants";

// error page
import NotFoundPage from "./ErrorPage";

export {
    Homepage,
    CheatSheet,
    // basics
    KubernetesIntro, KubernetesArchitecture, MonolithicVsMicroservices, KindClusterInstallation,
    // Clusters
    NamespacesPage, MinikubeCluster, KindClusterConfig,
    // workloads
    PodsPage, Deployment, ReplicaSetVsStatefulSetPage, RollingUpdatesPage, DaemonSets, JobsAndCronJobs,
    // storage
    PersistentVolume, PersistentVolumeClaim, StorageClass, StorageOverview,
    // Networking
    ServicesPage, IngressPage,
    //configuration
    Secrets, Annotations, ConfigMaps,
    // sc and sch
    HPA, VPA, NodeAffinity, Probes, TaintsTolerations,
    // notfound
    NotFoundPage

}