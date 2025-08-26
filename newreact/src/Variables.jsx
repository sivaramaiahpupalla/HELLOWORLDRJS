import React,{useState} from 'react'

const Variables = () => {

const [input,setInput] = useState({
  a:'',
  b: '',
});
 
 const {a,b} = input;

 const [submitval,setSubmitval] = useState(false);
 const [val,setVal] = useState('')
 const [msg,setMsg] = useState('')
 const [ cal, setCal] = useState()

 const handleChangeOne = (event) => {
   setInput({...input, [event.target.name]:[event.target.value]});
 }
   const handlePrint = (event) => {
       setSubmitval(true); 
       setMsg('')
   }
   const handleAdd = () => {
    setVal('ADD')
        setCal(parseFloat(a)+ parseFloat(b));
        setMsg('')
   
       }
    const handleSub = () => {
      
      if(parseFloat(b)<parseFloat(a))
      {
        setVal('SUB');
              setCal(parseFloat(a)-parseFloat(b));
      }
      else {
        setVal('')
              setMsg("subtraction not possible");
      }
      
   }
      const handleMul = () => {
        setVal('MUL')  
        setCal(parseFloat(a)*parseFloat(b))
        setMsg('')
    }
    const handleDiv = () => {
        setVal('DIV') 
        setCal(parseFloat(a)/parseFloat(b))
        setMsg('')
    }
  
  return (
  <>
    <h1> WELCOME TO THE REACTJS</h1>
    <div>
      <label htmlFor="a">Enter A value :</label>
       <input type="text" name='a'  value ={input.a} onChange={handleChangeOne}/>
    </div>
    <div>
      <label htmlFor="b">Enter B value :</label>
       <input type="text" name='b' value ={input.b} onChange ={handleChangeOne} /> 
    </div>
    <div>
      <button  onClick={handlePrint}>print</button>
      <button  onClick={handleAdd}>ADD</button>
      <button  onClick={handleSub}>SUB</button>
      <button  onClick={handleMul}>MUL</button>
      <button  onClick={handleDiv}>DIV</button>
    </div>
    {submitval && (<p>A value is :{input.a} and B  value is :{input.b}</p>)}
    {val === 'ADD' && <p>Result for Addition= {cal}</p> }
    {val === 'SUB' && <p>Result for Subtraction= {cal}</p> }
    {val === 'MUL' && <p>Result for Multiplication= {cal}</p> }
    {val === 'DIV' && <p>Result for Division= {cal}</p> }
    {msg}
  </>
  )
}

export default Variables;



figma



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Project</title>
  <style>
   
    .background {
  background-image: url("first bgpi.png");
  background-repeat: no-repeat;
  background-size: 1300px;
  overflow-x: hidden;
}
    header {
      display: flex;
      margin-left: 150px;
    }
    .new-logo-text {
      font-size: 18px;
      font-weight: bold;
      color: #0f2137;
    }
    .new-navigation {
      margin-top: 20px;
      display: flex;
      margin-left: 50px;
    }
    .new-nav-link {
      color: #02073e;
      margin-right: 40px;
    }
    a {
      text-decoration: none;
    }
    h1 {
      color: #02073e;
      max-width: 300px;
      margin-left: 150px;
    }
    .new-description {
      color: #02073e;
      max-width: 350px;
      line-height: 2.5;
      margin-left: 150px;
    }
    .new-input {
      margin-left: 150px;
      width: 200px;
      height: 40px;
      border-color: rgb(189, 187, 187);
      border-width: 1px;
      border-radius: 10px;
    }
    .new-button {
      background-color: #56bbd0;
      color: white;
      font-weight: bold;
      border: none;
      width: 100px;
      height: 40px;
      border-radius: 5px;
    }
    .new-clients {
      display: flex;
      margin-bottom: 100px;
      margin-top:20px;
    }
    .new-feature-boxes {
      display: grid;
      grid-template-columns: 20% 20% 20%;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }
    .new-feature-boxes img {
      width: 40px;
    }
    .newsectionsupport {
      display: flex;
    }
    .newfeaturecard {
      border: 1px solid rgb(207, 206, 206);
      padding: 10px;
    }
    .newfeaturecard:hover {
      background-color: whitesmoke;
    }
    .new-highlight-text {
      max-width: 400px;
      font-size: 30px;
      margin-top: 50px;
      font-weight: bold;
      color: #02073e;
    }
    .new-support-section {
      display: flex;
    }
    .new-chat-box {
      background-color: blue;
      width: 300px;
      height: 80px;
      text-align: center;
      padding-top: 30px;
      border-radius: 30px;
      position: relative;
      right: 450px;
      color: white;
      font-weight: 700;
    }
    .new-footer-section {
      text-align: center;
      margin-top: 50px;
    }
    .pricing {
     margin-top: 60px;
    }

    .grid-3, .grid-4 {
      display: grid;
      gap: 20px;
    }
    .grid-3 {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
    .grid-4 {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .pricing-table {
      text-align: center;
    }
    .pricing-plan {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #ddd;
    }
    .pricing-plan h3 {
      margin-bottom: 10px;
    }
    .pricing-plan ul {
      list-style: none;
      padding: 0;
    }
    .pricing-plan ul li {
      margin: 10px 0;
    }
    .pricing-plan button {
      background: #ffbd33;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      margin-top: 10px;
    }
    .support {
        margin-top:60px;
    }

     .support-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      flex-wrap: wrap;
    }
    .support-textsection {
      max-width: 500px;
    }
      .support-container-img img {
      max-width: 500px;
      width: 100%;
      height: auto;
    }
    .clients {
  text-align: center;
  padding: 50px 20px;
}

.clients h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
}

