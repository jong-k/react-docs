import Link from "next/link";

export default function Hooks() {
  return (
    <div>
      <Link href="/react/hooks/useContext">
        <h2 className="text-2xl">useContext</h2>
      </Link>
      <Link href="/react/hooks/useCallback">
        <h2 className="text-2xl">useCallback</h2>
      </Link>
      <Link href="/react/hooks/useDeferredValue">
        <h2 className="text-2xl">useDeferredValue</h2>
      </Link>
      <Link href="/react/hooks/useLayoutEffect">
        <h2 className="text-2xl">useLayoutEffect</h2>
      </Link>
    </div>
  );
}
