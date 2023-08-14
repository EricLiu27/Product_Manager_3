import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const DetailsPage = () => {
    const [product, setProduct] = useState()

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err))

    }, [])


    return (
        <div>
            {
                product ?

                    <div className="card">
                        <div className="card-body">
                            <h5 class="card-title">{product.title}</h5>
                            <p class="card-text">Price: ${product.price} </p>
                            <p class="card-text">Description:{product.description}</p>
                            <Link to={`/products/${id}/edit`}>Edit</Link>
                        </div>
                    </div> : <h1>Loading...</h1>
            }

        </div>
    )
}

export default DetailsPage