import './resetPassword.css'
import Background from '../../../img/loginBackground.png'

function ResetPassword() {
  return (
    <>
      <div class="zi">
        <img class="background" src={Background} alt="" />
        <div class="zi-card">
          <div class="card-content">
            <h1>重設密碼</h1>
            <p>請填寫新的密碼</p>
            <div class="card-line"></div>
            <form class="form-content" action="">
              <label for="new-Password">新密碼</label>
              <input
                type="password"
                id="new-Password"
                class="new-Password"
                placeholder="請輸入新密碼"
              />

              <label for="reset-Password">確認新密碼</label>
              <input
                type="password"
                id="reset-Password"
                class="reset-Password"
                placeholder="請再次輸入新密碼"
              />
              <div class="button-flex">
                <button type="submit" class="reset-password-submit">
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
