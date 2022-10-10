const inputName = document.querySelector('[name = "cardholder-name"]');
const inputCardNumber = document.querySelector('[name = "card-number"]');
const inputMonth = document.querySelector('[placeholder = "MM"]');
const inputYear = document.querySelector('[placeholder = "YY"]');
const inputCVC = document.querySelector('[name = "cvc"]');
const confirmButton = document.querySelector('#confirm-button');
const continueButton = document.querySelector('#continue-button');
const nameOnCard = document.querySelector('#name-on-card');
const numberOnCard = document.querySelector('#number-on-card');
const monthOnCard = document.querySelector('#month-on-card');
const yearOnCard = document.querySelector('#year-on-card');
const cvcOnCard = document.querySelector('#cvc-on-card');
const cardNumberForm = document.querySelector('.card-number')
const errorName = document.querySelector('.input-errors-name')
const errorNumber = document.querySelector('.input-errors-number')
const errorMonth = document.querySelector('.month-error')
const errorYear = document.querySelector('.year-error')
const errorCVC = document.querySelector('.cvc-error')
const input = [inputName, inputCardNumber, inputMonth, inputYear, inputCVC]
const form = document.querySelector('form')
const thankYouPage = document.querySelector('.thank-you-page')
const cardPreview = document.querySelector('.card-preview-front')
const modal = document.querySelector('.modal-bg')
const confirmPicButton = document.querySelector('#confirm-picture')
const pictureInput = document.querySelector('#input-picture')

inputName.addEventListener('input', (e) => {
    nameOnCard.classList.add('typing-animation')
    e.target.value = e.target.value.replace(/[^a-zA-z,\ ]/g, '');
    inputName.style.border = ''
    nameOnCard.textContent = inputName.value;
    errorName.textContent = ''
    if (inputName.value === '') {
        nameOnCard.textContent = 'Jane Appleseed'
    }
    removeAnimationClass(nameOnCard)
})

inputCardNumber.addEventListener('input', (e) => {
    numberOnCard.classList.add('typing-animation')
    e.target.value = e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim();
    inputCardNumber.style.border = ''
    numberOnCard.textContent = inputCardNumber.value;
    errorNumber.textContent = ''
    if (inputCardNumber.value === '') {
        numberOnCard.textContent = '0000 0000 0000 0000'
    }
    removeAnimationClass(numberOnCard)
})

inputMonth.addEventListener('input', (e) => {
    monthOnCard.classList.add('typing-animation')
    e.target.value = e.target.value.replace(/[^\d]/g, '')
    inputMonth.style.border = ''
    monthOnCard.textContent = inputMonth.value;
    errorMonth.textContent = ''
    if (inputMonth.value === '') {
        monthOnCard.textContent = '00'
    }
    removeAnimationClass(monthOnCard)
})

inputYear.addEventListener('input', (e) => {
    yearOnCard.classList.add('typing-animation')
    e.target.value = e.target.value.replace(/[^\d]/g, '')
    inputYear.style.border = ''
    yearOnCard.textContent = inputYear.value;
    errorYear.textContent = ''
    if (inputYear.value === '') {
        yearOnCard.textContent = '00'
    }
    removeAnimationClass(yearOnCard)
})

inputCVC.addEventListener('input', (e) => {
    cvcOnCard.classList.add('typing-animation')
    e.target.value = e.target.value.replace(/[^\d]/g, '')
    inputCVC.style.border = ''
    cvcOnCard.textContent = inputCVC.value;
    errorCVC.textContent = ''
    if (inputCVC.value === '') {
        cvcOnCard.textContent = '000'
    }
    removeAnimationClass(cvcOnCard)
})

confirmButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (input[1].value.length < 19) {
        errorNumber.textContent = 'Too short'
        input[1].style.border = '1px solid var(--input-error)'
    }
    if (input[2].value.length < 2) {
        errorMonth.textContent = 'Too short'
        input[2].style.border = '1px solid var(--input-error)'
    }
    if (input[3].value.length < 2) {
        errorYear.textContent = 'Too short'
        input[3].style.border = '1px solid var(--input-error)'
    }
    if (input[4].value.length < 3) {
        errorCVC.textContent = 'Too short'
        input[4].style.border = '1px solid var(--input-error)'
    }
    if (parseInt(input[2].value) > 12 || parseInt(input[2].value) === 0) {
        errorMonth.textContent = 'Invalid month'
        input[2].style.border = '1px solid var(--input-error)'
    }
    if (input[0].value === '') {
        errorName.textContent = 'Cant be blank'
        input[0].style.border = '1px solid var(--input-error)'
    }
    if (input[1].value === '') {
        errorNumber.textContent = 'Cant be blank'
        input[1].style.border = '1px solid var(--input-error)'
    }
    if (input[2].value === '') {
        errorMonth.textContent = 'Cant be blank'
        input[2].style.border = '1px solid var(--input-error)'
    }
    if (input[3].value === '') {
        errorYear.textContent = 'Cant be blank'
        input[3].style.border = '1px solid var(--input-error)'
    }
    if (input[4].value === '') {
        errorCVC.textContent = 'Cant be blank'
        input[4].style.border = '1px solid var(--input-error)'
    }
    if (input[0].style.border !== '1px solid var(--input-error)' && input[1].style.border !== '1px solid var(--input-error)' && input[2].style.border !== '1px solid var(--input-error)' && input[3].style.border !== '1px solid var(--input-error)' && input[4].style.border !== '1px solid var(--input-error)') {
        form.style.display = 'none'
        thankYouPage.style.display = 'flex'
    }
})

continueButton.addEventListener('click', () => {
    form.style.display = 'flex'
    thankYouPage.style.display = 'none'
}
)

cardPreview.addEventListener('click', () => {
    if (window.outerWidth > 1200) {
        modal.style.opacity = '1'
        modal.style.pointerEvents = 'all'
    }
})

confirmPicButton.addEventListener('click', () => {
    if (pictureInput.value === '') {
        modal.style.opacity = '0'
        modal.style.pointerEvents = 'none'
    } else if (isImage(pictureInput.value) === true) {
        modal.style.opacity = '0'
        modal.style.pointerEvents = 'none'
        cardPreview.style.backgroundImage = `url(${pictureInput.value}`
    } else alert('This link is not a picture!')
})

function removeAnimationClass(element) {
    element.addEventListener('animationend', () => {
        element.classList.remove('typing-animation')
    })
}

function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
