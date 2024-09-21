"use client"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import type { StoryData } from "@/app/create/page"

const StoryCreationForm = ({
  onPostAction
}: {
  onPostAction: (data: StoryData) => Promise<void>
}) => {
  const onSubmitHandler = (data: StoryData) => {
    onPostAction(data)
  }
  const form = useForm({
    defaultValues: {
      title: '',
      openingSegment: ''
    }
  })
  return <main>
    <Form {...form} >
      <form className="flex flex-row space-x-24" onSubmit={form.handleSubmit(onSubmitHandler)}>
        <div className="flex-grow space-y-10">
          <h1 className='text-4xl font-bold'> Create a story </h1>
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
                  <Textarea {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="w-1/4 space-y-4 ">
          <div className="w-full aspect-w-1 aspect-h-1">
            <Button className="w-full h-full cursor-pointer border-2 border-dashed border-neon-yellow-600 bg-neon-yellow-100 rounded text-black hover:bg-neon-yellow-200">
              Upload Image
            </Button>
          </div>
          <Button className="bg-neon-yellow-600 w-full hover:bg-neon-yellow-800 text-white "> POST </Button>
        </div>
      </form>
    </Form>
  </main>


}

export default StoryCreationForm