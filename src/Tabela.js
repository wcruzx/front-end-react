function Tabela({vetor}) {
    return(
        <table className='table-data'>
            <thead>
                <th>Saldo total: R$ 50,00</th>
                <th>Saldo no período: R$ 50,00</th>
            </thead>
            <tbody>
                <tr>
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Nome operador</th>
                </tr>
                
                    {
                        vetor.map((obj) => (
                            <tr>
                                <td>{obj.dateTransf}</td>
                                <td>{obj.valor}</td>
                                <td>{obj.tipo}</td>
                                <td>{obj.nomeOperador}</td>
                             </tr>
                        ))
                    }

            </tbody>
            <tfoot className='pagination'>Paginação 1 2 3</tfoot>
        </table>
    )
}

export default Tabela;