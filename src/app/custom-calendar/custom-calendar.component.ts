import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarItemState, Days, MonthConfig } from './calendar.models';
import { format } from 'date-fns-tz';

/**
 * 
 Assignment requirements
  
  Build an application using Angular: when you refresh the page. The month is in the current month (e.g. now it in July/2023, the first render page should be in July 2023);
  
  you can click the left button on the top to switch to the previous month or even previous years (if it is in January/2023, it will go to December/2022), and same logic for the right button;
  
  When you select one cell that has a date, it will render the current the date in the view;
  
  Your calendar does not have to be exactly looks like the one in the video. You can have your own UI design.
 
https://www.evernote.com/shard/s546/client/snv?isnewsnv=true&noteGuid=ad6cd0f3-325a-5a56-82fe-f82e67529d53&noteKey=zNE6TJcsyCsPaVmtKykpSewe9WkfHu6u1sMQl1namomb9FbLa0VEF0h7tA&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs546%2Fsh%2Fad6cd0f3-325a-5a56-82fe-f82e67529d53%2FzNE6TJcsyCsPaVmtKykpSewe9WkfHu6u1sMQl1namomb9FbLa0VEF0h7tA&title=Calendar

  * 
 */

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCalendarComponent implements OnInit {
  currentDate: Date = new Date();
  calendarYear: number = this.currentDate.getFullYear();
  calendarMonth: string = format(this.currentDate, 'LLLL');
  previousMonth: MonthConfig;
  nextMonth: MonthConfig;
  isYearTransition: boolean;
  firstDayPosition: number;
  lastDayPosition: number;
  totalDaysCount: number;
  userReadableDate: string;
  calendarItems: (Days | number)[];
  calendarHeaders: (Days | number)[] = [
    Days.MONDAY,
    Days.TUESDAY,
    Days.WEDNESDAY,
    Days.THURSDAY,
    Days.FRIDAY,
    Days.SATURDAY,
    Days.SUNDAY,
  ];
  calendarItemState: typeof CalendarItemState = CalendarItemState;

  constructor() {}

  ngOnInit() {
    this.setCalendarVariables(this.currentDate);
    this.calculateMonthNavigation(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth()
    );
    this.updateReadableDate(this.currentDate);
  }

  setCalendarVariables(coreDate: Date): void {
    this.firstDayPosition = new Date(
      new Date(coreDate.getFullYear(), coreDate.getMonth(), 1)
    ).getDay();
    this.lastDayPosition = new Date(
      new Date(coreDate.getFullYear(), coreDate.getMonth() + 1, 0)
    ).getDay();
    this.totalDaysCount = new Date(
      new Date(coreDate.getFullYear(), coreDate.getMonth() + 1, 0)
    ).getDate();
    this.calendarItems = [
      ...this.calendarHeaders,
      ...Array(this.firstDayPosition),
      ...Array.from(
        {
          length: this.totalDaysCount,
        },
        (_, key) => key + 1
      ),
      ...Array(6 - this.lastDayPosition),
    ];
  }

  updateReadableDate(coreDate: Date) {
    this.userReadableDate = format(new Date(coreDate), 'EEE do, LLL/yyyy');
  }

  selectNewDate(item: number | Days) {
    if (this.calendarHeaders.includes(item) || !item) return;
    this.currentDate.setDate(item as number);
    this.currentDate.setMonth(this.previousMonth.index + 1);
    this.currentDate.setFullYear(this.calendarYear);
    this.userReadableDate = format(
      new Date(this.currentDate),
      'EEE do, LLL/yyyy'
    );
  }

  calculateMonthNavigation(year: number, month: number): void {
    const prevMonthIndex = month - 1 >= 0 ? month - 1 : 11;
    const nextMonthIndex = month + 1 <= 12 ? month + 1 : 0;
    this.previousMonth = {
      text: format(new Date(year, prevMonthIndex), 'LLL'),
      index: prevMonthIndex,
    };
    this.nextMonth = {
      text: format(new Date(year, nextMonthIndex), 'LLL'),
      index: nextMonthIndex,
    };
  }

  navigateMonth(monthIndex: number) {
    this.isYearTransition = false;
    const rangeMonth: Date = new Date(this.calendarYear, monthIndex);
    if (monthIndex === this.nextMonth.index && monthIndex === 12) {
      this.calendarYear++;
      this.isYearTransition = true;
    } else if (monthIndex === this.previousMonth.index && monthIndex === 0) {
      this.calendarYear--;
      this.isYearTransition = true;
    }
    this.calendarMonth = format(rangeMonth, 'LLLL');
    this.previousMonth.index = monthIndex - 1;
    this.nextMonth.index = monthIndex + 1;
    this.setCalendarVariables(rangeMonth);
    this.calculateMonthNavigation(
      rangeMonth.getFullYear(),
      rangeMonth.getMonth()
    );
  }

  /** Less efficient but more readable alternative  */
  computeCalendarItemClass(item: Days | number): string {
    return item === this.currentDate.getDate() &&
      (this.previousMonth.index + 1 === this.currentDate.getMonth() ||
        (this.isYearTransition &&
          this.previousMonth.index - 11 === this.currentDate.getMonth()))
      ? CalendarItemState.ACTIVE
      : CalendarItemState.NONE;
  }
}
