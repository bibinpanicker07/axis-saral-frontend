import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "News Feed",
	path: "/edit/newsfeed",
	icon: <FaIcons.FaEnvelopeOpenText />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "Explore Products",
	path: "/products",
	icon: <FaIcons.FaPhone />,
},
{
	title: "Company Policies",
	// path: "/events",
	icon: <FaIcons.FaTasks />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Business Conduct ",
		path: "/bcp",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Cyber Security ",
		path: "/csp",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Incident Management ",
		path: "/imp",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Employee",
	icon: <FaIcons.FaUsers />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Edit Employees",
		path: "/edit/employee",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Add Employee",
		path: "/add/employee",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	],
},
{
	title: "Stakeholder",
	icon: <FaIcons.FaUserTie />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Edit Stakeholder",
		path: "/edit/stakeholder",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Add Stakeholder",
		path: "/add/stakeholder",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	],
},
];
