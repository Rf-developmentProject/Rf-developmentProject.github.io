const genderBtns = document.querySelectorAll('.genderBtn');
let selectedGender = '';

// Add click event listener to each button
genderBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from previously selected button
    document.querySelector('.genderBtn.active').classList.remove('active');
    // Add active class to current button
    btn.classList.add('active');
    // Update selected gender value
    selectedGender = btn.id.replace('Btn', '');
  });
});
