import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import Button from "../../UI/Button/Button";
import "./AppointmentForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, subject, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    closeModal()
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 className="text-center text-info">{subject}</h3>
      <p className="text-center text-brand"><small>{date.toDateString()}</small></p>
        <br />
        <form onSubmit={handleSubmit(onSubmit)} className="appointmentForm ">
          <div className="form-group">
            <select
              id="doctors"
              name="doctors"
              className="form-control"
              {...register("selectDoctors", { required: true, maxLength: 20 })}
            >
              <option value="not set" selected disabled>Select doctor</option>
              <option value="john">Dr JOHN</option>
              <option value="peyton">Dr. Peyton</option>
              <option value="mark">Dr. Mark </option>
              <option value="kathie">Dr. Kathie L</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <input
              className="form-control"
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Your Name"
            />
             {errors.firstName && <span style={{color:"red"}}>Please enter your name</span>}
          </div>
          <br />
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              {...register("number", { required: true, maxLength: 20 })}
              placeholder="Phon Number"
            />
             {errors.number && <span style={{color:"red"}}>Please enter your phon number</span>}
          </div>
          <br />
          <div className="form-group">
            <input
              className="form-control"
              {...register("email", { required: true, maxLength: 20 })}
              placeholder="Email"
            />
             {errors.email && <span style={{color:"red"}}>Please enter your email</span>}
          </div>
          <br />
          <div className="form-group">
            <input
              className="form-control"
              type="date"
              {...register("date", { min: 18, max: 99 })}
              placeholder="mm/dd/yy"
            />
          </div>
          <br />

          <div className=" text-end">
            <Button className="btn btn-primary" type="submit">
              SEND
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
