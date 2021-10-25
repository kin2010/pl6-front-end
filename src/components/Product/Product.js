import React from "react";
import { Card, Button, OverlayTrigger, Tooltip, Image } from "react-bootstrap";
import img1 from "../../img/shop_01.jpg";
import { Link } from "react-router-dom";
import "./Product.css";
import { CartContext } from "../../Context/CartContext";
const Product = ({ product }) => {
	const { id, image, name, desc, price } = product;
	//React.useEffect(() => console.log(id));
	let hover;
	const { addCart } = React.useContext(CartContext);
	hover = <>aaaaaaaaaaaaaa</>;
	const add = (id) => {
		//add cart
		try {
			console.log(id);
			addCart(id);
		} catch (error) {}
	};
	return (
		<>
			<Card
				style={{ cursor: "pointer" }}
				className=" shadow mb-5 "
				style={{ width: "15rem" }}
			>
				<div className="card-img-overlay rounded-0 product-overlay d-flex flex-row align-items-center justify-content-center">
					<ul className="list-unstyled d-flex flex-row w-75 align-items-center justify-content-between ">
						<li className="mt-2">
							<a
								className="btn btn-success text-white"
								to="/shop-single/123456"
							>
								<i className="far fa-heart" />
							</a>
						</li>
						<li>
							<a
								className="btn btn-success text-white mt-2"
								href="shop-single.html"
							>
								<i className="far fa-eye" />
							</a>
						</li>
						<li>
							<a
								className="btn btn-success text-white mt-2"
								onClick={() => add(id)}
							>
								<i className="fas fa-cart-plus" />
							</a>
						</li>
					</ul>
				</div>
				{/* <OverlayTrigger
					placement="bottom"
					overlay={
						<div className="d-flex align-items-center justify-content-center">
							<i class="pull-right fas fa-cart-plus"></i>
							<i class="pull-right fas fa-cart-plus"></i>
							<i class="pull-right fas fa-cart-plus"></i>
						</div>
					}
				>
					{({ ref, ...triggerHandler }) => (
						<Button
							variant="light"
							{...triggerHandler}
							className="d-inline-flex align-items-center"
						>
							<Card.Img ref={ref} variant="top" src={img1} />{" "}
						</Button>
					)}
				</OverlayTrigger> */}
				<Card.Img variant="top" src={image} />

				<Card.Body className="text-success">
					<Card.Title>{name}</Card.Title>
					<Card.Text>{desc}</Card.Text>
					<ul className="list-unstyled d-flex justify-content-center mb-1">
						<li>
							<i className="text-warning fa fa-star" />
							<i className="text-warning fa fa-star" />
							<i className="text-warning fa fa-star" />
							<i className="text-muted fa fa-star" />
							<i className="text-muted fa fa-star" />
						</li>
					</ul>
					<p className="text-center mb-0">{price}</p>
					{/* <Button variant="primary">Go somewhere</Button> */}
				</Card.Body>
			</Card>
		</>
	);
};

export default Product;
