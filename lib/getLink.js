import { SitePages } from "@/content/data/sitePages";

export function getLink(id) {
  let lnk = "";

  if (SitePages.filter((sp) => sp.id == id)[0].pid === 0) {
    lnk += "/";
  }

  if (SitePages.filter((sp) => sp.id == id)[0].pid != 0) {
    lnk += getLink(SitePages.filter((sp) => sp.id == id)[0].pid) + "/";
  }

  lnk += SitePages.filter((sp) => sp.id == id)[0].link;
  // SitePages.filter((sp) => sp.id == id)[0].link;

  return lnk;
}

export function getLongTitle(id) {
  return SitePages.filter((sp) => sp.id == id)[0].titleLong;
}
