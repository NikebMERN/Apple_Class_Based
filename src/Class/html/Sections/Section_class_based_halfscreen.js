import React, { Component } from 'react'

class Section_class_based_halfscreen extends Component {
  render() {
    return (
		<section className={this.props.Secname}>
		<div className="container-fluid">
			<div className="row">
			    <div className="left-side-wrapper col-sm-12 col-md-6">
			        <div className="left-side-container">
					<div className={this.props.lanone}>
							{this.props.valone}
						</div> 

						<div className={this.props.imgone}>
							<div className={this.props.imgtwo}>
								<img src={this.props.imgthree} alt="" />
							</div>
						</div>
						
						<div class={this.props.imgfour}>
							<img src={this.props.imgfive} alt="" />
						</div>

						<div className={this.props.lantwo}>
							{this.props.valtwo}
						</div>

						<div className={this.props.lanthree}>
						{this.props.valthree}
						</div>

						<div class={this.props.subset}>
							<ul>
								<li><a href={this.props.lanfive}>{this.props.valfive}</a></li>
								<li><a href={this.props.lanfour}>{this.props.valfour}</a></li>
							</ul> 
						</div>
						
						<div class={this.props.sckdosh}>
							<a href="/Watch now on the Apple TV App/">{this.props.scrath}</a>
						</div>
                    </div>
			    </div>

				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className={this.props.scope}>
							{this.props.valueone}
						</div>
						<div className={this.props.imgsix}>
							<div className={this.props.imgfiv}>
								<img src={this.props.imgfou} alt="" />
							</div>
						</div> 
						<div className={this.props.sixty}>
							{this.props.fifty}<br />
							{this.props.volcan}
						</div>

						<div class={this.props.union}>
							<ul>
								<li><a href="/Learn more/">Learn more</a></li>
								<li><a href={this.props.four}>{this.props.two}</a></li>
							</ul> 
						</div>
						<div className="links-wrapper white">
							<ul>
								<li><a href="/Watch the PSA/">{this.props.valuetwo}</a></li>
							</ul> 
						</div>
					</div>
				</div>				
			</div>
		</div>
	    </section>
    )
  }
}

export default Section_class_based_halfscreen;