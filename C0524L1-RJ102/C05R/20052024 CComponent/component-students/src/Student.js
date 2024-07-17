let listStudent = [
    { id:1, name: 'A', age:20, score:9},
    { id:2, name: 'B', age:19, score:6},
    { id:3, name: 'C', age:18, score:5}
]

export default function Student() {
    return (
        <>
            {   
                listStudent.map((e) => (
                    <h3>
                      ID: {e.id}, Age: {e.age}, Score: {e.score}
                    </h3>
                ))
            }
        </>
    )
}