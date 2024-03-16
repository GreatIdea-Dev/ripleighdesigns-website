import Image from "next/image";

export default function Logo() {
  return (
    <picture className="w-full h-full">
      <img
        src="/logo.jpeg"
        alt="ripleigh-designs-logo"
        className="w-full h-full rounded-full"
      />
    </picture>
  );
}
