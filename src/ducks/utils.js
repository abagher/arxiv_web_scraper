const xml2js = require('xml2js');

const DATE_CUTOFF = 6; // months

function parseXml(xml) {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xml, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

async function parseXmlResponse(data) {
    try {
        const result = await parseXml(data);
        return result?.feed?.entry;
    } catch (err) {
        console.error("parseXml failed: ", err);
    }
}

function dateIsWithinRange(date) {
    const currentDate = new Date();
    const publishedDate = new Date(date);
    const cutOff = new Date(currentDate).setMonth(currentDate.getMonth() - DATE_CUTOFF);

    return publishedDate >= cutOff;
}

export {
    dateIsWithinRange,
    parseXmlResponse,
};
