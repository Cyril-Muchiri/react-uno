const Student =({firstName,
    lastName,
    email}) =>{
return (
<div>
    <h1> Student details</h1>
    {
        <><p>Student first name: {firstName}</p><p>Student last name: {lastName}</p><p>Student email: {email}</p></>
    }
    {/* <p>Array data:{data}</p> */}
</div>)

}

export default Student;