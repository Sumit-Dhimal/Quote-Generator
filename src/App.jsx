import QuoteGenerator from "./QuoteGenerator"

function App() {


  return (
    <div className="min-h-screen h-full bg-purple-800
                    flex items-center justify-center">

      <div className="bg-gray-50 min-h-[90%] h-[500px] min-w-[50%] max-w-[50%] p-10 border-none rounded-2xl"> 
        <QuoteGenerator />
      </div>
    </div>
  )
}

export default App
