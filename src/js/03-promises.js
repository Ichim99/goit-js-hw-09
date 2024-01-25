import { Notify } from "notiflix/build/notiflix-notify-aio";

Notify.init({
  fontSize: "1rem",
  width: "450px",
  cssAnimationStyle: "from-bottom",
  closeButton: false,
  useIcon: false,
  pauseOnHover: true,
});



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
