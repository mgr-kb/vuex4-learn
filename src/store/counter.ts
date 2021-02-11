import { InjectionKey } from "vue";
import {
  createStore,
  Store,
  useStore as baseUseStore,
  MutationTree,
  GetterTree
} from "vuex";

export interface GlobalState {
  count: number;
}
export interface RootState {
  count: number;
}

const getters: GetterTree<GlobalState, RootState> = {
  doubleCount(state: GlobalState) {
    return state.count * 2;
  }
};
const mutations: MutationTree<GlobalState> = {
  increment(state: GlobalState) {
    state.count++;
  }
};

export const StateKey: InjectionKey<Store<GlobalState>> = Symbol();

export const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  getters,
  mutations
});

export function useStore() {
  return baseUseStore<GlobalState>(StateKey);
}
