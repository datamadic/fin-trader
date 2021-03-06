var React = require('react'),
		fin = require('../vendor/openfin.js'),
		add = function(a,b){
      return a + b;
    },
    sub = function(a,b){
      return a - b;
    },
		rndRange = function () {
      return Math.floor(Math.random() * 10 % 5) / 10;
    },
    plusMinus = function(base, op){
      return parseInt(Math.random() * 10) % 2 ? add(base, op) : sub(base, op);
    };

var urlData = location.search.split('&').map((i)=>{return i.split('=')[1]})

module.exports = React.createClass({
  closeApp: function(){
		fin.desktop.main(function(){
			// really its just hidden :)
		  fin.desktop.Window.getCurrent().hide();
		});
	},
	minApp: function(){
		fin.desktop.main(function(){
		  fin.desktop.Window.getCurrent().minimize();
		});
	},
  getInitialState: function () {

  	return {
  		class: 'tile',
  		ticker: urlData[0],
  		last: Number(urlData[1])
  	}
  },
  componentDidMount: function(){
  	setTimeout(()=>{
  		this.setState({
  			class: 'tile start-color-change',
  			ticker: urlData[0],
  			last: Number(urlData[1])
  		});
  	}, Math.floor(Math.random() * 1000) );

  	setInterval(()=>{
  		this.setState({
  			class: 'tile start-color-change',
  			ticker: urlData[0],
  			last: Number(plusMinus(Number(urlData[1]), rndRange()))
  		});
  	}, 2500);

  },
	render: function(){
		return	<div className={this.state.class}>
							<div className="banner">
								<div className="title">
									{this.state.ticker}
								</div>
								<div className="window-control">
									
								</div>
							</div>
							<div className="content">
								<div className="main">
									<span className="last" >{this.state.last.toFixed(2)}</span>
									<span className="percent-change" >+%{rndRange().toFixed(2)}</span>

								</div>
								<div className="pricing">
									<div className="price open">
										<div className="label">OPEN</div>
										<span className="value">{ (this.state.last - rndRange()).toFixed(2) } </span>
									</div>
									<div className="price high">
										<div className="label">HIGH</div>
										<span className="value">{ (this.state.last + rndRange()).toFixed(2) }</span>
									</div>
									<div className="price low">
										<div className="label">LOW</div>
										<span className="value">{ (this.state.last - rndRange() - 1).toFixed(2)  }</span>
									</div>
								</div>
							</div>
						</div>
	}
});