import { OrganizationList } from "@clerk/nextjs";

export default function OrgSelectionPage() {
  return (
    <OrganizationList
      afterCreateOrganizationUrl="/"
      afterSelectOrganizationUrl="/"
      appearance={{ elements: { card: "shadow-lg" } }}
      hidePersonal
    />
  );
}
