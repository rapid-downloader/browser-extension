browser.downloads.onCreated.addListener(item => {
    // TODO: do something to cancel the download without showing the download popup
    // browser.downloads.cancel(item.id)
    browser.cookies.getAll({ url: item.url }).then(cookies => {
        const body = {
            url: item.url,
            userAgent: navigator.userAgent,
            contentType: item.mime,
            cookies: cookies,
        }

        // TODO: perform http request to rapid server
    })
})