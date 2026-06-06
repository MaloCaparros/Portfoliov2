function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-grey">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-4 border-yellow border-t-transparent animate-spin" />
        <p className="font-nunito text-grey text-sm">Chargement...</p>
      </div>
    </div>
  );
}

export default PageLoader;
