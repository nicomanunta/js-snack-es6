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

// creare una variabile da confrontare e sovrascrivere
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
        team: "Milan",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        team: "Cagliari",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        team: "Juventus",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        team: "Roma",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        team: "Atalanta",
        punti_fatti: 0,
        falli_subiti: 0
    }
    

]

squadre.forEach(element => {
    element.punti_fatti = Math.floor(Math.random()* 50 + 1) 
    element.falli_subiti = Math.floor(Math.random()* 50 + 1) 
    
});
console.log(squadre)

let squadreNuove= []

squadre.forEach(element => {
    let {team, falli_subiti} = element
    let oggettiNuovi= {team, falli_subiti}
    squadreNuove.push(oggettiNuovi)
   
});
console.log(squadreNuove)