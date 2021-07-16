function record(number) {
    var name = "";
    if (number == 1) {
        name = "近本光司 .292";
    } else if (number == 2) {
        name = "佐藤輝明 20本";
    } else if (number == 3) {
        name = "佐藤輝明 52打点";
    } else if (number == 4) {
        name = "青柳晃洋 1.79";
    } else if (number == 5) {
        name = "青柳晃洋 8勝";
    } else if (number == 6) {
        name = "スアレス 25セーブ";
    }
    alert(name);
}

const endata = {
    labels: [
      '佐藤輝',
      'サンズ',
      'マルテ',
      '大山',
      '近本',
      '糸井',
      '梅野',
      '陽川',
      '中野',
      '糸原',
      '木浪',
      'ロハスJr',
      '北條'
    ],
    datasets: [{
      label: 'ホームラン数内訳',
      data: [20, 17, 16, 10, 6, 3, 2, 2, 1, 1, 1, 1, 1],
      backgroundColor: [
        'rgb(0, 255, 255)',
        'rgb(220, 20, 60)',
        'rgb(255, 0, 0)',
        'rgb(250, 128, 114)',
        'rgb(30, 144, 255)',
        'rgb(199, 21, 133)',
        'rgb(255, 20, 147)',
        'rgb(255, 255, 0)',
        'rgb(70, 130, 180)',
        'rgb(176, 224, 230)',
        'rgb(0, 0, 139)',
        'rgb(0, 0, 0)',
        'rgb(0, 191, 255)'
      ],
      hoverOffset: 4
    }]
};

const enconfig = {
    type: 'doughnut',
    data: endata,
};

var enChart = new Chart(
    document.getElementById('enChart'),
    enconfig,
);
