import { create, StateCreator } from 'zustand';
import {
  createSelectors,
  wrappingPersistStoreOptions,
} from '@/utils/StoreOptionUtils.ts';

export interface UserData {
  token: string | null;
  userId: string | null;
  tmprPswdYn: string | null;
}

interface Data {
  data: UserData | null;
  setData: (data: UserData) => void;
}

const createUserDataSlice: StateCreator<Data, [], [], Data> = (set) => ({
  data: null,
  setData: (data: UserData) => set((state) => ({ ...state, data })),
});

export const userStore = create<Data>()(
  wrappingPersistStoreOptions((...set) => createUserDataSlice(...set), {
    name: 'tps-user-store',
  }),
);

export const useUserStore = createSelectors(userStore);
