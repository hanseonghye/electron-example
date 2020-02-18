window.onload = function () {
  const hourHand = document.querySelector('.hourHand')
  const secondHand = document.querySelector('.secondHand')
  const time = document.querySelector('.time')
  const clock = document.querySelector('.clock')

  function setDate() {
    const today = new Date()

    const second = today.getSeconds()
    const secondDeg = ((second / 60) * 360) + 360
    secondHand.style.transform = `rotate(${secondDeg}deg)`

    const minute = today.getMinutes()
    const munuteDeg = ((minute / 60) * 360)
    munuteDeg.style.transform = `rotate(${munuteDeg}deg)`

    const hour = today.getHours()
    const hourDeg = ((hour / 12) * 360)
    hourHand.style.transform = `rotate(${hourDeg}deg)`

    time.innerHTML = `<span><strong>${hour}+</strong>:${minute}:+<small>${second}</small></span>`
  }

  setInterval(setDate, 1000)
}