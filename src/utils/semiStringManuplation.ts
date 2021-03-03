import * as chrono from "chrono-node";

export const semiStringManuplation = (arg: string) => {
  const text = arg;
  const array = text.split(" ");

  // O(n+k)
  const tagsArray = array.reduce((accumulator, n, index) => {
    if (/@/.test(n)) {
      //@ts-ignore
      accumulator.push(n.replace(/,|@/g, ""));
    }
    return accumulator;
  }, []);

  const stringWithoutTag = text.split("@")[0];
  let dateText = chrono.parse(text)[0].text;
  let re = new RegExp(`${dateText}`, "g");
  let body = stringWithoutTag.replace(re, "").trim();
  // constant time
  if (body.endsWith("-") || body.endsWith("with")) {
    body = body.substring(0, body.lastIndexOf(" "));
  }

  const date = chrono.parseDate(arg);
  // const event = new Date(date).toLocaleString("en-US", {
  //   timeZone: "America/Chicago",
  // });

  const event = new Date(date); // default timezone in order to get in the form of ISO

  return { tagsArray, body, date: event.toISOString() };
};
