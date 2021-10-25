import './member_revise.css'
import '../zi-共用元件/後臺分頁按鈕/Backstage-bookMark.jsx'
// import Member_bookMark from '../zi-共用元件/會員中心分頁按鈕/Member-bookMark'

function Member_revise() {
  return (
    <>
      <div className="zi-member-revise">
        {/* <Member_bookMark /> */}
        <form className="zi-member-revise-form-content" action="">
          <label for="E-mail">電子郵件(不可修改)</label>
          <input
            type="email"
            id="E-mail"
            className="zi-member-revise-Email-text"
            placeholder="請輸入電子郵件"
            disabled="disabled"
          />

          <label for="Password">密碼</label>
          <input
            type="password"
            id="Password"
            className="zi-member-revise-Password-text"
            placeholder="請輸入密碼"
          />

          <label for="Name">姓名</label>
          <input
            type="text"
            id="Name"
            className="zi-member-revise-Name-text"
            placeholder="請輸入姓名"
          />

          <label for="zi-member-revise-Birthday">生日</label>
          <input
            type="date"
            id="zi-member-revise-Birthday"
            className="zi-member-revise-Birthday-text"
            placeholder="請輸入生日"
          />

          <label for="Id-number">
            身分證字號<p>(不可修改)</p>
          </label>
          <input
            type="text"
            id="Id-number"
            className="zi-member-revise-Id-number"
            placeholder="請輸入身分證字號"
            disabled="disabled"
          />

          <label for="Mobile">手機號碼</label>
          <input
            type="text"
            id="Mobile"
            className="zi-member-revise-Mobile"
            placeholder="請輸入手機號碼"
          />

          <label for="Address">聯絡地址</label>
          <input
            type="text"
            id="Address"
            className="zi-member-revise-Address"
            placeholder="請輸入聯絡地址"
          />
        </form>
        <div className="zi-member-revise-button-flex">
          <button type="submit" className="zi-member-revise-revisedbutton">
            修改
          </button>
          <button type="submit" className="zi-member-revise-form-submit">
            送出
          </button>
        </div>
      </div>
    </>
  )
}

export default Member_revise
