window.addEventListener("scroll", function () {
  animateCounterIfVisible("transactionsCounter", 43);
  animateCounterIfVisible("visitorCounter", 56);
});

const animateCounterIfVisible = (elementId, targetNumber) => {
  var counterElement = document.getElementById(elementId);
  var position = counterElement.getBoundingClientRect();

  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    startCounterWithAnimation(elementId, targetNumber);
  }
};

const  startCounterWithAnimation = (elementId, targetNumber) => {
  var counterElement = document.getElementById(elementId);
  var duration = 4000; // Duration of the animation in milliseconds
  var interval = duration / targetNumber;
  var currentNumber = 30;

  var counterInterval = setInterval(function () {
    counterElement.textContent = ++currentNumber + "K";
    if (currentNumber >= targetNumber) {
      clearInterval(counterInterval);
    }
  }, interval);
}
