var React = require('react');
var ProductModel = require('../models/productModel')

module.exports = React.createClass({

	getInitialState: function() {
	    return ({
	        products: []

	    });
	},
	componentWillMount: function() {
	      var query = new Parse.Query(ProductModel);
	      query.ascending("price");
	      query.find().then(
	      	(products) => {
	      		console.log(products);
	      		this.setState({products: products});
	      	},
	      	(err) => {
				console.log(err);
			}
	      	);
	},

	render: function() {
		var newProducts = this.state.products.map(function(product) {
		return (
				<tr>
				    <td>{product.get('productName')}</td>
				    <td>{product.get('productDesc')}</td>
				    <td>{product.get('price')}</td>
				    <td>{product.get('category')}</td>
				</tr>

		);
		
		});
		return (
			<div className="container">
				<div className="row">
					<h1>Cheap Stuff</h1>
				</div>
				<table>
				  <tr>
				    <th>Product Name</th>
				    <th>Product Description</th>
				    <th>Price</th>
				    <th>Category</th>
				  </tr>
				    {newProducts}
				</table>
			</div>
			);
	}
});