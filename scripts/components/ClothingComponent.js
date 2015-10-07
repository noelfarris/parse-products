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
	      query.equalTo('category', 'Clothing');
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
		var clothing = this.state.products.map(function(clothes) {
			console.log(clothes)
		return (
				<tr>
				    <td>{clothes.get('productName')}</td>
				    <td>{clothes.get('productDesc')}</td>
				    <td>{clothes.get('price')}</td>
				    <td>{clothes.get('category')}</td>
				</tr>

		);
		
		});
		return (
			<div className="container">
				<div className="row">
					<h1>Clothing</h1>
				</div>
				<table>
				  <tr>
				    <th>Product Name</th>
				    <th>Product Description</th>
				    <th>Price</th>
				    <th>Category</th>
				  </tr>
				    {clothing}
				</table>
			</div>
			);
	}
});