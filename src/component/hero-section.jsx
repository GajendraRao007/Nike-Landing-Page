import FlipkartImg from '../Images/flipkart.png';
import AmazonImg from '../Images/amazon.png';
import NikeImg from '../Images/shoe_image.png';

function HeroSection(){
    return(
        <div className="hero-section">
            <div>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="two-btns">
                        <button>Shop Now</button>
                        <button>Category</button>
                </div>
                <p>Also Available On</p>
                <div className="">
                    <img src={FlipkartImg} alt="" srcset="" />
                    <img src={AmazonImg} alt="" srcset="" />
                </div>
            </div>

            <div>
                <img src={NikeImg} alt="" srcset="" />
            </div>
        </div>
    )
}

export default HeroSection;