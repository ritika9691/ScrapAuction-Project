import { Route, Routes } from 'react-router-dom';
import About from './AboutComponant/About';
import Login from './LoginComponant/Login'
import Register from './RegisterComponant/Register'
// import nRegister from './nRegisterComponent/newRegister'
import Service from './ServiceComponant/Service'
import Contact from './ContactComponant/Contact'
import './App.css';
import Content from './ContentComponant/Content';
import Header from './HeaderComponant/Header';
import Footer from './FooterComponant/Footer';
import Topbar from './TopbarComponant/Topbar';
import Banner from './BannerComponant/Banner';
import Admin from './AdminhomeComponent/Admin';
import Userhome from './UserhomeComponent/Userhome';
import Logout from './LogoutComponent/Logout';
import ManageUser from './ManageUserComponent/ManageUser';
import AddCategory from './AddCategoryComponent/AddCategory';
import AddSubCategory from './AddSubCategoryComponent/AddSubCategory';
import UpdateProfile from './UpdateProfileComponent/UpdateProfile';
import ChangePass from './ChangePasswordComponent/ChangePass';
import Auction from './AuctionComponent/Auction';
import Search from './SearchComponents/Search';
import Product from './ProductComponent/Product';
import Bidding from './BiddingComponent/Bidding';
import Bid from './BidComponent/Bid';
import BidContinue from './BidContinueComponent/BidContinue';
// import Props from './Props/Props';
function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Routes>
        <Route path='/' element={<Banner />}></Route>
      </Routes>

      {/* <Banner/> */}
      <Routes>
        <Route path='/' element={<Content />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}>
          
        </Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/nRegister' element={<nRegister/>}></Route>
        {/* <Route path='/nRegister' element={<nRegister/>}></Route> */}

        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/user' element={<Userhome />}></Route>
        <Route path='/auction' element={<Auction />}></Route>

        <Route path='/logout' element={<Logout />}></Route>


        <Route path='/changePass' element={<ChangePass />}></Route>

        <Route path='/manageuser' element={<ManageUser />}></Route>
        <Route path='/addcategory' element={<AddCategory />}></Route>
        <Route path='/addsubcategory' element={<AddSubCategory />}></Route>
        <Route path='/updateProfile' element={<UpdateProfile />}></Route>
        <Route path='/search/:catname' element={<Search />}></Route>
        <Route path='/bidding/:subcatname' element={<Bidding />}></Route>
        <Route path='/bid/:_id' element={<Bid />}></Route>
        <Route path='/bidcontinue/:_id/:productbaseprice' element={<BidContinue/>}></Route>
        <Route path='/products' element={<Product />}></Route>




        {/* <Route path='/propex' element={<Props />}></Route> */}

      </Routes>

      <Footer />

      <footer class=" page-footer2 " >
        <div class="container">
          <div class="row ">
            <div class="col-md-6 px-5">
              <p>Copyright 2020. This template designed by <a>Ritika Bhawsar</a></p>
            </div>
            <div class="col-md-6 text-right">
              <div class="sosmed-button">
                <a><span class="mai-logo-facebook-f"></span></a>
                <a><span class="mai-logo-twitter"></span></a>
                <a><span class="mai-logo-youtube"></span></a>
                <a><span class="mai-logo-linkedin"></span></a>
              </div>
            </div>
          </div>
        </div>
      </footer>


      <div class="back-to-top"></div>

    </>
  );
}

export default App;
