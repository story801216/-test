import './Prescription_Reserve.css'
import Background from '../../../img/預約領藥背景圖.jpg'

function Prescription_Reserve() {
  return (
    <>
      <div className="zi-Prescription">
        <img className="zi-Prescription-background" src={Background} alt="" />
        <div className="zi-Prescription-form-list">
          <div className="zi-Prescription-card-content">
            <h1>填寫處方資料</h1>
            <p>建議您，至少提前一個禮拜預約，方便門市備藥喔</p>
            <div className="zi-Prescription-card-line"></div>
            <form className="zi-Prescription-form-content" action="">
              <label for="Name">姓名</label>
              <input
                type="text"
                id="Name"
                className="zi-Prescription-Name-text"
                placeholder="請輸入姓名"
              />

              <label for="Id-number">身分證字號</label>
              <input
                type="text"
                id="Id-number"
                className="zi-Prescription-Id-number"
                placeholder="請輸入身分證字號"
                maxlength="10"
                minlength="10"
              />

              <label for="Birthday">病患出生年月日</label>
              <input
                type="date"
                id="Birthday"
                className="zi-Prescription-Birthday-text"
                placeholder="請輸入生日"
              />

              <label for="Hospital">開立處方醫院</label>
              <input
                type="text"
                id="Hospital"
                className="zi-Prescription-Hospital"
                placeholder="請輸入開立處方醫院"
              />

              <label for="Mobile">聯絡電話</label>
              <input
                type="number"
                id="Mobile"
                className="zi-Prescription-Mobile"
                placeholder="請輸入聯絡電話"
                maxlength="10"
                minlength="10"
              />

              <label for="Freq">第幾次調劑</label>
              <select name="Freq" id="Freq">
                <option value="0">請選取調劑次數</option>
                <option value="0">第一次調劑</option>
                <option value="1">第二次調劑</option>
                <option value="2">第三次調劑</option>
              </select>

              <label for="pregnant">是否懷孕中</label>
              <div className="zi-Prescription-radio-flex">
                <label>
                  <input type="radio" name="pregnant" value="First" />是
                </label>
                <label>
                  <input type="radio" name="pregnant" value="Second" />否
                </label>
              </div>

              <label for="feeding">是否正在哺乳</label>
              <div className="zi-Prescription-radio-flex">
                <label>
                  <input type="radio" name="feeding" value="First" />是
                </label>
                <label>
                  <input type="radio" name="feeding" value="Second" />否
                </label>
              </div>
            </form>
          </div>

          <div className="zi-Prescription-uploadimg-group">
            <p>上傳處方(請上傳5MB以內JPG、PNG圖檔。最多五張)</p>
            <div className="zi-Prescription-uploadpic">
              <a href="#/" className="zi-Prescription-uploadbtn">
                <div className="zi-Prescription-plus1"></div>
                <div className="zi-Prescription-plus2"></div>
              </a>
              <a href="#/">如需縮圖請點這</a>
            </div>
          </div>
        </div>
        <div className="zi-Prescription-button-flex">
          <button type="submit" className="zi-Prescription-submit">
            下一步
          </button>
        </div>
      </div>
    </>
  )
}

export default Prescription_Reserve
