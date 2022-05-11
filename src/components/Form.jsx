import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Form = (props) => {
    const history = useHistory();


    const [formInfo, setFormInfo] = useState({
        resource : "",
        id : ""
    })

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
        console.log('formInfo: ', formInfo);
    }

    const sendForm = (e) => {
        e.preventDefault();
        const link = `/${formInfo.resource}/${formInfo.id}`

        history.push(link);
    }

    return (
        <form onSubmit={ sendForm } className="form-group d-flex justify-content-center align-items-center bg-light p-3 rounded">
            <p>Search for: </p>
            <select className='form-control mx-3' name="resource" style={{ width: 200 }} onChange={ changeHandler }>
                <option hidden value=""></option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="species">Species</option>
            </select>
            <p className='mx-2'>ID: </p>
            <input className='form-control' type="number" min="1" name='id' style={{ width: 75 }} onChange={ changeHandler } />
            <input className='btn btn-primary ms-4' type="submit" />
        </form>
    )
}

export default Form