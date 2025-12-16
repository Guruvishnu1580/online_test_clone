import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HrLayout from './components/layout/HrLayout'
import HrTable from './components/hr/Hrtable';

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<h1>Welcome to CW HR Login Page</h1>} />
          <Route path="/hr" element={<HrLayout />}>
            <Route index element={<h1>Hr Dashboard Page</h1>} />
            <Route path="users" element={<h1><HrTable/></h1>} /> 
            <Route path="candidates" element={<h1>Candidates Page</h1>} />
            <Route path="questions" element={<h1>Question Management Page</h1>} />
            <Route path="results" element={<h1>Results Page</h1>} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App