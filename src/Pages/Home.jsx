import React, { useEffect, useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [searchVal, setSearchVal] = useState('');

    useEffect(() => {
        try{
            let res = axios.get('https://ymtaz.sa/api/client/digital-guide/categories');
            res.then((result) => {
            const data = result.data.data.categories;
            setData(data);
            }).catch((error) => {
            console.error('حدث خطأ:', error);
            });
        }catch(err) {
            console.log(err);
        }
    },[]);

    const handleSearch = () => {
        let res = axios.get('https://ymtaz.sa/api/client/digital-guide/categories');
        res.then((result) => {
        const dataFilter = result.data.data.categories;
        const dataFiltered = dataFilter?.filter(category => {
            if (category?.title?.includes(searchVal) ) {
                return category;
            } else {
                return;
            }
        })
        setData(dataFiltered);
        })
    }
    useEffect(()=> {
        handleSearch()
    },[searchVal])
return (
    <div className='main-content'>
        <h2>الدليل الرقمي</h2>
        <div className="search-container">
            <div className="filter-icon">
                <TuneIcon />
            </div>
            <div className="search-input">
                <input type="text" onChange={(e) => setSearchVal(e.target.value)}/>
            </div>
            <div className="search-icon">
                <SearchIcon />
            </div>
        </div>
        <div className="box-container">
            {data?.map((category) => (
                <Link className="box" to={'/pg2'} key={category.id}>
                    <div className="box-img">
                        <img src="https://ymtaz.sa/uploads/person.png" alt="" />
                    </div>
                    <h5>{category.title} </h5>
                    <span>متوفر عدد 17</span>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Home