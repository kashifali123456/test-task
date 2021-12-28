import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Contents from "./Components/Contents";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
function App() {
  return (
    <Grid className="App">
      <Navbar />
      <Header />
      <Contents />
    </Grid>
  );
}

export default App;
