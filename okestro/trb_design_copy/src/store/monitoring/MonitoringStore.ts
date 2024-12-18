import { create, StateCreator } from 'zustand';
import {
  createSelectors,
  wrappingDefaultStoreOptions,
} from '@/utils/StoreOptionUtils.ts';

interface Server {
  protocol: string;
  address: string;
  port: string;
  name: string;
  id: string;
}

interface ServerSlice {
  servers: Server[];
  addServer: (server: Server) => void;
}

const createServerSlice: StateCreator<ServerSlice, [], [], ServerSlice> = (
  set,
) => ({
  servers: [],
  addServer: (data: Server) =>
    set((state) => ({ servers: [...state.servers, data] })),
});

interface Layout {
  h: number;
  w: number;
  x: number;
  y: number;
}

interface LayoutSlice {
  layouts: Layout[];
  addLayout: (layout: Layout) => void;
}

const createLayoutSlice: StateCreator<LayoutSlice, [], [], LayoutSlice> = (
  set,
) => ({
  layouts: [],
  addLayout: (data: Layout) =>
    set((state) => ({ layouts: [...state.layouts, data] })),
});

export const MonitoringConfigStore = create<ServerSlice & LayoutSlice>()(
  wrappingDefaultStoreOptions((...set) => ({
    ...createServerSlice(...set),
    ...createLayoutSlice(...set),
  })),
);

export const useMonitoringConfigStore = createSelectors(MonitoringConfigStore);
