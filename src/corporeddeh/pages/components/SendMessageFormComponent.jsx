import { Button, Grid, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { TextInput } from '../../../ui/FormComponents/TextInput'
import { sendCustomMailer } from '../../../backend/firebase/sendCustomMailer'
import Swal from 'sweetalert2'

export const SendMessageForm = () => {
  const { control, handleSubmit, reset } = useForm()
  const onSubmit = async (data) => {
    const { username, useremail, emailsubject, userrequire } = data
    const { status } = await sendCustomMailer(useremail, emailsubject, `${userrequire}`, username)
    if (status === 'success') {
      Swal.fire({
        title: `Su mensaje ha sido enviado correctamente, pronto nos pondremos en contacto con usted al correo ${useremail}`,
        icon: 'success'
      })
      reset()
    } else {
      Swal.fire({
        title: 'No se pudo enviar el mensaje, intentelo de nuevo.',
        icon: 'error'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ flexGrow: 1, minWidth: '320px' }}>
      <Grid container sx={{ justifyContent: 'center', flexDirection: 'column', padding: '10px' }}>

        <Typography variant='h5' sx={{ justifySelf: 'center' }}>Escríbenos</Typography>
        <Controller
          name='username'
          control={control}
          rules={{ required: true }}
          defaultValue=''
          render={({ field, formState }) => <TextInput
            value={field.value}
            label='Nombre'
            onInputChange={field.onChange}
            error={formState.errors.username}
          />}
        />
        <Controller
          name='useremail'
          control={control}
          rules={{ required: true }}
          defaultValue=''
          render={({ field, formState }) => <TextInput
            type='email'
            value={field.value}
            label='Correo'
            onInputChange={field.onChange}
            error={formState.errors.useremail}
          />}
        />

        <Controller
          name='emailsubject'
          control={control}
          rules={{ required: true }}
          defaultValue=''
          render={({ field, formState }) => <TextInput
            value={field.value}
            label='Asunto'
            onInputChange={field.onChange}
            error={formState.errors.emailsubject}
          />}
        />

        <Controller
          name='userrequire'
          control={control}
          rules={{ required: true }}
          defaultValue=''
          render={({ field, formState }) => <TextInput
            value={field.value}
            label='Consulta'
            onInputChange={field.onChange}
            error={formState.errors.userrequire}
            multilinea
          />}
        />
        <Button variant='contained' sx={{ mt: '50px', float: 'right' }} color='secondary' type='submit'>Enviar</Button>

      </Grid>
    </form>
  )
}
