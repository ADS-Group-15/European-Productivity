/*jshint esversion: 8 */
var myCol = document.getElementById('mycol');
var myContainer = document.getElementById('container');
var myPlot = document.getElementById('main');

var resizeContainer = function () {
    if (myContainer.clientHeight / myCol.clientWidth >= 0.75) {
        myPlot.style.width = myCol.clientWidth + "px";
        myPlot.style.height = myCol.clientWidth * 0.75 + "px";
    } else {
        myPlot.style.width = myContainer.clientHeight + "px";
        myPlot.style.height = myContainer.clientHeight * 0.75 + "px";
    }
};
resizeContainer();

var myChart;

function generateChart(data, type) {
    myChart = null;
    $("#main").removeAttr("_echarts_instance_").empty();
    myChart = echarts.init(myPlot);

    myChart.clear();
    let option;

    if (type == 'line') {
        let geoList = [], seriesList = [];
        for (let i = 0; i < data.length; i++) {
            geoList.push(data[i].geo);
            let item = {
                name: data[i].geo,
                type: type,
                symbolSize: 10,
                data: data[i].values
            };
            seriesList.push(item);
        }

        option = {
            tooltip: {
                trigger: 'item',
            },
            legend: {
                data: geoList,
                icon: 'pin'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                data: data[0].years
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [
                {
                    type: 'inside',
                    yAxisIndex: [0],
                    filterMode: 'none'
                },
                {
                    type: 'slider',
                    xAxisIndex: [0],
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    },
                    bottom: 'auto',
                    filterMode: 'none'
                },
                {
                    type: 'slider',
                    yAxisIndex: [0],
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    },
                    filterMode: 'none'
                }],
            series: seriesList
        };
        myChart.setOption(option);
    }

    if (type == 'bar') {
        let geoList = [], seriesList = [];
        for (let i = 0; i < data.length; i++) {
            geoList.push(data[i].geo);
            if (i == 0) {
                for (let j = 0; j < data[0].years.length; j++) {
                    let item = {
                        name: data[i].years[j],
                        type: type,
                        data: [data[i].values[j]]
                    };
                    seriesList.push(item);
                }
            } else {
                for (let j = 0; j < data[0].years.length; j++) {
                    seriesList[j].data.push(data[i].values[j]);
                }
            }
        }

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: data[0].years.map(String)
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            xAxis: {
                type: 'category',
                data: geoList
            },
            dataZoom: [
                {
                    type: 'inside',
                    xAxisIndex: [0],
                },
                {
                    type: 'slider',
                    xAxisIndex: [0],
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    },
                    bottom: 'auto'
                }],
            series: seriesList
        };
        myChart.setOption(option);
    }

    if (type == 'pie') {
        let dataList = [['Geo'].concat(data[0].years.map(String))];
        let seriesList = [];
        for (let i = 0; i < data.length; i++) {
            let item = [data[i].geo].concat(data[i].values);
            dataList.push(item);

            seriesList.push({ type: 'line', seriesLayoutBy: 'row' });
        }
        seriesList.push({
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
                formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
                itemName: 'Geo',
                value: '2012',
                tooltip: '2012'
            }
        });

        setTimeout(function () {
            option = {
                legend: { icon: 'pin' },
                tooltip: {
                    trigger: 'axis',
                    showContent: false
                },
                dataset: {
                    source: dataList
                },
                xAxis: { type: 'category' },
                yAxis: { gridIndex: 0 },
                grid: { top: '55%' },
                series: seriesList
            };

            myChart.on('updateAxisPointer', function (event) {
                var xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                    var dimension = xAxisInfo.value + 1;
                    myChart.setOption({
                        series: {
                            id: 'pie',
                            label: {
                                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                            },
                            encode: {
                                value: dimension,
                                tooltip: dimension
                            }
                        }
                    });
                }
            });
            myChart.setOption(option);
        });
    }

    if (type == 'bar3D') {
        let geoList = [], seriesList = [], yearList = [], dataList = [];
        for (let i = 0; i < data.length; i++) {
            geoList.push(data[i].geo);
            if (i == 0) {
                for (let j = 0; j < data[0].years.length; j++) {
                    yearList.push(data[i].years[j]);
                }
            }
            for (let j = 0; j < data[0].years.length; j++) {
                    dataList.push([j, i, data[i].values[j]]);
            }
        }
        option = {
            tooltip: {},
            visualMap: {
                max: 40000,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            xAxis3D: {
                type: 'category',
                data: geoList
            },
            yAxis3D: {
                type: 'category',
                data: yearList
            },
            zAxis3D: {
                type: 'value'
            },
            grid3D: {
                boxWidth: 20,
                boxDepth: 20,
                viewControl: {
                    // projection: 'orthographic'
                },
                light: {
                    main: {
                        intensity: 1.2,
                        //shadow: true
                        shadow: false
                    },
                    ambient: {
                        intensity: 0.3
                    }
                }
            },
            series: [{
                type: 'bar3D',
                data: dataList.map(function (item) {
                    return {
                        value: [item[1], item[0], item[2]],
                    }
                }),
                shading: 'lambert',

                label: {
                    textStyle: {
                        fontSize: 16,
                        borderWidth: 1
                    }
                },

                emphasis: {
                    label: {
                        textStyle: {
                            fontSize: 20,
                            color: '#900'
                        }
                    },
                    itemStyle: {
                        color: '#900'
                    }
                }
            }]
        };
        myChart.setOption(option);
    }

    if (type == 'map') {

        let geoList = [], seriesList = [];
        for (let i = 0; i < data.length; i++) {
            geoList.push(data[i].geo);
            let item = {
                name: data[i].geo,
                value: data[i].values
            };
            seriesList.push(item);
        }

        $(function () {

            myChart.showLoading();

            $.get('EU.json', function (geoJson) {

                myChart.hideLoading();

                echarts.registerMap('EU', geoJson);

                myChart.setOption(option = {
                    title: {
                        text: 'The European Union Countries',
                        subtext: 'Data from: Eurostats',
                        sublink: 'https://ec.europa.eu/eurostat/tgm/graph.do?tab=graph&plugin=1&pcode=tesem160&language=en&toolbox=sort'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}<br/>{c} (p / km2)'
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 50000,
                        text: ['High', 'Low'],
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['lightskyblue', 'yellow', 'orangered']
                        }
                    },
                    series: [
                        {
                            name: 'EU Countries',
                            type: 'map',
                            roam: true,
                            mapType: 'EU',
                            label: {
                                show: true
                            },
                            data: seriesList,
                            nameMap: {
                                'Germany': 'Germany (until 1990 former territory of the FRG)'
                            }
                        }
                    ]
                });
            });

        });

    }
    
}

