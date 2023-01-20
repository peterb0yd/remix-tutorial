import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import marketingStyles from "~/styles/marketing.css";

export default function MarketingAppLayout() {
  return (
    <>
        <MainHeader />
        <Outlet />
    </>
  )
}

export const links = () => [
  { rel: "stylesheet", href: marketingStyles },
]