---
title: highstock rangeSelector
---

Author: john

Email: john(at)hcharts.cn

Some thing about Highstock

### 1、rangeSelector

##### 1) rangeSelector.buttons

```
rangeSelector: {
    buttons: [{
        type: 'day',
        count: 7,
        text: '1 周'
    }, {
        type: 'month',
        count: 1,
        text: '月'
    }, {
        type: 'month',
        count: 3,
        text: '季度'
    }, {
        type: 'all',
        text: '所有'
    }]
}
```

type 取值可以是：millisecond、second、minute、day、week、month、ytd（今年迄今）、year、all
text：显示的文字

##### 2) rangeSelector 生效，但是不显示相应的按钮


```
Highcharts.setOptions({
  lang: {
      rangeSelectorZoom: ''    // hidden the text 'Zoom' show in chart
  }
})

$('#container').highcharts('Stock', {
    // ... 省略代码
    rangeSelector: {
        buttonTheme: {
            display: 'none'     // 不显示按钮
        },
        selected: 1,
        inputEnabled: false     // 不显示日期输入框
    }
});
```

3）获取当前 rangeSelector 选中的范围

```
xAxis: {
    events: {
        afterSetExtremes: function(e) {
            var extremes = chart.xAxis[0].getExtremes();

            // extremes.min 和 extremes.max 为当前的时间范围
            var start = Highcharts.numberFormat('%Y-%m-%d %H:%M:%S',extremes.min);
            var end = Highcharts.numberFormat('%Y-%m-%d %H:%M:%S',extremes.min);

            /**
              * use moment.js to format date
             * var start = moment(extremes.min).formate('YYYY-MM-DD HH:mm:ss');
             * var end = moment(extremes.max).formate('YYYY-MM-DD HH:mm:ss');
             */
        }
    }
}
```

4）设置 rangeSelector 按钮的宽高

```
rangeSelector: {
    buttonTheme: {
        width: 100,
        height: 20
    }
}
```

**注：buttonTheme.width 和 buttonTheme.height 为 API 为公开的参数配置，可以通过源码知晓。**
