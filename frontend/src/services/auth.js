// averiguar como usar una variable de entorno en un proyecto de vite/react

// reemplazar por la variable de entorno con la misma data
const BASE_API_AUTH = import.meta.env.VITE_BASE_API_AUTH;

const register = async ({ username, email, password }) => {
  const response = await fetch(`${BASE_API_AUTH}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  return response;
};

const login = async ({ email, password }) => {
  const response = await fetch(`${BASE_API_AUTH}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return response;
};

export { register, login };
