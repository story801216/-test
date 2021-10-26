import './App.css'
// import Navbar from './pages/Navbar/Navbar'
// import Footer from './pages/zi/zi-共用元件/Footer 底部/Footer'
// import Member_BookMark from './pages/zi/zi-共用元件/會員中心分頁按鈕/Member_BookMark'
// import Backstage_BookMark from './pages/zi/zi-共用元件/後臺分頁按鈕/Backstage-bookMark'
// import BottomNavBar from './components/元件/全網站共用/BottomNavBar  手機 底部浮動navbar/index'

// import Member_revise from './pages/zi/會員中心-會員資料修改/member_revise.jsx'
// import Prescription_stage from './pages/zi/會員中心-處方進度追蹤/Prescription_stage'

// import MobileNavBar from './pages/MobileNavBar手機版Nav/MobileNavBar.js'

// import Login from './pages/zi/會員登入/login.jsx'
import Register from './pages/zi/會員註冊/register.jsx'
// import ForgetPassword from './pages/zi/忘記密碼/forgetPassword.jsx'
// import ResetPassword from './pages/zi/重設密碼/resetPassword.jsx'

// import Prescription_Reserve from './pages/zi/處方籤預約領藥/Prescription_Reserve.jsx'
import Select_shop from './pages/zi/選取領藥門市/select_shop.jsx'

// import Backstage_Member_Management from './pages/zi/藥局後台管理-會員管理/Backstage_Member_Management'
// import Backstage_Prescription_Management from './pages/zi/藥局後台管理-處方管理/Backstage_Prescription_Management'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <MobileNavBar /> */}
      {/* <Member_BookMark /> */}
      {/* <Backstage_BookMark /> */}
      {/* <Backstage_Prescription_Management/> */}
      {/* <Backstage_Member_Management /> */}
      {/* <Login /> */}
      {/* <Footer /> */}
      {/* <BottomNavBar /> */}
      <div className="space">
        <Register />
      </div>
      {/* <div className="space">
        <ForgetPassword />
      </div> */}
      {/* <div className="space">
        <ResetPassword />
      </div> */}
      {/* <div className="space">
        <Prescription_Reserve />
      </div> */}
      {/* <div className="space">
        <Select_shop />
      </div> */}

      {/* <Member_revise /> */}

      {/* <div className="space"> */}
      {/* <Prescription_stage /> */}
      {/* <Footer /> */}
      {/* </div> */}
    </div>
  )
}

export default App
