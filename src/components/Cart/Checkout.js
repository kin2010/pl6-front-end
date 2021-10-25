import React from "react";
import { useHistory } from "react-router";
import Navi from "../../HomePage/Navi";
import Footer from "../../HomePage/Footer";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
const Checkout = () => {
	const {
		authState: { user },
	} = React.useContext(AuthContext);
	var fullName = "";
	var email = "";
	const [total, setTotal] = React.useState(0);
	const {
		cartState: { carts },
		cartState,
		increase_quatity,
		decrease_quatity,
		removeCart,
		removeAllCart,
	} = React.useContext(CartContext);
	React.useEffect(() => {
		//total
		let total = 0;
		carts.map((item) => {
			total += item.price * (cartState[item.id] || 1);
		});
		setTotal(total);
	}, [carts, cartState]);
	const history = useHistory();
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
					Checkout
				</div>
			</div>
			<Container>
				<Row style={{ marginTop: 150 }}>
					<Col>
						<h3 className="mb-4 text-center">Billing Details</h3>
						<Form className=" p-5 shadow">
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Full Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter Full Name"
									value={fullName}
									disabled
								/>
								<Form.Text className="text-muted">Full Name </Form.Text>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
									value={email}
									disabled
								/>
								<Form.Text className="text-muted">Email</Form.Text>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Phone</Form.Label>
								<Form.Control
									type="number"
									placeholder="Phone Number"
									required
								/>
								<Form.Text className="text-muted">Phone</Form.Text>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Street Address</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter Street Address"
									required
								/>
								<Form.Text className="text-muted">
									Street Address
								</Form.Text>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group>
							<h5>Additional information</h5>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Label>Order Notes</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Notes about your order, e.g. special notes for delivery"
								/>
							</Form.Group>
							<Button variant="success" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
					<Col className="d-flex flex-column align-items-center">
						<h3 className=" mb-4">Your Order</h3>
						<div
							style={{ width: 450, lineHeight: 5 }}
							className="shadow p-5 "
						>
							<div className="d-flex flex-row justify-content-between border-bottom">
								<div>Product</div>
								<div>Total</div>
							</div>
							<div>
								{/* <div className="d-flex flex-row justify-content-between border-bottom pt-4	">
									<div className="h6">Ao</div>
									<div className="h6">1000 Đ</div>
								</div> */}
								{carts.map((cart) => {
									return (
										<>
											<div
												className="d-flex flex-row justify-content-between border-bottom pt-4 pb-1"
												key={cart.id}
											>
												<div className="h6">
													{cart.name} X{" "}
													<strong className="d-inline">
														{cartState[cart.id] || 1}
													</strong>
												</div>
												<div className="h6">
													{cart.price * cartState[cart.id] ||
														cart.price}{" "}
													Đ
												</div>
											</div>
										</>
									);
								})}
							</div>

							<div className="d-flex flex-row justify-content-between border-bottom pt-4	">
								<div>Shipping</div>
								<div>Free Shipping</div>
							</div>
							<div className="d-flex flex-row justify-content-between border-bottom pt-4 text-success	">
								<div>Total</div>
								<div>{total} Đ</div>
							</div>
							<div></div>
						</div>
						<Button variant="success mt-4" style={{ width: 450 }}>
							PLACE ORDER
						</Button>
					</Col>
				</Row>
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Checkout;
