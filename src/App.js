/* eslint-disable react/jsx-pascal-case */
// import { render } from '@testing-library/react';
import React, { Component } from 'react';

// Importing Css files
import './Class/css/bootstrap.css';
import './Class/css/styles.css';

// Importing Html functions file
import Header from './Components/Header';
import Section_class_based_fullscreen from './Class/html/Sections/Section_class_based_fullscreen';
import Section_class_based_halfscreen from './Class/html/Sections/Section_class_based_halfscreen';
import Footer from './Components/Footer';

// Importing image files
import appletv from './Class/images/icons/apple-tv-logo.png';
import banker from './Class/images/home/banker.png';
import arcade from './Class/images/icons/arcade.png';
import watch from './Class/images/icons/watch-series5-logo.png';
import Youtube from './Components/YoutubeVideos';


class App extends Component{
  render(){
  return (
    <div className="outer_wraper">
  {/* Header starts */}

  <Header />

  {/* Header Ends */}

  {/* Alert Starts */}

<section className="alert-section top-50">
		<div className="container">
			<div className="alert-title">
				We’re open for you.
			</div>
			<div className="alert-text">
				Our retail stores are closed, but you can buy our products here online and get fast, free delivery. If you need help finding the right product or have a question on your order, chat online with a Specialist or call 1-800-MY-APPLE.<br />
				For service and support, visit <a href="https://support.apple.com/">support.apple.com</a>.
			</div>
		</div>
	</section>

  {/* Alert Ends */}

  {/* First-Highlight-Wrapper Starts */}

  <Section_class_based_fullscreen basicFiName="first-hightlight-wrapper" basicSName="new-alert" additionalFi="New" basicTName="title-wraper bold black" additionalS="iPad Pro" urlF="/Order/" nameF="Order" basicSixthName="ipod-caption row" divone="col-sm-12 col-md-6 text-md-right" dintwo="col-sm-12 col-md-6 text-md-left" modifyone="iPad Pro available starting 3.25" modifytwo="Magic Keyboard coming in May" />

  {/* First-Highlight-Wrapper Ends */}

  {/* Second-Highlight-Wrapper Starts */}

  <Section_class_based_fullscreen basicFiName="second-hightlight-wrapper" basicSName="new-alert" additionalFi="New" basicTName="title-wraper bold black" additionalS="MacBook Air" basicFoName="description-wrapper black" additionalT="Twice the speed. Twice the storage." basicFifthName="price-wrapper grey" additionalFo="From $999." urlF="/Buy/" nameF="Buy" />

  {/* Second-Highlight-Wrapper Ends */}

  {/* Third-Highlight-Wrapper Starts */}

  <Section_class_based_fullscreen basicFiName="third-hightlight-wrapper" basicTName="title-wraper bold" additionalS="iPhone 11 Pro" basicFoName="description-wrapper" additionalT="Pro cameras. Pro display. Pro performance." basicFifthName="price-wrapper" additionalFo="From $24.95/mo. or $599 with trade‑in." urlF="/Buy/" nameF="Buy" />

  {/* Third-Highlight-Wrapper Ends */}

 {/* Fourth-Highlight-Wrapper Starts */}

  <Section_class_based_halfscreen Secname="fourth-heghlight-wrapper" lanone="title-wraper" valone="iPhone 11" lantwo="description-wraper" valtwo="Just the right amount of everything." lanthree="price-wrapper" valthree="From $18.70/mo. or $499 with trade‑in.1" subset="links-wrapper" lanfive="/Learn more/" valfive="Learn more" lanfour="/Apply now/" valfour="Apply now" scope="title-wraper white" valueone="Get the latest CDC response to COVID-19." union="d-none" valuetwo="Watch the PSA" />

  {/* Fourth-Highlight-Wrapper Ends */}

  {/* Fifth-Highlight-Wrapper Starts */}

  <Section_class_based_halfscreen Secname="fifth-heghlight-wrapper" imgone="" imgtwo="" imgthree={appletv} imgfour="tvshow-logo-wraper" imgfive={banker} subset="d-none" sckdosh="watch-more-wrapper white" scrath="Watch now on the Apple TV App" imgsix="" imgfiv="" imgfou={watch} sixty="description-wraper" fifty="With the Always-On Retina display." volcan="You’ve never seen a watch like this." union="links-wrapper" four="/Buy/" two="Buy" />

  {/* Fifitth-Highlight-Wrapper Ends */}

  {/* Sixth-Highlight-Wrapper Starts */}

  <Section_class_based_halfscreen Secname="sixth-heghlight-wrapper" imgone="" imgtwo="" imgthree={arcade} lantwo="description-wraper white" valtwo="Agent 8 is a small hero on a big mission." subset="links-wrapper d-flex" lanfive="/Play now.2/" valfive="Play now.2" lanfour="/Learn about Apple Arcade/" valfour="Learn about Apple Arcade" scope="title-wraper" valueone="Apple Card Monthly Installments" sixty="description-wraper" fifty="Pay for your next iPhone over time, interest-free with Apple Card." union="links-wrapper" four="/Apply now/" two="Apply now" />

  {/* Sixth-Highlight-Wrapper Ends */}

  {/* Videos-Wrapper Starts */}

  <Youtube />

  {/* Videos-Wrapper Ends */}
  
  
  {/* Footer Starts */}

	<Footer />

  {/* Footer Ends */}
    </div>
  )
  }
}

export default App;