export const createUser = async (data) => {
  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(`https://strapi-redux.herokuapp.com/auth/local/register`, parameters);
    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
