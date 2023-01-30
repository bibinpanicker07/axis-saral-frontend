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

import Products from "./pages/employeepages/products/Products";
import AllEmployees from "./pages/employeepages/employee/allEmployees";
import EmployeeProfile from "./pages/employeepages/employee/employeeProfile";
import NewsFeed from "./pages/employeepages/newsfeed/NewsFeed";
import Project from "./pages/employeepages/project/Project";
import Login from "./pages/login/login"
import YourProfile from "./pages/employeepages/yourProfile/YourProfile";
import ProtectedRoutes from "./InProtectedRoutes";
import AllPolicies from "./pages/employeepages/policies/AllPolicies";
import DepartmentList from "./pages/employeepages/employee/departmentList";

import Accounts from "./pages/employeepages/employee/Products/Accounts"
import Cards from "./pages/employeepages/employee/Products/Cards"
import Deposit from "./pages/employeepages/employee/Products/Deposit"
import Loan from "./pages/employeepages/employee/Products/Loan"

import CarLoan from "./pages/employeepages/employee/SubProducts/CarLoan"
import CreditCard from "./pages/employeepages/employee/SubProducts/CreditCard"
import CurrentAccount from "./pages/employeepages/employee/SubProducts/CurrentAccount"
import DebitCard from "./pages/employeepages/employee/SubProducts/DebitCard"
import FD from "./pages/employeepages/employee/SubProducts/FD"
import FixedDeposit from "./pages/employeepages/employee/SubProducts/FixedDeposit"
import HomeLoan from "./pages/employeepages/employee/SubProducts/HomeLoan"
import PersonalBusiness from "./pages/employeepages/employee/SubProducts/PersonalBusiness"
import RecurrentDeposit from "./pages/employeepages/employee/SubProducts/RecurrentDeposit"
import SalaryAccount from "./pages/employeepages/employee/SubProducts/SalaryAccount"
import SavingAccount from "./pages/employeepages/employee/SubProducts/SavingAccount"
import Trans from "./pages/employeepages/employee/SubProducts/Trans"
import Center from "./pages/employeepages/employee/Products/Center";

function App() {
  
 
  return (
    
    <Router>
      {/* <Sidebar /> */}
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
                
        <Route path ="/" element={<Login/>}></Route>


        <Route element={<ProtectedRoutes />}>
        <Route path ="/products" element={<Center/>}></Route>

        <Route path="/Accounts" element={<Accounts/>}></Route>
          <Route path="/SavingAccount" element={<SavingAccount/>}></Route>
          <Route path="/CurrentAccount" element={<CurrentAccount/>}></Route>
          <Route path="/SalaryAccount" element={<SalaryAccount/>}></Route>

          <Route path="/Loan" element={<Loan/>}></Route>
          <Route path="/HomeLoan" element={<HomeLoan/>}></Route>
          <Route path="/PersonalBusiness" element={<PersonalBusiness/>}></Route>
          <Route path="/CarLoan" element={<CarLoan/>}></Route>

          <Route path="/Deposit" element={<Deposit/>}></Route>
          <Route path="/FD" element={<FD/>}></Route>
          <Route path="/FixedDeposit" element={<FixedDeposit/>}></Route>
          <Route path="/RecurrentDeposit" element={<RecurrentDeposit/>}></Route>

          <Route path="/Cards" element={<Cards/>}></Route>
          <Route path="/DebitCard" element={<DebitCard/>}></Route>
          <Route path="/CreditCard" element={<CreditCard/>}></Route>
          <Route path="/Trans" element={<Trans/>}></Route>
    







        <Route path="/allPolicies" element={<AllPolicies />} />




        <Route path="/:user/:id" element={<EmployeeProfile />}></Route>
        <Route path="/:id" element={<Project />}></Route>

        <Route path="/newsfeed" element={<NewsFeed />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/employees" element={<DepartmentList />} />

        <Route path="/yourprofile" element={<YourProfile />} />

        {/* <Route path="/edit/announcements" element={<EditAnnouncements />} /> */}
        {/* <Route path="/edit/newsfeed" element={<EditNewsFeed />} /> */}
        {/* <Route path="/edit/employee" element={<EditEmployee />} /> */}
        <Route path="/add/employee" element={<AddEmployee />} />
        {/* <Route path="/edit/stakeholder" element={<EditStakeHolder />} /> */}
        <Route path="/add/stakeholder" element={<AddStakeHolder />} />
        <Route path="/add/project" element={<AddProject />} />
        <Route path="/add/module" element={<AddModule />} />
        {/* <Route path="/edit/project" element={<EditProject />} /> */}
        
        </Route>


      </Routes>
    </Router>

    
  );


}

export default App;
