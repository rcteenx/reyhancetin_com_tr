export default function BlueContent({ h2Title, children }) {
  return (
    <section className="mx-auto my-2 lg:my-16 px-4 max-w-4xl text-center ">
      <div className="p-4 md:px-8 rounded-xl gradientPrimaryLD">
        <h2>{h2Title}</h2>
        {children}
      </div>
    </section>
  );
}
