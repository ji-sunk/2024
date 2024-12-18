import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { TicketRepo } from '@apis/workflow/ticket/v1/ticketRequestModel.ts';

// 통합테스트 의뢰정보
export interface RqstInfo {
  wrkflwExcnNo: string;
  wrkflwInptNo: number;
  inptSn: number;
  tcktNo: string;
  tcktKndCd: string;
  testPrgrsSttsCd: string;
  testRqstNm: string;
  testRqstCn: string;
  cmptnDmndYmd: string;
}

const initValue: RqstInfo = {
  wrkflwExcnNo: '',
  wrkflwInptNo: 0,
  inptSn: 0,
  tcktNo: '',
  tcktKndCd: '',
  testPrgrsSttsCd: '',
  testRqstNm: '',
  testRqstCn: '',
  cmptnDmndYmd: '',
};

// 티켓 정보 인터페이스
export interface TicketInfo {
  tcktNo: string;
  tcktNm: string;
  taskCd: string;
  tcktKndCd: string;
  ticketRepoInfoList?: TicketRepo[];
  rlsId?: string;
  bizCd?: string;
}

const initTicketValue: TicketInfo = {
  tcktNo: '',
  tcktNm: '',
  taskCd: '',
  tcktKndCd: '',
  ticketRepoInfoList: [],
  rlsId: '',
  bizCd: '',
};

interface IntgrtdTestStore {
  // 통합테스트의뢰 정보
  rqstInfo: RqstInfo;
  // 티켓 정보
  ticketInfo: TicketInfo;
  // 통합테스트 정보 설정
  setIntgrtdTestInfo: (info: RqstInfo) => void;
  // 티켓 정보 설정
  setTicketInfo: (info: TicketInfo) => void;
  // 통합테스트 정보 초기화
  resetIntgrtdTestInfo: () => void;
  // 티켓 정보 초기화
  resetTicketInfo: () => void;
}

const storeName = 'IntgrtdTest-store';

export const useIntgrtdTestStore = create<IntgrtdTestStore>()(
  devtools(
    persist(
      (set) => ({
        // 초기상태 설정
        rqstInfo: initValue,
        ticketInfo: initTicketValue,

        // 통합테스트 정보 설정
        setIntgrtdTestInfo: (info) => set({ rqstInfo: info }),
        // 티켓 정보 설정
        setTicketInfo: (info) => set({ ticketInfo: info }),

        // 통합테스트 정보 초기화
        resetIntgrtdTestInfo: () => {
          set({ rqstInfo: initValue });
          localStorage.removeItem(storeName);
        },

        // 티켓 정보 초기화
        resetTicketInfo: () => set({ ticketInfo: initTicketValue }),
      }),
      {
        name: storeName,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
