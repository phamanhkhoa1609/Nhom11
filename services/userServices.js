import axios from "axios";

const getUserById = async (token, id) => {
  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8080/api/v1/users/${id}`,
      config
    );
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    return error.response;
  }
};

const getUserByProfile = async (accessToken) => {
  let user = {};

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  await fetch(`http://localhost:8080/api/v1/users/profile`, requestOptions)
    .then((response) => (user = response.json()))
    .catch((error) => console.log(error));

  return user;
};

const getAllUsers = async (token, pageNo, pageSize, sortBy, sortDir) => {
  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      pageNo,
      pageSize,
      sortBy,
      sortDir,
    },
  };

  try {
    const res = await axios.get("http://localhost:8080/api/v1/users", config);
    if (res && res.data) {
      console.log(res.data);
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (user, token) => {
  let data = user;

  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:8080/api/v1/users",
      data,
      config
    );
    if (res && res.data) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};

const updateUserById = async (user, token, id) => {
  let data = user;

  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.put(
      `http://localhost:8080/api/v1/users/${id}`,
      data,
      config
    );
    if (res && res.data) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};

const deleteUserById = async (token, id) => {
  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.delete(
      `http://localhost:8080/api/v1/users/${id}`,
      config
    );
    if (res && res.data) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};

const searchUserByName = async (token, name, pageNo, pageSize) => {
  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      pageNo: pageNo,
      pageSize: pageSize,
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8080/api/v1/users/search?name=${name}`,
      config
    );
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  getUserById,
  getUserByProfile,
  getAllUsers,
  createUser,
  updateUserById,
  deleteUserById,
  searchUserByName,
};
