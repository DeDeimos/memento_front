import instance from "../../shared/api";

export const getUsers = async () => {
  const response = await instance.get("/api/users");
  return response.data;
};

export const updateUser = async (id, user) => {
  console.log('in api');
  console.log(user);
  const response = await instance.put(`/api/users/edit/${id}/`, user);
  return response.data;
};

export const updatePassword = async (id, newPassword) => {
  const response = await instance.post(`/api/users/changepass/${id}/`, {
    new_password: newPassword,
  });
  return response.data;
};

export const updateNameAndEmail = async (id, newName, newEmail) => {
  const response = await instance.post(`/api/users/changedata/${id}/`, {
    new_name: newName,
    new_email: newEmail,
  });
  return response.data;
};

export const updateProfilephoto = async (id, newProfilephoto) => {
  const formData = new FormData();
  formData.append("new_profile_photo", newProfilephoto);
  const response = await instance.post(`/api/users/changeprofilephoto/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export const deleteUser = async (id) => {
  const response = await instance.delete(`/api/users/delete/${id}`);
  return response.data;
};

// export const createUser = async (user) => {
//   console.log('in api');
//   console.log(user);
//   const response = await instance.post("/api/users/create", user);
//   console.log(response.data);
//   return response.data;
// };

export const createUser = async (user, photo) => {
  const formData = new FormData();
  formData.append("name", user.name);
  formData.append("email", user.email);
  formData.append("password", user.password);
  if(user.profile_photo) {
    formData.append("profile_photo", user.profile_photo);
  }
  // formData.append("profilephoto", photo);
  console.log('in api');
  console.log(formData);
  const response = await instance.post("/api/users/create", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response.data);
  return response.data;
};


export const loginUser = async (user) => {
  const response = await instance.post("/api/users/login/", user);
  return response.data;
}

export const getUserById = async (id) => {
  const response = await instance.get(`/api/users/${id}/`);
  return response.data;
};

export const getUserMoments = async (id) => {
  const response = await instance.get(`/api/moments/byuser/${id}/`);
  return response.data;
}

export const getUserFollowers = async (id) => {
  const response = await instance.get(`/api/users/followers/${id}/`);
  return response.data;
}

export const getUserFollowing = async (id) => {
  const response = await instance.get(`/api/users/following/${id}/`);
  return response.data;
}

// export const getUserFollowingMoments = async (id) => {
//   const response = await instance.get(`/api/users/followingmoments/${id}/`);
//   return response.data;
// }

export const getUserFollowingMoments = async (id, limit = 5, offset = 0) => {
  const response = await instance.get(`/api/users/followingmoments/${id}/`, {
    params: {
      limit,
      offset,
    },
  });
  return response.data;
};

export const isFollowing = async (id, user_id) => {
  const response = await instance.get(`/api/users/isfollowing/${id}/${user_id}/`);
  return response.data;
}

export const followUser = async (id, user_id) => {
  const response = await instance.post(`/api/follows/create/`, {
    follower: id,
    following: user_id
  });
  return response.data;
}

export const unfollowUser = async (id, user_id) => {
  const response = await instance.delete(`/api/follows/delete/${id}/${user_id}/`);
  return response.data;
}