const IS_PARTTIME = 1;
const IS_FULLTIME = 2;
const PART_TIME_HOURS = 8;
const FULL_TIME_HOURS = 12;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_HOURS_IN_MONTH = 100;
const TOTAL_WORKING_DAYS = 10;

let totalEmphours = 0;
let totalWorkingdays = 0;
var totalwage;
const NUMBER_OF_WOROKING_DAYS = 20;
while(totalEmphours <= MAX_WORKING_HOURS_IN_MONTH && totalWorkingdays < TOTAL_WORKING_DAYS){
    empcheck = Math.floor((Math.random() * 10) % 3);
    totalEmphours += employeeWorkingHours(empcheck);
    totalWorkingdays++;
}
empWage = totalEmphours * WAGE_PER_HOUR;
console.log("Total working days " + totalWorkingdays + " total hours "
             + totalEmphours + " employee wage " +empWage);

function employeeWorkingHours() {
    switch (empcheck) {
        case IS_PARTTIME:
            return emphours = PART_TIME_HOURS;
        case IS_FULLTIME:
            return emphours = FULL_TIME_HOURS;
        default:
            return emphours = 0;
    }
}

