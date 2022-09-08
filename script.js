// let idade= Number(prompt("Qual sua idade?"))

// // if(idade >= 13){
// //     if(idade <= 17){
// //     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
// //     alert("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
// // }else{
// //     console.log("Consulte outras possibilidades do Labank")
// //     alert("Consulte outras possibilidades do Labank")
// // }

// // } else{
// //     console.log("Consulte outras possibilidades do Labank")
// //     alert("Consulte outras possibilidades do Labank")
// // }

// // if(idade >=13 && idade <= 17){
// //     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
// //     alert("Seu dependente já pode ter um cartão de crédito vinculado ao seu")   
// // }else{
// //     console.log("Consulte outras possibilidades do Labank")
// //     alert("Consulte outras possibilidades do Labank")
// // }

// idade === 13 ? console.log("A idade do dependente é 13 e já pode ter um cartão") : console.log("Verifique as opções possíveis");

let ramal= Number(prompt(`Digite o número da opção desejada:
1 para ‘Fácil’
2 para ‘Black’
3 para ‘Platinum’
4 para ‘Master Gold’`))


switch(ramal) {
    case 1 :
    console.log("Fácil")
    break
    case 2 :
        console.log("Black")
        break
        case 3:
            console.log("Platinum")
            break
            case 4:
                console.log("Master Gold")
                break
                default:
                    console.log("Escolha uma das quatro opções disponiveis")
        
}