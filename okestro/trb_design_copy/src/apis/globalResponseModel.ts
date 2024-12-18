export interface GlobalResponseModel<T> {
  data: T;
  rsltCd: string;
  rsltMsg: string;
  rsltDetailMsg: string;
}
export interface GlobalPageResponseModel<T> {
  rsltCd: string;
  rsltMsg: string;
  rsltDetailMsg: string;
  data: {
    totalItemSize: number;
    pageSize: number; // 추가
    itemSize: number;
    data: T;
  };
}

export interface ScouterResponseModel<T> {
  status: string;
  requestId: string;
  resultCode: string;
  message: string;
  result: T;
}
