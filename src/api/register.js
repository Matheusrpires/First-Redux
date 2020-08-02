export const createUser = async (data) => {
  console.log("console.log na api register data antes api", data);
  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(`http://localhost:1337/auth/local/register`, parameters);
    console.log("console.log na api register response api", response);
    let data = await response.json();
    console.log("console.log na api register data dps api", data);
    return data;
  } catch (error) {
    return error;
  }
};
