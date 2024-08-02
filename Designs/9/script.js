Highcharts.chart(
    'container',
    {
        title:{
            text:null,
        },
        xAxis:{
            categories:['Jan','Feb','Mar','Apr','May']
        },
        yAxis:{
            title:{
                text:null,
            }
        },
        credits:{
            enabled:false,
        },
        plotOptions:{
            series:{
                borderRadius: '25%'
            },
        },
        series:[
            {
                type:'column',
                name: 'Company 1',
                data: [59, 83, 65, 228, 184]
            },
            {
                type:'column',
                name: 'Company 2',
                data: [12, 45, 78, 98, 321]
            },
            {
                type:'column',
                name: 'Company 3',
                data: [78, 12, 45, 68, 125]
            }
        ],
        dataLabels:{
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point}',
            y:10,
            style:{
                fontSize: '13px',
                fontFamily: 'sans-serif'
            },
        },
    },
);