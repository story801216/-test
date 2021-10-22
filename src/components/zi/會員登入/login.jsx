import './login.css'
import Background from '../../../img/loginBackground.png'

function Login() {
  return (
    <>
      <div className="zi-Login">
        <img className="zi-Login-background" src={Background} alt="" />
        <div className="zi-Login-card">
          <div className="zi-Login-card-content">
            <h1>會員登入</h1>
            <p>請填寫「欲至門市領藥的聯絡人」註冊資料</p>
            <div className="zi-Login-card-line"></div>
            <form className="zi-Login-form-content" action="">
              <label for="E-mail">電子郵件</label>
              <input
                type="email"
                id="E-mail"
                className="Email-text"
                placeholder="請輸入電子郵件"
              />
              <div className="zi-Login-password-text">
                <label for="Password">密碼</label>
                <a className="zi-Login-forget-pw" href="/#">
                  忘記密碼?
                </a>
              </div>
              <input
                type="password"
                id="Password"
                className="zi-Login-Password-text"
                placeholder="請輸入密碼"
              />

              <div className="zi-Login-button-flex">
                <button type="button" className="zi-Login-register">
                  註冊會員
                </button>
                <button type="submit" className="zi-Login-login">
                  登入
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
