import { useEffect, useState } from "react"

import "./App.css"

function App() {
  //state
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = () => {
    // let today = new Date().getTime()
    let birthday = new Date('02/04/2023')
    let today = new Date()
    let timeCount = (birthday - today) //convert milliseconds to seconds
    let sec = 1000
    let min = sec * 60
    let hour = min * 60
    let day = hour * 24
    // 1 day = 24 hours = 24 * 60 mins = 24 * 60 * 60 sec

    let days = Math.floor(timeCount / day) //convert seconds to days
    let hours = Math.floor((timeCount % day) / hour) //convert seconds to hours    
    let minutes = Math.floor((timeCount % hour) / min) //convert seconds to min
    let seconds = Math.floor((timeCount % min) / sec) //convert seconds to milliseconds

    return [days, hours, minutes, seconds]
  }

  useEffect(() => {
    const intervalTask = setInterval(() => {
      const [days, hours, minutes, seconds] = getCountdown()
      setCountDown({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      })  
    //  console.log(getCountdown())
    }, 1000) //1000 millisecond = 1 second
    return () => clearInterval(intervalTask)

    
  }, [])

  return (
    <div className="container">

      <div className="countdown">
        <h1 className="countdown__title">Countdown to my birthday</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          nihil qui modi illum, libero quisquam, aliquid veritatis ipsam veniam
          architecto quia quis minus esse, quod cum. Accusantium suscipit totam
          porro.
        </p>

        <div className="box__container">
          <div className="box__container__card">
            <div className="box__time">
              <div className="box__time__details">
                {countDown.days}               
              </div>
              <div className="box__detail">
                <span>Days</span>
              </div>
            </div>
          </div>

          <div className="box__container__card">
            <div className="box__time">
              <div className="box__time__details">               
                {countDown.hours}
              </div>
              <div className="box__detail">
                <span>Hours</span>
              </div>
            </div>
          </div>

          <div className="box__container__card">
            <div className="box__time">
              <div className="box__time__details">
                {countDown.minutes}
                </div>
              <div className="box__detail">
                <span>Minutes</span>
              </div>
            </div>
          </div>

          <div className="box__container__card">
            <div className="box__time">
              <div className="box__time__details">
                {countDown.seconds}
                </div>
              <div className="box__detail">
                <span>Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
