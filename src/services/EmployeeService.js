import api from '../axios/index';

export default class EmployeeService {
  static async getEmployees() {
    return api.get('/employee');
  }

  static async getEmployee(id) {
    return api.get(`/employee/${id}`);
  }

  static async addEmployee(name, surname, position, isHead, departmentName) {
    return api.post('/employee', {
      name,
      surname,
      position,
      isHead,
      departmentName,
    });
  }

  static async deleteEmployee(id) {
    return api.delete(`/employee/${id}`);
  }
}
