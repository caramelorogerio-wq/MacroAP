import { Routes, Route } from "react-router-dom";

import "./styles/dashboard.css";
import "./styles/layout.css";

import MainLayout from "./components/layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import OrganPage from "./pages/OrganPage";
import SpecimenPage from "./pages/SpecimenPage";
import ProtocolPage from "./pages/ProtocolPage";
import ExaminationsPage from "./pages/ExaminationsPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/organs/:systemId"
          element={<OrganPage />}
        />

        <Route
          path="/specimens/:systemId/:organId"
          element={<SpecimenPage />}
        />

        <Route
          path="/protocols/:protocolId"
          element={<ProtocolPage />}
        />

        <Route
          path="/examinations"
          element={<ExaminationsPage />}
        />

        <Route
          path="/examinations/:examinationId"
          element={<ProtocolPage />}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;