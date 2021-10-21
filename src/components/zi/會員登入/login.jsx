import './login.css'
import Background from '../../../img/loginBackground.png'

function Login() {
  return (
    <>
      <div class="zi">
        <img class="background" src={Background} alt="" />
        <div class="zi-card">
          <div class="card-content">
            <h1>會員登入</h1>
            <p>請填寫「欲至門市領藥的聯絡人」註冊資料</p>
            <div class="card-line"></div>
            <form class="form-content" action="">
              <label for="E-mail">電子郵件</label>
              <input
                type="email"
                id="E-mail"
                class="Email-text"
                placeholder="請輸入電子郵件"
              />
              <div class="password-text">
                <label for="Password">密碼</label>
                <a class="forget-pw" href="/#">
                  忘記密碼?
                </a>
              </div>
              <input
                type="password"
                id="Password"
                class="Password-text"
                placeholder="請輸入密碼"
              />

              <div class="button-flex">
                <button type="button" class="register">
                  註冊會員
                </button>
                <button type="submit" class="login">
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
