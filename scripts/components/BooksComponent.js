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
	      query.equalTo('category', 'Books');
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
		var books = this.state.products.map(function(book) {
		return (
				<tr>
				    <td>{book.get('productName')}</td>
				    <td>{book.get('productDesc')}</td>
				    <td>{book.get('price')}</td>
				    <td>{book.get('category')}</td>
				</tr>

		);
		
		});
		return (
			<div className="container">
				<div className="row">
					<h1>Books</h1>
				</div>
				<table>
				  <tr>
				    <th>Product Name</th>
				    <th>Product Description</th>
				    <th>Price</th>
				    <th>Category</th>
				  </tr>
				    {books}
				</table>
			</div>
			);
	}
});