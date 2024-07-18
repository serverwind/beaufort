const BEAF_NUM = document.getElementById("beaufort-num");
const WIND_NAME = document.getElementById("wind-name");
const WAVE = document.getElementById("wave-height");
const SEA = document.getElementById("sea");
const LAND = document.getElementById("land");

function evalWind(kmh) {
  if (kmh >= 0 && kmh < 2) {
    BEAF_NUM.innerHTML = "0";
    WIND_NAME.innerHTML = "Calm";
    WAVE.innerHTML = "0 ft / 0 m";
    SEA.innerHTML = "Sea like a mirror";
    LAND.innerHTML = "Smoke rises vertically";
    document.querySelector(".wind-result").classList.remove('wind-light')
    document.querySelector(".wind-result").classList.remove('wind-moderate')
    document.querySelector(".wind-result").classList.remove('wind-high')
    document.querySelector(".wind-result").classList.remove('wind-very-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-calm");
  } else if (kmh >= 2 && kmh < 6) {
    BEAF_NUM.innerHTML = "1";
    WIND_NAME.innerHTML = "Light air";
    WAVE.innerHTML = "0-1 ft / 0-0,3 m";
    SEA.innerHTML = "Ripples";
    LAND.innerHTML = "Direction shown by smoke drift";
    document.querySelector(".wind-result").classList.remove('wind-light')
    document.querySelector(".wind-result").classList.remove('wind-moderate')
    document.querySelector(".wind-result").classList.remove('wind-high')
    document.querySelector(".wind-result").classList.remove('wind-very-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-calm");
  } else if (kmh > 6 && kmh < 12) {
    BEAF_NUM.innerHTML = "2";
    WIND_NAME.innerHTML = "Light breeze";
    WAVE.innerHTML = "1-2 ft / 0,3-0,6 m";
    SEA.innerHTML = "Small wavelets";
    LAND.innerHTML = "Wind felt on face";
    document.querySelector(".wind-result").classList.remove('wind-light')
    document.querySelector(".wind-result").classList.remove('wind-moderate')
    document.querySelector(".wind-result").classList.remove('wind-high')
    document.querySelector(".wind-result").classList.remove('wind-very-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-calm");
  } else if (kmh > 12 && kmh < 20) {
    BEAF_NUM.innerHTML = "3";
    WIND_NAME.innerHTML = "Gentle breeze";
    WAVE.innerHTML = "2-4 ft / 0,6-0,12 m";
    SEA.innerHTML = "Large wavelets";
    LAND.innerHTML = "Leaves and small twigs in constant motion";
    document.querySelector(".wind-result").classList.remove('wind-calm')
    document.querySelector(".wind-result").classList.remove('wind-moderate')
    document.querySelector(".wind-result").classList.remove('wind-high')
    document.querySelector(".wind-result").classList.remove('wind-very-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-light");
  } else if (kmh > 20 && kmh < 29) {
    BEAF_NUM.innerHTML = "4";
    WIND_NAME.innerHTML = "Moderate breeze";
    WAVE.innerHTML = "3,5-6 ft / 1-2 m";
    SEA.innerHTML = "Small waves";
    LAND.innerHTML = "Raises dust and loose paper";
    document.querySelector(".wind-result").classList.remove('wind-calm')
    document.querySelector(".wind-result").classList.remove('wind-moderate')
    document.querySelector(".wind-result").classList.remove('wind-high')
    document.querySelector(".wind-result").classList.remove('wind-very-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-light");
  } else if (kmh > 29 && kmh < 39) {
    BEAF_NUM.innerHTML = "5";
    WIND_NAME.innerHTML = "Fresh breeze";
    WAVE.innerHTML = "6-10 ft / 2-3 m";
    SEA.innerHTML = "Moderate waves";
    LAND.innerHTML = "Small trees and leafs begin to sway";
    document.querySelector(".wind-result").classList.remove('wind-calm')
    document.querySelector(".wind-result").classList.remove('wind-light')
    document.querySelector(".wind-result").classList.remove('wind-high')
    document.querySelector(".wind-result").classList.remove('wind-very-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-moderate");
  } else if (kmh > 39 && kmh < 50) {
    BEAF_NUM.innerHTML = "6";
    WIND_NAME.innerHTML = "Strong breeze";
    WAVE.innerHTML = "9-13 ft / 3-4 m";
    SEA.innerHTML = "Large waves";
    LAND.innerHTML = "Large branches in motion";
    document.querySelector(".wind-result").classList.remove('wind-calm')
    document.querySelector(".wind-result").classList.remove('wind-light')
    document.querySelector(".wind-result").classList.remove('wind-high')
    document.querySelector(".wind-result").classList.remove('wind-very-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-moderate");
  } else if (kmh > 50 && kmh < 62) {
    BEAF_NUM.innerHTML = "7";
    WIND_NAME.innerHTML = "High Wind, moderate gale, near gale";
    WAVE.innerHTML = "13-19 ft / 4-5,5 m";
    SEA.innerHTML = "Sea heaps up";
    LAND.innerHTML = "Whole trees in motion";
    document.querySelector(".wind-result").classList.remove('wind-calm')
    document.querySelector(".wind-result").classList.remove('wind-light')
    document.querySelector(".wind-result").classList.remove('wind-high')
    document.querySelector(".wind-result").classList.remove('wind-very-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-moderate");
  } else if (kmh > 62 && kmh <75) {
    BEAF_NUM.innerHTML = "8";
    WIND_NAME.innerHTML = "Gale, fresh gale";
    WAVE.innerHTML = "18-25 ft / 5,5-7,5 m";
    SEA.innerHTML = "Moderately high waves";
    LAND.innerHTML = "Twigs break off trees";
    document.querySelector(".wind-result").classList.remove('wind-calm')
    document.querySelector(".wind-result").classList.remove('wind-light')
    document.querySelector(".wind-result").classList.remove('wind-moderate')
    document.querySelector(".wind-result").classList.remove('wind-very-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-high");
  } else if (kmh>75 && kmh < 89) {
    BEAF_NUM.innerHTML = "9";
    WIND_NAME.innerHTML = "Strong/severe gale";
    WAVE.innerHTML = "23-32 ft / 7-10 m";
    SEA.innerHTML = "High waves";
    LAND.innerHTML = "Slight structural damage";
    document.querySelector(".wind-result").classList.remove('wind-calm')
    document.querySelector(".wind-result").classList.remove('wind-light')
    document.querySelector(".wind-result").classList.remove('wind-moderate')
    document.querySelector(".wind-result").classList.remove('wind-very-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-high");
  } else if (kmh > 89 && kmh < 103) {
    BEAF_NUM.innerHTML = "10";
    WIND_NAME.innerHTML = "Storm, whole gale";
    WAVE.innerHTML = "29-41 ft / 9-12,5 m";
    SEA.innerHTML = "Very high waves";
    LAND.innerHTML = "Trees uprooted, considerable structural damage";
    document.querySelector(".wind-result").classList.remove('wind-calm')
    document.querySelector(".wind-result").classList.remove('wind-light')
    document.querySelector(".wind-result").classList.remove('wind-moderate')
    document.querySelector(".wind-result").classList.remove('wind-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-very-high");
  } else if (kmh > 103 && kmh < 118) { 
    BEAF_NUM.innerHTML = "11";
    WIND_NAME.innerHTML = "Violent storm";
    WAVE.innerHTML = "37-52 ft / 11,5-16 m";
    SEA.innerHTML = "Exceptionally high waves";
    LAND.innerHTML = "Widespread damage";
    document.querySelector(".wind-result").classList.remove('wind-calm')
    document.querySelector(".wind-result").classList.remove('wind-light')
    document.querySelector(".wind-result").classList.remove('wind-moderate')
    document.querySelector(".wind-result").classList.remove('wind-high')
    document.querySelector(".wind-result").classList.remove('wind-storm')
    document.querySelector(".wind-result").classList.add("wind-very-high");
  } else if (kmh > 118) {
    BEAF_NUM.innerHTML = "12";
    WIND_NAME.innerHTML = "Hurricane force";
    WAVE.innerHTML = "&gt; 46 ft / &gt; 14 m";
    SEA.innerHTML = "Exceptionally high waves, sea is completely white";
    LAND.innerHTML = "Devastation";
    document.querySelector(".wind-result").classList.remove('wind-calm')
    document.querySelector(".wind-result").classList.remove('wind-light')
    document.querySelector(".wind-result").classList.remove('wind-moderate')
    document.querySelector(".wind-result").classList.remove('wind-high')
    document.querySelector(".wind-result").classList.remove('wind-very-high')
    document.querySelector(".wind-result").classList.add("wind-storm");
  }
}

export { evalWind }
