const getUserById = async (id, accessToken) => {
  let user = {};

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  await fetch(`http://localhost:8080/api/v1/users/${id}`, requestOptions)
    .then((response) => (user = response.json()))
    .catch((error) => console.log(error));

  return user;
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
export { getUserById, getUserByProfile };
