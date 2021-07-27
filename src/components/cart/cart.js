import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-8">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                        </div>
                                        <div className="col-xs-6">
                                        <button type="button" class="btn btn-primary btn-sm btn-block">
									<span class="glyphicon glyphicon-share-alt"></span> Continue shopping
								</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-xs-2"><img class="img-responsive" src="httop://placehold.it/100x70"></img>
                                    </div>
                                    <div class="col-xs-4">
							<h4 class="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
						</div>
                        <div class="col-xs-6">
							<div class="col-xs-6 text-right">
								<h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
							</div>
							<div class="col-xs-4">
								<input type="text" class="form-control input-sm" value="1"/>
							</div>
							<div class="col-xs-2">
								<button type="button" class="btn btn-link btn-xs">
									<span class="glyphicon glyphicon-trash"> </span>
								</button>
							</div>
						</div>
                                </div>
                                
					<div class="row">
						<div class="text-center">
							<div class="col-xs-9">
								<h6 class="text-right">Added items?</h6>
							</div>
							<div class="col-xs-3">
								<button type="button" class="btn btn-default btn-sm btn-block">
									Update cart
								</button>
							</div>
						</div>
					</div>
                            </div>
                            <div class="panel-footer">
					<div class="row text-center">
						<div class="col-xs-9">
							<h4 class="text-right">Total <strong>$50.00</strong></h4>
						</div>
						<div class="col-xs-3">
							<button type="button" class="btn btn-success btn-block">
								Checkout
							</button>
						</div>
					</div>
				</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;