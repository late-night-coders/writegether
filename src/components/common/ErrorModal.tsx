import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { Cross2Icon } from "@radix-ui/react-icons"
import { AlertCircle } from "lucide-react"
import { useState } from "react"
const ErrorModal = ({
  onClose
}: any) => {
  return <Alert className='w-fit flex space-x-2 p-6' aria-activedescendant="" variant={"destructive"}>
    <AlertCircle />
    <div>
      <AlertTitle> Missing fields! </AlertTitle>
      <AlertDescription> Please fill in the required fields.</AlertDescription>
    </div>
    <Cross2Icon className="top-2 right-2 absolute" onClick={onClose}/>
  </Alert>
}

export default ErrorModal