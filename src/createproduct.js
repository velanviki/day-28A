import React from 'react'
import { useFormik } from 'formik';
function Createproduct() {
    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",



        },
        onSubmit: async values => {
            console.log(values);
            try {
                await fetch("https://61cae4ef194ffe0017788a0d.mockapi.io/api/product", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                alert("Data saved")
            } catch (error) {
                console.log(error)
            }
        },
    })
    return (
        <>
            <div>
                <h1 class="h3 mb-0 text-gray-800">Create Product</h1>
            </div>

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

export default Createproduct