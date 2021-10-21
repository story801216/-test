import './Prescription_Reserve.css'
import Background from '../../../img/預約領藥背景圖.jpg'

function Prescription_Reserve() {
  return (
    <>
      <div class="zi-Prescription">
        <img class="background" src={Background} alt="" />
        <div class="form-list">
          <div class="card-content">
            <h1>填寫處方資料</h1>
            <p>建議您，至少提前一個禮拜預約，方便門市備藥喔</p>
            <div class="card-line"></div>
            <form class="form-content" action="">
              <label for="Name">姓名</label>
              <input
                type="text"
                id="Name"
                class="Name-text"
                placeholder="請輸入姓名"
              />

              <label for="Id-number">身分證字號</label>
              <input
                type="text"
                id="Id-number"
                class="Id-number"
                placeholder="請輸入身分證字號"
              />

              <label for="Birthday">病患出生年月日</label>
              <input
                type="date"
                id="Birthday"
                class="Birthday-text"
                placeholder="請輸入生日"
              />

              <label for="Hospital">開立處方醫院</label>
              <input
                type="text"
                id="Hospital"
                class="Hospital"
                placeholder="請輸入開立處方醫院"
              />

              <label for="Mobile">聯絡電話</label>
              <input
                type="text"
                id="Mobile"
                class="Mobile"
                placeholder="請輸入聯絡電話"
              />

              <label for="Freq">第幾次調劑</label>
              <select name="Freq" id="Freq">
                <option value="0">請選取調劑次數</option>
                <option value="0">第一次調劑</option>
                <option value="1">第二次調劑</option>
                <option value="2">第三次調劑</option>
              </select>

              <label for="pregnant">是否懷孕中</label>
              <div class="radio-flex">
                <label>
                  <input type="radio" name="pregnant" value="First" />是
                </label>
                <label>
                  <input type="radio" name="pregnant" value="Second" />否
                </label>
              </div>

              <label for="Freq">是否正在哺乳</label>
              <div class="radio-flex">
                <label>
                  <input type="radio" name="feeding" value="First" />是
                </label>
                <label>
                  <input type="radio" name="feeding" value="Second" />否
                </label>
              </div>
            </form>
          </div>

          <div class="uploadimg-group">
            <p>上傳處方(請上傳5MB以內JPG、PNG圖檔。最多五張)</p>
            <div class="uploadpic">
              <a href="#/" class="uploadbtn"></a>
              <a href="#/">如需縮圖請點這</a>
            </div>
          </div>
        </div>
        <div class="button-flex">
          <button type="submit" class="form-submit">
            下一步
          </button>
        </div>
      </div>
    </>
  )
}

export default Prescription_Reserve
