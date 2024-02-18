export default function Item(props) {
    const{data,deleteStudent} = props;
    return(
        <>
             <ol key={data.id}>
              <h1>
                {data.id} - {data.name}
              </h1>
              <button onClick={() => deleteStudent(data.id)} className="delete">
                ลบข้อมูล
              </button>
            </ol>
        </>
    )
}