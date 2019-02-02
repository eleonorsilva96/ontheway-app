import { ADD_VIAGEM, FETCH_VIAGEMS, FETCH_VIAGEM } from "../constants/action-types";

// definir as actions de adicionar e apagar viagens
// cada action tem de ter um "type" único que a identifica
// opcionalmente pode ter também um "payload" que é normalmente informação necessária à sua execução
export const addViagem = viagem => ({ type: ADD_VIAGEM, payload: viagem });
export const fetchViagem = viagem => ({ type: FETCH_VIAGEM, payload: viagem });

// definir a action para carregar viagens da api
export const fetchViagems = viagems => ({type: FETCH_VIAGEMS, payload: viagems});
