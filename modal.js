export const modal = () => {
    let check = false

    const modalSelector = document.getElementById('modal'),
        isChecked = document.getElementById('isChecked'),
        startRecordignSelector = document.getElementById('start-recording'),
        errMessage = document.getElementById('accept-message')

    isChecked.addEventListener('change', event => {
        check = event.target.checked

    })

    startRecordignSelector.addEventListener('click', () => {
        if (check) {
            errMessage.classList.remove('show')
            shareScreen()
        } else {
            errMessage.classList.add('show')
        }
    })

    modalSelector.classList.add('show')
}


const shareScreen = async() => {
    let captureStreem = null
    const options = {
        video: {
            cursor: "always"
        },
        audio: {
            echoCancellation: true,
            noiseSuppression: true,
            sampleRate: 44100
        }
    }

    try {
        captureStreem = await navigator.mediaDevices.getUserMedia(options)
    } catch (err) {
        console.log(err, 'err messsage')
    }
}