const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser");
const XLSX = require('xlsx');
const app  =  express();
const multer= require("multer");
const json2xls = require("json2xls");
const cors = require("cors");
var TPDDL_REPORTS = require("./database/schema");
const XlsxStreamReader = require("xlsx-stream-reader");
var excel = require('excel-stream');


var excel = require('excel-stream')
var max=0;
var userArray={
}
var phoneArray={

}
var jobArray={

}
var userObject=[

];
var phoneObj=[

];
var jobObj=[

]
var deliveryBoy=[

]
var upload  = multer({
    dest:'uploads',
    filename:"something.xlsx",
    mimetype:"application/vnd.ms-excel"
}) 
app.use(cors({
    exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
    credentials: true,

}));
app.use(bodyParser.json())
app.get('/getJson',(req,res)=>{
    res.json({
        phoneObj,
        jobObj,
        userObject,
        deliveryBoyObj
    });
})
app.get('/user',(req,res)=>{
    var flag=0;
    TPDDL_REPORTS.find({},["CA_Number","data","length"],{
        sort:{
            length:-1
        }},
        (err,result)=>{

            for(let i in result)
            {
                if(flag==0)
                {
                    console.log("working")
                    fs.appendFileSync("main.txt","CA_Number\t")
                    for(let m in result[i].data)
                    {
                        fs.appendFileSync("main.txt",m+"\t")
                    }
                    fs.appendFileSync("main.txt","\n")
                    fs.appendFileSync("main.txt",result[i].CA_Number+"\t")
                    for(let m in result[i].data)
                    {
                        fs.appendFileSync("main.txt",result[i].data[m]+"\t")
                        console.log(result[i].data[m]);
                    }
                    fs.appendFileSync("main.txt","\n");
                    flag=1;
                }
                else
                {
                    fs.appendFileSync("main.txt",result[i].CA_Number+"\t")
                    for(let m in result[i].data)
                    {
                        fs.appendFileSync("main.txt",result[i].data[m]+"\t")
                    }
                    fs.appendFileSync("main.txt","\n");
                }
            }
        })
        res.send();
    })
