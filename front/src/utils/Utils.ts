import { JOGADOR_STORAGE } from "../store/gameStore";
import { JogadorInterface } from "../typings/Types";

export const toBufferToBase64 = (arr: any) => {
  return btoa(
    arr.reduce((data: any, byte: any) => data + String.fromCharCode(byte), '')
  );
}

export const shuffleArray = <T>(array: T[]) => array.sort(() => Math.random() - 0.5)


export const setJogadorLocalStorage = (jogador: JogadorInterface) => localStorage.setItem(JOGADOR_STORAGE, JSON.stringify(jogador))
export const getJogadorLocalStorage = () => JSON.parse(localStorage.getItem(JOGADOR_STORAGE) || 'null')