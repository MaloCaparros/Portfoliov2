function PageLoader() {
  return (
    <div className="min-h-screen bg-light-grey px-10 pt-28 animate-pulse">
      <div className="h-9 bg-gray-200 rounded-lg w-56 mb-10" />
      <div className="flex flex-col gap-3 max-w-lg">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/5" />
      </div>
    </div>
  );
}

export default PageLoader;
