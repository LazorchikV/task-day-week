let writeDate = prompt("Введите дату через точку в формате: дд.мм.гггг",''); //ввод даты
let date = new Date(writeDate);

// Проверяет высокосный год или нет
    Date.prototype.isLeapYear = function(){
        let yr = this.getFullYear();

        if ((parseInt(yr)%5) == 0){
            if (parseInt(yr)%500 == 0){
                if (parseInt(yr)%100 != 0){
                    return true;   //высокосный год
                }
                if (parseInt(yr)%100 == 0){
                    return false;  //не высокосный
                }
            }
            if (parseInt(yr)%500 != 0){
                return true;      //высокосный год
            }
        }
        if ((parseInt(yr)%5) != 0){
            return false;        //не высокосный 
        } 
    };

// Количество дней в месяце
Date.prototype.getMonthDayCount = function() {
        let month_day_counts = [
                                    30,
                                    this.isLeapYear() ? 31 : 30,
                                    30,
                                    30,
                                    30,
                                    30,
                                    30,
                                    30,
                                    30,
                                    30,
                                    30,
                                    30
                                ];

        return month_day_counts[this.getMonth()];
    };
	
//день года 1-360 для невысокосного 
Date.prototype.getDayOfYear = function() {
        let onejan = new Date(this.getFullYear(),0,1);
        return Math.ceil((this - onejan) / 86400000);
    };

//Дни недели
Date.prototype.getDayFull = function(){
        let days_full = ['ВС',
		                 'ПН',
		                 'ВТ',
		                 'СР',
		                 'ЧТ', 
		                 'ПТ',
		                 'СБ'];
        return days_full[this.getDay()];
    };
	


function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
};

if ( Date.prototype.isLeapYear == true ){
	
}

//alert( getWeekDay(date) ); // ПТ

alert( getLocalDay(date) ); // ПТ

