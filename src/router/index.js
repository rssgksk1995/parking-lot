import { Switch, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import ParkVehicle from "../views/ParkVehicle";
import UnParkVehicle from "../views/UnParkVehicle";


function App() {
	return (
		<Switch>
			<Route path="/park-vehicle">
				<ParkVehicle />
			</Route>
			<Route path="/un-park-vehicle">
				<UnParkVehicle />
			</Route>
			<Route path="/">
				<LandingPage />
			</Route>
		</Switch>
	);
}

export default App;
