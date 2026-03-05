import { AudioLinesIcon } from "./animate-ui/icons/audio-lines";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <AudioLinesIcon animate className="size-8 text-primary" />{" "}
      <span className="bg-linear-to-r bg-primary-foreground from-primary bg-clip-text font-bold text-2xl text-transparent">
        Resonix.
      </span>
    </div>
  );
};

export default Logo;
