import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik';

 function Userdelete() {

    let params = useParams()
    const formik = useFormik({
        initialValues: {
            name: "",
            position: "",
            office: "",
            age: "",
            date: "",
            salary: ""


        },
        onSubmit: async values => {
            console.log(values);
            try {
                await fetch(`https://61cae4ef194ffe0017788a0d.mockapi.io/api/users/${params.id}`, {
                    method: "Delete",
                    body: JSON.stringify(values),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                alert("Data Deleted")
            } catch (error) {
                console.log(error)
            }
        },
    })
    useEffect(async () => {

        try {
            let data = await fetch(`https://61cae4ef194ffe0017788a0d.mockapi.io/api/users/${params.id}`)
            let user = await data.json()
            formik.setValues(user)
        } catch (error) {
            console.log(error);
        }
    }, [])






    return (
        <div>
            <h1 class="h3 mb-0 text-gray-800">User Delete</h1>
            <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                    <div className='row'>

                        <div className='col-lg-6'>
                            <label>Name</label>
                            <input type="text" name='name' className='form-control' onChange={formik.handleChange} value={formik.values.name} />
                        </div>
                        <div className='col-lg-6'>
                            <label>Position</label>
                            <input type="text" name='position' className='form-control' onChange={formik.handleChange} value={formik.values.position} />
                        </div>
                        <div className='col-lg-6'>
                            <label>Office</label>
                            <input type="text" name='office' className='form-control' onChange={formik.handleChange} value={formik.values.office} />
                        </div>
                        <div className='col-lg-6'>
                            <label>Age</label>
                            <input type="number" name='age' className='form-control' onChange={formik.handleChange} value={formik.values.age} />
                        </div>
                        <div className='col-lg-6'>
                            <label>Date</label>
                            <input type="date" name='date' className='form-control' onChange={formik.handleChange} value={formik.values.date} />
                        </div>
                        <div className='col-lg-6'>
                            <label>Salary</label>
                            <input type="text" name='salary' className='form-control' onChange={formik.handleChange} value={formik.values.salary} />
                        </div>
                        <div className='col-lg-3 mt-3'>

                            <input type="Submit" className='btn btn-primary btn-sm' />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default Userdelete