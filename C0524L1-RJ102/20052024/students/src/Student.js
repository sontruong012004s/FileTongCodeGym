// Tạo Component tên Student chứa  listStudent (: id, name, score, age)
// Hiện listStudent
// Sử dụng Component 3 lần ở App
const list = [
    { id: 1, name: "A", age: 20, score: 10 },
    { id: 2, name: "B", age: 21, score: 9 },
    { id: 3, name: "C", age: 22, score: 8 },
];
export default function Student() {
  return (
    <>
      <table border={"1"}>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Score</th>
            <th>Age</th>
        </tr>
        {list.map((e) => (
        <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.score}</td>
            <td>{e.age}</td>
        </tr>
        ))}
      </table>
    </>
  );
}
