import axios from "axios";

const getListProduct = async (pageNo, pageSize, sortBy, sortDir) => {
  const res = await axios.get("http://localhost:8080/api/v1/products", {
    params: {
      pageNo,
      pageSize,
      sortBy,
      sortDir,
    },
  });
  if (res && res.data) {
    return res.data;
  }
};

const getProductById = async (productId) => {
  const res = await axios.get(
    `http://localhost:8080/api/v1/products/${productId}`
  );
  if (res && res.data) {
    return res.data;
  }
};

export { getListProduct, getProductById };
