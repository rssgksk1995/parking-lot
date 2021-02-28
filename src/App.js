import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";
import Container from "@material-ui/core/Container";
import { Provider } from "react-redux";
import store from "./store";


function App() {
	return (
		<Router>
			<Provider store={store}>
				<Container maxWidth="md" style={{ paddingTop: "50px" }}>
					<Routes />
				</Container>
			</Provider>
		</Router>
	);
}

export default App;
