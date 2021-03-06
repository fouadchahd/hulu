import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";
import { useRouter } from "next/router";
// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef((props, ref) => {
  const result = props.result;
  const router = useRouter();
  const tmdbEndpoint = "https://www.themoviedb.org/t/p/w1280";
  const goToMovie = () => {
    router.push(`/movies/${result.id}`);
  };
  return (
    <div
      onClick={goToMovie}
      ref={ref}
      className={
        "group cursor-pointer p-2 transition duration-200 ease-in transform s:hover:scale-105 hover:z-50"
      }
    >
      <Image
        layout="responsive"
        height="1080"
        width="1920"
        alt={result.overview}
        src={
          `${tmdbEndpoint}${result.backdrop_path || result.poster_path}` ||
          `${tmdbEndpoint}${result.poster_path}`
        }
      />
      <div className="-translate-y-24 bg-gradient-to-b from-transparent px-2 to-gray-800	py-2">
        <h2 className="truncate max-w-md mt-1 text-2xl text-white group-hover:text-green-100 transition-all duration-100 ease-in-out  group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="truncate max-w-md">{result.overview}</p>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || `${result.first_air_date} •`}{" "}
          <ThumbUpIcon className="h-5 mx-2 text-green-600" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});
export default Thumbnail;
