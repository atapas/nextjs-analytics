import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

const sendAnalytics = ({ name, value }) => {
    if (process.env.NEXT_PUBLIC_SEND_ANALYTICS) {
        const url = `https://qckm.io?m=${name}&v=${value}&k=${process.env.NEXT_PUBLIC_QUICK_METRICS_API_KEY}`;
  
        // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
        if (navigator.sendBeacon) {
            navigator.sendBeacon(url);
        } else {
        fetch(url, { method: "POST", keepalive: true });
        }
    } else {
        console.warn('The Analytcs feature is disabled');
    }
    
};

export function reportWebVitals(metric) {
    switch (metric.name) {
      case 'FCP':
        // handle FCP results
        sendAnalytics(metric);
        break
      case 'LCP':
        sendAnalytics(metric);
        break
      case 'CLS':
        sendAnalytics(metric);
        break
      case 'FID':
        sendAnalytics(metric);
        break
      case 'TTFB':
        sendAnalytics(metric);
        break
      case 'Next.js-hydration':
        sendAnalytics(metric);
        break
      case 'Next.js-route-change-to-render':
        sendAnalytics(metric);
        break
      case 'Next.js-render':
        sendAnalytics(metric);
        break
      default:
        break
    }
}