import React from "react";
import './AppHeader.css'
import parking from '../assets/image/parking.png'
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import HeadingComponent from "./HeadingComponent";



export default function AppHeader() {
	return (
		<Grid container>
			<Grid item xs={12} className='header'>
				<Link to="/">
					<img src={parking} alt="Home" className='logo' />
				</Link>
				<Link to="/" className='headingText'>
					<HeadingComponent text="Paking Lot" />
				</Link>
			</Grid>
			<Grid item xs={12}>
				<hr />
			</Grid>
		</Grid>
	);
}