app.get('/phone',(req,res)=>{
    var flag=0;
    TPDDL_REPORTS.find({},["CA_Number","data","length"],{
        sort:{
            length:-1
        }},
        (err,result)=>{

            for(let i in result)
            {
                if(flag==0)
                {
                    console.log("working")
                    fs.appendFileSync("main.txt","CA_Number\t")
                    for(let m in result[i].data)
                    {
                        if(m.slice(0,7)=="PhoneNo")
                        fs.appendFileSync("main.txt",m+"\t")
                    }
                    fs.appendFileSync("main.txt","\n")
                    fs.appendFileSync("main.txt",result[i].CA_Number+"\t")
                    for(let m in result[i].data)
                    {
                        if(m.slice(0,7)=="PhoneNo")
                        fs.appendFileSync("main.txt",result[i].data[m]+"\t")
                    }
                    fs.appendFileSync("main.txt","\n");
                    flag=1;
                }
                else
                {
                    fs.appendFileSync("main.txt",result[i].CA_Number+"\t")
                    for(let m in result[i].data)
                    {
                        if(m.slice(0,7)=="PhoneNo")
                        fs.appendFileSync("main.txt",result[i].data[m]+"\t")
                    }
                    fs.appendFileSync("main.txt","\n");
                }
            }
        })
        res.send();

})
app.get('/relation',(req,res)=>{
    var flag=0;
    TPDDL_REPORTS.find({},["CA_Number","data","length"],{
        sort:{
            length:-1
        }},
        (err,result)=>{

            for(let i in result)
            {
                if(flag==0)
                {
                    console.log("working")
                    fs.appendFileSync("main.txt","CA_Number\t")
                    for(let m in result[i].data)
                    {
                        if(m.slice(0,12)=="relationship")
                        fs.appendFileSync("main.txt",m+"\t")
                    }
                    fs.appendFileSync("main.txt","\n")
                    fs.appendFileSync("main.txt",result[i].CA_Number+"\t")
                    for(let m in result[i].data)
                    {
                        if(m.slice(0,12)=="relationship")
                        fs.appendFileSync("main.txt",result[i].data[m]+"\t")
                    }
                    fs.appendFileSync("main.txt","\n");
                    flag=1;
                }
                else
                {
                    fs.appendFileSync("main.txt",result[i].CA_Number+"\t")
                    for(let m in result[i].data)
                    {
                        if(m.slice(0,12)=="relationship")
                        fs.appendFileSync("main.txt",result[i].data[m]+"\t")
                    }
                    fs.appendFileSync("main.txt","\n");
                }
            }
        })
        res.send();

})
app.get('/deliveryBoy',(req,res)=>{
    var flag=0;
    TPDDL_REPORTS.find({},["CA_Number","data","length"],{
        sort:{
            length:-1
        }},
        (err,result)=>{

            for(let i in result)
            {
                if(flag==0)
                {
                    console.log("working")
                    fs.appendFileSync("main.txt","CA_Number\t")
                    for(let m in result[i].data)
                    {
                        if(m.slice(0,11)=="deliveredBy")
                        fs.appendFileSync("main.txt",m+"\t")
                    }
                    fs.appendFileSync("main.txt","\n")
                    fs.appendFileSync("main.txt",result[i].CA_Number+"\t")
                    for(let m in result[i].data)
                    {
                        if(m.slice(0,11)=="deliveredBy")
                        fs.appendFileSync("main.txt",result[i].data[m]+"\t")
                    }
                    fs.appendFileSync("main.txt","\n");
                    flag=1;
                }
                else
                {
                    fs.appendFileSync("main.txt",result[i].CA_Number+"\t")
                    for(let m in result[i].data)
                    {
                        if(m.slice(0,11)=="deliveredBy")
                        fs.appendFileSync("main.txt",result[i].data[m]+"\t")
                    }
                    fs.appendFileSync("main.txt","\n");
                }
            }
        })
        res.send();

})
function okay(a)
{
    for(var i=0;i<i.length;i++)
    {
        a.replace('/u0000','');
        a.replace(' ','');
    }
    a = a.slice(0, -7)
    console.log(a+"hello I am shreyansh");
    return a;
}
function handleRows(i,c){
    TPDDL_REPORTS.findOne({CA_Number:i[1]},(err,result)=>{
           if(result)
                    {
                        if(i[20])
                        {
                            var data=result.data;
                            var arr=[];
                            var obj={};
                            global.count=0;
                            for(let m in data)
                            {
                                if(m.slice(0,12)=="relationship")
                                {
                                    obj.relationship=data[m];
                                }
                                if(m.slice(0,11)=="deliveredTo")
                                {
                                    obj.name=data[m];
                                }
                            }
                            arr.push(obj);
                            arr.push({name:i[19],relationship:i[18]});
                            console.log(arr);
                            for(let z in arr)
                            {
                                var county=0;
                                for(let x in arr)
                                {
                                    if(x!=z)
                                    {
                                        if(arr[x].name==arr[z].name)
                                        {
                                            console.log("hello we matched");
                                            console.log(arr[x].relationship+"    "+x);
                                            console.log(arr[z].relationship+"     "+z);
                                            if(arr[x].relationship!=arr[z].relationship)
                                            {
                                                county++;
                                                console.log("the value of the county",county);
                                                arr.slice(x,1);
                                                x--;
                                                console.log(x+1);
                                                console.log(x)
                                            }
                                            if(county>count)
                                            {
                                                fs.appendFileSync("main1.txt",county+"    "+arr[x]+"    "+arr[z]+"\n")
                                                count=county;
                                            }
                                        }
                                    }
                                }    
                            }
                            data["relationship/"+i[17].slice(3)]=i[18];
                            data["deliveredTo"+'/'+i[17].slice(3)]=i[19];
                            data["deliveredBy"+'/'+i[17].slice(3)]=i[20];
                            data["PhoneNo"+'/'+i[17].slice(3)]=i[21];
                            data.count=count;
                            var length=result.length+1;
                           TPDDL_REPORTS.findOneAndUpdate({CA_Number:i[1]},{CA_Number:i[1],data,length},{new:true},(err,response)=>{
                               if(err)
                               {
                                   console.log("ERROR IN THE FIND ONE AND UPDATE",err);
                               }
                               else
                               {
                                   console.log("Updated");
                               }
                           })
                        }
                    }
                    else
                    {
                        i.otherData=[];
                        data={};
                        data.DeliveryDate=i[17];
                        data.relationship=i[18];
                        data.deliveredTo=i[19];
                        data.deliveredBy=i[20];
                        data.PhoneNo=i[21];
                        var obj={
                            CA_Number:i[1],                            
                            data,
                            length:0
                        }
                        console.log("** Created");
                        TPDDL_REPORTS.create(obj,(err,result)=>{
                            if(err)
                            {
                                console.log("error while creating the record",err);
                            }
                            else
                            {
                                fs.writeFileSync('main.txt',i);
                            }
                        })
                    }
                    if(err)
                    {
                        console.log("Error is thrown in the find one",err);
                    }
                })    
            }
