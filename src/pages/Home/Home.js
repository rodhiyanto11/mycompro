import React, { Component, Style } from 'react'
import logo from '../../../src/logo.svg'
import newlogo from '../../../src/assets/lima.png'
import {
    Card
} from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export default class Content extends Component {
    render() {
        return (
            <div>
                <section class="hero hero-bg d-flex justify-content-center align-items-center">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                                <div class="hero-text">

                                    <h1 class="text-white" data-aos="fade-up">Kami Solusi Terbaik Untuk Memajukan Bisnis Digital Anda</h1>

                                    <a href="contact.html" class="custom-btn btn-bg btn mt-3" data-aos="fade-up" data-aos-delay="100">Segera diskusikan bisnis anda!</a>
                                    <br />
                                    <strong class="d-block py-3 pl-5 text-white" data-aos="fade-up" data-aos-delay="200"> </strong>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12">
                                <div class="hero-image" data-aos="fade-up" data-aos-delay="300" >
                                    <img src={newlogo} style={{ borderRadius: 90 }} class="img-fluid" />
                                    {/* <img src="./images/working-girl.png" class="img-fluid" /> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                <section class="about section-padding pb-0" id="about">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-7 mx-auto col-md-10 col-12">
                                <div class="about-info">

                                    <h2 class="mb-4" data-aos="fade-up">PT. Logika Prima Data</h2>
                                    {/* <h2 class="mb-4" data-aos="fade-up">The best <strong>So</strong> in Rio de Janeiro</h2> */}
                                    <p class="mb-0" data-aos="fade-up">Dalam persaingan bisnis dalam era <strong>Digital</strong>, Bisnis dengan kecepatan produksi yang baik dan pengolahan data yang jitu sebagai dasar analisa akan lebih maju dibandingkan dengan pekerjaan yang dilakukan secara manual lainnya.</p>
                                    <br /><br />
                                    <p class="mb-0" data-aos="fade-up">Maka kami hadir untuk membantu anda mengembangkan bisnis anda dalam hal bisnis <strong>Apapun</strong> untuk meningkatkan produktivitas bisnis anda.</p>

                                </div>

                                <div class="about-image" data-aos="fade-up" data-aos-delay="200">

                                    <img src="images/office.png" class="img-fluid" alt="office" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                {/* <section class="project " id="project">
                    <div class="container-fluid">
                        <div class="row">

                            <div class="col-lg-12 col-12">

                                <h2 class="mb-5 text-center" data-aos="fade-up">
                                    
                     
                                </h2>

                            </div>

                        </div>
                    </div>
                </section>
 */}

                <section class="my-services section-padding">
                    <div id="services" class="container-fluid text-center">
                        <h2>Layanan</h2>

                        <br />
                        <br />
                        <div class="row slideanim" data-aos="fade-up">
                            {/* <div class="col-sm-4">
                                <i class="fa fa-globe"></i>
                                <h4>Web Application</h4>
                                <p class="service-text">Aplikasi berbasis web dengan keuntungan dapat digunakan dari semua perangkat. Mulai dari komputer, tablet, hingga smartphone. Hal ini tentu saja memudahkan pengguna untuk memiliki akses yang fleksibel sehingga produktivitas pekerjaan tidak terganggu</p>
                            </div>

                            <div class="col-sm-4">
                                <i class="fa fa-mobile"></i>
                                <h4>Mobile Application</h4>
                                <p class="service-text">Dengan memasukan bisnis anda pada aplikasi Mobile atau system yang modern pada saat ini. memungkinkan untuk meningkatkan bisnis anda</p>
                            </div> */}
                            <div class="col-sm-2"></div>
                             <div class="col-sm-4">
                            <Card style={{ width: '30rem', height : '40rem'}}>
                                <Card.Body>
                                <Card.Img variant="top" src={require('../../../src/assets/web2.png')} />
                                    <Card.Title>Web Application</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                    Aplikasi berbasis web dengan keuntungan dapat digunakan dari semua perangkat. Mulai dari komputer, tablet, hingga smartphone. Hal ini tentu saja memudahkan pengguna untuk memiliki akses yang fleksibel sehingga produktivitas pekerjaan tidak terganggu.
                                     </Card.Text>
                                    {/* <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link> */}
                                </Card.Body>
                            </Card>
                            </div>
                            
                            <div class="col-sm-4">
                            <Card style={{ width: '30rem', height : '40rem'}}>
                                <Card.Body>
                                    
                                    <Card.Img variant="top"  src={require('../../../src/assets/mobile2.png')} />
                                    
                                    <Card.Title>Mobile Application</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                   
                                    Aplikasi berbasis mobile dengan keuntungan dapat digunakan dari smartphone android dan ios yang tentu saja performanya jauh lebih cepat dan memudahkan pengguna untuk memiliki akses dari mana pun dan kapan pun.
                                     </Card.Text>
                                    {/* <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link> */}
                                </Card.Body>
                            </Card>
                            </div>
                            <div class="col-sm-2"></div>
                            {/* <div class="col-sm-4">
                            <i class="fa fa-area-chart"></i>
                                <h4>Dashboard Analytics</h4>
                                <p class="service-text">Menyajikan data untuk kebutuhan analisa pengambila keputusan bisnis anda</p>
                            </div> */}
                        </div>
                        <br /><br />

                    </div>

                </section>
                <section class="my-client " style={{marginBottom : '10%'}}>
                    <div class="container-fluid text-center">
                        <h2>Klien Kami</h2>
                        <br />
                        <br />
                        <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true }
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
    <div>
    <Card style={{ width: '15rem', height : '15rem', borderWidth : 0}}>
                                <Card.Body>
                                    
                                <Card.Img variant="top" style={{marginTop : '20%'}}  src={require("../../assets/admedika.jpg")} />
                                    
                                    {/* <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link> */}
                                
                                </Card.Body>
                            </Card>
                            </div>
                            <div>
                            <Card style={{ width: '15rem', height : '15rem', borderWidth : 0}}>
                                <Card.Body>
                                    
                                <Card.Img variant="top" style={{marginTop : '20%'}}  src={require("../../assets/telkom.png")} />
                                    
                                    {/* <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link> */}
                                
                                </Card.Body>
                            </Card>
                            </div>
                            <div>
                            <Card style={{ width: '15rem', height : '15rem', borderWidth : 0}}>
                                <Card.Body>
                                    
                                <Card.Img variant="top" style={{marginTop : '20%'}} src={require("../../assets/mitek.png")} />
                                    
                                    {/* <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link> */}
                                
                                </Card.Body>
                            </Card>
                            </div>
                            <div>
<Card style={{ width: '15rem', height : '15rem', borderWidth : 0}}>
                                <Card.Body>
                                    
                                    <Card.Img variant="top" style={{marginTop : '20%'}}  src={require("../../assets/puskesmas.png")} />
                                    
                                    {/* <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link> */}
                                
                                </Card.Body>
                            </Card>
                            </div>

  {/* <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> */}
</Carousel>;
                        

                    </div>

                </section>
                {/* <section class="project " id="project">
                    <div class="container-fluid">
                        <div class="row">

                            <div class="col-lg-12 col-12">

                                <h2 class="mb-5 text-center" data-aos="fade-up">
                                    
                     
                                </h2>

                            </div>

                        </div>
                    </div>
                </section>
 */}
                {/* <section class="testimonial section-padding"> */}
                    {/* <div class="container">
                        <div class="row"> */}

                        
{/* <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> */}

                        {/* </div>
                    </div> */}
                {/* </section> */}
            </div>
        )
    }
}
