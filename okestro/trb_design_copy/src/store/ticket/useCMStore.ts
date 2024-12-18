import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { EgMenuListResponse } from '@apis/workflow/workflow/v1/workflowResponseModel.ts';
import { TicketDetailResponse } from '@apis/workflow/ticket/v1/ticketResponseModel.ts';
import { SelectCmptnReleaseDetailListResponse } from '@pms/apis/project/release/v1/releaseResponseModel.ts';

/* CMState 상태 타입 */
type CMState = {
  steps: EgMenuListResponse[];
  originData: EgMenuListResponse[];
  ticketDetail: Partial<TicketDetailResponse>;
  cmptnReleaseDetailList: SelectCmptnReleaseDetailListResponse[];
  canRestart: boolean;
};

/* CMStore 액션 타입 */
type CMActions = {
  actions: {
    setSteps: (data: EgMenuListResponse[]) => void;
    updateSteps: (data: EgMenuListResponse, idx: number) => void;
    setOriginData: (data: EgMenuListResponse[]) => void;
    setTicketDetail: (data: TicketDetailResponse) => void;
    setCmptnReleaseDetailList: (
      data: SelectCmptnReleaseDetailListResponse[],
    ) => void;
    setCanRestart: (isRestart: boolean) => void;
    resetSteps: () => void;
    resetOriginData: () => void;
    resetTicketDetail: () => void;
    resetAll: () => void;
  };
};

/* 초기 상태 */
const initState: CMState = {
  steps: [],
  originData: [],
  ticketDetail: {},
  cmptnReleaseDetailList: [],
  canRestart: false,
};

/**
 * 변경 관리에 대한 정보들을 저장합니다.
 * @steps 워크플로우 원본데이터에 대한 변경 사항들이 반영된 데이터 입니다.
 * @originData 워크플로우의 원본 데이터 입니다.
 * @ticketDetail 티켓 상세 데이터 입니다.
 */

/**
 * CMStore
 *
 * @@@ 상태값 @@@
 * @steps: 워크플로우 원본 데이터에 대한 변경 사항들이 반영된 데이터입니다.
 * @originData: 워크플로우의 원본 데이터입니다.
 * @ticketDetail: 티켓 상세 데이터 입니다.
 *
 * @@@ 액션값 @@@
 * @setSteps: 변경된 워크플로우 데이터를 설정합니다.
 * @updateSteps: 주어진 인덱스의 스텝을 업데이트합니다. 인덱스에 해당하는 스텝을 수정합니다.
 * @setOriginData: 워크플로우의 원본 데이터를 설정합니다. 초기 상태를 저장하거나 수정할 때 사용됩니다.
 * @setTicketDetail: 티켓의 상세 데이터를 설정합니다.
 * @resetSteps: steps 데이터를 초기화합니다. 변경된 워크플로우 데이터를 초기 상태로 되돌립니다.
 * @resetOriginData: 원본 데이터를 초기화합니다.
 * @resetTicketDetail: 티켓 상세 데이터를 초기화합니다.
 * @resetAll: steps, originData, ticketDetail을 모두 초기 상태로 되돌립니다.
 */
const useCMStore = create<CMState & CMActions>()(
  devtools(
    immer((set) => ({
      ...initState,
      actions: {
        setSteps: (data) =>
          set((state) => {
            state.steps = data;
          }),
        updateSteps: (data: EgMenuListResponse, idx: number) =>
          set((state) => {
            if (idx >= 0 && idx < state.steps.length) {
              state.steps[idx] = data;
            }
          }),
        setOriginData: (data) =>
          set((state) => {
            state.originData = data;
          }),
        setTicketDetail: (data) =>
          set((state) => {
            state.ticketDetail = data;
          }),
        setCmptnReleaseDetailList: (data) =>
          set((state) => {
            state.cmptnReleaseDetailList = data;
          }),
        setCanRestart: (canRestart: boolean) =>
          set((state) => {
            state.canRestart = canRestart;
          }),
        resetSteps: () =>
          set((state) => {
            state.steps = [];
          }),
        resetOriginData: () =>
          set((state) => {
            state.originData = [];
          }),
        resetTicketDetail: () =>
          set((state) => {
            state.ticketDetail = {};
          }),
        resetAll: () => {
          set((state) => {
            state.steps = [];
            state.originData = [];
            state.ticketDetail = {};
          });
        },
      },
    })),
    {
      enabled: import.meta.env.VITE_DISABLE_REACT_DEVTOOLS !== 'true',
      name: 'CMStore',
    },
  ),
);

export default useCMStore;
