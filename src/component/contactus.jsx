import Logo from '../Images/Frame.png';

function Contact(){
    return(
        <div className="contact-page">
            <div className="navbar">
                <img src={Logo} alt="" srcset="" />
            </div>
            <div>
                <h1 className="contact-heading">CONTACT US</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
            <div className="form">
                <div className="form-btns">
                        <button>VIA SUPPORT CHAT</button>
                        <button>VIA CALL</button>
                </div>
                <div>
                    <button>VIA CALL</button>
                </div>
                <div>
                    <input type="text" /> <br />
                    <input type="email" /> <br />
                    <textarea name="" id="" cols="30" rows="10"></textarea> <br />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;