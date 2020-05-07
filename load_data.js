

const confirmed = d3.csv(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv"
);
console.log(confirmed);
// tidy = (data, type) => {
//     const t = data
//         .map(d => {
//             let prev = 0; // previous total, to compute diffs
//             return (
//                 Object.keys(d)
//                     .filter(parseDateMDY)
//                     // .filter(d => d !== "2/12/20") // bad data day
//                     .map(k => {
//                         const total = +d[k],
//                             cases = total - prev;
//                         prev = total;
//                         return {
//                             type,
//                             country: d["Country/Region"],
//                             province_name: d["Province/State"],
//                             province: `${d["Country/Region"]}:${d["Province/State"]}`,
//                             lat: +d["Lat"],
//                             long: +d["Long"],
//                             date: parseDateMDY(k),
//                             ymd: d3.timeFormat("%Y-%m-%d")(parseDateMDY(k)),
//                             cases,
//                             total
//                         };
//                     })
//             );
//         })
//         .flat()
//         .filter(d => d.total > 0);
//
//     return t;
// };
// var tconfirmed = tidy(confirmed, "confirmed");
// var provinces = d3.groups(data, d => d.province).map(d => d[0]);