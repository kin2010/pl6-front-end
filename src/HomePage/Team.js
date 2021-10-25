import React from "react";
import { Card, Button } from "react-bootstrap";
import img from "../img/banner_img_01.jpg";
import "./Login.css";
const Team = () => {
	return (
		<>
			{/*/#cart_items*/}
			<div className="container py-5">
				<div className="row text-center text-white">
					<div className="col-lg-8 mx-auto">
						<h2
							className="row-title"
							style={{ color: "#2596be", fontWeight: 600 }}
						>
							Đội ngũ phát triển
						</h2>
						<p className="lead mb-0 subtitle">Đồ án c HTTT </p>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row text-center justify-content-center">
					<div className="col-xl-3 col-sm-6 mb-5">
						<div className=" py-5 px-4">
							<img
								src={img}
								alt=""
								width="200"
								className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
							/>
							<h5 className="mb-0">Ton That Quynh Anh</h5>
							<span className="small text-uppercase text-muted">
								Android Developer
							</span>
							<ul className="social mb-0 list-inline mt-3">
								<li className="list-inline-item">
									<a className="social-link">
										<i className="fa fa-facebook-f"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a className="social-link">
										<i className="fa fa-twitter"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-sm-6 mb-5">
						<div className="py-5 px-4">
							<img
								src={img}
								alt=""
								width="200"
								className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
							/>
							<h5 className="mb-0">Lee Quang Thong</h5>
							<span className="small text-uppercase text-muted">
								Back-End Developer
							</span>
							<ul className="social mb-0 list-inline mt-3">
								<li className="list-inline-item">
									<a className="social-link">
										<i className="fa fa-facebook-f"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a className="social-link">
										<i className="fa fa-twitter"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-sm-6 mb-5">
						<div className="py-5 px-4">
							<img
								src={img}
								alt=""
								width="200"
								className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
							/>
							<h5 className="mb-0">THe Vien</h5>
							<span className="small text-uppercase text-muted">
								Front-End Developer
							</span>
							<ul className="social mb-0 list-inline mt-3">
								<li className="list-inline-item">
									<a className="social-link">
										<i className="fa fa-facebook-f"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a className="social-link">
										<i className="fa fa-twitter"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-sm-6 mb-5">
						<div className=" py-5 px-4">
							<img
								src={img}
								alt=""
								width="200"
								className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
							/>
							<h5 className="mb-0">Khuong Duy</h5>
							<span className="small text-uppercase text-muted">
								Android Developer
							</span>
							<ul className="social mb-0 list-inline mt-3">
								<li className="list-inline-item">
									<a className="social-link">
										<i className="fa fa-facebook-f"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a className="social-link">
										<i className="fa fa-twitter"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Team;