.clients h6 {
  font-size: 16px;
  color: #666;
  max-width: 600px;
  margin: 0 auto 40px auto;
  line-height: 1.6;
}

.clients-img img {
  max-width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.features {
  text-align: center;
  padding: 60px 20px;
  max-width: 1250px;
  margin: auto;
}

.features .subtitle {
  font-size: 14px;
  color: #00a2e8;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.features .title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #222;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  align-items: start;
}

.feature-card {
  text-align: left;
}

.feature-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #222;
}

.feature-card p {
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
  line-height: 1.6;
}

.feature-card a {
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.feature-card a:hover {
  text-decoration: underline;
}
.faq {
  text-align: center;
  max-width: 1100px;
  margin: auto;
  padding: 60px 20px;
}

.faq .subtitle {
  font-size: 14px;
  color: #00a2e8;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.faq .title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #222;
}

.faq-container {
  border: 1px solid #ddd;
  border-radius: 5px;
}

.faq-item {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-number {
  font-weight: bold;
  font-size: 16px;
  color: #00a2e8;
  margin-right: 15px;
}

.faq-content {
  flex: 1;
}

.faq-content h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.faq-content p {
  font-size: 14px;
  color: #666;
}

.faq-toggle {
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  margin-left: 10px;
}

.faq .contact {
  margin-top: 20px;
  font-size: 14px;
}

.faq .contact a {
  color: #007bff;
  text-decoration: none;
}

.faq .contact a:hover {
  text-decoration: underline;
}
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.footer {
  background-color: #f8f9fa;
  border-top: 1px solid #ddd;
  padding: 40px 80px 20px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.footer-column h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: #007bff;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  padding-top: 15px;
  font-size: 14px;
}

.footer-left .logo {
  font-weight: bold;
  color: #007bff;
  margin-right: 8px;
}

.footer-right a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.footer-right a:hover {
  color: #007bff;
}

  </style>
</head>
<body>
<div class="background">
  <header>
    <img style="margin-right:20px;" src="D:\sivaramaiah\figma2\S 1.png" alt="logo" />
    <p class="new-logo-text">StartupLand</p>
    <div class="new-navigation">
      <a class="new-nav-link" href="#home">Home</a>
      <a class="new-nav-link" href="#Adversite">Adversite</a>
      <a class="new-nav-link" href="#Supports">Supports</a>
      <a class="new-nav-link" href="#About">About</a>
    </div>
  </header>

  
  <h1>A Creative way to grow your Exciting Business ideas</h1>
  <p class="new-description">Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
  <input class="new-input" type="search" placeholder="Type your domain" />
  <button class="new-button">Get</button>
  

  <div class="new-clients">
    <p style="margin-left: 150px; color: gray;">Our clients</p>
    
    <img style="margin-left: 10px;" src="D:\sivaramaiah\figma2\paypal.png" alt="paypal" />
  </div>
</div>
   <p style="margin-left:45%">ideal Solutions for you</p>
  <h2 style="display: flex; justify-content: center; margin-bottom: 50px;">Go beyond ultimate features</h2>

  <div class="new-feature-boxes">
    <div class="newfeaturecard">
      <img src="D:\sivaramaiah\figma2\emailsubscription2.png                                                                            " alt="email" />
      <h4>Email Subscription</h4>
      <p>We’re driven beyond just finishing projects. We want to find smart solutions.</p>
      <a href="#learnmore">Learn More &gt;</a>
    </div>
    <div class="newfeaturecard">
      <img src="D:\sivaramaiah\figma2\boltperformance.png" alt="light" />
      <h4>Bolt Performance</h4>
      <p>We’re driven beyond just finishing projects. We want to find smart solutions.</p>
      <a href="#learnmore">Learn More &gt;</a>
    </div>
    <div class="newfeaturecard">
      <img src="D:\sivaramaiah\figma2\securityprotection.png" alt="secure" />
      <h4>Secure Transaction</h4>
      <p>We’re driven beyond just finishing projects. We want to find smart solutions</p>
      <a href="#learnmore">Learn More &gt;</a>
    </div>
    <div class="newfeaturecard">
      <img src="D:\sivaramaiah\figma2\multipleoptions.png" alt="multiple" />
      <h4>Multiple Options</h4>
      <p>We’re driven beyond just finishing projects. We want to find smart solutions</p>
      <a href="#learnmore">Learn More &gt;</a>
    </div>
    <div class="newfeaturecard">
      <img src="D:\sivaramaiah\figma2/customersupport.png" alt="customer" />
      <h4>Customer Support</h4>
      <p>We’re driven beyond just finishing projects. We want to find smart solutions</p>
      <a href="#learnmore">Learn More &gt;</a>
    </div>
    <div class="newfeaturecard">
      <img src="D:\sivaramaiah\figma2\integratedwithshopy.png" alt="shop" />
      <h4>Integrated with Shopify</h4>
      <p>We’re driven beyond just finishing projects. We want to find smart solutions.</p>
      <a href="#learnmore">Learn More &gt;</a>
    </div>
  </div>

  <div class="newsectionsupport">
    <img style="width: 700px;" src="D:\sivaramaiah\figma2\image 106.png" alt="left image" />
    <div>
      <p class="new-highlight-text">Customer support is our main priority with their hundred percent satisfaction.</p>
      <p style="max-width: 350px; line-height: 2;">Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
      <div style="display: flex; color: #02073E; font-weight: bold; font-size: 18px;">
        <ul>
          <li style="margin-bottom: 20px;">Medical and vision</li>
          <li>HSAs and FSAs</li>
        </ul>
        <ul>
          <li style="margin-bottom: 20px;">Life insurance</li>
          <li>Commuter benefits</li>
        </ul>
      </div>
    </div>
  </div>

  
   <section class="pricing">
    <p style="margin-left:45%">Deal for your business</p>
    <h2 style="margin-left:40%">Meet our pricing plan that suits you</h2>
    <div class="grid-4 pricing-table">
      <div class="pricing-plan">
        <h3>Starter Pack</h3>
        <p>$18.99/mo</p>
        <ul>
          <li>✔ Full Access</li>
          <li>✔ Multi-user</li>
          <li>✖ Refund Policy</li>
          <li>✖ Analytics</li>
        </ul>
        <button>Choose Plan</button>
      </div>
      <div class="pricing-plan">
        <h3>Premium Pack</h3>
        <p>$29.99/mo</p>
        <ul>
          <li>✔ All Features</li>
          <li>✔ Refund Policy</li>
          <li>✔ Analytics</li>
        </ul>
        <button>Choose Plan</button>
      </div>
      <div class="pricing-plan">
        <h3>Custom Pack</h3>
        <p>$23.99/mo</p>
        <ul>
          <li>✔ Custom Features</li>
          <li>✔ Refund Policy</li>
          <li>✖ 24/7 Support</li>
        </ul>
        <button>Choose Plan</button>
      </div>
      <div class="pricing-plan">
        <h3>Ultimate Pack</h3>
        <p>$35.99/mo</p>
        <ul>
          <li>✔ Everything Included</li>
        </ul>
        <button>Choose Plan</button>
      </div>
    </div>
  </section>


  <section class="support">
    <div class="support-container">
      <div class="support-textsection">
        <h2>Do you need help? Our support team is ready</h2>
        <p>Get your tests delivered at home collect sample from the victory...</p>
        <ul>
          <li>📧 Email client support</li>
          <li>🎫 Live ticket support</li>
        </ul>
      </div>
      <div class="hero-img">
        <div class="speech-text">Hi,I'm Frank,let me know what can I do for you</div>
        <img src="D:\sivaramaiah\figma2\Mask Group.png" alt="Support Team">
      </div>
    </div>
  </section>

  <!-- Clients Section -->
  <section class="clients">
  <h2>Companies who also worked with us</h2>
  <h6>
    Every email, web page, and social media post makes an impression on your customers. 
    With our software you can be confident it's impression.
  </h6>

  <div class="clients-img">
    <img src="D:\sivaramaiah\figma2\image 107.png" alt="Clients">
  </div>
</section>

<section class="features">
  <p class="subtitle">Ideal solutions for you</p>
  <h2 class="title">Go beyond ultimate features</h2>

  <div class="features-grid">
    
    <div class="feature-card">
      <img src="D:\sivaramaiah\figma2\img-1.png" alt="Team">
      <h3>Introducing our newest team with great experience</h3>
      <p>Brian Halligan knows that you need more than a great product to have a great brand.</p>
      <a href="#">Learn more ></a>
    </div>

    
    <div class="feature-card">
      <img src="D:\sivaramaiah\figma2\img-2.png" alt="Banking">
      <h3>New banking application has developed and we expecting good feedback</h3>
      <a href="#">Learn more ></a>
    </div>

    
    <div class="feature-card">
      <img src="D:\sivaramaiah\figma2\img-3.png" alt="UI/UX">
      <h3>Ui/UX industry are doing great job in previous year history</h3>
      <img src="D:\sivaramaiah\figma2\img-4.png" alt="Design Experience">
      <h3>Develop you design experience with figma features.</h3>
      <a href="#">Learn more ></a>
    </div>
  </div>
</section>

<section class="faq">
  <p class="subtitle">Get your question answer</p>
  <h2 class="title">Frequently asked question</h2>

  <div class="faq-container">
    <div class="faq-item">
      <span class="faq-number">01.</span>
      <div class="faq-content">
        <h3>Which domain should I purchase?</h3>
        <p>Get your website tests delivered at the home collect a sample ...</p>
      </div>
      <span class="faq-toggle">+</span>
    </div>

    <div class="faq-item">
      <span class="faq-number">02.</span>
      <div class="faq-content">
        <h3>What are some tips when choosing a name?</h3>
        <p>We make it easy to move to CometNine. Simply contact us and we’ll ...</p>
      </div>
      <span class="faq-toggle">+</span>
    </div>

    <div class="faq-item">
      <span class="faq-number">03.</span>
      <div class="faq-content">
        <h3>What if I need help choosing the right domain?</h3>
        <p>Create a hub for cross-functional work that also works with all ...</p>
      </div>
      <span class="faq-toggle">+</span>
    </div>

    <div class="faq-item">
      <span class="faq-number">04.</span>
      <div class="faq-content">
        <h3>Can I upgrade or downgrade my web hosting subscription system?</h3>
        <p>The pricing made me a little hesitant at first but I have been ...</p>
      </div>
      <span class="faq-toggle">+</span>
    </div>

    <div class="faq-item">
      <span class="faq-number">05.</span>
      <div class="faq-content">
        <h3>Learn from community on Brandwagon</h3>
        <p>Stop your viewers from getting distracted. Publish videos to ...</p>
      </div>
      <span class="faq-toggle">+</span>
    </div>
  </div>

  <p class="contact">Still Question? <a href="#">Contact us</a></p>
</section>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-column">
      <h4>Company</h4>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Affiliate</a></li>
        <li><a href="#">Careers & Culture</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Press</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>About Us</h4>
      <ul>
        <li><a href="#">Support Center</a></li>
        <li><a href="#">Customer Support</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Copyright</a></li>
        <li><a href="#">Popular Campaign</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>Our Information</h4>
      <ul>
        <li><a href="#">Return Policy</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Site Map</a></li>
        <li><a href="#">Store Hours</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>My Account</h4>
      <ul>
        <li><a href="#">Press inquiries</a></li>
        <li><a href="#">Social media</a></li>
        <li><a href="#">Directories</a></li>
        <li><a href="#">Images & B-roll</a></li>
        <li><a href="#">Permissions</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>Policy</h4>
      <ul>
        <li><a href="#">Application security</a></li>
        <li><a href="#">Software principles</a></li>
        <li><a href="#">Unwanted software policy</a></li>
        <li><a href="#">Responsible supply chain</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="footer-left">
      <span class="logo">StartupLanding</span> Copyright © 2019 Reda, Inc
    </div>
    <div class="footer-right">
      <a href="#">Home</a>
      <a href="#">Advertise</a>
      <a href="#">Supports</a>
      <a href="#">Marketing</a>
      <a href="#">FAQ</a>
    </div>
  </div>
</footer>

 
</body>
</html>

    figma end
