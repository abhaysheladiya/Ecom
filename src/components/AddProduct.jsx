import React from 'react'

const AddProduct=()=>{
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false)

    const addProduct=async()=>{
        console.warn(!name);
        if(!name || !price || !category || !company)
        {
            setError(true)
            return false;
        }

        console.warn(name,price,category,company);
        const userId =JSON.parse(localStorage.getItem('user'))._id;
        const result = await fetch("http://localhost:5000//add-product",{
            method:'post',
            body:JSON.stringyfy({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
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
            {error && !name && <span className='invalid-input'>Enter Valid Name</span>}

            <input type="text" placeholder='Enter Product Price' className='inputBox'
            onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
             {error && !price && <span className='invalid-input'>Enter Valid Price</span>}

            <input type="text" placeholder='Enter Product Category' className='inputBox'
            onChange={(e)=>{setCategory(e.target.value)}} value={category}/>
             {error && !category && <span className='invalid-input'>Enter Valid Category</span>}

            <input type="text" placeholder='Enter Product Company' className='inputBox'
            onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
            {error && !company && <span className='invalid-input'>Enter Valid Company</span>}

            <button onClick={addProduct} className='button'>Add Product</button>
        </div>
    )
}

export default AddProduct;