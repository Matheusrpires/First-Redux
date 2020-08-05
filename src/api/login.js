export const loginApi = async (data) => {
  console.log("console.log data antes de enviar para api", data);
  const payload = {
    identifier: data.username,
    password: data.password,
  };
  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  try {
    const response = await fetch(
      `https://strapi-redux.herokuapp.com/auth/local`,
      parameters
    );
    let datas = await response.json();
    return datas;
  } catch (error) {
    console.log(error);
  }
};
