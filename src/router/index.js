import { Switch, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";

function App() {
	return (
		<Switch>
			<Route path="/about">
				<LandingPage />
			</Route>
			<Route path="/topics">
				<LandingPage />
			</Route>
			<Route path="/">
				<LandingPage />
			</Route>
		</Switch>
	);
}

export default App;
