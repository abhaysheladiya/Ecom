import React from 'react';

const ProductList=()=>{
    const [products, setProduct]=useState();

    useEffect(()=>{
        getProducts();
    },[])

    //API obtaining data from database
    const getProducts = async()=>{
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }
    console.warn("products", products);

    return(
        <div className='product-list'>
            <h3>Product List</h3>
            <ul>
                <li>S. no</li>
                <li>name</li>
                <li>price</li>
                <li>category</li>
            </ul>
            {
                products.map((item, index)=>
                <ul>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>Rs. {item.price}</li>
                <li>{item.category}</li>
            </ul>
            )
            }
        </div>
    )
}

export default ProductList;