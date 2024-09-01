import AddServer from "@/app/components/AddServer";
import SideBar from "@/app/components/SideBar";
import DetailBar from "@/app/components/DetailBar";
import MainBar from "@/app/components/MainBar";

const me = () => {
    return (
        <div>
            <AddServer />
            <SideBar />
            <DetailBar />
            <MainBar />
        </div>
    )
}

export default me;
