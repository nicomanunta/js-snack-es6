// SNACK 1
let bici = [
    {
        nome: "Bianchi",
        peso: 10
    },
    {
        nome: "Atala",
        peso: 15
    },
    {
        nome: "Olmo",
        peso: 8
    },
    {
        nome: "Casati",
        peso: 13
    },
    {
        nome: "Colnago",
        peso: 11
    }
]


let peso_minore = 10000000000
let bici_leggera;
bici.forEach(element => {
   
    if(element.peso < peso_minore){
        
        peso_minore = element.peso
        bici_leggera= element        
    }
});
let {nome, peso} = bici_leggera 
console.log(`${nome} ${peso}`)







// SNACK 2
let squadre = [
    {
        nome: "Milan",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Cagliari",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Juventus",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Roma",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Atalanta",
        punti_fatti: 0,
        falli_subiti: 0
    }
    

]


squadre.forEach(element => {
    
    
});

function randomNumber(){
    return Math.floor(Math.random()* 100 + 1) 
}
randomNumber()


let newSquadre= []
squadre.forEach(element => {
    let {nome, falli_subiti} = element
    newSquadre.push(nome, falli_subiti)
});
console.log(newSquadre)