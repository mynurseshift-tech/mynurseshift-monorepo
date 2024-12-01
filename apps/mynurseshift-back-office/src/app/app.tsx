// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthGuard } from '@mynurseshift/core';
import { LoginPage } from './pages/auth/login';
import { DashboardPage } from './pages/dashboard/page';
import { PendingUsersPage } from './pages/users/pending';
import { AdminLayout } from './components/layout/admin-layout';
import { AuthProvider } from './contexts/auth.context';

export function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <Routes>
        {/* Public routes */}
        <Route
          path="/auth/login"
          element={
            <AuthGuard requireAuth={false}>
              <LoginPage />
            </AuthGuard>
          }
        />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <AuthGuard>
              <AdminLayout>
                <Routes>
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/users/pending" element={<PendingUsersPage />} />
                  {/* Les autres routes seront ajoutées ici */}
                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </AdminLayout>
            </AuthGuard>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
