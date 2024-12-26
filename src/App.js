import Header from "./components/Header"
import Card from "./components/card"
import Todocomponents from "./components/Todocomponents"

function App(){

return(
  <>
   <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
      <Header/>
      <div className="flex justify-between gap-5 my-5 flex-wrap">
      <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
      <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:03:34"}/>
      <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
      </div>
      <div>
        <Todocomponents/>
      </div>
     </div>
    </div>
  </>
)

}

export default App