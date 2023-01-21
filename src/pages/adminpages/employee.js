import React from "react";
import styles from "./employee.module.css";
import { useState,useEffect } from "react";
import axios from "axios";
export const EditEmployee = () => {
  const [employeeData, setEmployeeData]=useState([]);
     
  useEffect(()=>{
      axios.get("http://localhost:8080/employees").then((response)=>{
          // console.log(response);
          setEmployeeData(response.data);
          console.log("data",employeeData);      
          
      })
  },[])

  return (
    <div className="employee">
      <h1>edit</h1>
      <div class="card shadow-lg bg-body">
                                <h5 class="card-header bg-dark text-light">fddsafdaf</h5>
                                    <div class="card-body bg-danger text-light bg-gradient">
                                        <h5 class="card-title">fadsdfasdfas</h5>
                                        <p class="card-text">Address: fdafadafd</p>
                                        <p class="card-text">Project: afdfadafd | E-mail: affaafs | Supervisor: affasafs | Joining: asffsafas | Salary: sffsaafs</p>
                                        <a href="#" class="btn btn-danger bg-dark text-light">View project </a>
                                    </div>
                            </div><br/>
    </div>
  );
};


export const AddEmployee = () => {
  const [state, setState] = useState({
    file:""
  }

  )
	let formdata = new FormData();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    gender: "Male",
    mobileNumber: 0,
    designation: "",
    projectName: "",
    moduleName: "",
  });
  
  function addEmployee(e) {
  let file = state.file
  let formdata = new FormData()
  formdata.append('file',file)
  formdata.append('userId',employee.username)
	console.log(employee);
    e.preventDefault();
    axios
      .post(`http://localhost:8080/employee/addemployee`, employee)
      .then(() => {
        if(employee.designation == "Manager" || employee.designation == "MANAGER" || employee.designation == "manager"){
          axios({
            url: 'http://localhost:8080/manager/profile-image/add',
            method: "POST",
            data: formdata
          }).then((response) => {
            alert("Manager Added Successfully");
               window.location.reload(true);
            })
        }else{
		axios({
      url: 'http://localhost:8080/employee/profile-image/add',
      method: "POST",
      data: formdata
    }).then((response) => {
      alert("Employee Added Successfully");
         window.location.reload(true);
      })
    }
  })
      .catch((error) => {
        alert("Enter all details");
        //navigate("/");
      });
  }
function handleFile(e){
  let file = e.target.files[0]
  setState({ ...state, file:file })
  
}
  return (
    <div className="employee">
      <div className={styles.addemp}>
        <div className={"card shadow " + styles.cardSetup}>
          <div className={"card-header shadow" + styles.headerCrd}>
            <div className={"text-center " + styles.cartMain}>Add Employee</div>
          </div>

          <div
            className={"card-body shadow" + styles.cardBody}
            data-bs-spy="scroll"
            data-bs-target="#navbar-example"
          >
            <div className="card-text" id="navbar-example"></div>
            <div className="container">
              <form>
			  <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                     Image
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="exampleInputEmail1"
                    required
                    onChange={(e) =>
                      handleFile(e)
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={employee.firstName}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, firstName: e.target.value })
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={employee.lastName}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, lastName: e.target.value })
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={employee.username}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, username: e.target.value })
                    }
                  />
                </div>
				<div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={employee.password}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, password: e.target.value })
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Gender
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
					  value="Male"
					  checked
					  onChange={(e) =>
						setEmployee({ ...employee, gender: e.target.value })
					  }
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
					  value="Female"
					  onChange={(e) =>
						setEmployee({ ...employee, gender: e.target.value })
					  }
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={employee.mobileNumber}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, mobileNumber: e.target.value })
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Designation
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={employee.designation}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, designation: e.target.value })
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Project Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={employee.projectName}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, projectName: e.target.value })
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Module Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    value={employee.moduleName}
                    required
                    onChange={(e) =>
                      setEmployee({ ...employee, moduleName: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-danger"
                  onClick={(e) => {
                      addEmployee(e);
                  }}
                >
                  ADD
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
