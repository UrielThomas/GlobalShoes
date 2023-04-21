import React, { useState } from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const NewProductFormComponent = () => {

    const [prod, setProd] = useState({
        active: false,
        title: '',
        description: '',
        category: '',
        price: 0,
        image: ''


    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setProd((prevProd) => ({ ...prevProd, [name]: value }))
    }

    const submHandler = (e) => {
        e.preventDefault();
        const db = getFirestore();
        const productCollection = collection(db, 'stock')
        addDoc(productCollection, prod).then(({ id }) => console.log(id))
    }



    return (
        <div style={{ backgroundColor: "#eee" }}>
            <Form onSubmit={submHandler}>
                <Form.Group className='p-3' size = 'medium'>
                <Form.Label htmlFor='active'>Active</Form.Label>
                <Form.Check
                    type='checkbox'
                    id='active'
                    name='active'
                    checked={prod.active}
                    onChange={() =>
                        setProd((prevProd) => ({
                            ...prevProd,
                            active: !prevProd.active,
                        }))}
                        />
                </Form.Group>




                <Form.Group className="w-25 p-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        id='title'
                        name='title'
                        value={prod.title}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="w-25 p-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter a description"
                        id='description'
                        name='description'
                        value={prod.description}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="w-25 p-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Category"
                        id='category'
                        name='category'
                        value={prod.category}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="w-25 p-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter price"
                        id='price'
                        name='price'
                        value={prod.price}
                        onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="w-25 p-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter image url"
                        id='image'
                        name='image'
                        value={prod.image}
                        onChange={changeHandler} />
                </Form.Group>
                <Button variant="primary" type="submit">
                Add new product
                </Button>
            </Form>



        </div>
    )
}
