// resource requests

import axios from '../axios'

export const fetchUsers = () => axios.get('/users')
