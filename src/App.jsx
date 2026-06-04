import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import GermanyWork from './pages/GermanyWork'
import GermanyEducation from './pages/GermanyEducation'
import AustraliaWork from './pages/AustraliaWork'
import AustraliaEducation from './pages/AustraliaEducation'
import ClinicsTrivandrum from './pages/ClinicsTrivandrum'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="/germany/work" replace />} />
        <Route path="germany/work" element={<GermanyWork />} />
        <Route path="germany/education" element={<GermanyEducation />} />
        <Route path="australia/work" element={<AustraliaWork />} />
        <Route path="australia/education" element={<AustraliaEducation />} />
        <Route path="clinics-trivandrum" element={<ClinicsTrivandrum />} />
      </Route>
    </Routes>
  )
}
