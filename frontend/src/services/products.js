// averiguar como usar una variable de entorno en un proyecto de vite/react

// reemplazar por la variable de entorno con la misma data
// ------------------ RESOLUCIÓN DE CONSIGNA ------------------
const BASE_API = import.meta.env.VITE_BASE_API;

const getProducts = async () => {
  const response = await fetch(BASE_API + "/products");
  return response;
};

const createProduct = async ({ name, price, category }) => {
  const response = await fetch(BASE_API + "/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, category }),
  });
  return response;
};

const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_API}/products/${id}`, {
    method: "DELETE",
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
