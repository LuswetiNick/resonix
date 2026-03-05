import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import Logo from "@/components/logo";

export default function Marketing() {
  return (
    <h1>
      <Logo />
      <ThemeTogglerButton suppressHydrationWarning variant="outline" />
    </h1>
  );
}
