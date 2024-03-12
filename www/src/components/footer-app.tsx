"use client";

import facebookIcon from "@/assets/images/icon-facebook.svg";
import instagramIcon from "@/assets/images/icon-instagram.svg";
import linkedinIcon from "@/assets/images/icon-linkedin.svg";
import xIcon from "@/assets/images/icon-x.svg";
import youtubeIcon from "@/assets/images/icon-youtube.svg";
import Image from "next/image";

type FooterProps = {
  model: FooterNav[];
  companyInfo: CompanyInfo;
};

type FooterNav = {
  id: number;
  title: string;
  simple_links: FooterLink[];
};

type FooterLink = {
  id: number;
  label: string;
  url: string;
};

type CompanyInfo = {
  facebook_url: string;
  instagram_url: string;
  x_url: string;
  linkedin_url: string;
  youtube_url: string;
  company_logo_vector: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};

export default function FooterApp({ model, companyInfo }: FooterProps) {
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  const currentYear = getCurrentYear();

  return (
    <footer className="fixed bottom-0 w-full border-t-4 border-athens bg-slate-dark pb-10 pt-10 text-white">
      <div className="container grid grid-cols-[1fr,1fr] gap-x-28">
        <div className="text-gray-400">
          © {currentYear} Athens Services. All rights reserved.
        </div>
        <div className="grid justify-end">
          <div className="flex gap-6">
            <a target="_blank" href={companyInfo?.facebook_url}>
              <Image src={facebookIcon} alt="Facebook Icon" />
            </a>
            <a target="_blank" href={companyInfo?.instagram_url}>
              <Image src={instagramIcon} alt="Instagram Icon" />
            </a>
            <a target="_blank" href={companyInfo?.x_url}>
              <Image src={xIcon} alt="X Icon" />
            </a>
            <a target="_blank" href={companyInfo?.linkedin_url}>
              <Image src={linkedinIcon} alt="Linkedin Icon" />
            </a>
            <a target="_blank" href={companyInfo?.youtube_url}>
              <Image src={youtubeIcon} alt="Youtube Icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
