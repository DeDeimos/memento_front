import instance from "../../shared/api";

export const getUsers = async () => {
  const response = await instance.get("/users");
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await instance.put(`/users/edit/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await instance.delete(`/users/delete/${id}`);
  return response.data;
};

export const createUser = async (user) => {
  console.log('in api');
  console.log(user);
  const response = await instance.post("/users/create", user);
  console.log(response.data);
  return response.data;
};

export const loginUser = async (user) => {
  const response = await instance.post("/users/login/", user);
  return response.data;
}

export const getUserById = async (id) => {
  const response = await instance.get(`/users/${id}/`);
  return response.data;
};

export const getUserMoments = async (id) => {
  const response = await instance.get(`/moments/byuser/${id}/`);
  return response.data;
}

export const getUserFollowers = async (id) => {
  const response = await instance.get(`/users/followers/${id}/`);
  return response.data;
}

export const getUserFollowing = async (id) => {
  const response = await instance.get(`/users/following/${id}/`);
  return response.data;
}

export const getUserFollowingMoments = async (id) => {
  const response = await instance.get(`users/followingmoments/${id}/`);
  return response.data;
}
