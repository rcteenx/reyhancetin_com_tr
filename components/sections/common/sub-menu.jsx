import IconComponent from "@/components/ui/IconComponent";

export default function SubMenu() {
  return (
    <section className="mx-auto my-4 px-8 py-16 text-center gradientAccent">
      <h2 className="md:text-6xl lg:text-8xl ">BİZ'im Katmanları</h2>

      <div className="mx-auto p-4 md:px-8 rounded-xl max-w-4xl  gradientAccent ">
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4   text-xs ">
          <li>
            <h3>KİŞİLİK</h3>
            <p>
              Sonradan, eğitim ve kültürle bize yüklenen yapılar - karakter.
            </p>
          </li>
          <li>
            <h3>ÖZ</h3>
            <p>Doğuştan gelen özellikler - Mizaç.</p>
          </li>
          <li>
            <h3>BİLİNÇ</h3>
            <p>Dünyada bir şeyleri yönetmezi sağlayan taraf.</p>
          </li>
          <li>
            <h3>FARKINDALIK</h3>
            <p>Dünyada bir şeyleri yönetmezi sağlayan taraf.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
