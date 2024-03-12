// import { generalMetadata } from "@/app/shared-metadata";
import Dashboard from "@/components/dashboard";
// import { ContactInfoModel } from "@/components/contact-info";

// export const metadata: Metadata = {
//   ...generalMetadata("Dashboard", "noindex, nofollow", "/dashboard"),
// };

export type ContactInfoModel = {
  id: number;
  attributes: {
    title: string;
    description: string;
    customer_service_url: string;
    customer_service_phone: string;
    location_url: string;
  };
};

export default function Page() {
  // const companyInfo: ContactInfoModel = {
  //   id: 1,
  //   attributes: {
  //     title: "",
  //     description: "",
  //     customer_service_url: "",
  //     customer_service_phone: "(888) 336-6100",
  //     location_url: "",
  //   },
  // };

  return <Dashboard></Dashboard>;
}
