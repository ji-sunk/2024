/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_COMMON_API: string;
  readonly VITE_AUTH_API: string;
  readonly VITE_WORKFLOW_API: string;
  readonly VITE_PIPELINE_API: string;
  readonly VITE_PPLNLOGGING_API: string;
  readonly VITE_SSE_API: string;
  readonly VITE_NOTIFICATOR_API: string;
  readonly VITE_PMS_API: string;
  readonly VITE_SCOUTER_API: string;
  // 다른 환경 변수들에 대한 타입 정의...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
