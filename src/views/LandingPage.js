import React from "react";
import LandingStyles from "./LandingPage.module.css";
import Grid from "@material-ui/core/Grid";
import HeadingComponent from "../components/HeadingComponent";
import TextComponent from "../components/TextComponent";
import PrimaryButton from "../components/PrimaryButton";

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { message: "Hello!" };
	}

	render() {
		return (
			<Grid container spacing={1} className={LandingStyles.content}>
				<Grid item xs={12}>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<HeadingComponent text="Welcome to parking lot" />
						</Grid>
						<Grid item xs={12}>
							<TextComponent text="Please choose an option below" />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} className={LandingStyles.parkingButton}>
					<PrimaryButton text="Park my vehicle" />
				</Grid>
				<Grid item xs={12}>
					<PrimaryButton text="Un park my vehicle" />
				</Grid>
			</Grid>
		);
	}
}

export default LandingPage;
