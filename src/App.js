import "./App.css";
import Header from "./components/Header";
import Studentlist from "./components/Studentlist";
import "./App.css";
import { useState } from "react";
import Addform from "./components/Addform";

function App() {
  const [student, setStudent] = useState([

  ]);
  function deleteStudent(id) {
    setStudent(student.filter((item) => item.id !== id));
  }
  return (
    <div className="Container">
      <Header title="HOME" />
      <main>
        <Addform student={student} setStudent={setStudent}/>
        <Studentlist student={student} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
