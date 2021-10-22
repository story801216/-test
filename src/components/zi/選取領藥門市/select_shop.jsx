import './select_shop.css'
import Googlemap from './googlemap'
import Background from '../../../img/預約領藥背景圖.jpg'
import Placeholder from '../../../img/icon/placeholder.png'

function Select_shop() {
  return (
    <>
      <div class="zi-select-shop">
        <img class="background" src={Background} alt="" />
        <div class="form-list">
          <div class="card-content">
            <h1>選取領藥門市</h1>
            <p>可自行選取門市，也可自動找尋最近門市</p>
            <div class="card-line"></div>
            <div class="autofindbtn">
              <img src={Placeholder} alt="" />
              自動搜尋最近門市
            </div>
            <form class="form-content" action="">
              <label class="city-label" for="city">
                城市
              </label>
              <select name="city" id="city">
                <option value="0">請選取指定城市</option>
                <option value="0">台北市</option>
                <option value="1">新北市</option>
                <option value="2">基隆市</option>
              </select>

              <label for="area">區域</label>
              <select name="city" id="city">
                <option value="0">請選取區域</option>
                <option value="0">中正區</option>
                <option value="1">中山區</option>
                <option value="2">文山區</option>
              </select>

              <label for="city">門市</label>
              <select name="city" id="city">
                <option value="0">請選取指定門市</option>
                <option value="0">吉林中山店</option>
                <option value="1">吉林中山店</option>
                <option value="2">吉林中山店</option>
              </select>
            </form>
          </div>

          <div class="map-group">
            <div class="uploadpic">
              <Googlemap />
            </div>
          </div>
        </div>
        <div class="button-flex">
          <button type="submit" class="form-submit backstep">
            上一步
          </button>
          <button type="submit" class="form-submit">
            送出
          </button>
        </div>
      </div>
    </>
  )
}

export default Select_shop
