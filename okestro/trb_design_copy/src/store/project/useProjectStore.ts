import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

export interface ProjectInfo {
  bizCd: string;
}

const initValue: ProjectInfo = {
  bizCd: '',
};

interface ProjectStore {
  // 프로젝트 정보
  projectInfo: ProjectInfo;
  // 프로젝트 정보 설정
  setProjectInfo: (projectinfo: ProjectInfo) => void;
  // 프로젝트 정보 설정 해제
  unsetProjectInfo: () => void;
}

const storeName = 'project-store';

/**
 * 프로젝트로 진입 시, 필요한 정보들을 담아두는 스토어
 *
 * 이용되는 값은 인터페이스에 자세히 기재하였음
 */
export const useProjectStore = create<ProjectStore>()(
  devtools(
    persist(
      (set) => ({
        projectInfo: initValue,
        setProjectInfo: (info) => set({ projectInfo: info }),
        unsetProjectInfo: () => {
          set({ projectInfo: initValue });
          localStorage.removeItem(storeName);
        },
      }),
      {
        name: storeName,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
