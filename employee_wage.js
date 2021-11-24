const IS_PARTTIME = 1;
const IS_FULLTIME = 2;
const PART_TIME_HOURS = 8;
const FULL_TIME_HOURS = 12;
const WAGE_PER_HOUR = 20;

let emphours = 0;
empcheck = Math.floor((Math.random() * 10) % 2);
switch (empcheck) {
    case IS_PARTTIME:
        emphours = PART_TIME_HOURS;
        break;
    case IS_FULLTIME:
        emphours = FULL_TIME_HOURS;
    default:
        emphours = 0;
}

let empWage = WAGE_PER_HOUR * emphours;
    console.log("the employee wage is " + empWage);