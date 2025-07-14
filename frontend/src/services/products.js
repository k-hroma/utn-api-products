// averiguar como usar una variable de entorno en un proyecto de vite/react

// reemplazar por la variable de entorno con la misma data
// ------------------ RESOLUCIÓN DE CONSIGNA ------------------
const BASE_API = import.meta.env.VITE_BASE_API;

const getProducts = async () => {
  try {
    const response = await fetch(BASE_API + "/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {}
};

const createProduct = async ({ name, price, category }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found in localStorage");
  }
  const response = await fetch(BASE_API + "/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, price, category }),
  });
  return response;
};

const deleteProduct = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found in localStorage");
  }
  const response = await fetch(`${BASE_API}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

// ------------------ RESOLUCIÓN DE CONSIGNA ------------------
const searchByName = async (name) => {
  try {
    const response = await fetch(
      `${BASE_API}/products/search?name=${encodeURIComponent(name)}`
    );
    console.log(response);
    return response;
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.log(errMsg);
  }
};

export { getProducts, createProduct, deleteProduct, searchByName };
