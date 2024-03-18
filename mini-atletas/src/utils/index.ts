import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

export const { theme: TAILWIND_THEME } = resolveConfig(tailwindConfig);

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
  return "#" + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function colorInterpolate(colorA, colorB, intval) {
  const rgbA = hexToRgb(colorA);
  const rgbB = hexToRgb(colorB);
  const colorVal = (prop) =>
    Math.round(rgbA[prop] * (1 - intval) + rgbB[prop] * intval);

  const interpolatedRgb = {
    r: colorVal("r"),
    g: colorVal("g"),
    b: colorVal("b"),
  };
  return rgbToHex(interpolatedRgb);
}
