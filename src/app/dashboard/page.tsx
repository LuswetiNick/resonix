import { UserButton } from "@clerk/nextjs";

export default function DashbaordPage() {
  return (
    <div>
      <h1>Welcome to Resonix dashboard</h1>
      <UserButton />
    </div>
  );
}
