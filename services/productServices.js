import axios from "axios";

const getListProduct = async (pageNo, pageSize, sortBy, sortDir) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (productId) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/v1/products/${productId}`
    );
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (product, token) => {
  let data = product;

  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:8080/api/v1/products",
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

const updateProductById = async (product, token, id) => {
  let data = product;

  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.put(
      `http://localhost:8080/api/v1/products/${id}`,
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

const deleteCart = async (token, id) => {
  let config = {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.delete(
      `http://localhost:8080/api/v1/products/${id}`,
      config
    );
    if (res && res.data) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};

export {
  getListProduct,
  getProductById,
  createProduct,
  updateProductById,
  deleteCart,
};
