import { useEffect, useState } from 'react';
import axios from 'axios';
import { _apiurlcategory, _apiurlsubcategory, _apiurlproducts } from '../APIurls';

function Product() {

    const [catList, setCatList] = useState([]);
    const [SubcatList, setSubCatList] = useState([]);
    const [catnm, setcatnm] = useState();
    const [subcatnm, setsubcatnm] = useState();
    const [pname, setpname] = useState();
    const [pdes, setpdes] = useState();
    const [pbprice, setpbprice] = useState();
    const [file, setfile] = useState();
    const [output, setOutput] = useState();


    useEffect(() => {
        axios.get(_apiurlcategory + "fetch").then((response) => {
            setCatList(response.data)
        })
    })
    useEffect(() => {
        axios.get(_apiurlsubcategory + "fetch?catname=" + catnm).then((response) => {
            setSubCatList(response.data)
        })

    })

    const handleChange = (event) => {
        setfile(event.target.files[0])
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append('catname', catnm);
        formData.append('subcatname', subcatnm);
        formData.append('productname', pname);
        formData.append('productdescription', pdes);
        formData.append('productbaseprice', pbprice);
        formData.append('producticon', file);
        const config = {
            'content-type': 'multipart/form-data'
        };
        axios.post(_apiurlproducts + "save", formData, config).then((response) => {
            setOutput("Product Added Successfully");


        })
    }

    return (
        <>
            <div>
                {/* About Start */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-12">
                                <h2 class="mb-4">Add <span class="text-primary ">Products</span></h2>
                                <font style={{ "color": "blue" }} >{output}</font>
                                <form >
                                    Select Category:<br /><select value={catnm} onChange={e => setcatnm(e.target.value)} type="" className="form-control">
                                        <option selected>Choose Category</option>
                                        {
                                            catList.map((row) => (
                                                <option>{row.catname}</option>
                                            ))
                                        }
                                    </select><br />

                                    Select SubCategory:<br /><select value={subcatnm} onChange={e => setsubcatnm(e.target.value)} type="" className="form-control">
                                        <option selected>Choose Category</option>
                                        {
                                            SubcatList.map((row) => (
                                                <option>{row.subcatname}</option>
                                            ))
                                        }
                                    </select><br />

                                    Add Product Name:<br />
                                    <input value={pname} onChange={e => setpname(e.target.value)} type='text' className='form-control '></input><br />

                                    Add Product Description:<br />
                                    <input value={pdes} onChange={e => setpdes(e.target.value)} type='text' className='form-control '></input><br />

                                    Add Product Base Price:<br />
                                    <input type='text' value={pbprice} onChange={e => setpbprice(e.target.value)} className='form-control '></input><br />


                                    Add Product:<br />
                                    <input type='file' className='form-control' onChange={handleChange}></input>
                                    <br></br>
                                    <button type="button" onClick={handlesubmit} className='btn btn-primary mb-5'>Add Product</button>
                                </form>
                                <br /><br /><br />
                            </div>

                        </div>
                    </div>
                </div>
                {/* About End */}
            </div>

        </>
    )
}
export default Product;