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
	      query.equalTo('category', 'Electronics');
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
		var electronics = this.state.products.map(function(electronic) {
		return (
				<tr>
				    <td>{electronic.get('productName')}</td>
				    <td>{electronic.get('productDesc')}</td>
				    <td>{electronic.get('price')}</td>
				    <td>{electronic.get('category')}</td>
				</tr>

		);
		
		});
		return (
			<div className="container">
				<div className="row">
					<h1>Electronics</h1>
				</div>
				<table>
				  <tr>
				    <th>Product Name</th>
				    <th>Product Description</th>
				    <th>Price</th>
				    <th>Category</th>
				  </tr>
				    {electronics}
				</table>
			</div>
			);
	}
});