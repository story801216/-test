import './prescription_stage.css'
import Up_arrow from '../../../img/icon/up-arrow.png'
import Prescription_preview from '../../../img/台大處方簽.jpg'
import Magnifier from '../../../img/icon/magnifier.png'

const prescription = [
  {
    sid: '0',
    stage: '等候領取',
    name: '王大明',
    uploadtime: '2021.09.10 09:00',
    shop: '中正店',
    date: '8月15日',
    hospital: '臺大醫院',
    division: '家醫科',
    times: '第二次',
  },
  {
    sid: '0',
    stage: '等候領取',
    name: '王大明',
    uploadtime: '2021.09.10 09:00',
    shop: '中正店',
    date: '8月15日',
    hospital: '臺大醫院',
    division: '家醫科',
    times: '第二次',
  },
]

function Prescription_stage() {
  return (
    <>
      <div className="zi-prescription_stage">
        <div className="zi-prescription_stage-prescription-select">
          <select name="select_stage" id="select-stage">
            <option value="0">請選擇調配進度</option>
            <option value="1">已上傳</option>
            <option value="2">調配中</option>
            <option value="3">等候領取</option>
            <option value="4">已領取</option>
          </select>

          <select name="mouth_stage" id="zi-prescription_stage-month-stage">
            <option value="0">八月份處方</option>
            <option value="1">九月份處方</option>
            <option value="2">十月份處方</option>
          </select>
        </div>
        {prescription.map((prescription, i) => {
          return (
            <div className="zi-prescription_stage-prescription-card">
              <div className="zi-prescription_stage-infolist">
                <div className="zi-prescription_stage-hidden-bar">
                  <img src={Up_arrow} alt="" />
                </div>
                <ul>
                  <div>
                    <li
                      className="Prescription_stage-sid"
                      key={prescription.sid}
                    ></li>
                    <li>目前進度:{prescription.stage}</li>
                    <li>病患姓名:{prescription.name}</li>
                    <li>上傳時間:{prescription.uploadtime}</li>
                    <li>領藥門市:{prescription.shop}</li>
                  </div>
                  <div>
                    <li>看診日期:{prescription.date}</li>
                    <li>醫院:{prescription.hospital}</li>
                    <li>科別:{prescription.division}</li>
                    <li>調劑次數:{prescription.times}</li>
                  </div>
                </ul>
              </div>
              <div className="zi-prescription_stage-prescription-img">
                <img
                  className="zi-prescription_stage-prescription-preview"
                  src={Prescription_preview}
                  alt=""
                />
                <img
                  className="zi-prescription_stage-magnifier"
                  src={Magnifier}
                  alt=""
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Prescription_stage
