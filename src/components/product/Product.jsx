import React from 'react';
import './index.css';
import allproduct from './img/allproduct.png';
import namecard from './img/namecard.png';
import book from './img/book.png';

export default class Product extends React.Component{
    render(){
        return(
            <div> 
                <div className="bg-pvc">
                    <div className="container cus-padding-top">
                        <p>Product with best quality</p>
                        <h3>Product with best quality</h3>
                        <div className="row justify-content-md-center">
                            <img src={allproduct} className="img-fluid cus-img-png" alt="allproduct"/>
                        </div>
                    </div>
                </div>

                {/* content of main */}
                
                <div className="container">
                    <div className="row cus-padding-top">
                        <div className="col-sm-6 text-center">
                            <img src={namecard} className="img-fluid cus-tran-img" alt="NameCard"/>
                        </div>
                        <div className="col-sm-6">
                            <h3>NameCards</h3>
                            <hr/>
                            <ul>
                                <li><h5>Type: <small>Spiral,Binding,Soft Cover</small></h5></li>
                                <li><h5>Material: <small>Matte & Glossy Paper (all weights & sizes)</small></h5></li>                                
                                <li><h5>Price: <small>Standand of price in Cambodia</small></h5></li>
                                <li><h5>Complete: <small>Fast & Safe</small></h5></li>
                                <li><h5>Finish: <small>Check step by step</small></h5></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row cus-padding-top bg-pvc">
                        <div className="col-sm-6 cus-padding-left">
                            <h3>Books</h3>
                            <hr/>
                            <ul>
                                <li><h5>Type: <small>Spiral,Binding,Soft Cover</small></h5></li>
                                <li><h5>Material: <small>Matte & Glossy Paper (all weights & sizes)</small></h5></li>                                
                                <li><h5>Price: <small>Standand of price in Cambodia</small></h5></li>
                                <li><h5>Complete: <small>Fast & Safe</small></h5></li>
                                <li><h5>Finish: <small>Check step by step</small></h5></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 text-center">
                            <img src={book} className="img-fluid cus-tran-img" alt="book"/>
                        </div>
                    </div>
                    <div className="row cus-padding-top">
                        <div className="col-sm-6 text-center">
                            <img src={namecard} className="img-fluid cus-tran-img" alt="NameCard"/>
                        </div>
                        <div className="col-sm-6">
                            <h3>Books</h3>
                            <hr/>
                            <ul>
                                <li><h5>Type: <small>Spiral,Binding,Soft Cover</small></h5></li>
                                <li><h5>Material: <small>Matte & Glossy Paper (all weights & sizes)</small></h5></li>                                
                                <li><h5>Price: <small>Standand of price in Cambodia</small></h5></li>
                                <li><h5>Complete: <small>Fast & Safe</small></h5></li>
                                <li><h5>Finish: <small>Check step by step</small></h5></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row cus-padding-top bg-pvc">
                        <div className="col-sm-6 cus-padding-left">
                            <h3>Books</h3>
                            <hr/>
                            <ul>
                                <li><h5>Type: <small>Spiral,Binding,Soft Cover</small></h5></li>
                                <li><h5>Material: <small>Matte & Glossy Paper (all weights & sizes)</small></h5></li>                                
                                <li><h5>Price: <small>Standand of price in Cambodia</small></h5></li>
                                <li><h5>Complete: <small>Fast & Safe</small></h5></li>
                                <li><h5>Finish: <small>Check step by step</small></h5></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 text-center">
                            <img src={namecard} className="img-fluid cus-tran-img" alt="NameCard"/>
                        </div>
                    </div>
                    <div className="row cus-padding-top">
                        <div className="col-sm-6 text-center">
                            <img src={namecard} className="img-fluid cus-tran-img" alt="NameCard"/>
                        </div>
                        <div className="col-sm-6">
                            <h3>Books</h3>
                            <hr/>
                            <ul>
                                <li><h5>Type: <small>Spiral,Binding,Soft Cover</small></h5></li>
                                <li><h5>Material: <small>Matte & Glossy Paper (all weights & sizes)</small></h5></li>                                
                                <li><h5>Price: <small>Standand of price in Cambodia</small></h5></li>
                                <li><h5>Complete: <small>Fast & Safe</small></h5></li>
                                <li><h5>Finish: <small>Check step by step</small></h5></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row cus-padding-top bg-pvc">
                        <div className="col-sm-6 cus-padding-left">
                            <h3>Books</h3>
                            <hr/>
                            <ul>
                                <li><h5>Type: <small>Spiral,Binding,Soft Cover</small></h5></li>
                                <li><h5>Material: <small>Matte & Glossy Paper (all weights & sizes)</small></h5></li>                                
                                <li><h5>Price: <small>Standand of price in Cambodia</small></h5></li>
                                <li><h5>Complete: <small>Fast & Safe</small></h5></li>
                                <li><h5>Finish: <small>Check step by step</small></h5></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 text-center">
                            <img src={namecard} className="img-fluid cus-tran-img" alt="NameCard"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}