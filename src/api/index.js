const fetchData = async (userId) => {
  // try {
  //   const response = await fetch(`http://localhost:3333/employees/${userId}`);
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
  console.log(userId)

  try {
    const response = await fetch(`http://localhost:3333/employees/`, { method: "POST", body:userId });
    console.log(response)
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  
};

export default fetchData;