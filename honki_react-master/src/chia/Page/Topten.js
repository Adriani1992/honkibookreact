import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Switch from '../Component/Switch'
import '../Style/chia_topten.scss'
import $ from 'jquery'

import ToptenbookOdd from '../Component/ToptenbookOdd'
import ToptenbookEven from '../Component/ToptenbookEven'
import Weekranking01 from '../image/Book/Weekranking01.jpg'
import Weekranking02 from '../image/Book/Weekranking02.jpg'
import Weekranking03 from '../image/Book/Weekranking03.jpg'
import Weekranking04 from '../image/Book/Weekranking04.jpg'
import Weekranking05 from '../image/Book/Weekranking05.jpg'
import Weekranking06 from '../image/Book/Weekranking06.jpg'
import Weekranking07 from '../image/Book/Weekranking07.jpg'
import Weekranking08 from '../image/Book/Weekranking08.jpg'
import Weekranking09 from '../image/Book/Weekranking09.png'
import Weekranking10 from '../image/Book/Weekranking10.jpg'
import Monthranking01 from '../image/Book/Monthranking01.jpg'
import Monthranking02 from '../image/Book/Monthranking02.jpg'
import Monthranking03 from '../image/Book/Monthranking03.jpg'
import Monthranking04 from '../image/Book/Monthranking04.jpg'
import Monthranking05 from '../image/Book/Monthranking05.jpg'
import Monthranking06 from '../image/Book/Monthranking06.jpg'
import Monthranking07 from '../image/Book/Monthranking07.jpg'
import Monthranking08 from '../image/Book/Monthranking08.png'
import Monthranking09 from '../image/Book/Monthranking09.jpg'
import Monthranking10 from '../image/Book/Monthranking10.jpg'
import circledot from '../image/circledot/halfcircle.svg'

function Topten() {
  const [ismonth, setIsMonth] = useState(false)

  const addGrey = () => {
    $('.chia_rankingbook_odd').css('backgroundColor', 'rgba(236, 236, 236, .8)')
    // $('.chia_rankingbook_odd').css({backgroundColor: "rgba(236, 236, 236, .8)", transition:".5s"})
    $('.chia_rankingbook_even').css(
      'backgroundColor',
      'rgba(253, 243, 219, .8)'
    )
  }
  const addYellow = () => {
    $('.chia_rankingbook_odd').css('backgroundColor', 'rgba(253, 243, 219, .8)')
    $('.chia_rankingbook_even').css(
      'backgroundColor',
      'rgba(236, 236, 236, .8)'
    )
  }

  useEffect(() => {
    console.log(ismonth)
  }, [])

  useEffect(() => {
    console.log(ismonth)
  }, [ismonth])

  return (
    <>
      <div className="chia_toptenbook">
        <Container fluid>
          <div className="chia_toptentitle row">
            <img src={circledot} className="chia_circledot" />
            <div className="chia_toptenheader">
              <p>
                TOP <span>10</span>
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <Switch
            setIsMonth={setIsMonth}
            ismonth={ismonth}
            addGrey={addGrey}
            addYellow={addYellow}
          />
        </Container>
        <div className="chiaonetofive container-fluid d-flex flex-wrap justify-content-center">
          <div className="chia_topbooks d-flex flex-wrap col-12 row justify-content-center">
            <ToptenbookOdd
              ranking="1"
              ismonth={ismonth}
              Weekranking={Weekranking01}
              Monthranking={Monthranking01}
              Weektitle="????????????"
              Monthtitle="2021?????????????????????????????????????????????"
              Weekprice="261"
              Monthprice="316"
            />
            <ToptenbookEven
              ranking="2"
              ismonth={ismonth}
              Weekranking={Weekranking02}
              Monthranking={Monthranking02}
              Weektitle="????????????"
              Monthtitle="???????????? 22"
              Weekprice="261"
              Monthprice="85"
              Weekdiscount="79"
              Monthdiscount="85"
            />
            <ToptenbookOdd
              ranking="3"
              ismonth={ismonth}
              Weekranking={Weekranking03}
              Monthranking={Monthranking03}
              Weektitle="?????????????????????"
              Monthtitle="????????????"
              Weekprice="300"
              Monthprice="261"
              Weekdiscount="79"
              Monthdiscount="79"
            />
            <ToptenbookEven
              ranking="4"
              ismonth={ismonth}
              Weekranking={Weekranking04}
              Monthranking={Monthranking04}
              Weektitle="????????????????????????15?????????????????????????????????????????????"
              Monthtitle="??????1%??????????????????"
              Weekprice="253"
              Monthprice="332"
              Weekdiscount="79"
              Monthdiscount="79"
            />
            <ToptenbookOdd
              ranking="5"
              ismonth={ismonth}
              Weekranking={Weekranking05}
              Monthranking={Monthranking05}
              Weektitle="????????????"
              Monthtitle="?????????????????????????????????"
              Weekprice="252"
              Monthprice="190"
              Weekdiscount="9"
              Monthdiscount="79"
            />
          </div>

          <div className="chia_topbooks d-flex flex-wrap col-12 row justify-content-center">
            <ToptenbookEven
              ranking="6"
              ismonth={ismonth}
              Weekranking={Weekranking06}
              Monthranking={Monthranking06}
              Weektitle="??????????????? vol.02"
              Monthtitle="????????????????????????????????????"
              Weekprice="205"
              Monthprice="261"
              Weekdiscount="79"
              Monthdiscount="85"
            />
            <ToptenbookOdd
              ranking="7"
              ismonth={ismonth}
              Weekranking={Weekranking07}
              Monthranking={Monthranking07}
              Weektitle="???????????????"
              Monthtitle="???????????????????????????"
              Weekprice="332"
              Monthprice="316"
              Weekdiscount="79"
              Monthdiscount="79"
            />
            <ToptenbookEven
              ranking="8"
              ismonth={ismonth}
              Weekranking={Weekranking08}
              Monthranking={Monthranking08}
              Weektitle="2021?????????????????????????????????????????????"
              Monthtitle="?????????????????????????????????????????????"
              Weekprice="316"
              Monthprice="300"
              Weekdiscount="79"
              Monthdiscount="79"
            />
            <ToptenbookOdd
              ranking="9"
              ismonth={ismonth}
              Weekranking={Weekranking09}
              Monthranking={Monthranking09}
              Weektitle="?????????????????????????????????????????????"
              Monthtitle="??????????????? vol.02"
              Weekprice="300"
              Monthprice="205"
              Weekdiscount="79"
              Monthdiscount="79"
            />
            <ToptenbookEven
              ranking="10"
              ismonth={ismonth}
              Weekranking={Weekranking10}
              Monthranking={Monthranking10}
              Weektitle="???????????????????????????????????????"
              Monthtitle="ICU??????????????????"
              Weekprice="277"
              Monthprice="316"
              Weekdiscount="79"
              Monthdiscount="79"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Topten
