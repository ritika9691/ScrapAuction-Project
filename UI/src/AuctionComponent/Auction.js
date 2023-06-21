import axios from "axios";
import { useEffect, useState } from "react";
import { _apiurlcategory } from "../APIurls";
import { Link } from "react-router-dom";

function Auction() {
    const [catData, setCatData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            axios.get(_apiurlcategory + "fetch").then((result) => {
                setCatData(result.data)
            })
        }, 1);
    })
    return (
        <>
            <center>
                <h2 className="fg-primary mt-3"> All Category</h2>
                <div class="row w-75 row-cols-1 row-cols-md-3 g-4">
                    {
                        catData.map((value) => (
                            <div class="cols ">
                                <div class="card">

                                    <Link to={'/search/' + (value.catname)}>
                                        <img class="card-img-top" style={{ "height": "300px" }} src={"./assets/uploads/caticons/" + (value.caticonname)} alt="image" />
                                    </Link>

                                    <div class="card-body ">

                                        <h5 class="card-subtitle mb-2 text-muted">Category Name : {value.catname}</h5>
                                        <p class="card-text">Category Icon Name : {value.caticonname}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </center>
        </>
    )
}

export default Auction;