import { useEffect, useState } from "react";
import React from "react";
import CreateUserModal from "../../components/hr/CreateUserModel";
import Swal from "sweetalert2";
import { getUsers } from "../../api/hrUsers";


const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading,setLoading] = useState(false);

  const fetchUsers = async () => {
    try{
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data)
    }
    catch (error) {
      Swal.fire("Error","Failed to load users","error");
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchUsers();
  }, []);
  

  const handleCreateUser = (newUser) => {
  setUsers((prevUsers) => {
    const lastId =
      prevUsers.length > 0
        ? Math.max(...prevUsers.map((u) => Number(u.id)))
        : 1;

    const nextId = lastId + 1;

    return [
      {
        ...newUser,  
        id: nextId,     
        status: "Active",
      },
      ...prevUsers,
    ];
  });

  setIsModalOpen(false);
};


const handleUpdateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setIsEditModalOpen(false);
    setSelectedUser(null);
};


  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.is_active === true ? false : true,
            }
          : user
      )
    );
  };

  const handleDelete = (id) => {
    Swal.fire({
    title: "Are you sure?",
    text: "This user will be permanently deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
  }).then((result) => {
    if (result.isConfirmed) {
      setUsers(users.filter((user) => user.id !== id));
      Swal.fire({
        title: "Deleted!",
        text: "User has been deleted successfully.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  })
  };

  return (
    // Added 'container-fluid' or similar class for page layout in a real app
    <>
    <div className="p-3"> 
      <div className="cardtable shadow-sm border-0"> {/* Use border-0 for cleaner look */}
        
        {/* Header */}
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0 fw-bold ">User Management</h5> {/* fw-bold for stronger title */}

          <button
            className="btn btn-primary btn-sm d-flex align-items-center" // Align icon and text
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
              <tr className="table-light"> {/* Added light background to header */}
                <th className="text-center">ID</th>
                <th  >Full Name</th>
                <th  >Email</th>
                <th className="text-center">Role</th>
                {/* <th className="text-center">Status</th> Center Status column header */}
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className={user.is_active === false ? "inactive-row" : ""}>
                  <td className="text-center">{user.id}</td>
                  <td >{user.first_name+" "+user.last_name}</td>
                  <td  >{user.email}</td>

                  <td className="text-center">
                    {/* Role Badge - uses custom CSS class defined above */}
                    <span className={`badge role-${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>

                  {/* STATUS TOGGLE */}
                  {/* <td className="text-center toggle-cell">   */}
                    {/* <label className="status-wrapper-label">
                      <input
                        type="checkbox"
                        className="status-toggle"
                        checked={user.status === "Active"}
                        onChange={() => toggleStatus(user.id)}
                      />
                      <span className="status-wrapper"></span> 
                    </label>
                  </td> */}

                  {/* ACTIONS */}
                  <td className="text-center actions-btn">
                    <label className="status-wrapper-label toggle-cell">
                      <input
                        type="checkbox"
                        className="status-toggle"
                        checked={user.is_active === true}
                        onChange={() => toggleStatus(user.id)}
                      />
                      <span className="status-wrapper"></span> 
                    </label>
                    <button 
                      className="btn btn-sm text-secondary" // Use text-secondary for default icon color
                      title="Edit"
                      onClick={() => {
                        setSelectedUser(user);
                        setIsEditModalOpen(true);
                      }}
                    >
                        <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="btn btn-sm text-secondary"
                      onClick={() => handleDelete(user.id)}
                      title="Delete"
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
      
      {/* Modal - assuming CreateUserModal is correctly implemented */}
       <CreateUserModal
        isModalOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onCreate={handleCreateUser}
      />
       
       <CreateUserModal
          isModalOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onCreate={handleUpdateUser}
          isEdit={true}
          userData={selectedUser}
       />
    </div>
   
   </>
  );
};

export default UserManagement;