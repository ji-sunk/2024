/**
 * 검색 조회 Global Request
 */
interface TableSearchType {
  column: string;
  searchValue: string;
}
export interface TableSortSearchType {
  column: string | number | symbol;
  direction?: 'ASC' | 'DESC' | '';
}

interface TableDateSearchType {
  column: string;
  startDate: string;
  endDate: string;
}
export interface GlobalSearchRequest {
  page: number;
  size: number;
  searchObj?: TableSearchType;
  sortObj?: TableSortSearchType;
  dateObj?: TableDateSearchType;
}

/**
 * 다중 검색 조회 Global Request
 * 검색기능 고도화 예정
 */
export interface GlobalSearchArrayRequest {
  page: number;
  size: number;
  searchObj?: TableSearchType;
  sortObj?: TableSortSearchType | TableSortSearchType[];
  dateObj?: TableDateSearchType;
}
