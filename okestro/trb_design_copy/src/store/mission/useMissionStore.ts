import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface MissionInfo {
  bizCd: string;
  upMisnId?: string;
  misnId: string;
  misnSeNm?: string;
  misnSeSn: number;
  misnText?: any;
  picId?: string | null;
  picNm?: string | null;
  picText?: string;
  prgrsPrcsCd: string;
  prgrsPrcsCdNm: string;
  prgrsPrcsSn: number;
  regSn: number;
  rlsSttsNm?: string;
  regDt?: string;
  ttl: string;
  typeCompositionSn: number;
  typeSn: number;
  lyr: number;
  depth?: number;
  editable: boolean;
}

export const initValue = {
  bizCd: '',
  misnId: '',
  upMisnId: '',
  misnSeNm: '',
  misnSeSn: 0,
  misnText: '',
  picId: '',
  picNm: '',
  picText: '',
  prgrsPrcsCd: '',
  prgrsPrcsCdNm: '',
  prgrsPrcsSn: 0,
  regSn: 0,
  rlsSttsNm: '',
  regDt: '',
  ttl: '',
  typeCompositionSn: 0,
  typeSn: 0,
  lyr: 0,
  depth: 0,
  editable: true,
};
interface MissionStore {
  missionInfo: MissionInfo;
  setMissionInfo: (info: Partial<MissionInfo>) => void;
  clearMissionInfo: () => void;
}
export const useMissionStore = create<MissionStore>()(
  persist(
    (set) => ({
      missionInfo: initValue,
      setMissionInfo: (info) =>
        set((state) => ({
          missionInfo: { ...state.missionInfo, ...info },
        })),
      clearMissionInfo: () => set({ missionInfo: initValue }),
    }),
    {
      name: 'mission-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
