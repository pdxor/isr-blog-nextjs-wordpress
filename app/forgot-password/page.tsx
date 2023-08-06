import UnAuthContent from "../../components/UnAuthContent";
import SendPasswordResetEmailForm from "../../components/SendPasswordResetEmailForm";

export default function ForgotPassword() {
  return (
    <main className="bg-black">
<div className="py-8 px-4 sm:px-20 w-full sm:w-3/4 mx-auto">
      <UnAuthContent>
        <SendPasswordResetEmailForm />
      </UnAuthContent>
      </div>
      
    </main>
  )
}

