import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { createPortal } from "react-dom";

const showCreateUser = () => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: "User has been created successfully.",
    timer: 2000,
    showConfirmButton: false,
  });
};

const showUpdateUser = () => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: "User has been updated successfully.",
    timer: 2000,
    showConfirmButton: false,
  });
};

const CreateUserModal = ({
  isModalOpen,
  onClose,
  onCreate,
  isEdit = false,
  userData = null,
}) => {
  const [formData, setFormData] = useState({
    id: null,
    firstname: "",
    lastname: "",
    email: "",
    role: "HR",
    password: "",
  });

  const roles = ["Admin", "HR"];

  /* ---------------- Prefill while editing ---------------- */
  useEffect(() => {
    if (isEdit && userData) {
      setFormData({ ...userData, password: "" });
    }
  }, [isEdit, userData]);

  /* ---------------- Lock body scroll ---------------- */
  useEffect(() => {
    document.body.classList.toggle("modal-open", isModalOpen);
    return () => document.body.classList.remove("modal-open");
  }, [isModalOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstname || !formData.email) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill all required fields",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    if (!isEdit && !formData.password) {
      Swal.fire({
        icon: "warning",
        title: "Password Required",
        text: "Password is required while creating a user",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    onCreate(formData);
    isEdit ? showUpdateUser() : showCreateUser();
    onClose();
  };

  if (!isModalOpen) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal */}
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title">
                <i className={`bi ${isEdit ? "bi-pencil-square" : "bi-person-plus"} me-2`}></i>
                {isEdit ? "Edit User" : "Create New User"}
              </h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit}>
              <div className="modal-body">

                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col">
                    <label className="form-label">Last Name</label>
                    <input
                      className="form-control"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Role *</label>
                  <select
                    className="form-select"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    {roles.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {!isEdit && (
                  <div className="mb-3">
                    <label className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                )}

              </div>

              {/* Footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {isEdit ? "Update User" : "Create User"}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default CreateUserModal;
