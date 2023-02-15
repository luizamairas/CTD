function startGame(){
    let amountMoves = 0
    const moves = ["pedra","papel", "tesoura"]
    const resultado = {
        player: 0,
        machine: 0
    }
    while (true){
        let player = prompt("Pedra, Papel ou Tesoura?").toLocaleLowerCase()
        let machine = Math.floor(Math.random() * moves.length)
        if (amountMoves < 3){
            if (player == moves[0]){
                if (moves[machine] == moves[0]){
                    alert(`Você Empatou! Você escolheu ${player} e a maquina ${moves[machine]}`)
                }else if (moves[machine] == moves[1]){
                    alert(`Você Perdeu! Você escolheu ${player} e a maquina ${moves[machine]}`)
                    resultado.machine += 1
                    amountMoves += 1
                }else if (moves[machine] == moves[2]){
                    alert(`Você Ganhou! Você escolheu ${player} e a maquina ${moves[machine]}`)
                    resultado.player += 1
                    amountMoves += 1
                }else{
                    alert("Opção Invalida!")
                    }
                }
            if (player == moves[1]){
                if (moves[machine] == moves[0]){
                    alert(`Você Ganhou! Você escolheu ${player} e a maquina ${moves[machine]}`)
                    resultado.player += 1
                    amountMoves += 1
                }else if (moves[machine] == moves[1]){
                    alert(`Você Empatou! Você escolheu ${player} e a maquina ${moves[machine]}`)
                }else if (moves[machine] == moves[2]){
                    alert(`Você Perdeu! Você escolheu ${player} e a maquina ${moves[machine]}`)
                    resultado.machine += 1
                    amountMoves += 1
                }else{
                    alert("Opção Invalida!")
                }
            }
            if (player == moves[2]){
                if (moves[machine] == moves[0]){
                    alert(`Você Perdeu! Você escolheu ${player} e a maquina ${moves[machine]}`)
                    resultado.machine += 1
                    amountMoves += 1
                }else if (moves[machine] == moves[1]){
                    alert(`Você Ganhou! Você escolheu ${player} e a maquina ${moves[machine]}`)
                    resultado.player += 1
                    amountMoves += 1
                }else if (moves[machine] == moves[2]){
                    alert(`Você Empatou! Você escolheu ${player} e a maquina ${moves[machine]}`)
                }else{
                    alert("Opção Invalida!")
                }
            }
        }else{
            alert(`Resultado: Player ${resultado.player}; Machine ${resultado.machine}`)
            break
        }
    }
}

let userConfirm = confirm("Você deseja jogar?")

if (userConfirm){
    startGame()
}else {
    alert("Obrigado por visitar a pagina")
}