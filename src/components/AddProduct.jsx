import React from 'react'

const AddProduct=()=>{
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    
    const addProduct=async()=>{
        console.warn(name,price,category,company);
        const userId =JSON.parse(localStorage.getItem('user'))._id;
        const result = await fetch("http://localhost:5000//add-product",{
            method:'post',
            body:JSON.stringyfy({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
            result= await result.json();
            console.warn(result)

    }   
    return(
        <div className='product'>
            <h1>Add product</h1>
            <input type="text" placeholder='Enter Product Name' className='inputBox'
            onChange={(e)=>{setName(e.target.value)}} value={name}/>
            <input type="text" placeholder='Enter Product Price' className='inputBox'
            onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
            <input type="text" placeholder='Enter Product Category' className='inputBox'
            onChange={(e)=>{setCategory(e.target.value)}} value={category}/>
            <input type="text" placeholder='Enter Product Company' className='inputBox'
            onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
            <button onClick={addProduct} className='button'>Add Product</button>
        </div>
    )
}

export default AddProduct;