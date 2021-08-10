import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Sidebar from "../Sidebar/Sidebar";
import "./AddDoctor.css";
const AddDoctor = () => {
  const [info, setInfo] = useState({});
  console.log(info.name)
  console.log(info.email)
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleFileChange = (e) => {
    console.log(e);
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email",  info.email);

    fetch("http://localhost:5000/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="container-fluid addDoctor">
      <div className="row patients">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 doctor-info-side">
          <h1 className="text-white text-center m-5 ">Add Doctor</h1>
          <div className="doctorForm p-5">
            <form className="" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Name"
                  onBlur={handleBlur}
                  name="name"
                  type="text"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  onBlur={handleBlur}
                  name="email"
                  type="text"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Upload File"
                  onChange={handleFileChange}
                  name="file"
                  type="file"
                />
              </div>
              <br />
              <Button type="submit" class="btn btn-primary">
                {" "}
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
