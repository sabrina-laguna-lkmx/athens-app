import iconWarningYellow from "@/assets/images/icon-warnign-yellow.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ReturnPageProps = {
  onClose: () => void;
};

const ReturnPage: React.FC<ReturnPageProps> = ({ onClose }) => {
  const route = useRouter();

  function onReturnSettings() {
    route.push("/dashboard");
  }

  return (
    <div className="container fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <main className="container flex flex-col gap-3 rounded-md bg-white py-4 shadow">
        <div className="flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white-yellow">
            <Image src={iconWarningYellow} alt="Advertence" />
          </div>
        </div>
        <div className="flex flex-col text-center text-slate">
          <h3 className="text-xl font-bold">Unsaved Changes</h3>
          <p className="font-sans text-sm font-normal">
            Are you sure you want to return without saving?
          </p>
        </div>
        <div className="mb-3 flex flex-col gap-3 font-sans text-base font-bold">
          <button
            type="button"
            className="rounded-md border border-athens bg-athens px-4 py-2 text-white"
            onClick={onReturnSettings}
          >
            Return Without saving?
          </button>
          <button
            className="rounded-md border border-dark-blue px-4 py-2 text-dark-blue"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </main>
    </div>
  );
};

export default ReturnPage;
