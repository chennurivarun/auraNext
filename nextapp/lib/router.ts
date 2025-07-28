import Link from 'next/link';
import { useRouter, useSearchParams, usePathname, useParams } from 'next/navigation';

export { Link, useSearchParams, usePathname, useParams };

export function useNavigate() {
  const router = useRouter();
  return (path: string) => router.push(path);
}
