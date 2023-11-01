import Layout from "@/components/Layots/RootLayot";
import UserLayot from "@/components/Layots/UserDashbordLayot.tsx/UserLayot";
import Usedashbord from "@/components/UserDashboard/usedashbord";

export default function Dashboard({ Component, pageProps }: any) {
  return (
    <UserLayot>
      <Usedashbord></Usedashbord>
    </UserLayot>
  );
}

Dashboard.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
