interface IHeadingProps {
  title: string;
  tophat: string;
  blurb: string;
}
export default function Heading({ title, tophat, blurb }: IHeadingProps) {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          {tophat}
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{blurb}</p>
      </div>
    </div>
  );
}
