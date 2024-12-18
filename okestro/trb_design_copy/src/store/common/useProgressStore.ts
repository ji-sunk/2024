import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface ProgressStore {
  progress: number;
  isProgress: boolean;
  setProgress: (progress: number) => void;
  setIsProgress: (isProgress: boolean) => void;
}

export const useProgressStore = create<ProgressStore>()(
  immer((set) => ({
    progress: 0,
    isProgress: false,
    setProgress: (progress: number) =>
      set((state) => {
        state.progress = progress;
      }),
    setIsProgress: (isProgress: boolean) =>
      set((state) => {
        state.isProgress = isProgress;
      }),
  })),
);
