import { create } from 'zustand';
import { BtnList } from '@ui/layout/TpsBreadCrumb.tsx';

/**
 * @typedef {Object} CrumbStore
 * @property {boolean} isBreadCrumb - BreadCrumb 표시 여부를 나타내는 상태입니다.
 * @property {BtnList[]} btnList - BreadCrumb에 표시될 버튼 목록입니다.
 * @property {(isBreadCrumb: boolean) => void} setIsBreadCrumb - BreadCrumb 표시 여부를 설정하는 함수입니다.
 * @property {(btnList: BtnList[]) => void} setBtnList - BreadCrumb에 표시될 버튼 목록을 설정하는 함수입니다.
 */
interface CrumbStore {
  isBreadCrumb: boolean;
  btnList: BtnList[] | undefined;
  setIsBreadCrumb: (isBreadCrumb: boolean) => void;
  setBtnList: (btnList: BtnList[] | undefined) => void;
}

export const useCrumbStore = create<CrumbStore>((set) => ({
  isBreadCrumb: true,
  btnList: undefined,
  setIsBreadCrumb: (isBreadCrumb) =>
    set((state) => ({
      ...state,
      isBreadCrumb,
    })),
  setBtnList: (btnList) =>
    set((state) => ({
      ...state,
      btnList: btnList ? [...btnList] : undefined,
    })),
}));
