import './prescription_stage.css'
import Up_arrow from '../../../img/icon/up-arrow.png'
import Prescription_preview from '../../../img/台大處方簽.jpg'
import Magnifier from '../../../img/icon/magnifier.png'

function Prescription_stage() {
  return (
    <>
      <div class="zi-prescription_stage">
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
        <div class="prescription-select">
          <select name="select_stage" id="select-stage">
            <option value="0">請選擇調配進度</option>
            <option value="1">已上傳</option>
            <option value="2">調配中</option>
            <option value="3">等候領取</option>
            <option value="4">已領取</option>
          </select>

          <select name="mouth_stage" id="month-stage">
            <option value="0">八月份處方</option>
            <option value="1">九月份處方</option>
            <option value="2">十月份處方</option>
          </select>
        </div>
        <div class="prescription-card">
          <div class="infolist">
            <div class="hidden-bar">
              <img src={Up_arrow} alt="" />
            </div>
            <ul>
              <div>
                <li>目前進度:等候領取</li>
                <li>病患姓名:王大明</li>
                <li>上傳時間:2021.09.10 09:00</li>
                <li>領藥門市:中正店</li>
              </div>
              <div>
                <li>看診日期:8月15日</li>
                <li>醫院:台大醫院</li>
                <li>科別:家醫科</li>
                <li>調劑次數:第二次</li>
              </div>
            </ul>
          </div>
          <div class="prescription-img">
            <img
              class="prescription-preview"
              src={Prescription_preview}
              alt=""
            />
            <img class="magnifier" src={Magnifier} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Prescription_stage
