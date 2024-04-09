import FlipkartImg from '../Images/flipkart.png';
import AmazonImg from '../Images/amazon.png';
import NikeImg from '../Images/shoe_image.png';

function HeroSection(){
    return(
        <div className="hero-section">
            <div>
                <h1 className='hero-title'>YOUR FEET DESERVE THE BEST</h1>
                <p className='text'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="two-btns">
                        <button className='shop-btn'>Shop Now</button>
                        <button className='category-btn'>Category</button>
                </div>
                <p className='img-title'>Also Available On</p>
                <div className="two-imgs">
                    <img className='small-imgs' src={FlipkartImg} alt="" srcset="" />
                    <img className='small-imgs' src={AmazonImg} alt="" srcset="" />
                </div>
            </div>

            <div>
                <img src={NikeImg} alt="" srcset="" />
            </div>
        </div>
    )
}

export default HeroSection;