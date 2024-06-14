import formatPhoneNumber from '../tel';

test('format number with non-digit characters', () => {
    const result = formatPhoneNumber('+7 (960) 000-00-00');
    expect(result).toBe('+79600000000');
});

test('format number starting with 8', () => {
    const formatted = formatPhoneNumber('8 (927) 000-00-00');
    expect(formatted).toBe('+79270000000');
});

test('format number with more then 11 digits', () => {
    const formatted = formatPhoneNumber('+86 000 000 0000');
    expect(formatted).toBe('+860000000000');
});

test('return number without changes for invalid length', () => {
    const formatted = formatPhoneNumber('12345');
    expect(formatted).toBe('+12345');
});