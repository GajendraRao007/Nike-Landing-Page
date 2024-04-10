import Logo from '../Images/Frame.png';
import img from '../Images/Services.png';

function Contact(){
    return(
        <div className="contact-page">
            <div className="navbar">
                <img src={Logo} alt="" srcset="" />
            </div>
            <div className='contact-text'>
                <h1 className="contact-heading">CONTACT US</h1>
                <p className="para-heading">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
            <div className="form">
                <div>
                <div className="form-btns">
                        <button className='chat-btn'>VIA SUPPORT CHAT</button>
                        <button className='call-btn'>VIA CALL</button>
                </div>
                    <button className='call-two'>VIA EMAIL FORM</button>
                    <div>
                  <fieldset><legend>Name</legend><input type="text" /></fieldset>
                  <fieldset><legend>E-Mail</legend><input type="email" /></fieldset>
                  <fieldset><legend>TEXT</legend><textarea name="" id="" cols="30" rows="10"></textarea></fieldset>
                    <button className='submit-btn'>Submit</button>
                    </div>
                </div>
                    <div>
                        <img src={img} alt="" srcset="" />
                    </div>
            </div>
        </div>
    )
}

export default Contact;