// src/hooks/useFacebookPixel.ts
import { useEffect } from "react";

const PIXEL_IDS = ["586972862820606", "1235272225360337"];

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

export function useFacebookPixel(event?: string, data?: any) {
  useEffect(() => {

    if (!window.fbq) {
      (function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js", null, null, null);
    }

    PIXEL_IDS.forEach((id) => window.fbq("init", id));

    if (event) {
      window.fbq("track", event, data);
    } else {
      window.fbq("track", "PageView");
    }

  }, [event, data]);
}