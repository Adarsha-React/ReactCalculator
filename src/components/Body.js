import Section from "./Section";

const Body = () => {
  return (
    <div>
      <Section
        title={"About"}
        description={"This section is for About website"}
      />
      <Section title={"Cricket"} description={"This section is for Cricket"} />
      <Section title={"Kabadi"} description={"This section is for Kabadi"} />
    </div>
  );
};

export default Body;
