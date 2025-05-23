const incentives = [
  {
    name: "Expertise",
    imageSrc: "/icons/lawyer-1.svg",
    description:
      "Expertise in various areas of law, allowing clients to receive comprehensive service",
  },
  {
    name: "Individual approach",
    imageSrc: "/icons/lawyer-2.svg",
    description:
      "We apply an individual approach to the specific needs of each client.",
  },
  {
    name: "Long-term partnerships",
    imageSrc: "/icons/lawyer-3.svg",
    description:
      "We build long-term partnerships based on trust and professionalism.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Mission and principles
              </h2>
              <p className="mt-4 text-white">
                We believe that trust is the foundation of a successful
                business. The longtime partnerships are our most valuable asset.
                With a professional attitude and detailed acquaintance with the
                needs of our customers, we strive to provide them with legal
                certainty.
              </p>
              <p className="mt-4 text-white">
                We support teamwork. We combine knowledge and our personal
                experience and consider each case from variety of aspects, thus
                providing our clients with accurate and practical solutions.
              </p>
            </div>
            <img
              alt=""
              src="/incentives-hero-image.jpg"
              className="aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#95161C]">
                    <img
                      alt=""
                      src={incentive.imageSrc}
                      className="h-6 w-6"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-white">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-white">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
