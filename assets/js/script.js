function backImage(lutador, img){
    document.querySelector(`#${lutador} .img`).style.backgroundImage = `url(assets/img/${img}.png)`
    document.querySelector(`#${lutador} .img`).style.backgroundPosition = 'center'
    document.querySelector(`#${lutador} .img`).style.backgroundSize = 'cover'
}

let hero = ''
let monstro = ''

let Batman = document.querySelector('.Batman').addEventListener('click',() => {
    backImage('char','Batman')
    hero = 'Batman'
    
})
let Superman = document.querySelector('.Superman').addEventListener('click',() => {
    backImage('char','Superman')
    hero = 'Superman'
})
let Brainic = document.querySelector('.Brainic').addEventListener('click',() => {
    backImage('monstro','Brainic')
    monstro = 'Brainic'
})
let Espantalho = document.querySelector('.Espantalho').addEventListener('click',() => {
    backImage('monstro','Espantalho')
    monstro = 'Espantalho'
})


document.querySelector('.play').addEventListener('click',() => {
    if(hero == 'Batman' & monstro == 'Brainic'){
        AreaGeral.start(
            createBatman('Batman'),
            createBrainic('Brainic'),
            document.querySelector('#char'),
            document.querySelector('#monstro')
        )
    }else if(hero == 'Batman' & monstro == 'Espantalho'){
        AreaGeral.start(
            createBatman('Batman'),
            createEspantalho('Espantalho'),
            document.querySelector('#char'),
            document.querySelector('#monstro')
        )
    }else if(hero == 'Superman' & monstro == 'Brainic'){
        AreaGeral.start(
            createSuperman('Superman'),
            createBrainic('Brainic'),
            document.querySelector('#char'),
            document.querySelector('#monstro')
        )
    }else if(hero == 'Superman' & monstro == 'Espantalho'){
        AreaGeral.start(
            createSuperman('Superman'),
            createEspantalho('Espantalho'),
            document.querySelector('#char'),
            document.querySelector('#monstro')
        )
    }else{
        window.alert('Escolha os personagens!')
        return
    }

    escondidos = ['.play','.Batman','.Brainic','.Superman','.Espantalho']
    for(let i in escondidos){
        document.querySelector(`${escondidos[i]}`).style.display = 'none'
    }

    mostrar = ['.reset','#monstro .botão_atacar','#char .botão_atacar','#char .barra-vida','#char .barra','#monstro .barra-vida','#monstro .barra']
    for(let i in mostrar){
        document.querySelector(`${mostrar[i]}`).style.display = 'flex'
    }

    CenterBtn = ['#monstro .lutador','#char .lutador']
    for(let i in CenterBtn){
        document.querySelector(`${CenterBtn[i]}`).style.justifyContent = 'center';
    }

    
})

// Botão heroi
function toggleButton(button) {
    // Remove a classe 'selected' de todos os botões
    var buttons = document.querySelectorAll('.lutador .a');
    buttons.forEach(function(btn) {
        btn.classList.remove('selected');
    });

    // Adiciona a classe 'selected' apenas ao botão clicado
    button.classList.add('selected');
}

//Vilão
function toggleButton2(button) {
    // Remove a classe 'selected' de todos os botões
    var buttons = document.querySelectorAll('.lutador .a');
    buttons.forEach(function(btn) {
        btn.classList.remove('selected2');
    });

    // Adiciona a classe 'selected' apenas ao botão clicado
    button.classList.add('selected2');
}