
import { Button } from "flowbite-react"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import AuthLayout from "./components/admin/AuthLayout"
import AuthLayout from "./components/auth/AuthLayout"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminLayout from "./components/admin/AdminLayout"
// import Dashboard from "./pages/admin/Dashboard"
import Dashboard from "./pages/admin/Dashboard"
import Product from "./pages/admin/Product"
import ShopLayout from "./components/shop/ShopLayout"
import Checkout from "./pages/shop/Checkout"
import Home from "./pages/shop/Home"
import Listing from "./pages/shop/listing"
function App() {
 

  return (
  <>
   {/* <h1 className="text-3xl font-bold underline bg-red-700">
    Hello worlhh
  </h1>
  <button className="bg-orange-800">jkl</button>
  <Button>flowbite</Button> */}
<Router>
<Routes>
<Route path="/auth" element={<AuthLayout/>}>
<Route path="register" element={<Register/>}/>
<Route path="login" element={<Login/>}/>
</Route>

{/* admin Routes */}
<Route path="/admin" element={<AdminLayout/>}>
<Route path="dashboard" element={<Dashboard/>}/>
<Route path="product" element={<Product/>}/>
</Route>

<Route path="/" element={<ShopLayout/>}>
<Route path="dashboard" element={<Dashboard/>}/>
<Route path="checkout" element={<Checkout/>}/>
<Route path="home" element={<Home/>}/>
<Route path="listing" element={<Listing/>}/>



</Route>

  </Routes>
</Router>
  </>
  )
}

export default App
