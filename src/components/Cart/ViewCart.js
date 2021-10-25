import React, { useEffect, useState } from "react";
import Footer from "../../HomePage/Footer";
import Navi from "../../HomePage/Navi";
import { Table, Container, Nav, Card, Button } from "react-bootstrap";
import "./Cart.css";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import cart from "../../img/cart.png";
import { useHistory } from "react-router";
import { LinkedinFilled } from "@ant-design/icons";
const ViewCart = () => {
	const [total, setTotal] = React.useState(0);
	const {
		cartState: { carts },
		cartState,
		increase_quatity,
		decrease_quatity,
		removeCart,
		removeAllCart,
	} = React.useContext(CartContext);
	const history = useHistory();
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
	const clear = () => {
		removeAllCart();
	};
	let body;
	body = (
		<>
			{carts.length == 0 && (
				<>
					<div className="align-items-center text-center my-5">
						<div className="text-primary">
							<h4>Bạn chưa mua gì cả</h4>
						</div>
						<div className="text-secondary">
							Quay lại mua hàng ?{" "}
							<Nav.Link to="/shop" as={Link} className=" d-inline">
								<strong
									style={{ cursor: "pointer" }}
									className="text-success "
								>
									Shop
								</strong>
							</Nav.Link>
						</div>
					</div>
				</>
			)}
			{carts.length > 0 && (
				<>
					<Table
						striped
						bordered
						hover
						size="sm"
						style={{ marginTop: 40 }}
					>
						<thead>
							<tr className="p-5">
								<th>#</th>
								<th>IMAGE</th>
								<th>PRODUCT NAME</th>
								<th>UNIT PRICE</th>
								<th>QUATITY</th>
								<th>SUBTOTAL</th>
								<th>ACTION</th>
							</tr>
						</thead>
						<tbody>
							{carts.map((cart, index) => {
								return (
									<>
										<tr>
											<td>{index + 1}</td>
											<td className="product-thumbnail">
												<a href="/product/1">
													<img
														className="img-fluid"
														src={cart.image}
														alt=""
													/>
												</a>
											</td>
											<td className="product-name">
												<a href="/product/1">{cart.name}</a>
												<div className="cart-item-variation">
													<span>Color: white</span>
													<span>Size: x</span>
												</div>
											</td>
											<td className="product-price-cart">
												<div>
													<span
														className="amount old"
														style={{ fontWeight: 500 }}
													>
														{cart.price} Đ
													</span>
													{/* <span className="amount">€11.20</span> */}
												</div>
											</td>
											<td className="product-quantity align-items-center">
												<div
													// style={{ marginLeft: 15 }}
													className="mt-3 cart-plus-minus w-75 align-self-center d-flex flex-row align-items-center justify-content-between"
												>
													<div
														className="quatity-icon text-white px-2 py-1 bg-success rounded-circle"
														onClick={() => {
															decrease(cart.id);
														}}
													>
														<i className="fas fa-angle-double-left"></i>
													</div>
													<div style={{ fontSize: 15 }}>
														<strong>
															{cartState[cart.id] || 1}
														</strong>
													</div>
													<div
														className="quatity-icon text-white px-2 py-1 bg-success rounded-circle"
														onClick={() => {
															increase(cart.id);
														}}
													>
														<i className="fas fa-angle-double-right"></i>
													</div>
												</div>
											</td>
											<td className="product-subtotal">
												<span
													className="mt-3"
													style={{ fontWeight: 500 }}
												>
													{cart.price * (cartState[cart.id] || 1)}
												</span>
											</td>
											<td className="product-remove">
												<div
													className="mt-3"
													onClick={() => {
														remove(cart.id);
													}}
												>
													<i className="fa fa-times"></i>
												</div>
											</td>
										</tr>
									</>
								);
							})}
						</tbody>
					</Table>
					<div
						className="clear-cart h6  text-success border border-success rounded-pill p-3 px-4 float-start mt-3 ml-5"
						style={{
							fontWeight: 500,
							width: "fit-content",
							cursor: "pointer",
							marginRight: 10,
						}}
					>
						<Nav.Link to="/shop" as={Link} className=" d-inline">
							<strong
								style={{ cursor: "pointer" }}
								className="text-success "
							>
								CONTINUE SHOPPING
							</strong>
						</Nav.Link>
					</div>
					<div
						className="clear-cart h6 text-success border border-success rounded-pill p-3	 px-4 float-end mt-3 mr-5"
						style={{
							fontWeight: 500,
							width: "fit-content",
							cursor: "pointer",
							marginRight: 10,
						}}
						onClick={clear}
					>
						CLEAR SHOPPING CART
					</div>
					{/* <div className="align-items-center text-center my-5" stly>
						<div className="text-primary">
							
						</div>
						<div className="text-secondary">
							Tiếp tục mua hàng ?{" "}
							<Nav.Link to="/shop" as={Link} className=" d-inline">
								<strong
									style={{ cursor: "pointer" }}
									className="text-success "
								>
									Shop
								</strong>
							</Nav.Link>
						</div>
					</div> */}
					<div className="d-flex flex-row" style={{ marginTop: 200 }}>
						<div className="align-items-center w-50 d-flex justify-content-center">
							<img src={cart} className="img-cart" />
						</div>
						<div className="d-flex justify-content-center">
							<Card className="text-left pr-5 ">
								<Card.Header className="h3 py-4">
									Cart Total
								</Card.Header>
								<Card.Body className="jutify-content">
									{/* <Card.Title>Total Products</Card.Title>
									<Card.Text>
										
									</Card.Text> */}
									<div
										className="p-5 d-flex flex-row justify-content-between  "
										style={{ width: 400 }}
									>
										<div className="text-success fw-bold">
											Total products
										</div>
										<div>
											<strong>{total} Đ</strong>
										</div>
									</div>
									<div className="d-flex justify-content-center mb-3">
										<Button
											variant="success"
											to="/checkout"
											as={Link}
										>
											PROCEED TO CHECKOUT
										</Button>
									</div>
								</Card.Body>
								<Card.Footer className="text-muted">
									E-Commerce
								</Card.Footer>
							</Card>
						</div>
					</div>
				</>
			)}
		</>
	);

	return (
		<>
			<Navi></Navi>
			<div
				style={{ background: "#e9ecef" }}
				className=" w-100 py-5 text-center 	 "
			>
				<div
					className="d-inline "
					style={{ cursor: "pointer" }}
					onClick={() => {
						history.push("/");
					}}
				>
					Home
				</div>{" "}
				<div className="d-inline" style={{ cursor: "pointer" }}>
					{" "}
					/
				</div>{" "}
				<div className="d-inline fw-bold" style={{ cursor: "pointer" }}>
					View Cart
				</div>
			</div>
			<Container>{body}</Container>

			<Footer></Footer>
		</>
	);
};

export default ViewCart;
