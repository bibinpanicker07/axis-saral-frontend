import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";


const Nav = styled.div`
// background: #15171c;
background: #97144d;
height: 10%;
top:0;
display: flex;
position:fixed;
z-index: 10;
width:100%;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
// background:#00000008;
// width: 250px;
width:16%;
height: 100%;
display: flex;
justify-content: center;
position: fixed;
top: 10%;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(true);

const showSidebar = () => setSidebar(sidebar);

return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav>

		<h1
			style={{ textAlign: "center",
					marginLeft: "200px",
					color: "white" }}
		>
			Axis Saral
		</h1>
		</Nav>




		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			{/* <NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon> */}
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default Sidebar;
