export default function BlueContent({ h2Title, children }) {
  return (
    <section className="mx-auto py-16 w-full my-2 lg:my-16 px-4 text-center gradientPrimaryLD">
      <h2>{h2Title}</h2>
      <div className="mx-auto p-4 md:px-8 rounded-xl max-w-4xl  gradientPrimaryLD">
        {children}
      </div>
    </section>
  );
}
