import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }, (_, index) => (
              <tr key={index + 1}>
                <td>Tarefa {index + 1}</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>Concluído</td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
