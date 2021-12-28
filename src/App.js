import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
function App() {
  return (
    <Grid className="App">
      <Navbar />
      <Grid>
        <Header />
      </Grid>
    </Grid>
  );
}

export default App;
