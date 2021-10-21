import './forgetPassword.css'
import Background from '../../../img/loginBackground.png'

function ForgetPassword() {
  return (
    <>
      <div class="zi">
        <img class="background" src={Background} alt="" />
        <div class="zi-card">
          <div class="card-content">
            <h1>發送驗證信</h1>
            <p>請填寫註冊時的電子郵件</p>
            <div class="card-line"></div>
            <form class="form-content" action="">
              <label for="E-mail">電子郵件</label>
              <input
                type="email"
                id="E-mail"
                class="Email-text"
                placeholder="請輸入電子郵件"
              />

              <div class="button-flex">
                <button type="submit" class="verify-submit">
                  發送驗證信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword
