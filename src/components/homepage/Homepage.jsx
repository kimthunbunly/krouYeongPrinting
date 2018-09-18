import React from 'react';
import image1 from './background.jpg';
import banner from './banner.jpg';
import printing from './printing.jpg';
import './index.css';
import wwf from './logo/wwf.jpg';
import cbc from './logo/cbc.jpg';
import wing from './logo/wing.jpg';
import ngo from './logo/ngo.jpg';
import packages from './image/package.png';
import kakada from './image/kakada.png';
import leakhena from './image/leakhena.png';
import socheat from './image/socheat.png';
import maliya from './image/maliya.png';
import piseth from './image/piseth.png';
import mengheang from './image/mengheang.png';
import david from './image/david.png';
import sa from './image/sa.png';
import footer from './image/footer.png';
// import Maps from './maps';

export default class Homepage extends React.Component{
    render(){
        return(
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src={image1} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={banner} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={printing} alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <br/>
                <div className="container">
                    <div className="row justify-content-md-center cus-padding bg-color">
                        <div className="col-sm text-center cus-margin">
                            <h3>Our Product</h3>
                            <br/>
                            <img src={packages} alt="packages"/>
                            <br/>
                            <p>Sometimes the scent of seasonal hand wash is all we need to
                                rouse our holiday spirits. Available in an array of festive fragra
                                nces, our naturally derived gel hand wash will leave your hand
                                s soft, clean and ready to be tucked into a pair of fair isle mitte
                                ns. It really is the most wonderful time of the year.</p>
                        </div>
                        <div className="col-sm text-center cus-margin">
                            <h3>Our Services</h3>
                            <br/>
                            <img src={packages} alt="packages"/>
                            <br/>
                            <p>Sometimes the scent of seasonal hand wash is all we need to
                                rouse our holiday spirits. Available in an array of festive fragra
                                nces, our naturally derived gel hand wash will leave your hand
                                s soft, clean and ready to be tucked into a pair of fair isle mitte
                                ns. It really is the most wonderful time of the year.</p>
                        </div>
                        <div className="col-sm text-center cus-margin">
                            <h3>Our Services</h3>
                            <br/>
                            <img src={packages} alt="packages"/>
                            <br/>
                            <p>Sometimes the scent of seasonal hand wash is all we need to
                                rouse our holiday spirits. Available in an array of festive fragra
                                nces, our naturally derived gel hand wash will leave your hand
                                s soft, clean and ready to be tucked into a pair of fair isle mitte
                                ns. It really is the most wonderful time of the year.</p>
                        </div>
                    </div>
                    <br/>
                    <div className="text-center">
                        <h3>Our Partner</h3>
                        <div className="row justify-conten-md-center">
                            <div className="col-sm">
                                <img className="img-fluid" src={wwf} alt="wwf"/>
                            </div>
                            <div className="col-sm">
                                <img className="img-fluid" src={ngo} alt="ngo"/>
                            </div>
                            <div className="col-sm">
                                <img className="img-fluid" src={wing} alt="wing"/>
                            </div>
                            <div className="col-sm">
                                <img className="img-fluid" src={cbc} alt="cbc"/>
                            </div>
                            <div className="col-sm">
                                <img className="img-fluid" src={cbc} alt="cbc"/>
                            </div>
                            <div className="col-sm">
                                <img className="img-fluid" src={cbc} alt="cbc"/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="text-center">Our Team</h3>
                        <br/>
                        <div className="row justify-content-md-center">
                            <div className="col-sm text-center">
                                <img src={kakada} alt="boss"/>
                                <h5>Mr. CHHEANG KAKADA</h5>
                                <p>General Manager</p>
                            </div>
                            <div className="col-sm text-center">
                                <img src={leakhena} alt="boss"/>
                                <h5>Mrs. PHON LEAKHENA</h5>
                                <p>Accounting</p>
                            </div>
                            <div className="col-sm text-center">
                                <img src={socheat} alt="boss"/>
                                <h5>Mr. CHHEANG SOCHEAT</h5>
                                <p>Sponsor & Founder</p>
                            </div>
                            <div className="col-sm text-center">
                                <img src={maliya} alt="boss"/>
                                <h5>Mr. HUN MALIYA</h5>
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-sm text-center">
                                <img src={piseth} alt="boss"/>
                                <h5>Mr. PISETH</h5>
                                <p>IT-Designer</p>
                            </div>
                            <div className="col-sm text-center">
                                <img src={mengheang} alt="boss"/>
                                <h5>Mr. MENG HEANG</h5>
                                <p>IT-Designer</p>
                            </div>
                            <div className="col-sm text-center">
                                <img src={david} alt="boss"/>
                                <h5>Mr. DAVID</h5>
                                <p>IT-Designer</p>
                            </div>
                            <div className="col-sm text-center">
                                <img src={sa} alt="boss"/>
                                <h5>Mr. SA SA</h5>
                                <p>General Printer</p>
                            </div>
                        </div>
                        <br/>
                        <div className="row justify-content-md-center bg-color cus-pad-message">                            
                            <form className="col-8">
                                <h3 className="row">Send Message</h3>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <br/>
                        {/* <Maps/> */}
                        <br/>
                        <div className="row justify-content-md-center">
                            <a href="#" className="col-sm-2 nav-link">Privacy Policy</a>
                            <a href="#" className="col-sm-2 nav-link">Terms of Use</a>
                            <a href="#" className="col-sm-2 nav-link">Cookies</a>
                        </div>
                        <div className="row justify-content-md-center">
                            <img src={footer} alt="footer"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}