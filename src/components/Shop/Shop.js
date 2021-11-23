import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { CategoryContext } from "../../Context/CategoryContext";
import Footer from "../../HomePage/Footer";
import Header from "../../HomePage/Header";
import { unwrapResult } from "@reduxjs/toolkit";

import Navi from "../../HomePage/Navi";
import Product from "../Product/Product";
import "./Shop.css";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../Admin/components/Categories/CategoriesSlice";
import { createProduct, getProduct, getShop } from "./ShopSlice";
import Toasts from "../Toast/Toast.js";
const Shop = () => {
	const {
		CategoryState: { products },
	} = React.useContext(CategoryContext);
	const productDummy = useSelector((state) => state.shops.productDummy);
	const { Get_Category, Get_Product } = useContext(CategoryContext);
	const dispactch = useDispatch();
	useEffect(() => {
		//category
		try {
			// Get_Category();
			return Get_Product();
		} catch (error) {}
	}, []);
	const categorie = useSelector((state) => state.categories.Dummydata);

	const data = [
		{
			_id: "6159c7d4e08b851f5b90adb0",
			name: "Thiết Bị Điện Tử",
		},
		{
			_id: "6159c7d4e08b851f5b90adb1",
			name: "TV & Thiết Bị Điện Gia Dụng",
		},
		{
			_id: "6159c7d4e08b851f5b90adb2",
			name: "Sức Khoẻ & Làm Đẹp",
		},
		{
			_id: "6159c7d4e08b851f5b90adb3",
			name: "Siêu Thị Tạp Hoá",
		},
		{
			_id: "6159c7d4e08b851f5b90adb4",
			name: "Hàng Gia Dụng Và Đời Sống",
		},
		{
			_id: "6159c7d4e08b851f5b90adb5",
			name: "Hàng Mẹ, Bé & Đồ Chơi",
		},
		{
			_id: "6159c7d4e08b851f5b90adb6",
			name: "Thời Trang Nữ",
		},
		{
			_id: "6159c7d4e08b851f5b90adb7",
			name: "Thời Trang Nam",
		},
	];
	let shop;

	const a = {
		id: 123,
		image: "../../img/shop_01.jpg",
		name: "Vip pro",
		desc: "hangf xin  xo",
		price: "1000.000D",
	};
	shop = (
		<>
			{productDummy === null && <>asdad</>}
			{productDummy.map((item, index) => {
				return (
					<>
						<div key={item.index}>
							<Col>
								<Product product={item} />
							</Col>
						</div>
					</>
				);
			})}
		</>
	);
	const isLoading = useSelector((state) => state.categories.isLoading);
	let cate;
	cate = (
		<>
			{isLoading && (
				<Spinner
					animation="border"
					variant="success"
					className="justify-content-center position-relative top-50 start-50"
				/>
			)}
			{!isLoading && (
				<>
					{categorie.map((item, index) => {
						return (
							<>
								<div key={item.index}>
									<li className="pb-3">
										<a
											className="collapsed d-flex justify-content-between h3 text-decoration-none"
											href="#"
										>
											{item.name}
											<i className="pull-right fa fa-fw fa-chevron-circle-right mt-1"></i>
										</a>
									</li>
								</div>
							</>
						);
					})}
				</>
			)}
		</>
	);

	return (
		<>
			<Navi></Navi>

			<Container className="mt-5">
				<Row>
					<Col lg={3}>
						<h1 className="h2 pb-4">Categories</h1>
						<ul className="list-unstyled templatemo-accordion">
							{/* <li class="pb-3">
								<a
									class="collapsed d-flex justify-content-between h3 text-decoration-none"
									href="#"
								>
									Gender
									<i class="pull-right fa fa-fw fa-chevron-circle-right mt-1"></i>
								</a>
							</li>
							<li class="pb-3">
								<a
									class="collapsed d-flex justify-content-between h3 text-decoration-none"
									href="#"
								>
									Sale
									<i class="pull-right fa fa-fw fa-chevron-circle-right mt-1"></i>
								</a>
							</li>
							<li class="pb-3">
								<a
									class="collapsed d-flex justify-content-between h3 text-decoration-none"
									href="#"
								>
									Product
									<i class="pull-right fa fa-fw fa-chevron-circle-right mt-1"></i>
								</a>
							</li> */}
							{cate}
						</ul>
					</Col>
					<Col lg={9}>
						<Row>
							<Col md={6}>
								<ul className="list-inline shop-top-menu pb-3 pt-1">
									<li className="list-inline-item">
										<a
											className="h3 text-dark text-decoration-none mr-3"
											href="#"
										>
											All
										</a>
									</li>
									<li className="list-inline-item">
										<a
											className="h3 text-dark text-decoration-none mr-3"
											href="#"
										>
											Men's
										</a>
									</li>
									<li className="list-inline-item">
										<a
											className="h3 text-dark text-decoration-none"
											href="#"
										>
											Women's
										</a>
									</li>
								</ul>
							</Col>
							<Col md={6} className="mb-4">
								<div className="d-flex">
									<select className="form-control">
										<option>Featured</option>
										<option>A to Z</option>
										<option>Item</option>
									</select>
								</div>
							</Col>
						</Row>
						<Row className="row-cols-md-3 g-4 mx-auto mt-3">
							{shop}

							<div div="row">
								<ul className="pagination pagination-lg justify-content-end">
									<li className="page-item disabled">
										<a
											className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
											href="#"
											tabIndex={-1}
										>
											1
										</a>
									</li>
									<li className="page-item">
										<a
											className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
											href="#"
										>
											2
										</a>
									</li>
									<li className="page-item">
										<a
											className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
											href="#"
										>
											3
										</a>
									</li>
								</ul>
							</div>
						</Row>
					</Col>
				</Row>
				<Toasts />
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Shop;
