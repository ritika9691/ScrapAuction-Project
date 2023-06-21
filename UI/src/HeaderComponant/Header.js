import { Link } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';
import Auth from '../AuthComponnent/Auth';
import { _apiurluser } from '../APIurls';
import { _apiurlcategory } from '../APIurls';
import axios from 'axios';


function Header() {
    const [HeaderContent, setHeaderContent] = useState();
    const [search, setSearch] = useState();
    const [icon, setCatIconName] = useState();

    const handleSubmit = (e) => {

        axios.get(_apiurlcategory + "fetch?catname=" + search).then((result) => {
            console.log(result.data[0].catname);
            if (result.data[0].catname == search) {
                setSearch(result.data[0].catname)
                setCatIconName(result.data[0].caticonname)
            }
        }).catch((err) => {
            setSearch("");
            setCatIconName("Record Not Found");

        })
    }


    useEffect(() => {
        if (localStorage.getItem("role") == "user") {
            setHeaderContent(
                <><nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <a class="h2 ">Scrap<span class="text-primary">Auction</span></a>

                        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-collapse collapse" id="navbarContent">
                            <ul class="navbar-nav ml-auto pt-3 pt-lg-0">

                                <li >
                                    <Link class="nav-link" to='/user'>User Home</Link>

                                </li>

                                <div class="dropdown">
                                    <a class=" dropdown-toggle nav-link " type="button" data-toggle="dropdown">
                                        Settings
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a><Link class="nav-link" to='/changePass'>Update Password</Link></a></li>
                                        <li><a><Link class="nav-link" to='/updateProfile'>Edit Profile</Link></a></li>

                                    </ul>
                                </div>

                                <li >
                                    <a > <Link class="nav-link" to='/auction'>Auction</Link></a>
                                </li>

                                <li>

                                    <a > <Link class="nav-link" to='/products'>Add Product</Link></a>

                                </li>

                                <li >
                                    <input type='text' value={search} onChange={e => setSearch(e.target.value)} />

                                    <button type='button' onClick={handleSubmit} >Search</button>
                                </li>
                                {/* for props example start */}
                                {/* <l1>
                                <a > <Link class="nav-link" to='/propex'>Props</Link></a>

                                </l1> */}
                                {/* for props example end */}

                                <li >
                                    <a > <Link class="nav-link" to='/logOut'>LogOut</Link></a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                    {/* <center>
             <>

<h2 className="fg-primary mt-3">Category </h2>

<div class="row-cols-1 row-cols-md-3  g-4">
          <div class="cols">
                <div class="card">
                    <img class="card-img-top" style={{ "height": "300px" }} src={"./assets/uploads/caticons/" + (icon)} alt="image" />
                    <div class="card-body">

                        <h5 class="card-subtitle mb-2 text-muted">Category Name : {search}</h5>
                        <p class="card-text">Category Icon Name : {icon}</p>
                    </div>
                </div>
            </div></div>

</>
             </center> */}
                </>);
        }
        else if (localStorage.getItem("role") == "admin") {
            setHeaderContent(<nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="h2 ">Scrap<span class="text-primary">Auction</span></a>

                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="navbar-collapse collapse" id="navbarContent">
                        <ul class="navbar-nav ml-auto pt-3 pt-lg-0">
                            <li >
                                <a><Link class="nav-link" to='/admin'>Admin Home</Link></a>
                            </li>
                            <li >
                                <a > <Link class="nav-link" to='/manageuser'>ManageUser</Link></a>
                            </li>
                            <div class="dropdown">
                                <a class=" dropdown-toggle nav-link " type="button" data-toggle="dropdown">Category</a>
                                <ul class="dropdown-menu">
                                    <li><a><Link class="nav-link" to='/addcategory'>Add Category</Link></a></li>
                                    <li><a><Link class="nav-link" to='/addsubcategory'>AddSubCategory</Link></a></li>

                                </ul>
                            </div>


                            <div class="dropdown">
                                <a class=" dropdown-toggle nav-link " type="button" data-toggle="dropdown">
                                    Settings
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a><Link class="nav-link" to='/changePass'>Update Password</Link></a></li>
                                    <li><a><Link class="nav-link" to='/updateProfile'>Edit Profile</Link></a></li>

                                </ul>
                            </div>



                            <li >
                                <a > <Link class="nav-link" to='/logOut'>LogOut</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>);
        }
        else {
            setHeaderContent(
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <a class="h2 ">Scrap<span class="text-primary">Auction</span></a>

                        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-collapse collapse" id="navbarContent">
                            <ul class="navbar-nav ml-auto pt-3 pt-lg-0">
                                <li>
                                    <a > <Link class="nav-link active" to='/'>Home</Link></a>
                                </li>
                                <li  >
                                    <a > <Link class="nav-link" to='/about'>About</Link> </a>
                                </li>
                                <li>
                                    <a> <Link class="nav-link" to='/contact'>Contact</Link></a>
                                </li>
                                <li >
                                    <a> <Link class="nav-link" to='/service'>Service</Link></a>
                                </li>
                                <li >
                                    <a> <Link class="nav-link" to='/register'>Register</Link></a>
                                </li>
                                <li >
                                    <a> <Link class="nav-link" to='/login'>Login</Link></a>
                                </li>
                                <li >
                                    <a > <Link class="nav-link" to='/nRegister'>New Register</Link></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            )
        }
    })

    return (
        <>

            <Auth />
            {HeaderContent}

        </>
    )
}
export default Header;



