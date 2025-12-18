import apiClient from "../services/apiClient";

// Get USers
export const getUsers = () => {
    return apiClient.get("/users/v1/users/");
}