function isLetter(ch) {
    return /[a-zA-Z]/.test(ch)
}

function shiftCh(ch, shift) {
    if(isLetter(ch)){
        const base = ch === ch.toUpperCase()?65:97
        return String.fromCharCode(((ch.charCodeAt(0) - base + shift) %26 +26)%26 + base)
    }
    return ch
}

function caesarCipher(message, shift) {
    return message.split('').map(ch => shiftCh(ch, shift)).join('')
}

export default caesarCipher