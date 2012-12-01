$(function() {
    var socket = io.connect('http://localhost:3001');    
    var observation = 0;
    var dataSeries = {};

    // Each time server socket ticks...
    socket.on('timers', function(data) {
        $('#timertable').show();
        $('#countertable').show();    

        observation++;

        processCounterTable(data, dataSeries, observation);
        processTimerTable(data, dataSeries, observation);
        flushOldData(dataSeries);
    });
});

processCounterTable = function(data, dataSeries, observation) {
    
    $('#countertable').find('tbody').empty();    
    for(var key in data.counters) {
        if(key.substring(0, 6) === "statsd") continue;
        chartDivId = key.replace(/\./g,'_').replace(/ /g,'_')+'chart';

        if(dataSeries[key] == null) dataSeries[key] = [];
        dataSeries[key].push([observation, data.counters[key]])

        $('#countertable').find('tbody').append(
            '<tr>' + 
                '<td>' + key + '</td>' + 
                '<td>' + data.counters[key] + '</td>' + 
                '<td><div id="' + chartDivId + '" style="width:200px;height:100px;"></div></td>' + 
            '</tr>'
        );        
        $.plot($('#'+chartDivId), [dataSeries[key]]);
    }
}

processTimerTable = function(data, dataSeries, observation) {
    
    $('#timertable').find('tbody').empty();    
    for(var key in data.timer_data) {
        chartDivId = key.replace(/\./g,'_').replace(/ /g,'_')+'chart';


        timerData = data.timer_data[key]        
        if(dataSeries[key] == null) dataSeries[key] = [];
        dataSeries[key].push([observation, timerData.mean])
        $('#timertable').find('tbody').append(
            '<tr>' + 
                '<td>' + key + '</td>' + 
                '<td>' + timerData.upper + '</td>' + 
                '<td>' + timerData.lower + '</td>' + 
                '<td>' + timerData.count + '</td>' + 
                '<td>' + timerData.sum + '</td>' + 
                '<td>' + Math.round(timerData.mean) + '</td>' +
                '<td><div id="' + chartDivId + '" style="width:200px;height:100px;">asdasd</div></td>' + 
            '</tr>'
        );        
        $.plot($("#"+chartDivId), [dataSeries[key]]);
    }
}

flushOldData = function(dataSeries) {


}