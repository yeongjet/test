import produce from "immer";

const baseState:any = [
  {
    todo: "Learn typescript",
    done: true
  },
  {
    todo: "Try immer",
    done: false
  }
];

const nextState = produce(baseState, draftState => {
  //draftState.push({ todo: "Tweet about it" });
  draftState[0].done = false;
});

console.log(nextState === baseState)