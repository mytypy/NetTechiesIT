import { Routes, Route } from "react-router-dom"
import Login from "./components/login/login"
import Register from "./components/registration/registartion"
import Base from './components/BaseUserTools/BaseRegLog/base'


export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Base/>}>
          <Route index element={<Login/>}/>
          <Route path='registartion' element={<Register/>}/>
        </Route>
    </Routes>
  )
}