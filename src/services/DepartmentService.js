import api from '../axios/index';

export default class DepartmentService {
  static async getDepartments() {
    return api.get('/department');
  }

  static async getDepartment(id) {
    return api.get(`/department/${id}`);
  }

  static async addDepartment(name, description) {
    return api.post('/department', { name, description });
  }

  static async deleteDepartment(id) {
    return api.delete(`/department/${id}`);
  }
}
