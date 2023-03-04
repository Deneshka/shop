import {BrowserRouter} from "react-router-dom";
import AppRouter from "../src/components/AppRouter";
import Shop from "./pages/Shop"
import {Component, useContext, useEffect, useState} from "react";
import Admin from "./pages/Admin"
import NavBar from "./components/NavBar";
import Modal from "./components/modals/CreateBrand";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import Loader from "./components/svg/loader";




const App = observer(() => {

  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))


  }, [])

  if (loading) {
    return <Loader/>
  }
  return (
    <BrowserRouter>

      <NavBar/>
      <AppRouter/>





    </BrowserRouter>
  );
})

export default App;
