import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToRoute } from './components/layout/ScrollToRoute'
import { SiteShell } from './components/layout/SiteShell'
import { DeleteAccountPage } from './pages/DeleteAccountPage'
import { HomePage } from './pages/HomePage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfServicePage } from './pages/TermsOfServicePage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToRoute />
      <SiteShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/delete-account" element={<DeleteAccountPage />} />
        </Routes>
      </SiteShell>
    </BrowserRouter>
  )
}

export default App
