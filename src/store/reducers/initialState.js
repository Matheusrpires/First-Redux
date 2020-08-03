export default {
  auth: {
    token: {},
    id: "",
    userName: '',
    credentials: {
      // email: '',
      username: '',
      password: ''
    }
  },
  register: {
    data: {
      name: '',
      sobrenome: '',
      username: '',
      email: '',
      password: '',
    },
    error: {},
    success: false
  },
  categories: {
    defaultCategories: [],
    userCatefories: []
  },
  loading: {
    open: false,
    message: 'Carregando'
  },
  notify: {
    open: false,
    class: 'sucesso',
    vertical: 'top',
    horizontal: 'center',
    time: 3000,
    message: ''
  }
}