import { useState } from "react";
import CreateUserModal from "./CreateUserModal";

const initialUsers = [
  {
    id: 101,
    firstname: "Guruvishnu",
    lastname: "kajagar",
    role: "HR",
    email: "gk@company.com",
    status: "Active",
  },
  {
    id: 102,
    firstname: "Tushar",
    lastname: "Wankhade",
    role: "HR",
    email: "tw@test.com",
    status: "Inactive",
  },
  {
    id: 103,
    firstname: "Raj",
    lastname: "Adhav",
    role: "Admin",
    email: "ra@admin.com",
    status: "Active",
  },
  {
    id: 104,
    firstname: "Rohit",
    lastname: "Bagdi",
    role: "HR",
    email: "rb@company.com",
    status: "Inactive",
  },
];

const HrTable = () => {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateUser = (newUser) => {
  setUsers((prevUsers) => {
    const lastId =
      prevUsers.length > 0
        ? Math.max(...prevUsers.map((u) => Number(u.id)))
        : 100;

    const nextId = lastId + 1;

    return [
      {
        id: nextId,
        ...newUser,
        status: "Active",
      },
      ...prevUsers,
    ];
  });
};


  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <>
     <div>
      <div className="card shadow-sm">
        {/* Header */}
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">User Management</h5>

          <button
            className="btn btn-primary btn-sm"
            onClick={() => setIsModalOpen(true)}
          >
            <i className="bi bi-person-plus me-1"></i>
            Create HR
          </button>
        </div>

        {/* Table */}
        <div className="card-body p-0 table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td className="text-break">{user.email}</td>

                  <td>
                    <span className={`badge role-${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>

                  {/* STATUS TOGGLE */}
                  <td className="status-cell">
                    <div className="status-wrapper">
                      <input
                        type="checkbox"
                        className="status-toggle"
                        checked={user.status === "Active"}
                        onChange={() => toggleStatus(user.id)}
                      />
                      <span
                        className={`status-text ${
                          user.status === "Active" ? "active" : "inactive"
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>
                  </td>

                  {/* ACTIONS */}
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      <i className="bi bi-pencil-square"></i>
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     </div>
      {/* Modal */}
      <CreateUserModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreate={handleCreateUser}/>
    </>
  );
};

export default HrTable;
