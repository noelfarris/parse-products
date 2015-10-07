'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
Parse.initialize("s6QCILzTCfxnS85LcHqchhPLdJWnHZ2PxRcG4Jnw", "EPnhzbTHqZH8vSMSwkscBsYTw3ibFeP7jAsryZM6");


var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var AddProductComponent = require('./components/AddProductComponent');
var LoginComponent = require('./components/LoginComponent');
var BooksComponent = require('./components/BooksComponent');
var ElectronicsComponent = require('./components/ElectronicsComponent');
var ClothingComponent = require('./components/ClothingComponent');
var RegisterComponent = require('./components/RegisterComponent');
var NewestComponent = require('./components/newestComponent');
var CheapestComponent = require('./components/cheapestComponenet.js');

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'add': 'add',
		'newProducts': 'newProducts',
		'cheapProducts': 'cheapProducts',
		'category/books': 'books',
		'category/electronics': 'electronics',
		'category/clothing': 'clothing',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	add: function() {
		React.render(<AddProductComponent />, app);
	},
	newProducts: function() {
		React.render(<NewestComponent />, app);
	},
	cheapProducts: function() {
		React.render(<CheapestComponent />, app);
	},
	books: function() {
		React.render(<BooksComponent />, app);
	},
	electronics: function() {
		React.render(<ElectronicsComponent />, app);
	},
	clothing: function() {
		React.render(<ClothingComponent />, app);
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);