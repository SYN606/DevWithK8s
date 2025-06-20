import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Base, ScrollToTop } from "./components";

import { Annotations, CheatSheet, ConfigMaps, DaemonSets, Deployment, Homepage, IngressPage, JobsAndCronJobs, KindClusterConfig, KindClusterInstallation, KubernetesArchitecture, KubernetesIntro, MinikubeCluster, MonolithicVsMicroservices, NamespacesPage, NotFoundPage, PersistentVolume, PersistentVolumeClaim, PodsPage, ReplicaSetVsStatefulSetPage, RollingUpdatesPage, Secrets, ServicesPage, StorageClass, StorageOverview } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Homepage />} />
          <Route path="cheat-sheet" element={<CheatSheet />} />

          {/* basics */}
          <Route path="basics">
            <Route index element={<Navigate to="intro" replace />} />
            <Route path="intro" element={<KubernetesIntro />} />
            <Route path="monolith-vs-microservice" element={<MonolithicVsMicroservices />} />
            <Route path="architecture-of-k8s" element={<KubernetesArchitecture />} />
            <Route path="introduction-to-kind-cluster-and-setup" element={<KindClusterInstallation />} />
          </Route>

          {/* clusters */}
          <Route path="clusters">
            <Route index element={<Navigate to="kind-cluster-config" replace />} />
            <Route path="minikube-clusters" element={<MinikubeCluster />} />
            <Route path="kind-cluster-config" element={<KindClusterConfig />} />
            <Route path="namespaces" element={<NamespacesPage />} />
          </Route>

          {/* workloads */}
          <Route path="workloads">
            <Route index element={<Navigate to="pods" replace />} />
            <Route path="pods" element={<PodsPage />} />
            <Route path="deployment" element={<Deployment />} />
            <Route path="rs-vs-sts" element={<ReplicaSetVsStatefulSetPage />} />
            <Route path="rolling-updates" element={<RollingUpdatesPage />} />
            <Route path="daemonsets" element={<DaemonSets />} />
            <Route path="job&cron-jobs" element={<JobsAndCronJobs />} />
          </Route>

          {/* storage */}
          <Route path="storage">
            <Route index element={<Navigate to="storage-overview" replace />} />
            <Route path="storage-overview" element={<StorageOverview />} />
            <Route path="persistent-volume" element={<PersistentVolume />} />
            <Route path="storage-classes" element={<StorageClass />} />
            <Route path="persistent-volume-claim" element={<PersistentVolumeClaim />} />
          </Route>
          {/* networking */}
          <Route path="networking">
            <Route index element={<Navigate to="services" replace />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="ingress" element={<IngressPage />} />
          </Route>

          {/* configuration */}
          <Route path="configuration">
            <Route index element={<Navigate to="annotations" replace />} />
            <Route path="annotations" element={<Annotations />} />
            <Route path="config-maps" element={<ConfigMaps />} />
            <Route path="secrets" element={<Secrets />} />
          </Route>


          {/* 404 error page  */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
