"use strict";var LineWidths=[1,5,10,15],RadiusList=[10,20,30],BrushList=[{type:"rect",name:"矩形"},{type:"circle",name:"圆形"},{type:"leftLine",name:"左侧斜线"},{type:"rightLine",name:"右侧斜线"}],ColorList=["rgb(0, 0, 0)","rgb(128, 128, 128)","rgb(128, 0, 0)","rgb(128, 128, 0)","rgb(0, 128, 0)","rgb(0, 128, 128)","rgb(0, 0, 128)","rgb(128, 0, 128)","rgb(128, 128, 64)","rgb(0, 64, 64)","rgb(0, 128, 255)","rgb(0, 64, 128)","rgb(64, 0, 255)","rgb(128, 64, 0)","rgb(255, 255, 255)","rgb(192, 192, 192)","rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255, 0, 255)","rgb(255, 255, 128)","rgb(0, 255, 128)","rgb(128, 255, 255)","rgb(128, 128, 255)","rgb(255, 0, 128)","rgb(255, 128, 64)"],ToolList=[{type:"cutPolygon",name:"多边形裁剪",positionX:0,positionY:0,cursor:"images/cursors/precise.png"},{type:"cut",name:"矩形裁剪",positionX:24,positionY:0,cursor:"images/cursors/precise.png"},{type:"eraser",name:"橡皮",positionX:0,positionY:-25,cursor:"images/cursors/precise.png"},{type:"bucket",name:"油漆桶",positionX:24,positionY:-25,cursor:"images/cursors/fill-bucket.png"},{type:"spectroscope",name:"取色器",positionX:0,positionY:-50,cursor:"images/cursors/eye-dropper.png"},{type:"scale",name:"放大镜",positionX:24,positionY:-50,cursor:"images/cursors/magnifier.png"},{type:"pencil",name:"铅笔",positionX:0,positionY:-75,cursor:"images/cursors/pencil.png"},{type:"brush",name:"笔刷",positionX:24,positionY:-75,cursor:"images/cursors/precise-dotted.png"},{type:"sprayBottle",name:"喷瓶",positionX:0,positionY:-100,cursor:"images/cursors/airbrush.png"},{type:"text",name:"文字输入",positionX:24,positionY:-100,cursor:"images/cursors/precise.png"},{type:"line",name:"直线",positionX:0,positionY:-125,cursor:"images/cursors/precise.png"},{type:"curve",name:"曲线",positionX:24,positionY:-125,cursor:"images/cursors/precise.png"},{type:"rectangular",name:"矩形绘制",positionX:0,positionY:-150,cursor:"images/cursors/precise.png"},{type:"polygon",name:"多边形绘制",positionX:24,positionY:-150,cursor:"images/cursors/precise.png"},{type:"ellipse",name:"椭圆绘制",positionX:0,positionY:-175,cursor:"images/cursors/precise.png"},{type:"roundedRectangle",name:"圆角矩形绘制",positionX:24,positionY:-175,cursor:"images/cursors/precise.png"}];