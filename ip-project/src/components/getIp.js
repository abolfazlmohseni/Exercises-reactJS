async function getIp() {
  const response = await fetch("https://api.ipify.org?format=json");
  return (await response.json()).ip;
}


export default getIp;
