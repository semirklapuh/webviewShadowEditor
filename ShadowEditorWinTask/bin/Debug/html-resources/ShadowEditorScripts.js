

// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    const colorPicker = document.getElementById("colorpicker");
    const colorPickerInput = document.getElementById("colorpicker_input");

    // Reusable function to synchronize a range and number input pair
    function synchronizeInputs(rangeId, numberId) {
        var rangeInput = document.getElementById(rangeId);
        var numberInput = document.getElementById(numberId);

        function updateRange() {
            rangeInput.value = numberInput.value;
        }

        function updateNumber() {
            numberInput.value = rangeInput.value;
        }

        function updateShadow() {
            var shadowBox = document.getElementById("shadowBox");
            var horizontalInput = document.getElementById("horizontalShadowInput");
            var verticallInput = document.getElementById("verticalShadowInput");
            var blurInput = document.getElementById("blurInput");
            var spreadInput = document.getElementById("spreadInput");
            var opacityInput = document.getElementById("opacityInput");

            var horizontalValue = parseInt(horizontalInput.value);
            var verticalValue = parseInt(verticallInput.value);
            var blurValue = parseInt(blurInput.value);
            var spreadValue = parseInt(spreadInput.value);
            var opacityValue = opacityInput.value;

            var color = rgbToRGBA(colorPickerInput.value, opacityValue);
            var shadowResult = `${horizontalValue}px ${verticalValue}px ${blurValue}px ${spreadValue}px ${color}`;
            console.log(shadowResult);
            shadowBox.style.boxShadow = shadowResult;
        }

        rangeInput.addEventListener("input", updateNumber);
        numberInput.addEventListener("input", updateRange);

        rangeInput.addEventListener("input", updateShadow);
        numberInput.addEventListener("input", updateShadow);

        updateNumber();
        updateRange();
        updateShadow();
    }


    synchronizeInputs("horizontalShadowRange", "horizontalShadowInput");
    synchronizeInputs("verticalShadowRange", "verticalShadowInput");
    synchronizeInputs("blurRange", "blurInput");
    synchronizeInputs("spreadRange", "spreadInput");
    synchronizeInputs("opacityRange", "opacityInput");

    function updateShadowColor() {
        var shadowBox = document.getElementById("shadowBox");
        var horizontalInput = document.getElementById("horizontalShadowInput");
        var verticallInput = document.getElementById("verticalShadowInput");
        var blurInput = document.getElementById("blurInput");
        var spreadInput = document.getElementById("spreadInput");
        var opacityInput = document.getElementById("opacityInput");

        var horizontalValue = parseInt(horizontalInput.value);
        var verticalValue = parseInt(verticallInput.value);
        var blurValue = parseInt(blurInput.value);
        var spreadValue = parseInt(spreadInput.value);
        var opacityValue = opacityInput.value;

        var color = rgbToRGBA(colorPickerInput.value, opacityValue);
        var shadowResult = `${horizontalValue}px ${verticalValue}px ${blurValue}px ${spreadValue}px ${color}`;
        console.log(shadowResult);
        shadowBox.style.boxShadow = shadowResult;
    }

    colorPicker.addEventListener("change", function (event) {
        // Do something when the color changes
        const selectedColor = event.target.value;
        var colorValue = hexToRGB(selectedColor);
        console.log("Selected color:", colorValue);
        colorPickerInput.value = colorValue;
        updateShadowColor();
    });

    function hexToRGB(hex) {
        // Remove '#' if present
        hex = hex.replace("#", "");

        // Parse hexadecimal values for red, green, and blue components
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);

        // Return the RGB string
        return `rgb(${r},${g},${b})`;
    }

    function rgbToRGBA(rgb, alpha) {
        // Remove 'rgb(' and ')' from the RGB string
        var rgbValues = rgb.substring(4, rgb.length - 1).split(",").map(Number);

        // Construct the RGBA string
        return `rgba(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]},${alpha})`;
    }
});

function isValidRGBColor(color) {
    // Regular expression to match the format rgb(r, g, b) where r, g, b are integers
    var rgbRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;

    // Test if the color matches the regex pattern
    var match = color.match(rgbRegex);

    if (match) {
        // Extract the RGB components from the match
        var r = parseInt(match[1]);
        var g = parseInt(match[2]);
        var b = parseInt(match[3]);

        // Check if each component is within the valid range (0-255)
        if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
            return true; // Valid RGB color
        }
    }

    return false; // Invalid RGB color
}

document.addEventListener("DOMContentLoaded", function () {
    const colorPickerInput = document.getElementById("colorpicker_input");
    const colorPicker = document.getElementById("colorpicker");

    // Function to update color picker color when text input changes
    function updateColorPicker() {
        colorPicker.value = rgbToHex(colorPickerInput.value);
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(rgbColor) {
        // Extract the RGB components from the RGB color string
        var rgbValues = rgbColor.match(/\d+/g);
        var r = parseInt(rgbValues[0]);
        var g = parseInt(rgbValues[1]);
        var b = parseInt(rgbValues[2]);

        // Convert the individual RGB components to hexadecimal
        var hexR = componentToHex(r);
        var hexG = componentToHex(g);
        var hexB = componentToHex(b);

        // Concatenate the hexadecimal components together with '#' at the beginning
        return "#" + hexR + hexG + hexB;
    }

    // Event listener for text input to update color picker color
    colorPickerInput.addEventListener("input", updateColorPicker);
});

function getTestData() {
    return "this is test data";
}