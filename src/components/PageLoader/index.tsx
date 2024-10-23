import SmallLoader from "@/components/UI/SmallLoader";

export default function PageLoader() {
  return (
    <div className="flex h-[calc(100vh-72px)] w-full items-center justify-center">
      <SmallLoader />
    </div>
  );
}
