import './Backstage_Member_Management.css'
import Edit from '../../../img/icon/edit.png'
import Delete from '../../../img/icon/delete.png'
import magnifier from '../../../img/icon/magnifier.png'

const memberinfo = [
  {
    sid: 0,
    name: '王大明',
    mail: '	123@gmail.com',
    phone: '0988123123',
    id: '	F123456789',
    birthday: '101/01/01',
    address: '台北市中正區中正路1號',
  },
  {
    sid: 1,
    name: '王大明',
    mail: '	123@gmail.com',
    phone: '0988123123',
    id: '	F123456789',
    birthday: '101/01/01',
    address: '台北市中正區中正路1號',
  },
]

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
          {memberinfo.map((memberinfo, i) => {
            return (
              <tr className="Backstage-Member-Management-table-list">
                <td
                  className="Backstage-Member-Management-table-list-sid"
                  key={memberinfo.sid}
                >
                  {memberinfo.sid + 1}
                </td>
                <td className="Backstage-Member-Management-table-list-name">
                  {memberinfo.name}
                </td>
                <td className="Backstage-Member-Management-table-list-mail">
                  {memberinfo.mail}
                </td>
                <td className="Backstage-Member-Management-table-list-phone">
                  {memberinfo.phone}
                </td>
                <td className="Backstage-Member-Management-table-list-id">
                  {memberinfo.id}
                </td>
                <td className="Backstage-Member-Management-table-list-birthday">
                  {memberinfo.birthday}
                </td>
                <td
                  className="Backstage-Member-Management-table-list-address"
                  id="Backstage-Member-Management-table-list-address"
                >
                  {memberinfo.address}
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
            )
          })}
        </table>

        {memberinfo.map((memberinfo, i) => {
          return (
            <div className="Backstage-Member-Management-mobile-memberlist">
              <div className="Backstage-Member-Management-mobile-memberlist-cardline"></div>
              <div className="Backstage-Member-Management-mobile-memberlist-title">
                <ul>
                  <li
                    className="Backstage-Member-Management-mobile-memberlist-title-sid"
                    id="Backstage-Member-Management-mobile-memberlist-title-sid"
                    key={memberinfo.sid}
                  >
                    {memberinfo.sid + 1}
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
                    {memberinfo.name}
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-info-mail">
                    {memberinfo.mail}
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-info-phone">
                    {memberinfo.phone}
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-info-id">
                    {memberinfo.id}
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-info-birthday">
                    {memberinfo.birthday}
                  </li>
                  <li className="Backstage-Member-Management-mobile-memberlist-info-address">
                    {memberinfo.address}
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
          )
        })}
      </div>
    </>
  )
}

export default Backstage_Member_Management
