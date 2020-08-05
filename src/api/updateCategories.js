export const saveUserCategorie = async (data) => {
  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.token}`,
    },
    body: JSON.stringify(data.data),
  };
  try {
    const response = await fetch(
      "https://strapi-redux.herokuapp.com/usercategoris",
      parameters
    );
    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getApiCategories = async (data) => {
  try {
    const apiCategories = await fetch("https://strapi-redux.herokuapp.com/lists");
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
      `https://strapi-redux.herokuapp.com/usercategoris?user_id=${userLogin.id}`,
      parameters
    );
    const userCategories = await apiUserCategories.json();
    return userCategories[0].categories;
  } catch (error) {
    console.log(error);
  }
};
