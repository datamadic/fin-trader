var _ = require('underscore'),
		React = require('react'),
		OfApp = require('./components/openfin.js'),
		fin = require('./vendor/openfin.js');

require('../../submodules/snap-and-dock/DockingManager.js');
var dockingManager = new DockingManager();

fin.desktop.main(()=>{
	console.log('the initial register', fin.desktop.Window.getCurrent());
	dockingManager.register(fin.desktop.Window.getCurrent());
});

React.render(<OfApp />, document.body);