app.post("/getTheRecords",(req,res)=>{
    console.log("hello Shreyansh si here");
    TPDDL_REPORTS.find({},["CA_Number","data","length"],{
        skip:0,
        limit:100,
        sort:{
            length:-1
        }
    },(err,result)=>{
        
        res.json(result)
    })
})
app.get('/readTheExcel',(req,res)=>{
    console.log("hello")
    var count=0;
    const XlsxStreamReader = require("xlsx-stream-reader");
 
    var workBookReader = new XlsxStreamReader();
    workBookReader.on('error', function (error) {
        throw(error);
    });
    workBookReader.on('sharedStrings', function () {
        // do not need to do anything with these, 
        // cached and used when processing worksheets
        console.log(workBookReader.workBookSharedStrings);
    });
     
    workBookReader.on('styles', function () {
        // do not need to do anything with these
        // but not currently handled in any other way
        console.log(workBookReader.workBookStyles);
    });
     
    workBookReader.on('worksheet', function (workSheetReader) {
        if (workSheetReader.id > 1){
            // we only want first sheet
            workSheetReader.skip();
            return; 
        }
        // print worksheet name
        console.log(workSheetReader.name);
     
        // if we do not listen for rows we will only get end event
        // and have infor about the sheet like row count
        workSheetReader.on('row', function (row) {
            if (row.attributes.r == 1){
                // do something with row 1 like save as column names
            }else{
                {
                    count++;

                    handleRows(row.values,count);

                    // setInterval(()=>{
                    //     for(var m=0;m<200000;m++)
                    //     {
                    //         for(var a=0;a<10;a++)
                    //         ;
                    //     }
                    // },50000)
                }


                // second param to forEach colNum is very important as
                // null columns are not defined in the array, ie sparse array
                row.values.forEach(function(rowVal, colNum){
                    // do something with row values
                });
            }
        });
        workSheetReader.on('end', function () {
            console.log(workSheetReader.rowCount);
            console.log("end");
        });
     
        // call process after registering handlers
        workSheetReader.process();
    });
    workBookReader.on('end', function () {
        console.log("end");
        // end of workbook reached
    });
     
    fs.createReadStream('name.xlsx').pipe(workBookReader);
     
    //     readXlsxFile(fs.createReadStream('./shreyansh.xlsx')).then((rows) => {
        //         console.log("help");
        //         console.log(rows);
        // //        for(i of rows)
        //         {
        //             console.log(i);
        //             handleRows(i);
                
        //     }
        res.send();
        })
    //    });                
    // dataStream.on('data',(data)=>{
    //     var flag=1;
    //     var str="";
    //     var arr=[]
    //     for(let i=0;i<data.toString().length;i++)
    //     {
    //         if(data.toString()[i]!="\t")
    //         {
    //             if(flag==0)
    //             {
    //                 if(str!='\u0000')
    //                 arr.push(str);  
    //                 flag=1;
    //                 str=""
    //             }
    //             str+=data.toString()[i];
    //         }
    //         else if(data.toString()[i]=="\u0000")
    //         {;
    //         }
    //         else
    //         {
    //             flag=0;
    //         }
    //     }
    //     console.log(arr);
    //     arr=[];
    //     res.send();
        // switch(a)
        // {
        //     case 
        // }
        // var a = XLSX.read(data,{type:"buffer"});
        // console.log(a);
        // for(i in a.Sheets.Sheet1)
        // {
        //     console.log(i.slice(0,1));
        //     if(i.slice(0,1)=="A")
        //     console.log(a.Sheets.Sheet1[i].v);
        //     // if(a.Sheets.Sheet1[i].v=="뿯붿Master Code CA")
        //     // {
        //     //  console.log(i[0]);
        //     // // }
        //     // else
        //     // {
        //     //     TPDDL_REPORTS.findOne({CA_Number:i[0]},(err,value)=>{
        //     //         if(err)
        //     //         {
        //     //             console.log(err);
        //     //         }
        //     //         if(!value)
        //     //         {
        //     //             console.log(value);
        //     //             console.log(i[0],"93");
        //     //             TPDDL_REPORTS.create({ CA_Number: i[0],DeliveryDate:i[16],relationship:i[17],deliveredTo:i[18],deliveredBy:i[19],phoneNo:i[20] }, function (err, small) {
        //     //                 if (err)
        //     //                 {
        //     //                     console.log(err,"95")
        //     //                 }
        //     //                 else{
        //     //                     console.log("done");
        //     //                 }
        //     //             });        
        //     //         }
        //     //         else
        //     //         {
        //     //             // console.log(value);
        //     //             // var obj={
        //     //             //     ...value
        //     //             // }
        //     //             if(value.otherData==undefined)
        //     //             {
        //     //                 value.otherData={};
                            
        //     //             }
        //     //             value.otherData["/DeliveryDate"+value.DeliveryDate]=i[16];
        //     //             value.otherData["/relationship"+value.DeliveryDate]=i[17];
        //     //             value.otherData["/deliveredTo"+value.DeliveryDate]=i[18];
        //     //             value.otherData["/deliveredBy"+value.DeliveryDate]=i[19];
        //     //             value.otherData["/PhoneNo"+value.DeliveryDate]=i[20];
        //     //             TPDDL_REPORTS.findOneAndUpdate({CA_Number:i[0]},value,(err,val)=>{
        //     //                 console.log(val);
        //     //                 if(err)
        //     //                 {
        //     //                     console.log(err);
        //     //                 }
        //     //             })
        //     //         }
        //     //     })
        //     // }
        // }


