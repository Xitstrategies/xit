//js xit/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build',function(){
	steal.build('xit/scripts/build.html',{to: 'xit'});
});
