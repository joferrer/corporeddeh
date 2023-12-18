import { Button, Grid, Typography } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { TextInput } from "../../../ui/FormComponents/TextInput"

export const SendMessageForm = ()=>{

    const {control, handleSubmit} = useForm()
    const onSubmit = ()=>{
      console.log("Enviando...")
    }
  
    return <form onSubmit={handleSubmit(onSubmit)} style={{flexGrow:1,minWidth:"320px"}}> 
      <Grid container sx={{justifyContent:"center",flexDirection:"column", padding:"10px"}}> 
        
          <Typography variant="h5" sx={{justifySelf:"center"}}>Escribenos</Typography>
        <Controller 
          name="username"
          control={control}
          rules={{required: true}}
          defaultValue={""}
          render={({field, formState})=> <TextInput
            value={field.value}
            label={"Nombre"}
            onInputChange={field.onChange}
            error={formState.errors.username}
          />
  
        }
        />
        <Controller 
          name="useremail"
          control={control}
          rules={{required:true}}
          defaultValue={""}
          render={({field,formState})=><TextInput 
            type="email"
            value={field.value}
            label={"Correo"}
            onInputChange={field.onChange}
            error={formState.errors.useremail}
          />}
        />
  
  <Controller 
          name="emailsubject"
          control={control}
          rules={{required: true}}
          defaultValue={""}
          render={({field, formState})=> <TextInput
            value={field.value}
            label={"Asunto"}
            onInputChange={field.onChange}
            error={formState.errors.emailsubject}
          />
  
        }
        />
  
  <Controller 
          name="userrequire"
          control={control}
          rules={{required: true}}
          defaultValue={""}
          render={({field, formState})=> <TextInput
            value={field.value}
            label={"Consulta"}
            onInputChange={field.onChange}
            error={formState.errors.userrequire}
            multilinea={true}
          />
  
        }
        />
        <Button  variant="contained" sx={{mt:"50px" ,float:"right"}} color="secondary" type="submit">Enviar</Button>
        
    </Grid>
    </form>
    
    
  }