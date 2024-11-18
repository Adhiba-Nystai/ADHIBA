import React from "react";
import './imag.css'
import pic1 from '../ADHIBAWEBSITE-HOSTED/font/ptz.png'
import pic2 from '../ADHIBAWEBSITE-HOSTED/font/pic2.avif'
import pic3 from '../ADHIBAWEBSITE-HOSTED/font/pic3.avif'
import pic4 from '../ADHIBAWEBSITE-HOSTED/font/pic4.avif'
import pic5 from '../ADHIBAWEBSITE-HOSTED/font/pic5.avif'






export default function Tabs() {
    return (
        <>

            {/* SLidetabs scrolling */}
            <div className="desktop-view">
            <section className="slidetabsmainsection ">
            <h1 className="text-white text-center ">LET YOU KNOW</h1>
            <div className="container tebtoptext">

           
      <p >tab one</p>
      <p >tab one</p>
      <p >tab one</p>
      <p >tab one</p>
      <p >tab one</p>
      <p >tab one</p>
            </div>
                <div className=" d-flex tab3 justify-content-center ">
                    
                    <ul class="slidetabsrtabs">

                        <li class="slidetabs">
                            <div className="d-flex tab3">
                                <img src={pic1} className="slimg" />
                                <div className=" slitex">
                                    <h3 className="">Tab first Content</h3>
                                    <p className="">1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                                </div>
                            </div>
                        </li>
                        <li class="slidetabs">
                            <div className="d-flex tab3">
                                <img src={pic2} className="slimg" />
                                <div className=" slitex">
                                    <h3 className="">Tab Two Content</h3>
                                    <p className="">2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                                </div>
                            </div>
                        </li>
                        <li class="slidetabs">
                            <div className="d-flex tab3">
                                <img src={pic3} className="slimg" />
                                <div className=" slitex">
                                    <h3 className="">Tab Third Content</h3>
                                    <p className="">3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                                </div>
                            </div>
                        </li>
                        <li class="slidetabs">
                            <div className="d-flex tab3">
                                <img src={pic4} className="slimg" />
                                <div className=" slitex">
                                    <h3 className="">Tab Fourth Content</h3>
                                    <p className="">4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                                </div>
                            </div>
                        </li>
                        <li class="slidetabs">
                            <div className="d-flex tab3">
                                <img src={pic5} className="slimg" />
                                <div className=" slitex">
                                    <h3 className="">Tab Fifth Content</h3>
                                    <p className="">5Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            </div>






















            <div className="mobile-view">
            <h1 className="text-center">LET YOU KNOW</h1>
            <div class="card mb-3" style={{maxwidth: "540px;"}}>
                <h1 className="text-center">Tab-1</h1>
  <div class="row g-0">
    <div class=" col-md-4">
      <img src={pic1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class=" col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       
      </div>
    </div>
  </div>
</div>
            <div class="card mb-3" style={{maxwidth: "540px;"}}>
                <h1 className="text-center">Tab-2</h1>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={pic2} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       
      </div>
    </div>
  </div>
</div>
            <div class="card mb-3" style={{maxwidth: "540px;"}}>
                <h1 className="text-center">Tab-3</h1>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={pic3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       
      </div>
    </div>
  </div>
</div>
            <div class="card mb-3" style={{maxwidth: "540px;"}}>
                <h1 className="text-center">Tab-4</h1>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={pic4} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       
      </div>
    </div>
  </div>
</div>
            <div class="card mb-3" style={{maxwidth: "540px;"}}>
                <h1 className="text-center">Tab-5</h1>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={pic5} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       
      </div>
    </div>
  </div>
</div>
           
            </div>




        </>
    )
}