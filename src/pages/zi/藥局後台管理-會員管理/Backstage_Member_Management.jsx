import './Backstage_Member_Management.css'
import Edit from '../../../img/icon/edit.png'
import Delete from '../../../img/icon/delete.png'
import magnifier from '../../../img/icon/magnifier.png'

function Backstage_Member_Management() {
  return (
    <>
      <div className="Backstage-Member-Management">
        <div className="Backstage-Member-Management-search-area">
          <div className="Backstage-Member-Management-search">
            <input
              className="search-input"
              type="text"
              placeholder="姓名查詢"
            />
            <button className="search-button">
              <img src={magnifier} alt="" />
            </button>
          </div>

          <div className="Backstage-Member-Management-search">
            <input
              className="search-input"
              type="text"
              placeholder="身分證字號查詢"
            />
            <button className="search-button">
              <img src={magnifier} alt="" />
            </button>
          </div>
        </div>
        <table className="Backstage-Member-Management-memberlist">
          <tr className="Backstage-Member-Management-table-title">
            <td className="Backstage-Member-Management-table-title-sid">
              編號
            </td>
            <td className="Backstage-Member-Management-table-title-name">
              姓名
            </td>
            <td className="Backstage-Member-Management-table-title-mail">
              信箱
            </td>
            <td className="Backstage-Member-Management-table-title-phone">
              電話
            </td>
            <td className="Backstage-Member-Management-table-title-id">
              身分證字號
            </td>
            <td className="Backstage-Member-Management-table-title-birthday">
              生日
            </td>
            <td
              className="Backstage-Member-Management-table-title-address"
              id="Backstage-Member-Management-table-title-address"
            >
              地址
            </td>
          </tr>

          <tr className="Backstage-Member-Management-table-list">
            <td className="Backstage-Member-Management-table-list-sid">1</td>
            <td className="Backstage-Member-Management-table-list-name">
              王大明
            </td>
            <td className="Backstage-Member-Management-table-list-mail">
              123@gmail.com
            </td>
            <td className="Backstage-Member-Management-table-list-phone">
              0988123123
            </td>
            <td className="Backstage-Member-Management-table-list-id">
              F123456789
            </td>
            <td className="Backstage-Member-Management-table-list-birthday">
              101/01/01
            </td>
            <td
              className="Backstage-Member-Management-table-list-address"
              id="Backstage-Member-Management-table-list-address"
            >
              台北市中正區中正路1號
            </td>

            <td>
              <div className="Backstage-Member-Management-table-list-buttons">
                <a
                  href="#/"
                  className="Backstage-Member-Management-table-list-buttons-edit"
                >
                  <div>
                    <img src={Edit} alt="" />
                  </div>
                </a>
                <a
                  href="#/"
                  className="Backstage-Member-Management-table-list-buttons-edit-delete"
                >
                  <div>
                    <img src={Delete} alt="" />
                  </div>
                </a>
              </div>
            </td>
          </tr>
        </table>

        <div className="Backstage-Member-Management-mobile-memberlist">
          <div className="Backstage-Member-Management-mobile-memberlist-cardline"></div>
          <div className="Backstage-Member-Management-mobile-memberlist-title">
            <ul>
              <li
                className="Backstage-Member-Management-mobile-memberlist-title-sid"
                id="Backstage-Member-Management-mobile-memberlist-title-sid"
              >
                1
              </li>
              <li className="Backstage-Member-Management-mobile-memberlist-title-mail">
                信箱
              </li>
              <li className="Backstage-Member-Management-mobile-memberlist-title-phone">
                電話
              </li>
              <li className="Backstage-Member-Management-mobile-memberlist-title-id">
                身分證
              </li>
              <li className="Backstage-Member-Management-mobile-memberlist-title-birthday">
                生日
              </li>
              <li className="Backstage-Member-Management-mobile-memberlist-title-address">
                地址
              </li>
            </ul>
          </div>
          <div className="Backstage-Member-Management-mobile-memberlist-info">
            <ul>
              <li
                className="Backstage-Member-Management-mobile-memberlist-info-name"
                id="Backstage-Member-Management-mobile-memberlist-info-name"
              >
                王大明
              </li>
              <li className="Backstage-Member-Management-mobile-memberlist-info-mail">
                123@gamil.com
              </li>
              <li className="Backstage-Member-Management-mobile-memberlist-info-phone">
                0988123123
              </li>
              <li className="Backstage-Member-Management-mobile-memberlist-info-id">
                F123456789
              </li>
              <li className="Backstage-Member-Management-mobile-memberlist-info-birthday">
                101/01/01
              </li>
              <li className="Backstage-Member-Management-mobile-memberlist-info-address">
                台北市中正區中正路1號
              </li>
            </ul>
          </div>
          <div className="Backstage-Member-Management-mobile-memberlist-buttons">
            <a
              href="#/"
              className="Backstage-Member-Management-mobile-memberlist-buttons-edit"
            >
              <div>
                <img src={Edit} alt="" />
              </div>
            </a>
            <a
              href="#/"
              className="Backstage-Member-Management-mobile-memberlist-buttons-delete"
            >
              <div>
                <img src={Delete} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Backstage_Member_Management
