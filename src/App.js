import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Container } from "reactstrap";
import { Detail } from "./components/apiwalker/detail";
import { Home } from "./components/apiwalker/home";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route index path="/*" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Container>

  );
}

export default App;
