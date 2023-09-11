var date = Number(prompt(' enter day-'));
var month = prompt('enter month- ').toLowerCase();

 if(date >=21 && date <=31 && month=== 'march' || date <=20 &&  month=== 'april'){
     console.log('овен')
 } else if (date >=21 && date <=31 && month=== 'april' || date <=20 &&  month=== 'may') {
     console.log('телец')
 }else if (date >=21 && date <=31 && month=== 'may' || date <=21 &&  month=== 'june') {
     console.log('близнецы')
 }else if (date >=21 && date <=31 && month=== 'june' || date <=21 &&  month=== 'july') {
     console.log('рак')
 }else if (date >=21 && date <=31 && month=== 'july' || date <=20 &&  month=== 'august') {
     console.log('лев')
 }else if (date >=21 && date <=31 && month=== 'august' || date <=20 &&  month=== 'september') {
     console.log('дева')
 }else if (date >=21 && date <=31 && month=== 'september' || date <=20 &&  month=== 'october') {
     console.log('весы')
 }else if (date >=21 && date <=31 && month=== 'october' || date <=20 &&  month=== 'november') {
     console.log('скорпион')
 }else if (date >=21 && date <=31 && month=== 'november' || date <=20 &&  month=== 'december') {
     console.log('стрелец')
 }else if (date >=21 && date <=31 && month=== 'december' || date <=20 &&  month=== 'january') {
     console.log('козерог')
 }else if (date >=21 && date <=31 && month=== 'january' || date <=20 &&  month=== 'february') {
     console.log('водолей')
 }else if (date >=21 && date <=31 && month=== 'february' || date <=20 &&  month=== 'march') {
     console.log('рыбы')
 } else  if  (date > 31 ){
    console.log('число не должно быть больше 31')
}
 else{
    console.error()
}

