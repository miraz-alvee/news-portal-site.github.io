import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";

const LeftNav = () => {

    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h2>All Category</h2>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-decoration-none'>{category.name}</Link>
                
                </p>)
            }
            
        </div>
    );
};

export default LeftNav;