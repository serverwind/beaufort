const RESULT = document.querySelector('.wind-result')

function showRes() {
  if (RESULT.classList.contains('wind-hidden')) {
    RESULT.classList.remove('wind-hidden')
  }
}

export { showRes }
