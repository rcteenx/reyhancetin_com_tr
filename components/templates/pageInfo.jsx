import Link from "next/link";

import { StaticPages } from "@/content/data/siteMetaData";

import IconComponent from "@/components/ui/IconComponent";

export default function PageInfo({ id }) {
  const menu = StaticPages.filter((m) => m.id == id);
  return (
    <section className=" lg:pb-4">
      <div className="mx-auto container flex flex-col lg:flex-row">
        <div id="pgSticker">
          <div className="mx-auto px-4 pb-2 lg:max-w-sm shadow-xl">
            <h2>{menu[0].titleLong}</h2>
            <div>
              <p>{menu[0].description}</p>
              <div className="my-4 flex justify-around items-center gap-0 border rounded-xl">
                <div id="subMenu">
                  <h3>İlgili Sayfalar</h3>
                  <ul>
                    {menu[0].pages.map((p) => (
                      <li key={p.id}>
                        <Link href={`/${menu[0].link}/${p.link}`}>
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pgHeader">
          <h1>{menu[0].h1}</h1>
          {menu[0].par.map((px, index) => (
            <p key={index}>{px}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
