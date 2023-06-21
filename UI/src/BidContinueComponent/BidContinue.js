import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { _apiurlcategory, _apiurlsubcategory, _apiurlproducts, _apiurlbidcontinue } from '../APIurls';
import axios from 'axios';

function BidContinue() {
    const params = useParams();
    const [email, setemail] = useState(localStorage.getItem('email'))
    const [pbprice, setpbprice] = useState(params.productbaseprice)
    const [cprice, setcprice] = useState(params.productbaseprice);
    const [product, setproduct] = useState([]);
    const [yprice, setyprice] = useState()
    const [output, setOutput] = useState();
    // alert(cprice)

    useEffect(() => {
        axios.get(_apiurlbidcontinue + "fetch").then((response) => {
            setproduct(response.data);
            if (response.data[0].email == localStorage.getItem('email')) {
                setcprice(response.data[0].productbaseprice)
            }
            else {
                setcprice(response.data[0].currentprice)
                setOutput(response.data[0].currentprice)
            }

            // alert(response.data[0].email)
        })


    })
    const handlesubmit = (e) => {
        e.preventDefault();
        var pDetails = { email: email, productbaseprice: pbprice, currentprice: cprice, userprice: yprice }

        axios.post(_apiurlbidcontinue + "save", pDetails).then((response) => {
            // setproduct(response.data);
            setOutput('data insert successffully')

            // alert(response.data.email)
        })
    }
    return (
        <>
            {/* <h1>Id:  {params._id}</h1>
            <h1>Base Price:  {params.productbaseprice}</h1> */}
            <div>
                {/* About Start */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-12">
                                <h2 class="mb-4">Add <span class="text-primary ">Products</span></h2>
                                <font style={{ "color": "blue" }} >{output}</font>
                                <form >
                                    Email:<br /><input value={email} readOnly onChange={e => setemail(e.target.value)} type="text" className="form-control" />

                                    <br />

                                    Base Price:<br /><input value={pbprice} readOnly onChange={e => setpbprice(e.target.value)} type="text" className="form-control" />
                                    <br />


                                    Current Price:<br />
                                    <input value={cprice} readOnly onChange={e => setcprice(e.target.value)} type='text' className='form-control ' />

                                    {/* {
                                        product.map((row) => (
                                            setcprice(row.productbaseprice)
                                            // <h1>{row.productbaseprice}<h1/>
                                        ))
                                    } */}
                                    <br />

                                    Your Price:<br />
                                    <input value={yprice} onChange={e => setyprice(e.target.value)} type='text' className='form-control ' /><br />


                                    <button type="button" onClick={handlesubmit} className='btn btn-primary mb-5'>Bid for Product</button>
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
export default BidContinue;