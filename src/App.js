import "./App.css";
import Sidebar from "./components/employeeSidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EditAnnouncements } from "./pages/adminpages/Announcement";
import { AddEmployee, EditEmployee } from "./pages/adminpages/employee";
import { AddProject, EditProject } from "./pages/adminpages/project";
import { AddStakeHolder, EditStakeHolder } from "./pages/adminpages/stakeholder";
import { EditNewsFeed } from "./pages/adminpages/newsFeed";
import { AddModule } from "./pages/adminpages/module";
import AllProjects from "./pages/employeepages/project/allProjects";
import BCP from "./pages/employeepages/BCP";
import IMPolicy from "./pages/employeepages/IMPolicy";
import CyberSecurityPolicy from "./pages/employeepages/CyberSecurityPolicy";
import Products from "./pages/employeepages/Products";
import AllEmployees from "./pages/employeepages/employee/allEmployees";
import EmployeeProfile from "./pages/employeepages/employee/employeeProfile";
import NewsFeed from "./pages/employeepages/newsfeed/NewsFeed";
import Project from "./pages/employeepages/project/Project";
import Login from "./pages/login"
function App() {
  return (
    
    <Router>
      {/* <Sidebar /> */}
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
                
        <Route path ="/" element={<Login/>}></Route>
        <Route path ="/products" element={<Products/>}></Route>
        <Route path="/bcp" element={<BCP />}></Route>
        <Route path="/csp" element={<CyberSecurityPolicy />}></Route>
        <Route path="/imp" element={<IMPolicy />}></Route>
        <Route path="/:user/:id" element={<EmployeeProfile />}></Route>
        <Route path="/:id" element={<Project />}></Route>

        <Route path="/newsfeed" element={<NewsFeed />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/employees" element={<AllEmployees />} />



        {/* <Route path="/edit/announcements" element={<EditAnnouncements />} /> */}
        {/* <Route path="/edit/newsfeed" element={<EditNewsFeed />} /> */}
        {/* <Route path="/edit/employee" element={<EditEmployee />} /> */}
        <Route path="/add/employee" element={<AddEmployee />} />
        {/* <Route path="/edit/stakeholder" element={<EditStakeHolder />} /> */}
        <Route path="/add/stakeholder" element={<AddStakeHolder />} />
        <Route path="/add/project" element={<AddProject />} />
        <Route path="/add/module" element={<AddModule />} />
        {/* <Route path="/edit/project" element={<EditProject />} /> */}



      </Routes>
    </Router>
  );
}

export default App;
