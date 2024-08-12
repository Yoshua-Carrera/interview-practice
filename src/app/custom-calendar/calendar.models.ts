export enum Days {
  MONDAY = 'mon',
  TUESDAY = 'tue',
  WEDNESDAY = 'wed',
  THURSDAY = 'thu',
  FRIDAY = 'fri',
  SATURDAY = 'sat',
  SUNDAY = 'sun',
}
export interface MonthConfig {
  text: string;
  index: number;
}

export enum CalendarItemState {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  NONE = ''
}
