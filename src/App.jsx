import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";

import {Footer, Header, NotValidPath} from "./Components/import"
import {Cart, Home, Registration, SignIn} from "./pages/import";


function App() {
  const Layout = ({ children }) => {
    return (
      <div>
        <Header />
        <Outlet/>
        <Footer />
      </div>
    );
  };
  return (
    <div className="bg-gray-100">
      <BrowserRouter basename="/amazonByJaber">
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart/>}/>
            </Route>
            {/* Login page without layout */}
            <Route path="signin" element={<SignIn/>}/>
            <Route path="registration" element={<Registration/>}/>
            <Route path="*" element={<NotValidPath/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



