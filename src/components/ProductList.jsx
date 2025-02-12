import React from 'react';

const ProductList=()=>{
    const [products, setProducts]=useState();

    useEffect(()=>{
        getProducts();
    },[])


    //API obtaining data from database
    const getProducts = async()=>{
        let result = await fetch('http://localhost:5000/products',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProducts(result);
    }
  
    const deleteProduct = async (id)=>{
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method :"Delete",
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json()
        if(result){
            getProducts();
        }
    };

    //obtaining search api in frontend
    const searchHandle= async (event)=>{
        let key= event.targrt.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`,{
                headers:{
                    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if(result){
                setProducts(result)
            }
        }else{
            getProducts()
        }
        
    }

    return(
        <div className='product-list'>
            <h3>Product List</h3>
            <input type='text' placeholder='Search product' className='search-product-box'
            onChange={searchHandle}/>
            <ul>
                <li>S. no</li>
                <li>name</li>
                <li>price</li>
                <li>category</li>
                <li>Operation</li>
            </ul>
            {
               products.length>0 ? products.map((item, index)=>
                <ul>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>Rs. {item.price}</li>
                <li>{item.category}</li>
                <li><button onClick={()=>deleteProduct(item._id)}>Delete</button></li> {/**update button remain to implement over here */}
                </ul>
            )
            :<h1>No Result Found</h1>
            }
        </div>
    )
}

export default ProductList;