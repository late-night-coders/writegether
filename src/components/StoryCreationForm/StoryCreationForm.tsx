"use client"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel, FormControl } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import type { StoryData } from "@/app/create/page"
import StorySettingsBar from "./StorySettingsBar"
import schema from './schema'
import ErrorModal from "../common/ErrorModal"

type StorySchema = z.infer<typeof schema>

const StoryCreationForm = ({
  onPostAction
}: {
  onPostAction: (data: StoryData) => Promise<void>
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const form = useForm<StorySchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      openingSegment: ""
    }
  })

  const onSubmitHandler = async (data: StorySchema) => {
    setIsLoading(true)
    try {
      await onPostAction(data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
   if (Object.keys(form.formState.errors).length > 0) {
    setIsModalOpen(true)
   }
  }, [form.formState.errors])

  return (
    <Form {...form}>
      <h1 className="text-lg lg:text-4xl font-bold mb-12"> Create a story </h1>
      <form
        className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-24"
        onSubmit={form.handleSubmit(onSubmitHandler)}
      >
        <div className="flex-grow space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title of your story" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="openingSegment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Opening segment</FormLabel>
                <FormControl>
                  <Textarea placeholder="The first segment of your story. This is where your journey begins..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex flex-col lg:w-1/4 space-y-4">
          <StorySettingsBar isLoading={isLoading} />
        </div>
      </form>
      {isModalOpen && <ErrorModal onClose={() => setIsModalOpen(false)} />}
    </Form>
  )
}

export default StoryCreationForm
