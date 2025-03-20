export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="grid h-4 w-4 grid-cols-2 grid-rows-2 gap-0.5">
          <div className="rounded-sm bg-white"></div>
          <div className="rounded-sm bg-white"></div>
          <div className="rounded-sm bg-white"></div>
          <div className="rounded-sm bg-white"></div>
        </div>
      </div>
      <span className="text-transparent bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-lg font-bold uppercase tracking-wide">
        Hashcode
      </span>
    </div>
  )
}
