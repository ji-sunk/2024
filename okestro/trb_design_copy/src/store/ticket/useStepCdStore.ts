import { create } from 'zustand';
import { EgMenuListResponse } from '@apis/workflow/workflow/v1/workflowResponseModel.ts';
import { TicketCmCompnCode } from '@pages/workflow/ticket/util/TicketCmCompnUtils.ts';
import { BtnList } from '@ui/layout/CrumbHeader.tsx';
import { isEqual } from 'lodash-es';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

/* StepCdStore 상태 타입 */
type StepCdState = {
  btnList: BtnList[];
  stepCd: TicketCmCompnCode;
  stepCompnNm: string;
  isVisible: boolean;
  valid: boolean;
  skipValid: boolean;
  btnHandler: any;
  curStep: EgMenuListResponse | undefined;
  nextStep: EgMenuListResponse | undefined;
};

/* StepCdStore 액션 타입 */
type StepCdActions = {
  actions: {
    setBtnList: (btnList: BtnList[]) => void;
    setStepCd: (cd: TicketCmCompnCode) => void;
    setStepCompnNm: (compnNm: string) => void;
    setIsVisible: (visible: boolean) => void;
    setValid: (isValid: boolean) => void;
    setSkipValid: (isSkipValid: boolean) => void;
    setCurStep: (step: EgMenuListResponse | undefined) => void;
    setNextStep: (step: EgMenuListResponse | undefined) => void;
    setBtnHandler: (func: any) => void;
    resetStore: () => void;
  };
};

const initStates: StepCdState = {
  btnList: [],
  stepCd: '',
  stepCompnNm: '',
  isVisible: false,
  valid: true,
  skipValid: false,
  btnHandler: () => {},
  curStep: undefined,
  nextStep: undefined,
};

/**
 * StepCdStore
 *
 * @@@ 상태값 @@@
 * @stepCd: 현재 화면에 랜더링 되고있는 컴포넌트의 코드입니다. (이 값에 따라 화면이 렌더링 됩니다.)
 * @stepCompnNm: 현재 화면에 랜더링 되고있는 컴포넌트의 이름입니다.
 * @crumbText: 버튼에 들어갈 텍스트입니다.
 * @isVisible: 화면 표시 여부입니다. (boolean - false인 경우 표시되지 않습니다.)
 * @valid: 버튼 disable 처리를 할 수 있습니다.
 * @btnHandler: 버튼에 대한 동작을 등록할 수 있습니다.
 * @curStep 현재 보여지고 있는 컴포넌트에 대한 step 정보를 담고 있습니다.
 * @nextStep 다음 스텝 정보에 대해 담고 있습니다.
 *
 * @@@ 액션값 @@@
 * @setStepCd
 * @setStepCompnNm
 * @setCrumbText
 * @setIsVisible
 * @setValid
 * @setCurStep
 * @setNexStep
 * @setBtnHandler
 * @resetStore
 */
export const useStepCdStore = create<StepCdState & StepCdActions>()(
  devtools(
    immer<StepCdState & StepCdActions>((set) => ({
      ...initStates,
      actions: {
        setBtnList: (btnList) =>
          set((state) => {
            if (!isEqual(state.btnList, btnList)) {
              return { ...state, btnList: btnList };
            }

            return state;
          }),
        setStepCd: (cd) =>
          set((state) => {
            state.stepCd = cd;
          }),
        setStepCompnNm: (compnNm) =>
          set((state) => {
            state.stepCompnNm = compnNm;
          }),
        setIsVisible: (visible) =>
          set((state) => {
            state.isVisible = visible;
          }),
        setValid: (isValid) => {
          set((state) => {
            state.valid = isValid;
          });
        },
        setSkipValid: (isSkipValid) => {
          set((state) => ({ ...state, skipValid: isSkipValid }));
        },
        setCurStep: (step) => {
          set((state) => ({ ...state, curStep: step }));
        },
        setNextStep: (step) => {
          set((state) => ({ ...state, nextStep: step }));
        },
        setBtnHandler: (func) =>
          set((state) => ({ ...state, btnHandler: func })),
        resetStore: () =>
          set(() => ({
            stepCd: '',
            stepCompnNm: '',
            crumbText: '다음',
            isVisible: false,
            valid: false,
            skipValid: false,
            btnHandler: () => {},
          })),
      },
    })),
    {
      enabled: import.meta.env.VITE_DISABLE_REACT_DEVTOOLS !== 'true',
      name: 'StepCdStore',
    },
  ),
);
