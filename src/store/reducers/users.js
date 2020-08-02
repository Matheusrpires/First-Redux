const initialState = {
  users: {
    active: [],
    list: ["João", "maria", "Matheus", "José"],
  },
};

const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case "ACTIVE_USER_STATUS":
      return { ...state, active: [...state.active, action.payload] };
    default:
      return state;
  }
};

export default usersReducer;
