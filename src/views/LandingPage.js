import React from "react";
import LandingStyles from "./LandingPage.module.css";
import Grid from "@material-ui/core/Grid";
import HeadingComponent from "../components/HeadingComponent";
import TextComponent from "../components/TextComponent";
import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";
import * as actions from "../actions/Actions";
import { connect } from "react-redux";

import {
	CAR_PARKING_LOT_SPACE,
	BIKE_PARKING_LOT_SPACE
} from "../constant/Common";

class LandingPage extends React.Component {
	componentDidMount() {
		const { carParkingSpace, bikeParkingSpace, dispatch } = this.props;
		if (!carParkingSpace) {
			dispatch(actions.initializeCarData.success(CAR_PARKING_LOT_SPACE));
		}
		if (!bikeParkingSpace) {
			dispatch(actions.initializeBikeData.success(BIKE_PARKING_LOT_SPACE));
		}
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
					<Link to="/park-vehicle">
						<PrimaryButton text="Park my vehicle" />
					</Link>
				</Grid>
				<Grid item xs={12}  className={LandingStyles.unparkButton}>
					<Link to="/un-park-vehicle">
							<PrimaryButton text="Un park my vehicle" />
					</Link>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	const { parkingLot } = state;
	return {
		carParkingSpace: parkingLot.carParkingSpace,
		bikeParkingSpace: parkingLot.bikeParkingSpace
	};
};

export default connect(mapStateToProps)(LandingPage);
