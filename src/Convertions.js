const NUMBER = document.getElementById("number");
const WIND_SPEED = document.getElementById("wind-speed");

function ms2kmh() {
  const ms = Number(NUMBER.value);
  const kmh = ms * 3.6;
  WIND_SPEED.innerHTML = kmh;
  return kmh
}

function knot2kmh() {
  const knot = Number(NUMBER.value);
  const kmh = knot * 1.852;
  WIND_SPEED.innerHTML = kmh;
  return kmh
}

function fps2kmh() {
  const fps = Number(NUMBER.value);
  const kmh = fps * 1.09;
  WIND_SPEED.innerHTML = kmh;
  return kmh
}

function mph2kmh() {
  const mph = Number(NUMBER.value);
  const kmh = mph * 1.609;
  WIND_SPEED.innerHTML = kmh;
  return kmh
}

function kmh() {
  const kmh = Number(NUMBER.value);
  WIND_SPEED.innerHTML = kmh;
  return kmh
}

export { ms2kmh, knot2kmh, fps2kmh, mph2kmh, kmh };
