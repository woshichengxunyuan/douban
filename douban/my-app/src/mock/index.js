
var Mock=require("mockjs");

Mock.mock("/link/data","get",require("./json/all"));
Mock.mock("/nav/data","get",require("./json/nav.json"));
Mock.mock("/dz/data","get",require("./json/dz.json"));