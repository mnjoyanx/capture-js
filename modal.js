let videoSelector = document.getElementById('videoplayer')
const modalWrapper = document.querySelector('.modal-wrapper')
const timeSelector = document.getElementById('timer')
const controller = document.getElementById('controller')
const stopRecordingSelector = document.getElementById('stoprecording')
const startRecordingSelector = document.getElementById('startrecording')

// timer 
const minuteSelector = document.getElementById('minute')
const timerFirst = document.getElementById('first')
const timerSecond = document.getElementById('second')


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
            startRecording()
        } else {
            errMessage.classList.add('show')
        }
    })

    stopRecordingSelector.addEventListener('click', () => {
        stopRecording()
    })

    modalSelector.classList.remove('hidden')
}


const startRecording = async() => {
    const options = {
        video: {
            cursor: "always",
            width: 450,
            height: 300
        },
        audio: {
            echoCancellation: true,
            noiseSuppression: true,
            sampleRate: 44100
        }
    }

    try {
        videoSelector.srcObject = await navigator.mediaDevices.getDisplayMedia(options)
        videoSelector.onloadedmetadata = function() {
            videoSelector.play();
            modalWrapper.classList.add('hidden')
            controller.classList.remove('hidden')
            stopRecordingSelector.classList.remove('hidden')
            startRecordingSelector.classList.add('hidden')
            startRecordingTimer()
        };
    } catch (err) {
        console.log(err, 'err messsage')
    }
}

const stopRecording = async() => {
    let tracks = await videoSelector.srcObject.getTracks()

    tracks.forEach(track => track.stop())

    videoSelector.srcObject = null
    videoSelector.classList.add('hidden')
    startRecordingSelector.classList.remove('hidden')
    stopRecordingSelector.classList.add('hidden')

}

const stopTimer = (e) => {

    stopRecordingSelector.addEventListener('click', () => {
        clearInterval(e)
    })
}

const startRecordingTimer = () => {
    let second = 0

    let a = 0
    let t = setInterval(() => {
        second++
        timerSecond.textContent = second
        if (second > 9) {
            second = 0
            a++
            timerFirst.textContent = a
        }
    }, 1000)
    stopTimer(t)

}