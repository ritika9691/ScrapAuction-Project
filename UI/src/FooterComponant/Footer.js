import { useEffect, useState } from 'react';
import './Footer.css';
function Footer() {
    const [FooterConent, setFooterContent] = useState();

    useEffect(() => {
        setInterval(() => {
            if (localStorage.getItem("role") == "user" || localStorage.getItem("role") == "admin") {
                setFooterContent()
            }
            else {
                setFooterContent(<>
                    <footer class="page-footer">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 py-3">
                                    <h3>Scrap<span class="fg-primary">Auction</span></h3>
                                </div>
                                <div class="col-lg-3 py-3">
                                    <h5>Contact Information</h5>
                                    <p>Indore.</p>
                                    <p>Email: ScrapAuction@gmail.com</p>
                                    <p>Phone: +23239803433</p>
                                </div>
                                <div class="col-lg-3 py-3">
                                    <h5>Company</h5>
                                    <ul class="footer-menu">
                                        <li><a>Career</a></li>
                                        <li><a>Resources</a></li>
                                        <li><a>News & Feed</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-3 py-3">
                                    <h5>Newsletter</h5>
                                    <form action="#">
                                        <input type="text" class="form-control" placeholder="Enter your email" />
                                        <button type="button" class="btn btn-primary btn-sm mt-2">Submit</button>
                                    </form>
                                </div>
                            </div>

                            <hr />
                        </div>
                    </footer>
                </>)
            }
        }, 100);
    }, [])
    return (<>{FooterConent}</>
    )
}
export default Footer;