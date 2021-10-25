import './Backstage_Prescription_Management.css'
import magnifier from '../../../img/icon/magnifier.png'
import Up_arrow from '../../../img/icon/up-arrow.png'
import Prescription_preview from '../../../img/台大處方簽.jpg'

function Backstage_Member_Management() {
  return (
    <>
      <div class="Backstage-Prescription-Management">
        <div class="Backstage-Prescription-Management-search-flex">
          <div class="Backstage-Prescription-Management-search-area">
            <div class="Backstage-Prescription-Management-search">
              <input class="search-input" type="text" placeholder="姓名查詢" />
              <button class="search-button">
                <img src={magnifier} alt="" />
              </button>
            </div>

            <div class="Backstage-Prescription-Management-search">
              <input
                class="search-input"
                type="text"
                placeholder="身分證字號查詢"
              />
              <button class="search-button">
                <img src={magnifier} alt="" />
              </button>
            </div>
          </div>
          <div class="Backstage-Prescription-Management-prescription-select">
            <select name="select_stage" id="select-stage">
              <option value="0">請選擇調配進度</option>
              <option value="1">已上傳</option>
              <option value="2">調配中</option>
              <option value="3">等候領取</option>
              <option value="4">已領取</option>
            </select>

            <select
              name="mouth_stage"
              id="Backstage-Prescription-Management-month-stage"
            >
              <option value="0">八月份處方</option>
              <option value="1">九月份處方</option>
              <option value="2">十月份處方</option>
            </select>
          </div>
        </div>
        <div class="Backstage-Prescription-Management-prescription-card">
          <div class="Backstage-Prescription-Management-infolist">
            <div class="Backstage-Prescription-Management-hidden-bar">
              <img src={Up_arrow} alt="" />
            </div>
            <ul>
              <div>
                <li>
                  目前進度:
                  <select
                    name="change-stage"
                    id="change-stage"
                    class="Backstage-Prescription-Management-change-stage"
                  >
                    <option value="1">已上傳</option>
                    <option value="2">調配中</option>
                    <option value="3">等候領取</option>
                    <option value="4">已領取</option>
                  </select>
                </li>
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
          <div class="Backstage-Prescription-Management-prescription-img">
            <img
              class="Backstage-Prescription-Management-prescription-preview"
            src={Prescription_preview}
              alt=""
            />
            <img
              class="Backstage-Prescription-Management-magnifier"
              src={magnifier}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Backstage_Member_Management
