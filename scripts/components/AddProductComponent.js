var React = require('react');
var ProductModel = require('../models/productModel')

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className="red">{this.state.error}</p>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onAddProduct}>
						<h1>Add Product</h1>
						{errorElement}
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="productName" className="validate" />
								<label>Product Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<textarea id="textarea1" ref="productDesc" className="materialize-textarea"></textarea>
								<label>Description</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input type="number" ref="price" className="validate" />
								<label>Price</label>
							</div>
							<div className="input-field col s6">
								<select className="browser-default" ref="category">
									<option defaultValue="" disabled selected>Category</option>
									<option defaultValue="books">Books</option>
									<option defaultValue="electronics">Electronics</option>
									<option defaultValue="clothing">Clothing</option>
								</select>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn">Add Product</button>
						</div>
					</form>
				</div>
			</div>
		);
	},
	onAddProduct: function(e) {
		e.preventDefault();
		var newProduct = new ProductModel({
			productName: this.refs.productName.getDOMNode().value,
			productDesc: this.refs.productDesc.getDOMNode().value,
			price: parseInt(this.refs.price.getDOMNode().value),
			category: this.refs.category.getDOMNode().value,
			user: Parse.User.current(),
		});
		newProduct.save();
		this.refs.productDesc.value = " ";
	}
});