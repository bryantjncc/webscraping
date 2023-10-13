function main(){
    //make a scatterplot from mineddata.csv
    d3.csv("mineddata.csv", function(data){
        console.log(data);
        console.log(data[0]);
        console.log(data[0].x);
        console.log(data[0].y);
        console.log(data[0].z);
        console.log(data[0].color);
        console.log(data[0].size);
        console.log(data[0].shape);
    }
}