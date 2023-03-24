const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = Math.round(weightValue / (heightValue * heightValue));

  bmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerHTML = "Underweight";
  }else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerHTML = "Normal weight";
    else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionEl.innerHTML = "Over weight";
        else if (bmiValue >= 30) {
            weightConditionEl.innerHTML = "Obesity";
        }
    }
  }
}

calculateBMI()

btnEl.addEventListener("click", calculateBMI);
