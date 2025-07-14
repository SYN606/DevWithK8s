import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Base, ScrollToTop } from "./components";
import {
  Annotations, CheatSheet, ConfigMaps, DaemonSets, Deployment, Homepage,
  HPA,
  IngressPage, JobsAndCronJobs, KindClusterConfig, KindClusterInstallation,
  KubernetesArchitecture, KubernetesIntro, MinikubeCluster,
  MonolithicVsMicroservices, NamespacesPage, NodeAffinity, NotFoundPage,
  PersistentVolume, PersistentVolumeClaim, PodsPage,
  Probes,
  ReplicaSetVsStatefulSetPage, RollingUpdatesPage, Secrets,
  ServicesPage, StorageClass, StorageOverview,
  TaintsTolerations,
  VPA
} from "./pages";


const basicRoutes = [
  { path: "intro", element: <KubernetesIntro /> },
  { path: "monolith-vs-microservice", element: <MonolithicVsMicroservices /> },
  { path: "architecture-of-k8s", element: <KubernetesArchitecture /> },
  { path: "introduction-to-kind-cluster-and-setup", element: <KindClusterInstallation /> }
];

const clusterRoutes = [
  { path: "minikube-clusters", element: <MinikubeCluster /> },
  { path: "kind-cluster-config", element: <KindClusterConfig /> },
  { path: "namespaces", element: <NamespacesPage /> }
];

const workloadRoutes = [
  { path: "pods", element: <PodsPage /> },
  { path: "deployment", element: <Deployment /> },
  { path: "rs-vs-sts", element: <ReplicaSetVsStatefulSetPage /> },
  { path: "rolling-updates", element: <RollingUpdatesPage /> },
  { path: "daemonsets", element: <DaemonSets /> },
  { path: "job&cron-jobs", element: <JobsAndCronJobs /> }
];

const storageRoutes = [
  { path: "storage-overview", element: <StorageOverview /> },
  { path: "persistent-volume", element: <PersistentVolume /> },
  { path: "storage-classes", element: <StorageClass /> },
  { path: "persistent-volume-claim", element: <PersistentVolumeClaim /> }
];

const networkingRoutes = [
  { path: "services", element: <ServicesPage /> },
  { path: "ingress", element: <IngressPage /> }
];

const configRoutes = [
  { path: "annotations", element: <Annotations /> },
  { path: "config-maps", element: <ConfigMaps /> },
  { path: "secrets", element: <Secrets /> }
];

const scalingAndSchedulingRoutes = [
  { path: "probes", element: <Probes /> },
  { path: "taints-and-tolerations", element: <TaintsTolerations /> },
  { path: "HPA", element: <HPA /> },
  { path: "VPA", element: <VPA /> },
  { path: "node-affinity", element: <NodeAffinity /> },
]

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Homepage />} />
            <Route path="cheat-sheet" element={<CheatSheet />} />

            {/* Grouped Routes */}
            <Route path="basics">
              <Route index element={<Navigate to="intro" replace />} />
              {basicRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>

            <Route path="clusters">
              <Route index element={<Navigate to="kind-cluster-config" replace />} />
              {clusterRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>

            <Route path="workloads">
              <Route index element={<Navigate to="pods" replace />} />
              {workloadRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>

            <Route path="storage">
              <Route index element={<Navigate to="storage-overview" replace />} />
              {storageRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>

            <Route path="networking">
              <Route index element={<Navigate to="services" replace />} />
              {networkingRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>

            <Route path="configuration">
              <Route index element={<Navigate to="annotations" replace />} />
              {configRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>

            <Route path="scaling-and-scheduling">
              <Route index element={<Navigate to="probes" replace />} />
              {scalingAndSchedulingRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
