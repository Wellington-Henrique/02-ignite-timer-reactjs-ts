import { Play } from 'phosphor-react'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  function handleSubmit() {}

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            name="task"
            list="task-sugestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-sugestions">
            <option value="Teste1">Teste1</option>
            <option value="Teste2">Teste2</option>
            <option value="Teste3">Teste3</option>
          </datalist>

          <label htmlFor="minutesAmount"></label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00:00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
