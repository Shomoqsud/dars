let ism = prompt("Ismingizni kiriting:");
let yil = +prompt("Hozirgi yilni kiriting:");
let tg = +prompt("Tug'ilgan yilingizni kiriting:");

function getAge(yil, tg) {
  return yil - tg;
}

console.log(ism + " Yoshingiz - " + getAge(yil, tg) + "da!");




let son = +prompt("Dioganal son kirit ")

let box = ''

if (son % 2 == 0) {
    son = son + 1;
}

for (let i = 0; i < son; i++) {
    for (let j = 0; j < son; j++) {
        if ( i==j || i==0 || j==0 || i==son-1 || j==son-1 || i == son - 1 - j ){
            box =box+'◻️'
        }else{
            box =box+"🔳"
        }
        
    }
    console.log(box);
    box=''
}


let soon = +prompt("Qoylar sonini kiriting: ")

let qoylar = ''

for (let i = 1; i < soon; i++) {
    if(i == 1) {
        qoylar +=`${i} qoy... `
    }else{
        qoylar +=`${i} qoylar... `
    }
    
}
console.log(qoylar)