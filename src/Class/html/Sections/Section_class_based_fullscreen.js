import React, { Component } from 'react'

class Section_class_based_fullscreen extends Component {
  render() {
    return (
        <section className={this.props.basicFiName}>
		<div className="container">

			<div className={this.props.basicSName}>
            {this.props.additionalFi}
			</div>

			<div className={this.props.basicTName}>
            {this.props.additionalS} 
			</div> 

			<div className={this.props.basicFoName}>
            {this.props.additionalT}
			</div>

			<div className={this.props.basicFifthName}>
            {this.props.additionalFo}
			</div>

			<div className="links-wrapper">
				<ul>
					<li><a href="/Learn more/">Learn more</a></li>
					<li><a href={this.props.urlF}>{this.props.nameF}</a></li>
				</ul> 
			</div>

            <div class={this.props.basicSixthName}>
				<div class={this.props.divone}>{this.props.modifyone}</div>
				<div class={this.props.divtwo}>{this.props.modifytwo}</div>
			</div>
		</div>
	</section>

        )
  }
}

export default Section_class_based_fullscreen;