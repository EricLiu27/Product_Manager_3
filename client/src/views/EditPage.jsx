import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EditPage = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(1)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const { id } = useParams()

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response => navigate('/products'))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                console.log(response.data)
                const product = response.data
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
            .catch(err => console.log(err))

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/products/${id}`, { title, price, description })
            .then(response => {
                navigate(`/products`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit your product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Title</label>
                    <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label >Price</label>
                    <input type="number" name='price' value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div>
                    <label >Description</label>
                    <input type="text" name='description' value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary'>Edit</button>
                <button type='button' onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}

export default EditPage