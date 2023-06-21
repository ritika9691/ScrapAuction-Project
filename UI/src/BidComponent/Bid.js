import { useEffect, useState } from 'react';
import { _apiurlcategory, _apiurlsubcategory, _apiurlproducts } from '../APIurls';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function Bid() {
    const [list, setList] = useState([]);
    const [time, setTime] = useState();
    const [diffrence, setDiffrence] = useState();
    const params = useParams();

    var num = 48 - diffrence / (3.6e+6);
    // var num=10;
    var hour = parseInt(num);
    var min = (num - hour) * 60;
    var minite = parseInt(min);
    var sec = parseInt((min - minite) * 60);

    useEffect(() => {
        axios.get(_apiurlproducts + "fetch?_id=" + params._id).then((response) => {
            setList(response.data);
            setTime(response.data[0].info);
            setDiffrence(Date.now() - time);


        })
    })

    return (
        <>
            <center><h1 className="fg-primary">Bidd Now</h1></center>
            {
                list.map((row) => (
                    <div>
                        <div className='mb-5' style={{ "width": "500px", "height": "430px", "marginLeft": "50px" }}>

                            <div style={{ "width": "400px", "height": "360px", "marginLeft": "50px", "float": "left" }} >
                                <div>

                                    <img style={{ "width": "300px", "height": "200px", "marginTop": "5px" }} src={"../assets/uploads/producticons/" + (row.
                                        producticonname)} /><br />
                                </div>
                                <div>

                                    <span>Product name:-{row.productname}</span><br />
                                    <span>Product name:-{row.producticonname}</span><br />
                                    <span> Base Price :-<b>{row.productbaseprice}</b></span><br /><br />
                                    {
                                        diffrence < 172800000 &&
                                        <Link to={'/bidcontinue/' + (row._id)+'/'+(row.productbaseprice)}>                                        <button className='btn btn-success mb-5' >Continue Bid</button>
                                        </Link>
                                    }
                                    {
                                        diffrence > 172800000 &&
                                        <button className='btn btn-danger mb-5' >Bid End</button>
                                    }
                                    &nbsp;&nbsp;
                                    {
                                        hour >= 0 && minite >= 0 && sec >= 0 &&
                                        <button style={{ "margin-bottom": "50px" }} class='btn btn-warning '>Time to go :-  {hour}:{minite}:{sec}</button>
                                    }
                                </div>
                            </div>
                        </div >

                    </div>
                ))
            }
        </>
    )
}
export default Bid;