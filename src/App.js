import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Tweets from "./pages/TweetsPage/Tweets";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Route>
    </Routes>
  );
}
export default App;
