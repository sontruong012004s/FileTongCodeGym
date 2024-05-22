// Tạo Component tên Student chứa  listStudent (: id, name, score, age)
// Hiện listStudent
// Sử dụng Component 3 lần ở App
import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStudent: [
        { id: 1, name: "A", score: 10, age: 20 },
        { id: 2, name: "B", score: 20, age: 21 },
        { id: 3, name: "C", score: 30, age: 22 },
      ],
    };
  }

  render() {
    return (
      <table border="1">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Score</th>
          <th>Age</th>
        </tr>
        {this.state.listStudent.map((student) => (
          <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.score}</td>
            <td>{student.age}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default Student;
