import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
const Account = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      <a onClick={() => router.back()}>
        <ArrowCircleLeftIcon className="h-20 w-20 cursor-pointer text-green-400" />
      </a>
      <h1 className="text-3xl flex justify-center">Fouad EL HAMRI</h1>
    </div>
  );
};

export default Account;
