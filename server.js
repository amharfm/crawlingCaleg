
var sumberawal = "https://wikidpr.org/rangkuman?search=sekolah&sort_by=meeting_date";   
    console.log("dari: ",sumberawal);
var katakunci_body  = "F";
    katakunci_body = new RegExp(katakunci_body, "i");
var katakunci_a     = "smp"; 
    katakunci_a = new RegExp(katakunci_a, "i");
var awalan = 20;
    awalan = -1 * awalan;
var akhiran = 50;

var Crawler = require("crawler");
var c = new Crawler({
    maxConnections : 10,

    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            if (res){
                var $ = res.$;
                // $ is Cheerio by default
                //a lean implementation of core jQuery designed specifically for the server
                
                //buat gelar body nya doang
                var page = res.body;
                var res_ = page.match(katakunci_body);
                if (res_ && res_.length > 0){

                    console.log(res_.input.slice(res_.index+awalan,res_.index+akhiran));
                    // console.log($(res_)._root);

                    //write here
                }
                

                $("a").each(function(index,a){
                    if (a.attribs.href) if (a.attribs.href.match(katakunci_a)){
                        // console.log("dari: ",a.attribs.href);
                        if (a.attribs.href[0]=='/') 
                            c.queue({ uri:String(sumberawal+a.attribs.href) })
                            else c.queue({ uri:String(a.attribs.href) })
                    }
                })
            }
        }
        done();
    }
});

c.queue({ uri:sumberawal })

/*
    // Queue just one URL, with default callback
    c.queue('http://www.amazon.com');

    // Queue a list of URLs
    c.queue(['http://www.google.com/','http://www.yahoo.com']);

    // Queue URLs with custom callbacks & parameters
    c.queue([{
        uri: 'http://parishackers.org/',
        jQuery: false,

        // The global callback won't be called
        callback: function (error, res, done) {
            if(error){
                console.log(error);
            }else{
                console.log('Grabbed', res.body.length, 'bytes');
            }
            done();
        }
    }]);
*/
