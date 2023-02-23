import css from "../assets/techs/css3.svg";
import dart from "../assets/techs/dart.svg";
import flutter from "../assets/techs/flutter.svg";
import html from "../assets/techs/html5.svg";
import js from "../assets/techs/javascript.svg";
import react from "../assets/techs/react.svg";
import redux from "../assets/techs/redux.svg";
import ts from "../assets/techs/typescript.svg";

import express from "../assets/techs/express.svg";
import firebase from "../assets/techs/firebase.svg";
import java from "../assets/techs/java.svg";
import mongodb from "../assets/techs/mongodb.svg";
import mysql from "../assets/techs/mysql.svg";
import node from "../assets/techs/nodejs.svg";
import spring from "../assets/techs/spring.svg";

import androidstudio from "../assets/techs/androidstudio.svg";
import figma from "../assets/techs/figma.svg";
import git from "../assets/techs/git.svg";
import github from "../assets/techs/github.svg";
import npm from "../assets/techs/npm.svg";
import photoshop from "../assets/techs/photoshop.svg";
import vscode from "../assets/techs/vscode.svg";

export type Tech = {
	id: number;
	name: string;
	img: string;
};

export const frontendArray: Tech[] = [
	{
		id: 0,
		name: "HTML",
		img: html,
	},
	{
		id: 1,
		name: "CSS",
		img: css,
	},
	{
		id: 2,
		name: "JavaScript",
		img: js,
	},
	{
		id: 3,
		name: "TypeScript",
		img: ts,
	},
	{
		id: 4,
		name: "React",
		img: react,
	},
	{
		id: 5,
		name: "Redux",
		img: redux,
	},
	/* {
		id: 6,
		name: "Dart",
		img: dart,
	},
	{
		id: 7,
		name: "Flutter",
		img: flutter,
	}, */
];

export const backendArray: Tech[] = [
	{
		id: 8,
		name: "Java",
		img: java,
	},
	/* {
		id: 9,
		name: "Spring",
		img: spring,
	},
	{
		id: 10,
		name: "Express",
		img: express,
	},
	{
		id: 11,
		name: "Node",
		img: node,
	}, */
	{
		id: 12,
		name: "Firebase",
		img: firebase,
	},
	{
		id: 13,
		name: "MySQL",
		img: mysql,
	},
	/* {
		id: 14,
		name: "Mongodb",
		img: mongodb,
	}, */
];

export const toolsArray: Tech[] = [
	{
		id: 15,
		name: "Git",
		img: git,
	},
	{
		id: 16,
		name: "GitHub",
		img: github,
	},
	{
		id: 17,
		name: "VSCode",
		img: vscode,
	},
	{
		id: 19,
		name: "npm",
		img: npm,
	},
	{
		id: 20,
		name: "Figma",
		img: figma,
	},
	{
		id: 21,
		name: "Photoshop",
		img: photoshop,
	},
];
