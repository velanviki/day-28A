import { Link } from "react-router-dom"
import React, {useEffect,useState} from 'react'

function Productlist() {

    const [products, setUsers] = useState([])
    useEffect(async () => {
        try {
            let list = await fetch("https://61cae4ef194ffe0017788a0d.mockapi.io/api/product");
            let productData = await list.json()
            setUsers(productData)
        } catch (error) {
            console.log(error);
        }


    }, [])





    return (
        <><div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">ProductList</h1>
            <Link class="nav-link" to="/productcreate" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i class="fas fa-download fa-sm text-white-50"></i>
                <span>CreateProduct</span></Link>






        </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Product Details</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="10">
                            <thead>
                                <tr>
                                    <th>ProductName</th>
                                    <th>ProductPrice</th>
                                    <th>options</th>


                                </tr>
                            </thead>

                            <tbody>
                                {
                                    products.map((product, index) => {
                                        return <tr key={index}>

                                            <td>{product.name}</td>
                                            <td>{product.price}</td>


                                            <td>
                                               <Link to={`/productedit/${product.id}`}> <button className="btn btn-primary btn-sm  ml-2">Edit</button></Link>


                                               <Link to={`/productdelete/${product.id}`}> <button    className="btn btn-danger btn-sm ml-3">Delete</button></Link>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>)
}

export default Productlist