import './forgetPassword.css'
import Background from '../../../img/loginBackground.png'

function ForgetPassword() {
  return (
    <>
      <div class="zi-forgetPassword">
        <img class="zi-forgetPassword-background" src={Background} alt="" />
        <div class="zi-forgetPassword-card">
          <div class="zi-forgetPassword-card-content">
            <h1>發送驗證信</h1>
            <p>請填寫註冊時的電子郵件</p>
            <div class="zi-forgetPassword-card-line"></div>
            <form class="zi-forgetPassword-form-content" action="">
              <label for="E-mail">電子郵件</label>
              <input
                type="email"
                id="E-mail"
                class="Email-text"
                placeholder="請輸入電子郵件"
              />

              <div class="zi-forgetPassword-button-flex">
                <button
                  type="submit"
                  class="zi-forgetPassword-button-flex-verify-submit"
                >
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
