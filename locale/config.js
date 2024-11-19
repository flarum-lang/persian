// اضافه کردن Day.js و افزونه‌ها
import dayjs from 'dayjs';
import jalali from 'dayjs-jalali';
import 'dayjs/locale/fa';

// اضافه کردن تقویم شمسی و زبان فارسی
dayjs.extend(jalali);
dayjs.locale('fa');

// نمونه خروجی تاریخ
console.log(dayjs().format('YYYY/MM/DD')); // خروجی: ۱۴۰۳/۰۸/۲۸
console.log(dayjs().format('dddd, D MMMM YYYY')); // خروجی: شنبه، ۲۸ آبان ۱۴۰۳
