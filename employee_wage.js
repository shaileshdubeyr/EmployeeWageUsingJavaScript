const IS_PARTTIME = 1;
const IS_FULLTIME = 2;
const PART_TIME_HOURS = 8;
const FULL_TIME_HOURS = 12;
const WAGE_PER_HOUR = 20;

let emphours = 0;
const NUMBER_OF_WOROKING_DAYS = 20;
for(let i = 1; i <= NUMBER_OF_WOROKING_DAYS; i++){
    empcheck = Math.floor((Math.random() * 10) % 3);
    var empWage = WAGE_PER_HOUR * employeeHours(empcheck);
}
console.log("the employee wage is " + empWage);
    
function employeeHours(){
    switch (empcheck) {
        case IS_PARTTIME:
            return emphours = PART_TIME_HOURS;
        case IS_FULLTIME:
            return emphours = FULL_TIME_HOURS;
        default:
             return emphours = 0;
    }
}

