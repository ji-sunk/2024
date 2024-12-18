import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface OverlayStore {
  isOpen: boolean;
  text: string;
  subText: string;
  rejectHandler: any;
  approveHandler: any;
  setIsOpen: (bool: boolean) => void;
  setText: (text: string) => void;
  setSubText: (subText: string) => void;
  setRejectHandler: (func: any) => void;
  setApproveHandler: (func: any) => void;
  resetStore: () => void;
}

/**
 * @isOpen drawer 열고 닫기위한 boolean 입니다.
 * @text header에 사용될 텍스트 입니다.
 * @subText body에 들어갈 텍스트 입니다.
 * @rejectHandler 반려 버튼에 들어갈 이벤트 입니다.
 * @approveHandler 승인 버튼에 들어가 이벤트 입니다.
 */
export const useOverlayStore = create<OverlayStore>()(
  immer((set) => ({
    isOpen: false,
    text: '결재',
    subText: '',
    rejectHandler: () => {
      console.log('reject');
    },
    approveHandler: () => {
      console.log('approve');
    },
    setIsOpen: (bool) =>
      set((state) => {
        state.isOpen = bool;
      }),
    setText: (text) =>
      set((state) => {
        state.text = text;
      }),
    setSubText: (subText) =>
      set((state) => {
        state.subText = subText;
      }),
    setRejectHandler: (func) =>
      set((state) => {
        state.rejectHandler = func;
      }),
    setApproveHandler: (func) =>
      set((state) => {
        state.approveHandler = func;
      }),
    resetStore: () =>
      set((state) => {
        state.isOpen = false;
        state.text = '결재';
        state.subText = '결재 테스트';
        state.rejectHandler = () => {};
        state.approveHandler = () => {};
      }),
  })),
);
