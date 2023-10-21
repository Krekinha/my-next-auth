export default function sendLog(message: string, url: string = window.location.href, anexo?: string) {
    fetch("/api/log", {
        method: "POST",
        body: JSON.stringify({
          message: message,
          url: url,
          amb: process.env.NODE_ENV,
          anexo: anexo
        }),
      });
}


