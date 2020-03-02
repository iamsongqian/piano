import App from "next/app"
import "antd/dist/antd.css"
import '../public/style/pages/utils.css'
import Axios from "axios"
import {URL} from '../public/utils/requestConfig'
Axios.defaults.baseURL=URL
export default App
