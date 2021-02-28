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
import AppHeader from '../components/AppHeader'

import { VEHICLE_TYPE } from "../constant/Common";

class UnParkVehicle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRadioValue: "",
			vehicleNumber: "",
			formSubmitted: false,
			notFoundMessage: "",
			selectedParkingSpaceName: ""
		};
	}
	onVehicleTypeChange = event => {
		this.setState({
			selectedRadioValue: event.target.value
		});
		this.resetErrorState();
	};
	onTextChange = event => {
		this.setState({
			vehicleNumber: event.target.value
		});
		this.resetErrorState();
	};
	searchMyVehicle = () => {
		const { selectedRadioValue, vehicleNumber } = this.state;
		const { carParkingSpace, bikeParkingSpace } = this.props;
		if (selectedRadioValue && vehicleNumber) {
			let selectedData;
			let id;
			if (selectedRadioValue === "fourWheeler") {
				carParkingSpace &&
					carParkingSpace.forEach((element, index) => {
						if (element.vehicleNumber === vehicleNumber) {
							selectedData = element;
							id = index;
							this.setState({
								selectedParkingSpaceName: element.label
							});
						}
					});
				if (selectedData && id) {
					selectedData.vehicleNumber = "";
					selectedData.isFull = false;

					carParkingSpace.splice(id, 1, selectedData);
					this.props.dispatch(
						actions.initializeCarData.success(carParkingSpace)
					);
					this.setState({
						formSubmitted: true
					});
				} else {
					this.setState({
						notFoundMessage: "Vehicle not found, please check your details."
					});
				}
			} else if (selectedRadioValue === "twoWheeler") {
				bikeParkingSpace &&
					bikeParkingSpace.forEach((element, index) => {
						if (element.vehicleNumber === vehicleNumber) {
							selectedData = element;
							id = index;
							this.setState({
								selectedParkingSpaceName: element.label
							});
						}
					});

				if (selectedData && id) {
					selectedData.vehicleNumber = "";
					selectedData.isFull = false;

					bikeParkingSpace.splice(id, 1, selectedData);
					this.props.dispatch(
						actions.initializeBikeData.success(bikeParkingSpace)
					);
					this.setState({
						formSubmitted: true
					});
				} else {
					this.setState({
						notFoundMessage: "Vehicle not found, please check your details."
					});
				}
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

	resetErrorState() {
		this.setState({
			notFoundMessage: "",
			errorMessage: ""
		});
	}

	render() {
		const {
			selectedRadioValue,
			formSubmitted,
			notFoundMessage,
			errorMessage,
			selectedParkingSpaceName
		} = this.state;
		return (
			<Grid container spacing={1}>
				<Grid item xs={12} className={VehicleStyle.header}>
					<AppHeader />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<HeadingComponent text=" Un Park Your Vehicle" />
						</Grid>
						<Grid item xs={12}>
							<TextComponent text="Please select a vehicle type " />
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
							<TextInput
								label="Vehicle Number"
								onChange={e => this.onTextChange(e)}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}></Grid>
				<Grid item xs={12}>
					<PrimaryButton
						text="Un park my vehicle"
						onClick={this.searchMyVehicle}
					/>
				</Grid>
				{notFoundMessage && (
					<Grid item xs={12} className={VehicleStyle.errorMessageStyle}>
						<TextComponent text={notFoundMessage} />
					</Grid>
				)}
				{errorMessage && (
					<Grid item xs={12} className={VehicleStyle.errorMessageStyle}>
						<TextComponent text={errorMessage} />
					</Grid>
				)}
				<ModalComp
					open={formSubmitted}
					handleClose={this.closeModal}
					body={
						<div>
							<h1>Thank you</h1>
							<h3>
								Please collect your vehicle at {selectedParkingSpaceName}.
							</h3>
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

export default connect(mapStateToProps)(UnParkVehicle);
