import Link from "next/link";

import { SitePages } from "@/content/data/sitePages";
import { getLink, getLongTitle } from "@/lib/getLink";

import IconComponent from "@/components/ui/IconComponent";

export default function PageInfo({ id, id2 }) {
  var page = SitePages.filter((m) => m.id == id)[0];

  var subMenu = "";
  if (page.relatedPage != undefined) {
    subMenu = (
      <div className="my-4 flex justify-around items-center gap-0 border rounded-xl gradientPrimaryLD">
        <div id="subMenu">
          <h3>İlgili Sayfalar</h3>
          <ul>
            {page.relatedPage.map((rp) => (
              <li key={rp}>
                <a href={`${getLink(rp)}`} title={`${getLongTitle(rp)}`}>
                  {SitePages.filter((sp) => sp.id == rp)[0].title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section className=" lg:pb-4">
      <div className="mx-auto container flex flex-col lg:flex-row">
        <div id="pgSticker">
          <div className="mx-auto px-4 pb-2 lg:max-w-sm shadow-xl">
            <h2>{page.titleLong}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: page.description,
              }}
            ></p>
            {subMenu}
            {/* <div>
              <p>{page.description}</p>
              {subMenu}
            </div> */}
          </div>
        </div>
        <div id="pgHeader">
          <h1>{page.h1}</h1>
          {page.par.map((px, index) => (
            <p key={index}>{px}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
