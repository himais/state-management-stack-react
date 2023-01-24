import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <h3>Index page 🥳</h3>

      <Link href="/hospitals" legacyBehavior>
        Main Hospitals Page
      </Link>
      <br />
      <Link href="/other-hospitals" legacyBehavior>
        Other Hospitals Page
      </Link>
    </div>
  );
}
