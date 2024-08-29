"use client"
import { useForm, Controller } from "react-hook-form"
import { TextField } from "@mui/material"

const Form = () => {
  const { handleSubmit, control } = useForm()
  const onSubmit = () => {
    // post the data.
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
      />

      <Controller
        name="content"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Content"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
        )}
      />
    </form>
  )
}

export default Form
