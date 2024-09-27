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
      title: "",
      openingSegment: ""
    }
  })
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
                  <Textarea {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex flex-col lg:w-1/4 space-y-4">
          <div className="w-full lg:aspect-w-1 lg:aspect-h-1">
            <Button className="w-full h-full min-h-[100px] flex flex-col cursor-pointer border-2 border-dashed border-neon-yellow-600 bg-background lg:bg-neon-yellow-100 rounded text-black hover:bg-neon-yellow-200">
              <img src="/icons/photo.svg" width={40} alt="Upload cover photo" />
              <p>Upload Cover Photo</p>
            </Button>
          </div>
          <Button className="bg-neon-yellow-600 w-full hover:bg-neon-yellow-800 text-white ">
            {" "}
            POST{" "}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default StoryCreationForm
