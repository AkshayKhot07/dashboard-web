import Link from "next/link";
import { useRouter } from "next/navigation";

const SidebarMobile = ({
  setToggleNav,
}: {
  setToggleNav: (value: boolean) => void;
}) => {
  const router = useRouter();

  const handleNavigation = (value: string) => {
    if (value === "dashboard") {
      router.push("/");
    } else if (value === "settings") {
      router.push("/settings");
    } else  if (value === "tickets") {
      router.push("/tickets");
    }
    setToggleNav(false);
  };

  return (
    <div className="flex flex-col bg-background-100">
      <div className="border border-text-100 p-2">
        <button type="button" onClick={()=> handleNavigation("dashboard")}>
          <p className="text-base font-semibold text-purple-100">Dashbaord</p>
        </button>
      </div>
      <div className="border border-text-100 p-2">
        <button type="button" onClick={()=> handleNavigation("settings")}>
          <p className="text-base font-semibold text-purple-100">Settings</p>
        </button>
      </div>
      <div className="border border-text-100 p-2">
        <button type="button" onClick={()=> handleNavigation("tickets")}>
          <p className="text-base font-semibold text-purple-100">Tickets</p>
        </button>
      </div>
    </div>
  );
};

export default SidebarMobile;
