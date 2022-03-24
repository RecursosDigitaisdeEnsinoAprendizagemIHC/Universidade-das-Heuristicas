export const toBufferToBase64 = (arr) => {
  //arr = new Uint8Array(arr) if it's an ArrayBuffer
  return btoa(
    arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
  );
}

export const shuffleArray = <T>(array: T[]) => array.sort(() => Math.random() - 0.5)