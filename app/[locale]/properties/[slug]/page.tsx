import { notFound } from 'next/navigation';
import { properties } from '@/data/properties';
import Link from 'next/link';
import Image from 'next/image';
import { PageWrapper } from '@/components/PageWrapper';

export default async function PropertyDetail({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <PageWrapper>
      <main>
        <section>
          <div className="bg-[#f4f1ec]  py-20 pt-32 px-6">
            <div className="max-w-7xl mx-auto px-6">
              {/* Back */}
              <Link
                href="/properties"
                className="text-sm text-gray-500 mb-8 block"
              >
                ← Back
              </Link>

              {/* Gallery */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="relative md:col-span-2 h-[420px]">
                  <Image
                    //   src={property.image}
                    src="/frame.jpeg"
                    alt={property.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                <div className="grid gap-6">
                  <div className="relative h-[200px]">
                    <Image
                      // src={property.image}
                      src="/frame.jpeg"
                      alt=""
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="relative h-[200px]">
                    <Image
                      // src={property.image}

                      src="/frame.jpeg"
                      alt=""
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h1 className="text-3xl font-semibold mb-4">
                    {property.title}
                  </h1>

                  <p className="text-gray-500 mb-4">{property.location}</p>

                  <p className="text-gray-600">{property.description}</p>
                </div>

                {/* Overview */}
                <div>
                  <h3 className="font-semibold mb-4">Property Overview</h3>

                  <ul className="space-y-3 text-sm text-gray-600">
                    <li>• Modern commercial centre</li>
                    <li>• Premium location</li>
                    <li>• High-quality construction</li>
                    <li>• Investment opportunity</li>
                  </ul>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="font-semibold mb-6">Specifications</h3>

                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b pb-2">
                      <span>Property Type</span>
                      <span>Commercial</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Status</span>
                      <span>{property.status}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Total Units</span>
                      <span>40 Offices</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Built-up Area</span>
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="font-semibold mb-6">Amenities & Facilities</h3>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {['Security', 'Parking', 'Elevator', 'Gym'].map((item) => (
                      <div
                        key={item}
                        className="border p-4 rounded-md text-center bg-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mb-16">
                <h3 className="font-semibold mb-6">Location Advantage</h3>
                <div className="h-[300px] rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Contact Section */}
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">
                    Begin your journey with NAYAN
                  </h2>

                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-3 border rounded-md"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 border rounded-md"
                    />
                    <textarea
                      placeholder="Message"
                      className="w-full p-3 border rounded-md"
                    />
                    <button className="bg-[#c69c5d] text-white px-6 py-3 rounded-md">
                      Send Message
                    </button>
                  </form>
                </div>

                <div className="relative h-[350px]">
                  <Image
                    //   src={property.image}

                    src="/frame.jpeg"
                    alt=""
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Got questions? We’ve got answers!
                </h2>

                <div className="space-y-4">
                  <details className="bg-white p-4 rounded-md">
                    <summary className="cursor-pointer font-medium">
                      Is the project suitable for investment?
                    </summary>
                    <p className="mt-2 text-sm text-gray-600">
                      Yes, the project is designed with long-term value in mind.
                    </p>
                  </details>

                  <details className="bg-white p-4 rounded-md">
                    <summary className="cursor-pointer font-medium">
                      How can I book a visit?
                    </summary>
                    <p className="mt-2 text-sm text-gray-600">
                      Contact us via the form above.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
