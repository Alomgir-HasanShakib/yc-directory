import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Shakib" },
      _id: 1,
      description: "This is Description",
      image:
        "https://media.wired.com/photos/65b0438c22aa647640de5c75/191:100/w_1280,c_limit/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623.jpg",
      category: "Keyboard",
      title: "Mechanical Keyboard",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pith your startup <br /> connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competition.
        </p>
        <SearchForm query={query} />
      </section>

      {/* all startups card section start here  */}

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
