// وارد کردن کتابخانه dayjs و پلاگین شمسی
import dayjs from 'dayjs';
import jalali from 'dayjs-jalali';

// اضافه کردن پلاگین شمسی به dayjs
dayjs.extend(jalali);

// تنظیم زبان فارسی برای dayjs
dayjs.locale('fa');

// تست تاریخ شمسی
console.log(dayjs().format('YYYY/MM/DD')); // نمایش تاریخ شمسی
