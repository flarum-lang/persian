const dayjs = require('dayjs');
const jalali = require('dayjs-jalali');

dayjs.extend(jalali);
dayjs.locale('fa');

console.log(dayjs().format('YYYY/MM/DD'));
