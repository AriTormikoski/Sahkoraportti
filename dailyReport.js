var fs = require('fs');
var lampotilat = [];
var sahkot = [];
const zero = 0;
const kWhLimit = 4;

module.exports = {
    outputDailyReport: function (date) {
        var kWh_total=0;
        var dailyReport="<!DOCTYPE html><html><head><title>Sähkönkäytön päiväraportti</title><meta charset='utf-8' />";
        dailyReport+="<style>table, th, td { border: 1px solid black;}</style></head>";
        dailyReport+="<body><table style='width:40%'><tr><th>Time</th><th>Indoor temp</th><th>Outdoor temp</th><th>Energy kWh</th></tr>";
        for (var i = 24*(date-1); i < 24*(date-1)+24; i++) {
            var lampo = lampotilat[i];
            var sahko = sahkot[i];
            dailyReport+="<tr><td>"+lampo.Time +"</td><td>"+lampo.IndoorTemperature +"</td>";
            if (Number(lampo.OutdoorTemperature) < zero) {
                dailyReport+="<td bgcolor='#00ffff'>"+lampo.OutdoorTemperature+"</td>";
            } else {
                dailyReport+="<td bgcolor='#ffffff'>"+lampo.OutdoorTemperature+"</td>";
            }    
            if (Number(sahko.kWh) >= kWhLimit) {
                dailyReport+="<td bgcolor='#ff0000'>"+sahko.kWh+"</td></tr>";
            } else {
                dailyReport+="<td bgcolor='#ffffff'>"+sahko.kWh+"</td></tr>";
            }
            kWh_total+=Number(sahko.kWh);
        }
        dailyReport+="</table>";
        dailyReport+="kWh total: "+ kWh_total +"</body></html>"
        return dailyReport;
    }
}

fs.readFile("saamittari.json",function(err, data){
lampotilat=JSON.parse(data);
});

fs.readFile("sahko_raportti.json",function(err, data){
sahkot=JSON.parse(data);
});
