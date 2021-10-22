import './member_revise.css'

function Member_revise() {
  return (
    <>
      <div class="zi-member-revise">
        <div class="pagination">
          <div class="member-profile" id="member-profile">
            會員資料
          </div>
          <div class="prescription-stage" id="prescription-stage">
            處方籤進度與紀錄
          </div>
          <div class="order-list" id="order-list">
            訂單查詢
          </div>
        </div>
        <div class="bottom-line"></div>
        <form class="form-content" action="">
          <label for="E-mail">電子郵件(不可修改)</label>
          <input
            type="email"
            id="E-mail"
            class="Email-text"
            placeholder="請輸入電子郵件"
            disabled="disabled"
          />

          <label for="Password">密碼</label>
          <input
            type="password"
            id="Password"
            class="Password-text"
            placeholder="請輸入密碼"
          />

          <label for="Name">姓名</label>
          <input
            type="text"
            id="Name"
            class="Name-text"
            placeholder="請輸入姓名"
          />

          <label for="Birthday">生日</label>
          <input
            type="date"
            id="Birthday"
            class="Birthday-text"
            placeholder="請輸入生日"
          />

          <label for="Id-number">
            身分證字號<p>(不可修改)</p>
          </label>
          <input
            type="text"
            id="Id-number"
            class="Id-number"
            placeholder="請輸入身分證字號"
            disabled="disabled"
          />

          <label for="Mobile">手機號碼</label>
          <input
            type="text"
            id="Mobile"
            class="Mobile"
            placeholder="請輸入手機號碼"
          />

          <label for="Address">聯絡地址</label>
          <input
            type="password"
            id="Address"
            class="Password-text"
            placeholder="請輸入聯絡地址"
          />
        </form>
        <div class="button-flex">
          <button type="submit" class="form-submit backstep">
            修改
          </button>
          <button type="submit" class="form-submit">
            送出
          </button>
        </div>
      </div>
    </>
  )
}

export default Member_revise
