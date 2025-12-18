import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import HrLayout from '../components/layout/HrLayout'
import UserManagement from '../pages/hr/UserManagement'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<h1>Welcome to CW HR Login Page</h1>} />
           <Route path="/hr" element={<HrLayout />}>
               <Route index element={<h1>Hr Dashboard Page</h1>} />
               <Route path="users" element={<UserManagement/>} /> 
               <Route path="candidates" element={<h1>Candidates Page</h1>} />
               <Route path="questions" element={<h1>Question Management Page</h1>} />
               <Route path="results" element={<h1>Results Page</h1>} />
          </Route>
          <Route path="/test" element={<h1>Candidate Test Page</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes