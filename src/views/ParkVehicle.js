import React from "react";
import Grid from "@material-ui/core/Grid";
import HeadingComponent from "../components/HeadingComponent";
import TextComponent from "../components/TextComponent";
import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RadioButtons from "../components/RadioButtons";
import TextInput from "../components/TextInput";
import * as actions from "../actions/Actions";
import ModalComp from "../components/ModalComp";
import VehicleStyle from "./ParkVehicle.module.css";
import AppHeader from "../components/AppHeader";

import {
	CAR_PARKING_LOT_SPACE,
	BIKE_PARKING_LOT_SPACE,
	VEHICLE_TYPE
} from "../constant/Common";

class ParkVehicle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRadioValue: "",
			selectedParkingSpace: "",
			selectedParkingSpaceName: "",
			formSubmitted: false,
			errorMessage: ""
		};
	}
	componentDidMount() {
		const { carParkingSpace, bikeParkingSpace, dispatch } = this.props;
		if (!carParkingSpace) {
			dispatch(actions.initializeCarData.success(CAR_PARKING_LOT_SPACE));
		}
		if (!bikeParkingSpace) {
			dispatch(actions.initializeBikeData.success(BIKE_PARKING_LOT_SPACE));
		}
	}

	onVehicleTypeChange = event => {
		this.setState({
			selectedRadioValue: event.target.value
		});
	};
	onParkingSpaceChange = event => {
		this.setState({
			selectedParkingSpace: event.target.value,
			selectedParkingSpaceName: event.target.name
		});
	};
	onTextChange(event) {
		this.setState({
			vehicleNumber: event.target.value
		});
	}

	saveData = () => {
		const {
			selectedRadioValue,
			selectedParkingSpace,
			vehicleNumber
		} = this.state;
		const { carParkingSpace, bikeParkingSpace } = this.props;
		if (selectedRadioValue && selectedParkingSpace && vehicleNumber) {
			let element;
			let id;
			if (selectedRadioValue === "fourWheeler") {
				carParkingSpace.forEach((item, index) => {
					if (item.value === selectedParkingSpace) {
						element = item;
						id = index;
					}
				});
				element.isFull = true;
				element.vehicleNumber = vehicleNumber;
				carParkingSpace.splice(id, 1, element);
				this.props.dispatch(actions.initializeCarData.success(carParkingSpace));
				this.setState({
					formSubmitted: true
				});
			} else if (selectedRadioValue === "twoWheeler") {
				bikeParkingSpace.forEach((item, index) => {
					if (item.value === selectedParkingSpace) {
						element = item;
						id = index;
					}
				});
				element.isFull = true;
				element.vehicleNumber = vehicleNumber;
				bikeParkingSpace.splice(id, 1, element);

				this.props.dispatch(
					actions.initializeBikeData.success(bikeParkingSpace)
				);
				this.setState({
					formSubmitted: true
				});
			}
		} else {
			this.setState({
				errorMessage: "Please fill all the fields."
			});
		}
	};

	closeModal = () => {
		this.setState({
			formSubmitted: false
		});
	};

	render() {
		const {
			selectedRadioValue,
			selectedParkingSpace,
			formSubmitted,
			errorMessage,
			selectedParkingSpaceName
		} = this.state;
		const { carParkingSpace, bikeParkingSpace } = this.props;

		let bikeParkingSpaceFilteredData = [];
		bikeParkingSpace &&
			bikeParkingSpace.forEach(element => {
				if (!element.isFull) {
					bikeParkingSpaceFilteredData.push(element);
				}
			});
		let carParkingSpaceFilteredData = [];
		carParkingSpace &&
			carParkingSpace.forEach(element => {
				if (!element.isFull) {
					carParkingSpaceFilteredData.push(element);
				}
			});

		return (
			<Grid container>
				<Grid item xs={12} className={VehicleStyle.header}>
					<AppHeader />
				</Grid>

				<Grid item xs={12}>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<HeadingComponent text="Park Your Vehicle" />
						</Grid>
						<Grid item xs={12}>
							<TextComponent text="Please select a vehicle type " />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<RadioButtons
						data={VEHICLE_TYPE}
						selectedValue={selectedRadioValue}
						onChange={event => {
							this.onVehicleTypeChange(event);
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextComponent text="Searching for parking space" />
				</Grid>
				<Grid item xs={12}>
					<TextInput
						label="Vehicle Number"
						onChange={e => this.onTextChange(e)}
					/>
				</Grid>
				{selectedRadioValue && (
					<Grid item xs={12}>
						<TextComponent text="List of available parking places, Please choose one" />
					</Grid>
				)}
				<Grid item xs={12}>
					{selectedRadioValue === "fourWheeler" &&
						(carParkingSpaceFilteredData.length ? (
							<RadioButtons
								data={carParkingSpaceFilteredData}
								selectedValue={selectedParkingSpace}
								onChange={event => {
									this.onParkingSpaceChange(event);
								}}
							/>
						) : (
							"No paking space available"
						))}
					{selectedRadioValue === "twoWheeler" &&
						(bikeParkingSpaceFilteredData.length ? (
							<RadioButtons
								data={bikeParkingSpaceFilteredData}
								selectedValue={selectedParkingSpace}
								onChange={event => {
									this.onParkingSpaceChange(event);
								}}
							/>
						) : (
							"No paking space available"
						))}
				</Grid>
				{errorMessage && (
					<Grid item xs={12} className={VehicleStyle.errorMessageStyle}>
						<TextComponent text={errorMessage} />
					</Grid>
				)}

				<Grid item xs={12} className={VehicleStyle.parkButton}>
					<PrimaryButton text="Park" onClick={this.saveData} />
				</Grid>
				<ModalComp
					open={formSubmitted}
					handleClose={this.closeModal}
					body={
						<div>
							<h1>Thank you</h1>
							<h3>Please park your vehicle at {selectedParkingSpaceName}.</h3>
							<Link to="/">
								<PrimaryButton text="Close" onClick={this.closeModal} />
							</Link>
						</div>
					}
				/>
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

export default connect(mapStateToProps)(ParkVehicle);
