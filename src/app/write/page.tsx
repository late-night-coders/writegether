"use client"
import { Paper, TextField} from "@mui/material"
import {
  Controller,
  useForm
} from 'react-hook-form'

export default async function WritePage() {
  const { control, onSubmit } = useForm()
  return (
    <main>
      <form>
          <Controller
            name="title"
            control={control}
            render={({ field }) => <TextField {...field} /> }
          />
          <Controller
            name="openingSegment"
            control={control}
            render={({ field }) => <TextField {...field} multiline  /> }
          />


      </form>

    </main>
  )
}
