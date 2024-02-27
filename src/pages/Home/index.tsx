import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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

const newFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O cliclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O cliclo precisa ser de no máximo 60 minutos'),
})

type NewClicleFormData = zod.infer<typeof newFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewClicleFormData>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: { task: '', minutesAmount: 0 },
  })

  function handleCreateNewCycle(data: NewClicleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-sugestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
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
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
