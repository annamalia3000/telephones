export default function formatPhoneNumber(input) {

    const phoneNumber = input.replace(/\D/g, '');

    if (phoneNumber.length === 11 && phoneNumber[0] === '8') {
        return '+7' + phoneNumber.slice(1);
    }

    if (phoneNumber.length === 11 && phoneNumber[0] === '7') {
        return '+' + phoneNumber;
    }

    if (phoneNumber.length > 11 && phoneNumber[0] !== '+') {
        return '+' + phoneNumber;
    }

    return  '+' + phoneNumber;
}
