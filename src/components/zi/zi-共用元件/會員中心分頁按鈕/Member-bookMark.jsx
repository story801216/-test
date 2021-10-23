import React, { useState, useRef } from 'react'
import './Member-bookMark.css'
import other from '../../../../img/icon/other.jpg'

function BookMart(props) {
  const MobileListRef = useRef(null)
  const [optionNow, setOptionNow] = useState(0)
  const optionName = ['會員資料', '會員處方簽進度與紀錄', '訂單查詢']
  return (
    <div className="bookMark">
      {/* 電腦 */}
      {/* className 添加 now 變色 */}
      <ul className="option-list-computer">
        {optionName.map((v, i) => {
          return (
            <li className="option" key={i}>
              <a
                href="#/"
                className={optionNow === i ? 'now' : ''}
                onClick={() => {
                  setOptionNow(i)
                }}
              >
                {v}
              </a>
            </li>
          )
        })}
      </ul>

      {/* 手機 */}
      <div className="option-mobile-now">
        {optionName.map((v, i) => {
          return (
            <div href="#/" key={i} className={optionNow === i ? 'show' : ''}>
              {v}
            </div>
          )
        })}
      </div>
      <div className="icon">
        <a
          href="#/"
          onClick={() => {
            MobileListRef.current.className.includes('show')
              ? MobileListRef.current.classList.remove('show')
              : MobileListRef.current.classList.add('show')
          }}
        >
          <img className="Backstage-bookMark-mobile-icon" src={other} alt="" />
        </a>
        <ul className="option-list-mobile" ref={MobileListRef}>
          {optionName.map((v, i) => {
            return (
              <li className="option" key={i}>
                <a
                  href="#/"
                  onClick={() => {
                    setOptionNow(i)
                  }}
                >
                  {v}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default BookMart
