import { CalendarDays, Grip, KeyRound, Mail, Phone, UserPen } from "lucide-react"

function Profile() {
  return (
    <div className="px-16 h-screen flex-col justify-center items-center profile">
      <div className="w-full h-1/2 flex gap-5 mt-5 ">
        <div className="h-full border border-text border-opacity-50 rounded-sm w-1/3 px-2 py-1">
          <div className="py-1">
            <span className="text-xl capitalize tracking-wide font-semibold text-text"> username </span>
            <UserPen className="float-right" />
          </div>
          <h1 className="flex gap-4 py-2">
            <Mail />
            Email
          </h1>
          <h1 className="flex gap-4  py-2">
            <CalendarDays />
            DOB
          </h1>
          <h1 className="flex gap-4  py-2">
            <Phone />
            number
          </h1>
          <h1 className="flex gap-4  py-2">
            <Grip />
            preferences
          </h1>
          <h1 className="flex gap-4  py-2">
            <KeyRound />
            Change password
          </h1>
        </div>
        <div className="w-2/3 h-full border border-text  rounded-sm p-3">
          <h1 className="text-xl capitalize tracking-wide font-semibold text-text"> liked articles </h1>
        </div>
      </div>
      <div className="border border-text w-full h-[300px] mt-5 p-3">
        <h1 className="text-xl capitalize tracking-wide font-semibold text-text">
          Your articles
          <button className="float-right button-4"> create article</button>
        </h1>
      </div>
    </div>
  )
}

export default Profile