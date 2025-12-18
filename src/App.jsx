import React, { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'  
import './App.css'

function App() {
    // TEMP TOKEN FOR DEVELOPMENT (REMOVE AFTER LOGIN)
   useEffect(() => {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY2MDc2NDY2LCJpYXQiOjE3NjYwNDc2NjYsImp0aSI6IjkzYWI2YjAzYWIzNzQ3NzVhZTBiMTAwNDg0NGFmYmE5IiwidXNlcl9pZCI6IjIifQ.x16mvum1m-dzqd7K-eE-vGEhMBONiS4tOtDFP8iakYI");
    }
  }, []);
  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App