let prevScrollpos = window.pageYOffset;
const remDays = document.querySelector('.days');
const modalDivs = document.querySelectorAll('.modal-div');
const customP = document.querySelectorAll('.custom-p');
const rewardAreas = document.querySelectorAll('.reward-area');
const btns = document.querySelectorAll('.modal-btn');
const inputs = document.querySelectorAll('.modal-input');
const totalAmount = document.querySelector('.total-amount');
const totalPeople = document.querySelector('.total-people');

//deadline date
const deadline = '2023-12-31';

//Hide navbar on scroll
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.navigate').style.top = '0';
  } else {
    document.querySelector('.navigate').style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;
};

function getTimeRemaining(deadline) {
  //calculate the milliseconds in the deadline from the current date
  const totalTime = Date.parse(deadline) - Date.parse(new Date());

  //get remaining days from the deadline
  const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));

  remDays.innerHTML = `${days}`;
  if (totalTime <= 0) {
    remDays.innerHTML = `00`;
  }
}
getTimeRemaining(deadline);

customP.forEach((el, idx) => {
  el.addEventListener('click', (e) => {
    e.stopPropagation();

    const modalD = Array.from(modalDivs).find(
      (modalD) => modalD.style.display === 'block'
    );
    console.log(modalD);
    const reward = Array.from(rewardAreas).filter(
      (reward) => (reward.style.border = '1px solid hsl(0, 0%, 48%)')
    );

    if (modalD) {
      modalD.style.display = 'none';
    }

    modalDivs[idx].style.display = 'block';
    rewardAreas[idx].style.border = '2px solid hsl(176, 50%, 47%)';
  });
});

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
      const amount = input.value;
      // const curAmount = 89914;
      totalAmount.textContent = `$${amount}`;
    });
  });
});
