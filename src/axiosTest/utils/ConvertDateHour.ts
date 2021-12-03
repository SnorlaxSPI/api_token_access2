import moment from 'moment-timezone';

class ConvertDateHour {
  
  dateAll(dateHour: any) {
    let dateConverted = moment(dateHour).tz('America/Sao_Paulo').format("DD/MM/YYYY HH:mm:ss");
    console.log(dateConverted);
    return dateConverted;
  }

  dateDate(dateHour: any) {
    let dateConverted = moment(dateHour).tz('America/Sao_Paulo').format("DD/MM/YYYY");
    console.log(dateConverted);
    return dateConverted;
  }

  dateHour(dateHour: any) {
    let dateConverted = moment(dateHour).tz('America/Sao_Paulo').format("HH:mm:ss");
    console.log(dateConverted);
    return dateConverted;
  }
  
}

export {ConvertDateHour}