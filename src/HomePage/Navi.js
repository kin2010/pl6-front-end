import React from "react";
import "./Navi.css";
import Button from "react-bootstrap/Button";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import img from "../img/product_single_10.jpg";
import img1 from "../img/product_single_09.jpg";
import Cart from "../components/Cart/Cart.js";
import { UpCircleOutlined } from "@ant-design/icons";
const Navi = () => {
	const [show, setShow] = React.useState("none");
	const showCart = () => {
		console.log("show cart");
		if (show === "none") {
			setShow("block");
		}
	};
	const hide = () => {
		setShow("none");
	};

	return (
		<>
			<Navbar bg="light" variant="light">
				<Container className="my-3">
					<Navbar.Brand href="#home">
						<div
							id="logo"
							className="text-success"
							style={{ fontSize: 30 }}
						>
							E-Commerce
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />

					<Navbar.Collapse>
						<Nav className="me-auto">
							<Nav.Link
								className="ml-3"
								style={{ marginLeft: 70 }}
								to="/"
								as={Link}
							>
								Home
							</Nav.Link>
							<Nav.Link
								className="nav navbar-nav d-flex justify-content-between mx-lg-auto"
								to="/about"
								as={Link}
							>
								About
							</Nav.Link>
							<Nav.Link to="/shop" as={Link}>
								Shop
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link to="/login" as={Link}>
								Login
							</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Logout
							</Nav.Link>

							<Nav.Link
								className="nav-icon d-none d-lg-inline"
								href="#"
								data-bs-toggle="modal"
								data-bs-target="#templatemo_search"
							>
								<i className="fa fa-fw fa-search text-dark mr-2" />
							</Nav.Link>
							<div
								style={{ marginTop: 8 }}
								className="nav-icon position-relative text-decoration-none button-cart"
								onClick={showCart}
							>
								<i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
								<span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
									7
								</span>
								<div
									className="shopping-cart-content "
									style={{ display: show }}
								>
									{/* <i class="fas fa-times icon"></i> */}
									{/* <UpCircleOutlined
										style={{ backgroundColor: "#59ab6e" }}
										className="icon mb-2 btn btn-succsess"
										onClick={hide}
									/> */}
									<div
										style={{ width: "fit-content", marginLeft: 25 }}
										onClick={hide}
										className="ml-1 bg-info rounded-circle px-2 py-1 mt-2 text-white "
									>
										<i className="fas fa-chevron-up"></i>
									</div>
									<Cart></Cart>
								</div>
							</div>
							<Nav.Link
								className="nav-icon position-relative text-decoration-none"
								href="#"
							>
								<i className="fa fa-fw fa-user text-dark mr-3" />
								<span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
									+99
								</span>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navi;
