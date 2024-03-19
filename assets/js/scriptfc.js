const personagemPadrao = {
    name: '',
    vida: 1,
    maxVida: 1,
    ataque: 0,
    defesa: 0


}

function createBatman(name){
    return {
        ...personagemPadrao, //herdar
        name: name,
        vida: 100,
        maxVida: 100,
        ataque: 17,
        defesa: 17
    }
}

function createSuperman(name){
    return {
        ...personagemPadrao, //herdar
        name: name,
        vida: 150,
        maxVida: 150,
        ataque: 25,
        defesa: 23
    }
}
function createBrainic(name){
    return {
        ...personagemPadrao, //herdar
        name: name,
        vida: 120,
        maxVida: 120,
        ataque: 20,
        defesa: 22
    }
}
function createEspantalho(name){
    return {
        ...personagemPadrao, //herdar
        name: name,
        vida: 90,
        maxVida: 90,
        ataque: 22,
        defesa: 18
    }
}


const AreaGeral = {
    lutador1: null,
    lutador2: null,
    lutadorEl1: null,
    lutadorEl2: null,

    start(lutador1, lutador2, lutadorEl1, lutadorEl2){
        this.lutador1 = lutador1;
        this.lutador2 = lutador2;
        this.lutadorEl1 = lutadorEl1;
        this.lutadorEl2 = lutadorEl2;

        this.lutadorEl1.querySelector('.botão_atacar').addEventListener('click',() => this.fazerAtaque(this.lutador1, this.lutador2));
        this.lutadorEl2.querySelector('.botão_atacar').addEventListener('click',() => this.fazerAtaque(this.lutador2, this.lutador1));

        this.update()
    
    },
    update(){
        //Lutador1
        this.lutadorEl1.querySelector('.nome').innerHTML = `${this.lutador1.name} - ${(this.lutador1.vida).toFixed(1)}HP`
        let f1Pct = this.lutador1.vida / this.lutador1.maxVida * 100;
        this.lutadorEl1.querySelector('.barra').style.width = `${f1Pct}%`
        
        //Lutador2
        this.lutadorEl2.querySelector('.nome').innerHTML = `${this.lutador2.name} - ${(this.lutador2.vida).toFixed(1)}HP`
        let f2Pct = this.lutador2.vida / this.lutador2.maxVida * 100;
        this.lutadorEl2.querySelector('.barra').style.width = `${f2Pct}%`
    },
    fazerAtaque(atacante, atacado){
        if(atacante.vida <= 0 || atacado.vida <= 0){
            log.addMessage("Fim de jogo!")
            window.alert('Fim de jogo, clique em "Reiniciar" para jogar novamente!')
            return;
        }

        const fatorAtaque = (Math.random() * 2).toFixed(2);
        const fatorDefesa = (Math.random() * 2).toFixed(2);
            

        const ataqueAtual = atacante.ataque * fatorAtaque;
        const defesaAtual = atacado.defesa * fatorDefesa;
        

        if(ataqueAtual > defesaAtual){
            atacado.vida -= ataqueAtual;
            if(atacado.vida < 0){
                atacado.vida = 0;
                alert(`${atacante.name} Venceu!!!`)
            }
            log.addMessage(`${atacante.name} causou ${ataqueAtual.toFixed(2)} de dano em ${atacado.name}.`)
        }else{
            log.addMessage(`${atacado.name} conseguiu se defender.`)
        }
        
        this.update();
    }

}


const log = {
    list: [],
    addMessage(msg){
        this.list.push(msg);
        this.render();
    },
    render(){
        const logEl = document.querySelector('.log');
        logEl.innerHTML = ''
        for(let i in this.list){
            logEl.innerHTML += `<li>${this.list[i]}</li>`
        }
        logEl.scrollTop = logEl.scrollHeight;
    }
}