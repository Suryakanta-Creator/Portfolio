export type GameState = { deck: number[]; open: number[]; matched: number[]; moves: number };
export const initialGame: GameState = { deck: [], open: [], matched: [], moves: 0 };
export type GameAction = { type: "start"; deck: number[] } | { type: "flip"; index: number } | { type: "hide" };
export function shuffledDeck(random = Math.random): number[] {
  const deck = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
export function gameReducer(state: GameState, action: GameAction): GameState {
  if (action.type === "start") return { deck: action.deck, open: [], matched: [], moves: 0 };
  if (action.type === "hide") return { ...state, open: [] };
  const i = action.index;
  if (!Number.isInteger(i) || i < 0 || i >= state.deck.length || state.open.length === 2 || state.open.includes(i) || state.matched.includes(i)) return state;
  if (state.open.length === 0) return { ...state, open: [i] };
  const first = state.open[0];
  if (state.deck[first] === state.deck[i]) return { ...state, open: [], matched: [...state.matched, first, i], moves: state.moves + 1 };
  return { ...state, open: [first, i], moves: state.moves + 1 };
}
