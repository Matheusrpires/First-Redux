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
  console.log(parameters);
  try {
    const response = await fetch(
      `http://localhost:1337/auth/local`,
      parameters
    );
    console.log(response);
    let datas = await response.json();
    console.log("console.log no api response", datas);
    return datas;
  } catch (error) {
    console.log(error);
  }
};
