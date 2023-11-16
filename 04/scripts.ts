type componentes = {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}

const estoque = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}
const etiquetas = (pecas: componentes) => {
    const Nvetiq = []
    for (let i = 1; i <= pecas.qtd; i++) {
        const lotestring = pecas.lote.toString()
        const anostring = pecas.ano.toString()
        const qtdstring = i.toString().padStart(3, '0')
        if (qtdstring.length > 3) {
            qtdstring.slice(-2)
        }
        Nvetiq.push(`${lotestring}-${anostring}-${qtdstring}`);

    }
    console.log(Nvetiq)
}
etiquetas(estoque)

