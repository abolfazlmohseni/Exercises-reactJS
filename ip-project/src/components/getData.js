import GetIp from "./getIp";
async function checkip() {
    const ip = await GetIp();
    const userdata = await fetch(`http://ipwhois.app/json/${ip}`);
    return userdata;
}

export default checkip;