//})
    // dataStream.on('end',()=>{
    //     console.log("Data is ended over here");
    // })
    // readXlsxFile("./main.xlsx").then((data)=>{
    //     console.log(data);
    // }).catch((err)=>{
    //     console.log(err);
    // })
    // console.log("recieved the request");
    // var workBookReader = new XlsxStreamReader();
    // workBookReader.on('worksheet', function (workSheetReader) {
    //     if (workSheetReader.id > 1){
    //         // we only want first sheet
    //         workSheetReader.skip();
    //         return; 
    //     }
    //     // print worksheet name
    //     console.log(workSheetReader.name);
    //     // if we do not listen for rows we will only get end event
    //     // and have infor about the sheet like row count
    //     workSheetReader.on('row', function (row) {
    //         console.log(row);
    //     });
    // })
    // fs.createReadStream('./phone.xlsx').pipe(workBookReader);
    //})
    // console.log('got the request');
    // var dataStream = fs.createReadStream('./1.xls');                
    // dataStream.on('data',(data)=>{
    //     var a = XLSX.read(data,{type:"buffer"});
    //     console.log(a);
    // })
    // dataStream.on('end',()=>{
    //     console.log("done");
    // })
    // res.send("done");
//})

async function excelTask(req,res,count,data)
{
    if(count<5000)
    {
        count++;
        var stream = fs.createWriteStream("./main.xlsx");
        stream.write(data);
        stream.end();
    }
    else
    {
        var a= XLSX.readFile('./main.xlsx',{type:"buffer"});;
        fs.truncate('/main.xlsx', 0, function(){;})
        console.log(a);
        fs.writeFileSync('./data.txt',a);
        count=0;
    }
    return count;
}
function process_RS(stream/*:ReadStream*/)/*:void*/{
    var buffers = [];
    stream.on('data', function(data) {
    });
    stream.on('end', function() {
    //   var buffer = Buffer.concat(buffers);
    //   var workbook = XLSX.read(buffer, {type:"buffer"});
      console.log(workbook);
      /* DO SOMETHING WITH workbook IN THE CALLBACK */
});
}

