export function getRandomChar(): string {
  // generate a random integer between 0 and NUM_UTF16_CHARS
  const randInteger = Math.round(Math.random() * VALID_CHARS.length);
  const randChar = VALID_CHARS[randInteger];

  // if it's undefined... just try again?
  if (!randChar) {
    return getRandomChar();
  }

  return randChar;
}
// const NUM_UTF16_CHARS = 65535;
const VALID_CHARS = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿`;
