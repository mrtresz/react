import { useState } from 'react';



function MyForm() {

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you have entered was : ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your naam:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </label>
            <br></br>
            Name: {name}

        </form>
    )
}

export default MyForm;