app.post('/profile',upload.single('file'),(req,res,next)=>{
    console.log(req.file);
    fs.renameSync('uploads/'+req.file.filename,"uploads/POD");
    next();
})
app.use((req,res,next)=>{
     userArray={
    }
     phoneArray={
    
    }
     jobArray={
    
    }
     userObject=[
    
    ];
     phoneObj=[
    
    ];
     jobObj=[
    
    ];
    deliveryBoyObj=[

    ];
    deliveryBoyArray={

    };
    if(fs.existsSync('uploads/POD'))
    {

        const workbook = XLSX.readFileSync('uploads/POD');
        var sheet_name_list = workbook.SheetNames;
        var data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        console.log(data);
        for(let i of data)
        {
            if(userArray[i["Master Code CA"]]==undefined)
            {
                var date = i["Delivery Date"].slice(3,5)+"/"+i["Delivery Date"].slice(6,10);
                userArray[i["Master Code CA"]]=
                {                        
                    [date]:i["Delivered To            "],

                }
            }
            else
            {
                var date = i["Delivery Date"].slice(3,5)+"/"+i["Delivery Date"].slice(6,10);
                userArray[i["Master Code CA"]][date]=i["Delivered To            "];

            }
            if(jobArray[i["Master Code CA"]]==undefined)
            {
                var date = i["Delivery Date"].slice(3,5)+"/"+i["Delivery Date"].slice(6,10);
                jobArray[i["Master Code CA"]]=
                {                    
                    [date]:i["Delivered To            "],
                    [date+"/Relaionship"]:i["Relationship  "],
                }
            }
            else
            {
                var date = i["Delivery Date"].slice(3,5)+"/"+i["Delivery Date"].slice(6,10);
                jobArray[i["Master Code CA"]][date]=i["Delivered To            "];
                jobArray[i["Master Code CA"]][date+"/Relationship"]=i["Relationship  "];  
            }
            if(phoneArray[i["Master Code CA"]]==undefined)
            {
                var date = i["Delivery Date"].slice(3,5)+"/"+i["Delivery Date"].slice(6,10);
                phoneArray[i["Master Code CA"]]=
                {                    
                    [date+"/PhoneNo"]:i["Phone Number"],
                }
            }
            else
            {
                var date = i["Delivery Date"].slice(3,5)+"/"+i["Delivery Date"].slice(6,10);
                phoneArray[i["Master Code CA"]][date+"/PhoneNo"]=i["Phone Number"];  
            }
            if(deliveryBoyArray[i["Master Code CA"]]==undefined)
            {
                var date = i["Delivery Date"].slice(3,5)+"/"+i["Delivery Date"].slice(6,10);
                deliveryBoyArray[i["Master Code CA"]]=
                {                        
                    [date+"/DeliveryBoyName"]:i["Delivered By        "],
                }
            }
            else
            {
                var date = i["Delivery Date"].slice(3,5)+"/"+i["Delivery Date"].slice(6,10);
                deliveryBoyArray[i["Master Code CA"]][date+"/deliveryBoyName"]=i["Delivered By        "];
            }
        }
        for(let j in userArray)
        {
           var phoneNo = {
            ["CA Number"]:j,
            ...phoneArray[j]
           }
           var Job = {
            ["CA Number"]:j,
            ...jobArray[j]
           }
           var Recieved = {
            ["CA Number"]:j,
            ...userArray[j]
           }
           var deliveryBoy={
               ["CA Number"]:j,
               ...deliveryBoyArray[j]
           }
           console.log(deliveryBoyArray);
            
           userObject.push(Recieved);
           phoneObj.push(phoneNo);
           jobObj.push(Job);
           deliveryBoyObj.push(deliveryBoy);
        }
        var index=0;
        var count=0;
        var PhoneNoCount=0;
        for(let i in phoneObj)
        {
            PhoneNoCount=0;
            for(let j in phoneObj[i])
            {
                if(j.slice(8)=="PhoneNo")
                {
                    var a=phoneObj[i][j].toString();
                    if(a[0]==" ")
                    {
                        a="";
                    }
                    if(a.length>4)
                    {
                        PhoneNoCount++;
                    }
                }

            }
            phoneObj[i]["Number of Entries"]=Math.floor(PhoneNoCount);
        }
        index=0;
        count=0;
        for(let i in userObject)
        {
            var c=0;

            for(let f in userObject[i])
            {
                c++;
            }
            if(c>count)
            {
                count=c;
                index=i;
            }
            userObject[i]["Number of Entries"]=Math.floor(c-1);
            jobObj[i]["Number of Entries"] = Math.floor(c-1);
            deliveryBoyObj[i]["Number of Entries"] = Math.floor(c-1);
        }
        var temp;
        temp=userObject[index];
        userObject[index]=userObject[0];
        userObject[0]=temp;
        temp=jobObj[index];
        jobObj[index]=jobObj[0];
        jobObj[0]=temp;
        temp=phoneObj[index];
        phoneObj[index]=phoneObj[0];
        phoneObj[0]=temp;
        temp=deliveryBoyObj[index];
        deliveryBoyObj[index]=deliveryBoyObj[0];
        deliveryBoyObj[0]=temp;        
        var xls = json2xls(userObject);
        fs.writeFileSync('user.xlsx', xls, 'binary');
        var xls = json2xls(phoneObj);
        fs.writeFileync('phone.xlsx', xls, 'binary');
        var xls = jsSon2xls(jobObj);
        fs.writeFileSync('job.xlsx', xls, 'binary');
        var xls = json2xls(deliveryBoyObj);
        fs.writeFileSync('delivery.xlsx', xls, 'binary');
}
res.end();
})
app.listen(1234,()=>{
    console.log("hello this function started working");
})
