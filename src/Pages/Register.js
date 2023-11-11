import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://createabit-backend.onrender.com/api/v1/user/register",

        formData
      );

      if (response.data.status === "Success") {
        navigate("/login");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="register-container">
      <h3>Register</h3>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-input border"
            type="text"
            name="Name"
            id="username"
            value={formData.Name} // Corrected property name
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-input border"
            type="email"
            name="Email"
            id="email"
            value={formData.Email} // Corrected property name
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-input border"
            type="password"
            name="Password"
            id="password"
            value={formData.Password} // Corrected property name
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          variant="primary"
          className="bg-primary p-2 text-white"
          style={{ width: "100px" }}
        >
          Register
        </button>
        <p className="mt-2">
          <span>Alreay have an account?</span>
          <span>
            <Link to="/login" className="text-primary" target="_blank">
              Sign In
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
