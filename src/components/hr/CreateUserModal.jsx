import { useState } from "react";
import "../../theme.css";

const CreateUserModal = ({ isModalOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    role: "HR",
    password: "",
  });

  const roles = ["Admin", "HR"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstname || !formData.email || !formData.password) {
      alert("Please fill all required fields");
      return;
    }

    onCreate(formData);
    onClose();

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      role: "HR",
      password: "",
    });
  };

  if (!isModalOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="custom-backdrop" onClick={onClose}></div>

      {/* Modal */}
      <div className="custom-modal">
        <div className="custom-modal-header">
          <h5>
            <i className="bi bi-person-plus me-2"></i>
            Create New User
          </h5>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="custom-modal-body">
          <div className="row mb-3">
            <div className="col">
              <label>First Name <span>*</span></label>
              <input
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>

            <div className="col">
              <label>Last Name</label>
              <input
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label>Email <span>*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Role <span>*</span></label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              {roles.map(r => <option key={r}>{r}</option>)}
            </select>
          </div>

          <div className="mb-4">
            <label>Password <span>*</span></label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Create User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUserModal;
