import axios from "axios";

export const addToCart = async (
  productItemId,
  productId,
  quantity,
  accessToken
) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const raw = JSON.stringify({
    productItemId: productItemId,
    productId: productId,
    quantity: quantity,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch("http://localhost:8080/api/v1/carts", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

export const getAllProductsFromCart = async (accessToken) => {
  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const res = await axios.get("http://localhost:8080/api/v1/carts", config);

    if (res && res.data) {
      return res.data;
    } else throw new Error("Failed to fetch cart.");
  } catch (error) {
    console.log(error);
  }
};
