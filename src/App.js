import { Container } from "react-bootstrap"
import Navbar from "./Navbar"
import Title from "./Title"
import Categories from "./Categories"
import CardList from "./CardList"
function App() {
  return (
    <div className="color_body">
      <Navbar />
      <Container>
        <Title />
        <Categories />
        <CardList />
      </Container>
    </div>
  );
}

export default App;
