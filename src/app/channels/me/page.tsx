import AddServer from "@/app/components/AddServer";
import SideBar from "@/app/components/SideBar";
import DetailBar from "@/app/components/DetailBar";
import MainBar from "@/app/components/MainBar";
import MainBase from "@/app/components/MainBase";

const me = () => {
    return (
        <div>
            <AddServer />
            <SideBar />
            <MainBase />
        </div>
    )
}

export default me;
