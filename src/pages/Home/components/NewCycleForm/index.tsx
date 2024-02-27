import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

const newFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O cliclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O cliclo precisa ser de no máximo 60 minutos'),
})

type NewClicleFormData = zod.infer<typeof newFormValidationSchema>

export function NewCycleForm() {
  // const { register, handleSubmit, watch, reset } = useForm<NewClicleFormData>({
  //   resolver: zodResolver(newFormValidationSchema),
  //   defaultValues: { task: '', minutesAmount: 0 },
  // })

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-sugestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
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
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
