export interface Member {
  name: string;
  title: string;
  img: string;
}

export interface TeamProps {
  team: {
    title: string;
    members: Member[];
  };
}
const Team = ({ team }: TeamProps) => {
  return (
    <section className="bg-gray-200 py-24">
      <div className="container mx-auto px-8 lg:px-32">
        <h2 className="text-center font-bold text-4xl lg:text-5xl mb-12">
          {team.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.members.map((member, index) => {
            const { name, title, img } = member;
            return (
              <article
                key={index}
                className="mx-auto p-4 bg-white transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <img src={img} alt={name} className="h-[500px] w-full" />
                <h4 className="font-semibold text-xl mt-2">{name}</h4>
                <p className="text-gray-800 font-thin text-sm">{title}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
