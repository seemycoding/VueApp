const url = "http://localhost:3000/api/";
import axios from "axios";
class DataService {
  //Add Student

  static AddStudent(data) {
    return axios.post(url + "addStudent", {
      rollno: data.rollno,
      name: data.name,
      address: data.address,
      college: data.college,
      courses: data.course
    });
  }

  static AddCourse(data) {
    return axios.post(url + "addCourse", {
      cid: data.id,
      CourseName: data.CourseName,
      professor: data.professor,
      students: data.student
    });
  }

  static async GetStudents() {
    return await axios.get(url + "getStudents");
  }

  static async GetCourses() {
    return await axios.get(url + "getCourses");
  }
}
export default DataService;
