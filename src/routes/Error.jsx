import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex h-screen w-full justify-center items-center flex-col gap-2">
      <h1 className="text-center text-red-500 text-4xl">Error!</h1>
      <p className="text-2xl">You've got an error!</p>
      <p>
        <i className="bg-red-600 text-white p-2 mt-2 block rounded font-bold">{`${error.status} ${error.statusText} `}</i>
      </p>
    </div>
  );
}  