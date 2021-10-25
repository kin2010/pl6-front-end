import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import img from "../../img/product_single_10.jpg";
import img1 from "../../img/product_single_09.jpg";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
	const [total, setTotal] = React.useState(0);
	const {
		cartState: { carts },
		cartState,
		increase_quatity,
		decrease_quatity,
		removeCart,
	} = React.useContext(CartContext);
	React.useEffect(() => {
		//total
		let total = 0;
		carts.map((item) => {
			total += item.price * (cartState[item.id] || 1);
		});
		setTotal(total);
	}, [carts, cartState]);
	const increase = (id) => {
		increase_quatity(id);
	};
	const decrease = (id) => {
		decrease_quatity(id);
	};
	const remove = (id) => {
		removeCart(id);
	};
	let body;

	body = (
		<>
			{carts.length == 0 && (
				<>
					<h4
						className="mt-3"
						style={{ textAlign: "center", color: "rgb(56 188 90)" }}
					>
						Empty
					</h4>
				</>
			)}
			{carts.map((ca) => {
				return (
					<>
						<li key={ca.id} className="single-shopping-cart">
							<div className="single-shopping-image">
								<a href="#">
									<img
										className="img-fuild"
										src={ca.image}
										alt="image"
									/>
								</a>
							</div>
							<div className="single-shopping-title">
								<a href="#">
									<h5>{ca.name}</h5>
								</a>

								<h6>Quatity : {cartState[ca.id] || 1}</h6>
								<div className="quatity">
									<div
										className="quatity-icon text-white px-2 py-1 bg-success rounded-circle"
										onClick={() => {
											decrease(ca.id);
										}}
									>
										<i className="fas fa-angle-double-left"></i>
									</div>
									<div style={{ fontSize: 25 }}>|</div>
									<div
										className="quatity-icon text-white px-2 py-1 bg-success rounded-circle"
										onClick={() => {
											increase(ca.id);
										}}
									>
										<i className="fas fa-angle-double-right"></i>
									</div>
								</div>
								<span>Price: {ca.price}</span>
							</div>
							{/* px-2 py-1 rounded-circle bg-danger  */}
							<div
								style={{ height: "fit-content", borderRadius: 50 }}
								className=" single-shopping-remove"
								onClick={() => {
									remove(ca.id);
								}}
							>
								<i class="far fa-times-circle"></i>
							</div>
						</li>{" "}
					</>
				);
			})}
		</>
	);
	return (
		<>
			<ul>
				{/* <li className="single-shopping-cart">
					<div className="single-shopping-image">
						<a href="#">
							<img className="img-fuild" src={img} alt="image" />
						</a>
					</div>
					<div className="single-shopping-title">
						<a href="#">
							<h5>San pham áo siêu đẹp loon</h5>
						</a>

						<h6>Qty : 1</h6>
						<span>Gia: 9.000.0000 Đ</span>
					</div>
					<div className="single-shopping-remove">
						<i className="fa fa-times-circle"></i>
					</div>
				</li>
				<li className="single-shopping-cart">
					<div className="single-shopping-image">
						<a href="#">
							<img className="img-fuild" src={img1} alt="image" />
						</a>
					</div>
					<div className="single-shopping-title">
						<a href="#">
							<h5>San pham áo siêu đẹp loon</h5>
						</a>

						<h6>Qty : 1</h6>
						<span>Gia: 9.000.0000 Đ</span>
					</div>
					<div className="single-shopping-remove">
						<i className="fa fa-times-circle"></i>
					</div>
				</li>
				<li className="single-shopping-cart">
					<div className="single-shopping-image">
						<a href="#">
							<img className="img-fuild" src={img} alt="image" />
						</a>
					</div>
					<div className="single-shopping-title">
						<a href="#">
							<h5>San pham áo siêu đẹp loon</h5>
						</a>

						<h6>Qty : 1</h6>
						<span>Gia: 9.000.0000 Đ</span>
					</div>
					<div className="single-shopping-remove">
						<i className="fa fa-times-circle"></i>
					</div>

				</li> */}

				{body}
			</ul>
			<div className="shopping-cart-total" style={{ marginTop: 50 }}>
				<div>Total :</div>
				<div>{total} VNĐ </div>
			</div>
			<div className="shopping-cart-btn">
				<Button
					className="mb-3 w-75"
					variant="success"
					to="/viewcart"
					as={Link}
				>
					View Cart
				</Button>
				<Button className="w-75" variant="info" to="/checkout" as={Link}>
					Check out
				</Button>
			</div>
		</>
	);
};

export default Cart;
