import { useEffect, useState } from 'react';
import { _apiurlcategory, _apiurlsubcategory, _apiurlproducts } from '../APIurls';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Bidding() {

    const [product, setproduct] = useState([]);
    const params = useParams();
    useEffect(() => {
        axios.get(_apiurlproducts + "fetch?subcatname=" + params.subcatname).then((response) => {
            // setOutput("Product Added Successfully");
            setproduct(response.data);


        })
    }, [])
    return (
        <>
            <a class="h2" style={{ "marginLeft": "70px" }}>Welcome for <span class="text-primary">Bidding</span></a>

            {

                product.map((row) => (
                    <div className='mb-5' style={{ "width": "500px", "height": "370px",  "marginLeft": "50px" }}>

                        <div style={{ "width": "400px", "height": "360px", "marginLeft": "50px", "float": "left" }} >
                          <div>                            <img style={{ "width": "300px", "height": "200px", "marginTop": "5px" }} src={"../assets/uploads/producticons/" + (row.
                                producticonname)} /><br />
                           </div>

                            <div>
                                <span>Product name:-{row.productname}</span><br />
                                <span>Product name:-{row.producticonname}</span><br />
                                <span> Base Price :-<b>{row.productbaseprice}</b></span><br />
                                <Link to={'/bid/'+(row._id)}><button type='button' className='btn btn-primary '>Bid Now</button></Link>
                            </div>
                        </div>
                    </div >

                ))
            }
            {/* </center> */}



        </>
    )
}
export default Bidding;