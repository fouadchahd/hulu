import { useRouter } from "next/router";
function HeaderItem({ title, Icon }) {
  const router = useRouter();
  const goToProfile = () => {
    router.push("/account");
  };
  return (
    <div
      onClick={goToProfile}
      className="flex flex-col items-center cursor-pointer group w-12 hover:text-white sm:wd-20"
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
