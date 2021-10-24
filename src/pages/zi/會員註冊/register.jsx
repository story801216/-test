import './register.css'
import Background from '../../../img/loginBackground.png'

function Register() {
  return (
    <>
      <div className="zi-register">
        <img className="zi-register-background" src={Background} alt="" />
        <div className="zi-register-card">
          <div className="zi-register-card-content">
            <h1>會員註冊</h1>
            <p>請填寫「欲至門市領藥的聯絡人」資料</p>
            <div className="zi-register-card-line"></div>
            <form className="zi-register-form-content" action="">
              <label for="E-mail">電子郵件</label>
              <input
                type="email"
                id="E-mail"
                className="Email-text"
                placeholder="請輸入電子郵件"
              />
              <label for="Password">密碼</label>
              <input
                type="password"
                id="Password"
                className="zi-register-Password-text"
                placeholder="請輸入密碼"
              />
              <label for="Name">姓名</label>
              <input
                type="text"
                id="Name"
                className="zi-register-Name-text"
                placeholder="請輸入姓名"
              />
              <label for="Birthday">生日</label>
              <input
                type="date"
                id="Birthday"
                className="zi-register-Birthday-text"
                placeholder="請輸入生日"
              />
              <label for="Id-number">身分證字號</label>
              <input
                type="text"
                id="Id-number"
                className="zi-register-Id-number"
                placeholder="請輸入身分證字號"
              />

              <label for="Mobile">手機號碼</label>
              <input
                type="text"
                id="Mobile"
                className="zi-register-Mobile"
                placeholder="請輸入手機號碼"
              />

              <label for="Address">聯絡地址</label>
              <input
                type="password"
                id="Address"
                className="zi-register-Address"
                placeholder="請輸入聯絡地址"
              />
              <div className="zi-register-checkbox-flex">
                <input type="checkbox" id="zi-register-Checkbox" />
                <p>
                  我已經閱讀 <a href="/">隱私權條款</a> 並已同意
                </p>
              </div>
              <div className="zi-register-button-flex">
                <button type="submit" className="zi-register-submit">
                  確認送出
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
