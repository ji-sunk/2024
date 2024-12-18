import { create } from 'zustand';
import { filter, find, map } from 'lodash-es';

export type ToastStatus = 'success' | 'error' | 'info' | 'warning';

/**
 * @typedef {Object} OkeToast
 * @property {number|string} [id] - The unique ID of the toast.
 * @property {ToastStatus} [status] - The status of the toast (e.g., 'success', 'error').
 * @property {string} title - The title of the toast.
 * @property {string} [description] - Optional description of the toast.
 * @property {boolean} [isClosable] - Indicates if the toast can be manually closed.
 * @property {number} [duration] - Duration for which the toast is displayed (in milliseconds).
 * @property {NodeJS.Timeout} [timeout] - Internal timer used to auto-remove the toast.
 */
export interface OkeToast {
  id?: number | string;
  status?: ToastStatus;
  title: string;
  description?: string;
  isClosable?: boolean;
  duration?: number;
  timeout?: NodeJS.Timeout; // Internal timer property
}

/**
 * @typedef {Object} ToastStore
 * @property {OkeToast[]} toast - 토스트 목록입니다.
 * @property {(toast: OkeToast) => void} addToast - 토스트를 추가하는 함수입니다.
 * @property {(toast: OkeToast) => void} updateToast - 토스트를 업데이트하는 함수입니다.
 * @property {(id: number|string) => void} removeToast - 토스트를 제거하는 함수입니다.
 */
export interface ToastStore {
  toast: OkeToast[];
  addToast: (toast: OkeToast) => void;
  updateToast: (toast: OkeToast) => void;
  removeToast: (id: number | string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toast: [],
  addToast: (toast) =>
    set((state) => {
      const id = toast.id ?? Date.now();
      const existingToast = find(state.toast, { id });

      if (existingToast) {
        // Clear existing timeout
        clearTimeout(existingToast.timeout);

        // Update toast and restart timer
        const updatedToast = {
          ...existingToast,
          ...toast,
        };

        updatedToast.timeout = setTimeout(
          () => {
            set((prevState) => ({
              toast: filter(prevState.toast, (t) => t.id !== id),
            }));
          },
          toast.duration ?? existingToast.duration ?? 3000,
        );

        return {
          toast: map(state.toast, (t) => (t.id === id ? updatedToast : t)),
        };
      } else {
        // Add new toast with timer
        const newToast = {
          id,
          status: toast.status ?? 'success',
          isClosable: toast.isClosable ?? true,
          duration: toast.duration ?? 3000,
          timeout: setTimeout(() => {
            set((prevState) => ({
              toast: filter(prevState.toast, (t) => t.id !== id),
            }));
          }, toast.duration ?? 3000),
          ...toast,
        };

        return { toast: [newToast, ...state.toast] };
      }
    }),
  updateToast: (updatedToast) =>
    set((state) => ({
      toast: map(state.toast, (toast) =>
        toast.id === updatedToast.id ? updatedToast : toast,
      ),
    })),
  removeToast: (id) =>
    set((state) => ({
      toast: filter(state.toast, (toast) => {
        if (toast.id === id && toast.timeout) {
          clearTimeout(toast.timeout);
        }
        return toast.id !== id;
      }),
    })),
}));
