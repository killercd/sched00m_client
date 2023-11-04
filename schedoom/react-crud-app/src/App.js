import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProjectList from "./pages/projectlist"
import ProjectCreate from "./pages/projectcreate"
import ProjectEdit from "./pages/projectedit"
import ProjectShow from "./pages/projectshow"
 
function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/"  element={<ProjectList/>} />
          <Route path="/create"  element={<ProjectCreate/>} />
          <Route path="/edit/:id"  element={<ProjectEdit/>} />
          <Route path="/show/:id"  element={<ProjectShow/>} />
      </Routes>
    </Router>
  );
}
 
export default App;