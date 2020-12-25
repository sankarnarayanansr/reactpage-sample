import React, { Component} from 'react';
import {bounce} from 'react-animations';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Carousel from 'react-bootstrap/Carousel'
// import logo from './logo.svg';
import Portfolio from './components/Portfolio';
import Modal from "react-modal"
import './App.css';
import axios from 'axios';
import Radium, {StyleRoot} from 'radium';


const styles={
  bounce: {
    animation: 'x 3s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  bounce1: {
    animation: '5 4s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  bounce2: {
    animation: '5 2s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  bounce3: {
    animation: '5 3s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}
var portfolioLinks = [
  {
    title: 'Threads',
    caption: 'Illustration'
  },
  {
    title: 'Explore',
    caption: 'Graphic Design'
  },
  {
    title: 'Finish',
    caption: 'Identity'
  },
  {
    title: 'Lines',
    caption: 'Branding'
  },
  {
    title: 'Southwest',
    caption: 'Website Design'
  },
  {
    title: 'Window',
    caption: 'Photography'
  },

]

class App extends Component {
  
 state={
    isOpen:false,
    islogin:false,
    usename:'',
    pass:'',
    
    
  }
  async validate(){
    console.log(this.state)
    if (!this.state.usename){
      return;
    }
    if (!this.state.pass){
      return;
    }
    try{
      let res=await axios.post("http://127.0.0.1:5000/login",this.state);
     console.log(res)
      if (res.status===200){
        console.log('into')
        localStorage.setItem('logged',true)
        window.location.reload(false)
        
      }
     else{
      this.resetform();
     }
      
    }
    catch(e){
      this.resetform();
    }
      
   }
  setUsername=event=>{
    this.setState({usename:event.target.value,pass:this.state.pass});
    // console.log(this.state)

  }
  setPassword=event=>{
    this.setState({usename:this.state.usename,pass:event.target.value});
    // console.log(this.state)
  }
  toggleModal=() =>{
    if (this.state.isOpen===false){
    this.setState({isOpen:true})}
    else{
      this.setState({isOpen:false})
    }

  }
  togglelogin=()=>{
    if (this.state.islogin===false){
      this.setState({islogin:true})}
      else{
        this.setState({islogin:false})
      }
  }
  resetform=()=>{
    document.getElementById("ux").value="";
    document.getElementById("px").value="";
}

 render(){
   var logged=localStorage.getItem('logged')
   console.log("logged"+logged)
   if(logged===undefined){
     logged=false
     
   }
  return (
    <main>
      <center>
      <Modal 
        isOpen={this.state.islogin}
        onRequestClose={this.togglelogin}
        contentLabel="My dialog" className="login"
      ><br></br>
      <p className="centertext">Logo</p>

        <div className="inp" >
          <input type="text" placeholder="Username" id="ux" name="uname" onChange={this.setUsername} class="form-control col-md-8"></input><br></br>
          <input type="password" placeholder="Password" id="px" name="pass" onChange={this.setPassword} class="form-control  col-md-8"></input><br></br>
          <button class="btn btn-dark btw" onClick={()=>this.validate()}>Login</button>
          <button class="btn btn-danger btw" onClick={this.togglelogin}>Cancel</button>
        </div>
        </Modal>


       <Modal 
        isOpen={this.state.isOpen}
        onRequestClose={this.toggleModal}
        contentLabel="My dialog" className="custom"
      >
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./assets/img/vr.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Project 1</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./assets/img/vr.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Project 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./assets/img/vr.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Project 3</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <button onClick={this.toggleModal} class="btn btn-danger btx">Close X</button>
      </Modal></center>

    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top " id="mainNav">
    <div className="container">
    
      <a className="navbar-brand js-scroll-trigger" href="#page-top" >Edukaizen</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
          {!logged?(
          <li className="nav-item">
          <button className="btn btn-primary bty " onClick={this.togglelogin}>LOGIN</button>
          </li>):("")}
        </ul>
      </div>
    </div>
  </nav>
  <StyleRoot>
 
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
    <div className="intro-lead-in" style={styles.bounce}>Welcome To Edukaizen!</div> 
   
        <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
        <button className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" onClick={this.toggleModal}>Tell Me More</button>
      </div>
    </div>
  </header>
  

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4" onClick={this.toggleModal}>
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
      
            <i className="fa fa-microchip fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading" style={styles.bounce1}>Virtual Reality</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4" onClick={this.toggleModal}>
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading" style={styles.bounce2}>Software Solutions</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4" onClick={this.toggleModal}>
          <span className="fa-stack fa-4x">
         
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-expand fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading" style={styles.bounce3}>Augmented Reality</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section></StyleRoot>  

  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={require('./assets/img/1.jpg')} alt=""/>
            <h4>One</h4>
            <p className="text-muted">Lead Designer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={require('./assets/img/1.jpg')} alt=""/>
            <h4>Two</h4>
            <p className="text-muted">Lead Marketer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={require('./assets/img/1.jpg')} alt=""/>
            <h4>Three</h4>
            <p className="text-muted">Lead Developer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Your Website 2020</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
    </main>
  );
 }
};

export default App;
