export const saveUserCategorie = async (data) => {
  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.token}`,
    },
    body: JSON.stringify(data.data),
  };
  console.log("Console.log na api categories nos parameters", parameters);
  try {
    const response = await fetch(
      "http://localhost:1337/usercategoris",
      parameters
    );
    console.log("console.log na api register response api", response);
    let data = await response.json();
    console.log("console.log na api register data dps api", data);
    return data;
  } catch (error) {
    return error;
  }
};

export const getApiCategories = async (data) => {
  try {
    const apiCategories = await fetch("http://localhost:1337/lists");
    const defaultCategories = await apiCategories.json();
    return defaultCategories[0].categories;
  } catch (error) {
    console.log("Error api get categories", error);
  }
};

export const getUserCategories = async (userLogin) => {
  const parameters = {
    headers: {
      Authorization: `Bearer ${userLogin.token}`,
    },
  };
  try {
    const apiUserCategories = await fetch(
      `http://localhost:1337/usercategoris?user_id=${userLogin.id}`,
      parameters
    );
    const userCategories = await apiUserCategories.json();
    return userCategories[0].categories;
  } catch (error) {
    console.log(error);
  }
};
