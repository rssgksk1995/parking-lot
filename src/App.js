import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";
import Container from '@material-ui/core/Container';


function App() {
	return (
		<Router>
			<Container maxWidth="md" style={{paddingTop: '50px'}}>
				<Routes />
			</Container>
		</Router>
	);
}

export default App;
