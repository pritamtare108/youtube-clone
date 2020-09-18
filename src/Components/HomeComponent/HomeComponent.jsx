import React, { Component, Fragment } from "react";
import "./HomeComponent.styles.css";
import { Link } from "react-router-dom";
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let homePageStyles = {
      "background-color": "#000",
      "background-image":
        "linear-gradient(to right, #000 40%, transparent 58%),url('https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg')",
      "background-position": "right top",
      height: "100vh",
    };

    return (
      <Fragment>
        
        <section className="mainBlock" style={homePageStyles}>
          <div className="container-fluid c1">
            <div className="left">
              <h1 className=" h1">Welcome to prime video</h1>
              <p>
                Join Prime to watch the latest movies, TV shows and
                award-winning Amazon Originals
              </p>
              <Link to="/register" className="btn bg-primary p-2 btn-lg">Start your 30-day free trial</Link>
            </div>
            <div className="right">
              <img src="bg.jpg" alt="" />
            </div>
          </div>
          {/* first container ends here */}
          <div className="container-fluid c2 c3">
            <div className="textside">
              <h1>Gulabo Sitabo</h1>
              <p>Welcome to the World of Gulabo Sitabo - a quirky slice of life movie, where Mirza (Amitabh Bachchan), a landlord of an old depleted mansion and Baankey (Ayushmann Khurrana), his tenant are like Tom and Jerry - unique and unmatched, friend and foe, naughty and smart, little and large!</p>
              <button className="btn bg-primary p-2 btn-lg">Click here to know more</button>
            </div>
            <div className="imgside">
              <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/GulaboSitabo/Launch/MLP_1440x675_2._SY1200_FMJPG_.jpg" alt=""/>
            </div>
          </div>
          {/* end here */}
          <div className="container-fluid c2">
          <div className="imgside">
              <img src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-Living-Room-V2._CB524587855_SY1200_FMJPG_.jpg" alt=""/>
            </div>
            <div className="textside">
              <h1>Great Entertainment</h1>
              <p>With your Prime membership, you have access to exclusive Amazon Originals, blockbuster Bollywood movies, regional movies and more.</p>
              <button className="btn bg-primary p-2 btn-lg">Get Started</button>
            </div>
           
          </div>
          {/* end here */}
          <div className="container-fluid c2 c3">
            <div className="textside">
              <h1>One membership, many benefits</h1>
              <p>Your Prime membership now also includes ad-free music along with unlimited free, fast delivery on eligible items, exclusive access to deals & more.</p>
              <button className="btn bg-primary p-2 btn-lg">Get Started</button>
            </div>
            <div className="imgside">
              <img src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/PRIME_multi-benefit_MAGNET_2X._CB1519820207_SY1200_FMJPG_.jpg" alt=""/>
            </div>
          </div>
          {/* end here */}
          <div className="container-fluid c2">
          <div className="imgside">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left._SY1200_FMJPG_.jpg" alt=""/>
            </div>
            <div className="textside">
              <h1>Even better with Fire TV Stick</h1>
              <p>The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</p>
              <button className="btn bg-primary p-2 btn-lg">Get Started</button>
            </div>
          </div>
          {/* end here */}
          <div className="container c4">
            <div className="card">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg" className="img-card-top"></img>
              <h1>Watch anywhere</h1>
              <p>Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up to 3 devices at once.</p>
            </div>
            <div className="card">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Download_IN.jpg" className="img-card-top"></img>
              <h1>Download and go</h1>
              <p>Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device.</p>
            </div>
            <div className="card">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/300x300_Tile_1.png" className="img-card-top"></img>
              <h1>Data Saver</h1>
              <p>Control data usage while downloading and watching videos on select phones or tablets.</p>
            </div>
          </div>
          {/* cards end here */}
          <div className="container-fluid c2">
            <div className="textside">
              <h1>Family Friendly</h1>
              <p>With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>
              <button className="btn bg-primary p-2 btn-lg">Get Started</button>
            </div>
            <div className="imgside">
              <img src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._CB1517304519_SY1200_FMJPG_.jpg" alt=""/>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomeComponent;