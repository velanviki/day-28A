import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik';

 function Productdelete() {


    let params = useParams()
    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",



        },
        onSubmit: async values => {
            console.log(values);
            try {
                await fetch(`https://61cae4ef194ffe0017788a0d.mockapi.io/api/product/${params.id}`, {
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
            let data = await fetch(`https://61cae4ef194ffe0017788a0d.mockapi.io/api/product/${params.id}`)
            let product = await data.json()
            formik.setValues(product)
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <>
        <h1 class="h3 mb-0 text-gray-800">Product Delete</h1>
        <div className='container'>
        <form onSubmit={formik.handleSubmit}>
            <div className='row'>

                <div className='col-lg-6'>
                    <label>Name</label>
                    <input type="text" name='name' className='form-control' onChange={formik.handleChange} value={formik.values.name} />
                </div>
                <div className='col-lg-6'>
                    <label>Price</label>
                    <input type="text" name='price' className='form-control' onChange={formik.handleChange} value={formik.values.price} />
                </div>

                <div className='col-lg-3 mt-3'>

                    <input type="submit" className='btn btn-primary btn-sm' />
                </div>

            </div>
        </form>
    </div>
    </>
    )
}
export default Productdelete