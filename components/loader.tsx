import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <div className="text-sm text-muted-foreground">DeepAI is thinking...</div>
    </div>
  );
};

export default Loader;
