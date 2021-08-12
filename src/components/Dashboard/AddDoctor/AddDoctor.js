import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Button from "../../UI/Button/Button";
import Sidebar from "../Sidebar/Sidebar";
import "./AddDoctor.css";
const AddDoctor = () => {
  // const [info, setInfo] = useState({});

  const [file, setFile] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // const handleBlur = (e) => {
  //   const newInfo = { ...info };
  //   newInfo[e.target.name] = e.target.value;
  //   setInfo(newInfo);
  // };

  const handleImageUpload = (e) => {
    console.log(e);
    const imageData = new FormData();
    imageData.set("key", "db66292a5001748309bbc6817d6c3e80");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setFile(response.data.data.display_url);
        // console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onSubmit = (data) => {
    console.log(data)
    const eventData = {
      name: data.name,
      email: data.email,
      imageUrl: file,
    };
    // console.log(eventData)
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("name", info.name);
    // formData.append("email", info.email);

    fetch("http://localhost:5000/addADoctor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
       .then((response) => response.json())
       .then((success) => {
        console.log(success);
        if (success) {
          alert("Upload successful");
        }
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
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Name"
                  // onBlur={handleBlur}
                  name="name"
                  type="text"
                  {...register("name")}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  // onBlur={handleBlur}
                  name="email"
                  type="text"
                  {...register("email")}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Upload File"
                  onChange={handleImageUpload}
                  name="file"
                  type="file"
                />
              </div>
              <br />
              <button  type="submit" class="btn btn-primary addDocBtn">
              Submit
              </button>
              {/* <Button style={{background:"red #323965"}} type="submit" class="btn btn-primary">
                Submit
              </Button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
