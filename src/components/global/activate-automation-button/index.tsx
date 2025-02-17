import { Button } from "@/components/ui/button";
import Loader from "../loader";
import { ActiveAutomation } from "@/icons/active-automation";


export default function ActivateAutomationButton({id}:{id:string}){
    return <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4">
            <Loader state={false}>
                <ActiveAutomation/>
                <p className="lg:inline hidden">Activate</p>
            </Loader>
    </Button>
}