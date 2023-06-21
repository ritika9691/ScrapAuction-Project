import { useEffect, useState } from 'react';
import './Search.css'
import axios from 'axios';
import { _apiurlsubcategory, _apiurlcategory } from '../APIurls'
import { Link, useParams } from 'react-router-dom';

function Search() {

    const params = useParams();

    const [subcatlist, setsubcatlist] = useState([]);
    const [catData, setCatData] = useState([]);


    useEffect(() => {

        axios.get(_apiurlsubcategory + "fetch?catname=" + params.catname).then((response) => {
            setsubcatlist(response.data)

        })
        axios.get(_apiurlcategory + "fetch").then((result) => {
            setCatData(result.data)
        })
    })

    return (
        <div className='row col-12 '>
            <div className='col-4' id='child1' >
                <h2>Select Category</h2>
                <ul>

                    {
                        catData.map((row) => (

                            <li ><Link to={'/search/' + (row.catname)}>{row.catname}</Link></li>
                        ))
                    }

                </ul>
            </div>
            {/* <center> */}


            <div id="main" className='col-8' >
                <h1>This are SubCategory :-{params.catname}</h1>

                {
                    // alert(params.catname)

                    subcatlist.map((row) => (
                        <Link to={'/bidding/'+(row.subcatname)}>
                            <div className="mainpart">
                                <center>
                                    <img src={"../assets/uploads/subicons/" + (row.subcaticonname)} />
                                    <span>Category Name :-{row.catname}</span>
                                    <br />
                                    <span>SubCategory Name :-{row.subcatname}</span>
                                </center>
                            </div>
                        </Link>

                    ))

                }
            </div>
            {/* </center> */}
        </div>
    )
}

export default Search;