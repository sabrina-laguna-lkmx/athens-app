import iconChecked from "@/assets/images/icon-radio-checked-green.svg";
import Image from "next/image";

type SuccessfullProps = {
  message?: string;
  error?: string;
};

export default function Successfull({ message, error }: SuccessfullProps) {
  return (
    <>
      {!error && (
        <div className="w-full bg-light-green">
          <div className="flex items-center gap-2 font-sans text-sm font-semibold">
            <Image src={iconChecked} alt="Successfull" />
            {!message && (
              <p className="text-dark-green">Changes saved successfully</p>
            )}
            {message && <p className="text-dark-green">{message}</p>}
          </div>
        </div>
      )}
      {error && (
        <div className="w-full bg-slate">
          <div className="flex items-center gap-2 font-sans text-sm font-semibold">
            <Image src={iconChecked} alt="Warning" />
            <p className="text-white">{error}</p>
          </div>
        </div>
      )}
    </>
  );
}
