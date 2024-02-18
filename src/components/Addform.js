import { useState } from "react"
import "./Addform.css"

export default function Addform(props){
    const {student,setStudent} = props;
    const[name,setName] = useState("")
    const[id,setId] = useState("")
    
    
    const saveStudent=(e)=>{
        e.preventDefault()
        if(!name){
            alert("กรุณากรอกชื่อ")
        }
        else if(!id){
            alert("กรุณากรอกรหัส")
        }
        else{
            const newStudent={
                id:id,
                name:name             
            }
            setStudent([...student,newStudent])
            setName("")
            setId()
        }
    }
  
    
    return(
        <section className="container">
            <form onSubmit={saveStudent}>
                <label>ชื่อนักเรียน</label>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            
                <label>รหัสนักเรียน</label>
                <input type="text" name="name" value={id} onChange={(e)=>setId(e.target.value)}/>

                <button type="submit" className="btn-add">บันทึก</button>
            </form>
            
      
        </section>
    )
}