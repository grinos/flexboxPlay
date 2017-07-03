<CTYPE html>
<html>
<head>
<style> 
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: baseline;
    /* align-items: center; */
    align-items: stretch;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
    /*justify-content: center;*/
    -webkit-justify-content: space-around;
    justify-content: space-around;
    /* justify-content: space-between; */
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
}

.flex-item-mini {
    background-color: cornflowerblue;
    /*width: 60px; */
    width: 60px;
    margin: 10px;
}

.flex-item {
    background-color: cornflowerblue;
    /*width: 60px; */
    width: 300px;
    margin: 10px;
}
</style>
</head>
<body>

<div class="flex-container">
  <div class="flex-item-mini">flex item 1</div>
  <div class="flex-item">flex item 2</div>
  <div class="flex-item">flex item 3</div>  
</div>

</body>
</html>

