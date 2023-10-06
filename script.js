/*
- 猫 35%、犬 30%、きりん 20%、その他 15%
- 円グラフのオプションには 幅100%、高さ300px を指定
*/

let pieData = {
    labels: ['Twitter', 'FaceBook', 'Instgram', 'その他'],
    series: [45, 25, 20, 10]
};

let pieOptions = {
    width: '100%',
    height: '440px'
};

let barData = {
    labels: ['6月', '9月', '12月'],
    series: [[30, 50, 100]]
};

let barOptions = {
    axisY: {
        offset: 80,
        scaleMinSpace: 50,
        labelInterpolationFnc: function(value) {
            return value + '万円'
        }
    },
    width: '100%',
    height: '400px'
};

new Chartist.Pie('.animal-chart', pieData, pieOptions);
new Chartist.Bar('.bar-chart', barData, barOptions);