window.onresize = function () {
    resizeContainer();
    myChart.resize();
};

function getSearchItem(type) {
    var target = {
        year: [],
        geo: [],
    };

    var temp = document.querySelectorAll(".year");
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].checked) {
            target.year.push(temp[i].value);
        }
    }
    temp = document.querySelectorAll(".geo");
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].checked) {
            target.geo.push(temp[i].value);
        }
    }
    temp = document.querySelectorAll(".unit");
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].checked) {
            target.unit = temp[i].value;
            break;
        }
    }
    temp = document.querySelectorAll(".na_item");
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].checked) {
            target.na_item = temp[i].value;
            break;
        }
    }
    sendData(target, type);
}

function sendData(target, type) {
    var xhr = new XMLHttpRequest();
    var url = "api";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            rerange(xhr.responseText, type);
        }
    };
    var targetString = JSON.stringify(target);
    xhr.send(targetString);
}

function rerange(rawResult, type) {
    let rerangedResult = [];
    let result = JSON.parse(rawResult);
    let find;
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < rerangedResult.length; j++) {
            find = false;
            if (rerangedResult[j].geo == result[i].geo) {
                rerangedResult[j].years.push(result[i].time);
                rerangedResult[j].values.push(result[i].value);
                find = true;
                break;
            }
        }
        if (!find) {
            let item = {
                geo: result[i].geo,
                years: [result[i].time],
                values: [result[i].value]
            };
            rerangedResult.push(item);
        }
    }

    generateChart(rerangedResult, type);
}