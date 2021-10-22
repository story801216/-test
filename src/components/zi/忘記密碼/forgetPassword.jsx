import './forgetPassword.css'
import Background from '../../../img/loginBackground.png'

function ForgetPassword() {
  return (
    <>
      <div className="zi-forgetPassword">
        <img className="zi-forgetPassword-background" src={Background} alt="" />
        <div className="zi-forgetPassword-card">
          <div className="zi-forgetPassword-card-content">
            <h1>發送驗證信</h1>
            <p>請填寫註冊時的電子郵件</p>
            <div className="zi-forgetPassword-card-line"></div>
            <form className="zi-forgetPassword-form-content" action="">
              <label for="E-mail">電子郵件</label>
              <input
                type="email"
                id="E-mail"
                className="Email-text"
                placeholder="請輸入電子郵件"
              />

              <div className="zi-forgetPassword-button-flex">
                <button
                  type="submit"
                  className="zi-forgetPassword-button-flex-verify-submit"
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
