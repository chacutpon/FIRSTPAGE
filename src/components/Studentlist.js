import { useState } from "react";
import "./Studentlist.css";
import Item from "./Item";

export default function Studentlist(props) {
  const [show, setShow] = useState(true);
  const btnStyle = {
    background: show ? "purple" : "green",
  };
  const { student, deleteStudent } = props;
  return (
    <>
    

      {/* การใช้ booleanState */}

      <ul>
        <div className="Header">
          <h1>
            จำนวนนักเรียน: ({student.length})
          </h1>
          <button onClick={() => setShow(!show)} style={btnStyle}>
            {show ? "hide" : "show"}
          </button>
        </div>
        {show &&
          student.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent} />
          ))}
      </ul>
    </>
  );
}
