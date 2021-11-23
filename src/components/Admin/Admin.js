import React from "react";
import {
	CSidebar,
	CSidebarBrand,
	CSidebarNav,
	CSidebarToggler,
	CNavItem,
	CNavTitle,
	CBadge,
	CNavGroup,
} from "@coreui/react";

import { cilSpeedometer, cilPuzzle } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const AppSidebar = () => {
	const [unfoldable, setUfordable] = useState(false);
	const [sidebarShow, setSidebarshow] = useState(true);
	return (
		<div>
			<CSidebar
				position="fixed"
				// unfoldable={unfoldable}
				visible={sidebarShow}
				onVisibleChange={(visible) => {
					setSidebarshow(visible);
				}}
			>
				<CSidebarBrand>Administration</CSidebarBrand>
				<CSidebarNav>
					<CNavTitle>Nav Title</CNavTitle>
					<CNavItem href="/admin/categories">
						<CIcon customClassName="nav-icon" icon={cilSpeedometer} />
						Categories
					</CNavItem>
					<CNavItem href="/admin/product">
						<CIcon customClassName="nav-icon" icon={cilSpeedometer} />
						Product
						<CBadge color="primary ms-auto">NEW</CBadge>
					</CNavItem>
					<CNavGroup toggler="Nav dropdown">
						<CNavItem href="#">
							<CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav
							dropdown item
						</CNavItem>
						<CNavItem href="#">
							<CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav
							dropdown item
						</CNavItem>
					</CNavGroup>
				</CSidebarNav>
				<CSidebarToggler
					className="d-none d-lg-flex"
					onClick={() => setUfordable(!unfoldable)}
				/>
			</CSidebar>
		</div>
	);
};

export default AppSidebar;
