import { ms2kmh, knot2kmh, fps2kmh, mph2kmh, kmh } from "./Convertions";
import { evalWind } from "./Wind";
import { showRes } from "./ShowRes";

const VALUES = document.getElementById("values");
const SUBMIT = document.getElementById("submit");

SUBMIT.addEventListener("click", check);

function check() {
  switch (VALUES.value) {
    case "ms":
      evalWind(ms2kmh());
      break;
    case "knot":
      evalWind(knot2kmh());
      break;
    case "fps":
      evalWind(fps2kmh());
      break;
    case "mph":
      evalWind(mph2kmh());
      break;
    default:
      evalWind(kmh());
      break;
  }

  showRes();
}


