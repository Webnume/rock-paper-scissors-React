import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  player1: string;
  score: number;
  emotes: string[];
}

const initialState: GameState = {
  player1: "",
  score: 0,
  emotes: ["paper", "scissors", "rock"],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.score += 1;
    },
    decrement: (state) => {
      state.score -= 1;
    },
    playerPicked: (state, action: PayloadAction<string>) => {
      state.player1 = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { playerPicked, increment, decrement } = gameSlice.actions;

export default gameSlice.reducer;
