import './resetPassword.css'
import Background from '../../../img/loginBackground.png'

function ResetPassword() {
  return (
    <>
      <div className="zi-resetPassword">
        <img className="zi-resetPassword-background" src={Background} alt="" />
        <div className="zi-resetPassword-card">
          <div className="zi-resetPassword-card-content">
            <h1>重設密碼</h1>
            <p>請填寫新的密碼</p>
            <div className="zi-resetPassword-card-line"></div>
            <form className="zi-resetPassword-form-content" action="">
              <label for="new-Password">新密碼</label>
              <input
                type="password"
                id="new-Password"
                className="zi-resetPassword-new-Password"
                placeholder="請輸入新密碼"
              />

              <label for="reset-Password">確認新密碼</label>
              <input
                type="password"
                id="reset-Password"
                className="zi-resetPassword-reset-Password"
                placeholder="請再次輸入新密碼"
              />
              <div className="zi-resetPassword-button-flex">
                <button type="submit" className="zi-resetPassword-submit">
                  送出
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
