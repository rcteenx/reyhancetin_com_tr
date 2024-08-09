import PageInfo from "@/components/templates/pageInfo";
import BlueContent from "@/components/templates/blueContent";
import SubMenu from "@/components/sections/common/sub-menu";
import SocialMedia from "@/components/sections/common/z-social-media";

export default function StaticPage() {
  return (
    <>
      <PageInfo id="3" />
      <BlueContent h2Title="Farklı Koçluk Türleri">
        <p>Hocalar, moderatörler... vs.</p>
        <p>
          İnsan, bir kısmı fiziksel ve gözlemlenebilir bir kısmı da aşkın
          (deneyüstü) olmak üzere iki farklı bölümden oluşur. Her ikisinin
          arasında da, bilinç diyebileceğimiz bir ara katman bulunur.
        </p>
        <h3>Yaşam Koçluğu</h3>
        <p>
          Öz ve kişilik, dışardan gözlemlenebilir iki önemli parçamız. Öz,
          doğuştan gelen temel özelliklerimiz, kişilik ise sonradan öğrenme ve
          çevre ile kazanılan bölümler.
        </p>
        <p>
          Özü, içimizdeki çocuk olarak görebiliriz. Bir anlamda hala 5-6
          yaşlarında. Dünyayı eğlence olarak algılıyor. Zaman ve sorumluluk
          algısı olmadan, anı yaşıyor.
        </p>
        <p>
          Kişilik sonradan yüklenen bölümümüz; ancak bir kısmı hayali (sahte)
          bir kısmı gerçek olmak üzere iki farklı yapıda. Hayali kişiliğimiz
          olduğumuzu sandığımız, ama olmadığımız bir kimlik. Gerçek olan ise,
          sorumluluk sahibi, sürekli hesap kitap peşinde ve dünyayı sırtında
          taşıyan bir ebeveyn.
        </p>
        <h3>Kariyer Koçluğu</h3>
        <p>
          Bu tarafımızla tanışmak ve anlamak için, olağan algı ve bakış açımızın
          sınırlarının ötesine geçmemiz gerekiyor. Modern bilim, fiziki
          bölümlerimizi çalıştığı halde, ötesine geçemez. Bilimsel bakış açısı,
          deney, gözlem ve ölçme gibi, pek çok aracını kaybettiği bir alandan
          uzak durarak kendisini koruyabilir.
        </p>
        <p>
          Diğer taraftan, ancak bu sınırı güvenli biçimde aşıp, bilinmez
          diyarlarda yol alabilirsek, kendimizin diğer yarısını ya da kaynağı
          bulmak mümkün olabilir. Bilim ve mantık gibi, bizi yanılsamalardan
          koruyan sağlam araçlar olmadan yolumuzu bulmak pek kolay değil. Meta
          Rehber, özellikle böylesi bir gezintiye sizleri hazırlamaya çalışıyor.
        </p>
        <h3>Yönetici Koçluğu</h3>
        <p>
          Bilinç ve farkındalık (aşkın benlik) olağan gerçekliğin ötesindeki iki
          ana parçamız. Bilinç dünya ile ilgili etkileşimde, ancak saf
          farkındalık sadece hiçliğin ortasında aşkın bir ben hissi.
        </p>
        <h3>Performans Koçluğu</h3>
      </BlueContent>
      <SubMenu />
      <SocialMedia />
    </>
  );
}
