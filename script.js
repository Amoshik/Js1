// let name = 'Alex'
//  let money = 10000
//  let account = 7777


//  let imya = prompt('Как вас зовут?')
//  if(imya === name){
//      let nik = prompt('Номер счета')
//          if(nik === '7777'){
//  let dengi = prompt('Сколько обналичить?')
//  if (dengi > money) {
//      alert('денег недостаточно')

//  } else {
//      alert(`Снял: ${dengi} денег | Осталось: ${10000 - dengi} денег`)
//  }

//  } else {
//  alert('Номер счёта неправильный')
//  }

//  }

//  else {
//  alert('Досвидули')
//  }
    



let nikname = prompt('Как вас зовут?')
if(nikname[0].toUpperCase() === 'A'){
    let age = prompt('Сколько вам лет')
if(age > '19' && age < '41' ){
let wallet = prompt('Сколько у вас денег?')
if(wallet >= 100){
    let people = prompt('Сколько людей?')
if(people > 9 && people < 16){
    alert('Welcome')
}else{
    alert('Иди вон')
}

}else{
 alert('Иди вон бомж')   
}
}else{
alert("Клуб не для вас")
}
    }else{
        alert("Иди вон тупой")
    }
    
