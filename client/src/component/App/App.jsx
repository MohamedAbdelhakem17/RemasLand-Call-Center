import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const Home = lazy(() => import("../Home/Home"))
const Menu = lazy(() => import("../CreateNewOrder/Menu"))
const ConfirmOrder = lazy(() => import("../CreateNewOrder/ConfirmOrder"))

const App = () => {
  return <>
    <Suspense fallback={<h2>Loading ...</h2>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-order" element={<Menu />} />
          <Route path="/confirm-order" element={<ConfirmOrder />} />
        </Routes>
      </Router>
    </Suspense>
  </>
}

export default App