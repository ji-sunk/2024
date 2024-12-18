/**
 * 프로젝트 전체에서 사용 할 수 있는 Type
 */
export type NonEmptyArray<T> = [T, ...T[]]; // 빈 Array 체크

export type YN = 'Y' | 'N';

export interface Pagination {
  page: number;
  size: number;
}

export interface BaseEntity {
  regDt: string;
  rgtrId: string;
  mdfcnDt: string;
  mdfrId: string;
}

export interface UserInfo {
  userId: string;
  flnm: string;
  jdbgCd: string;
  jdbgNm: string;
  extNo: string;
  telno?: string;
  mblTelno?: string;
}

export type PresetPermission = 'create' | 'update' | 'delete' | 'execute';
