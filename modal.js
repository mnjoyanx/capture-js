let check = false

export const modal = () => {
    const modalSelector = document.getElementById('modal'),
        isChecked = document.getElementById('isChecked'),
        startRecordignSelector = document.getElementById('start-recording')

    isChecked.addEventListener('change', event => {
        check = event.target.checked

    })

    modalSelector.classList.add('show')
}