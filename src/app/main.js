/* eslint-disable */

require('swiper/dist/css/swiper.css')
require('swiper/dist/js/swiper.js')
require('src/favicon.ico')
require('src/styles/main.scss')

let carousel = new window.Swiper('.js-carousel', {
  autoplay: 2500
})

if (module.hot) {
  module.hot.accept(() => {
    carousel.destroy(true, true)
  })
}
