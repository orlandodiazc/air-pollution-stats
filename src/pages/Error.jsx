export default function Error() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <h1 className="font-bold text-xl text-slate-200">This Page Does Not Exist</h1>
      <button
        type="button"
        className="bg-green-700 border border-slate-200 px-4 py-2 rounded-md hover:bg-opacity-90"
      >
        <a href="/">Go Back Home</a>
      </button>
    </div>
  );
}
