import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log("formData", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://createabit-backend.onrender.com/api/v1/user/login",
        // "http://localhost:5000/api/v1/user/login",
        formData
      );

      if (response.data.status === "Success") {
        navigate("/");
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.accessToken);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error, e.g., show an error message to the user.
    }
  };

  return (
    <div className="login-container">
      <h3 className="">Login</h3>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label className="text-left " htmlFor="email">
            Email
          </label>
          <input
            className="form-input border"
            type="email"
            name="Email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-left " htmlFor="password">
            Password
          </label>
          <input
            className="form-input border"
            type="password"
            name="Password"
            id="password"
            value={formData.Password}
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
          Login
        </button>
      </form>
      <p className="mt-2">
        <span>Don't have account?</span>
        <span>
          <Link to="/register" className="text-primary" target="_blank">
            {" "}
            Sign Up
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
