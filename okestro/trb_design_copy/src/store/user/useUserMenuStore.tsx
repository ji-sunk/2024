import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
  CmptnPermissionType,
  RoleCode,
} from '@apis/common/menu/roleMng/roleMngModel.ts';

/**
 * 메뉴 path에 따른 권한 배열
 */
export interface PathPermission {
  menuCd: number;
  bbsSe?: number | null;
  fullPath: string;
  components: CmptnPermissionType[];
}

interface UserRolePermission {
  admin: PathPermission[] | null;
  user: PathPermission[] | null;
  project: PathPermission[] | null;
}

interface MenuPresetStore {
  userMenuDetails: UserRolePermission | undefined;
  setUserMenuDetails: (menuInfo: PathPermission[], roleSeCd: RoleCode) => void;
  resetUserMenuDetails: () => void;
}

const isEnableDevtools = import.meta.env.VITE_DISABLE_REACT_DEVTOOLS !== 'true';

export const useUserMenuStore = create<MenuPresetStore>()(
  devtools(
    (set) => ({
      userMenuDetails: undefined,
      setUserMenuDetails: (menuInfo, roleSeCd) => {
        set((state) => {
          // Ensure userMenuDetails is initialized
          const updatedDetails = state.userMenuDetails || {
            admin: null,
            user: null,
            project: null,
          };

          // Update based on roleSeCd
          switch (roleSeCd) {
            case 'ADM':
              updatedDetails.admin = menuInfo;
              break;
            case 'USR':
              updatedDetails.user = menuInfo;
              break;
            case 'PRJ':
              updatedDetails.project = menuInfo;
              break;
            default:
              console.error(`Unknown RoleCode: ${roleSeCd}`);
              break;
          }

          return { userMenuDetails: updatedDetails };
        });
      },
      resetUserMenuDetails: () => set({ userMenuDetails: undefined }),
    }),
    { enabled: isEnableDevtools, name: 'MenuRoleStore' },
  ),
);
