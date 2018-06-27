let W = JSON.parse(fs.readFileSync('words.json'));
const JSONHUMAN = string =>{
    if(string)return string.replace(/"|{|}|,|\[|\]| /g,"").replace(/:/g,": ").replace(/_/g," ");
}

const guide = `<b>Single word</b>:
Just send <code>myname</code> or <code>"myname"</code> for tracking only one word

<b>Miltiple words. Where "|" means "or"</b>:
<code>accountname1|accountname2|airdrop|bounty|jackpot</code>
    
<b>Miltiple events. Just put variable inside "":</b>
<code>"transfer"|"newaccount"|"bidname"</code>

<b>If action should contain all specified words:</b>
<code>^(?=.*"myname")(?=.*"transfer").*</code>

<b>If action should contain transfer EOS, but NOT to bitfinexdep1:</b>
<code>^(?=.*"transfer")(?=.*EOS)(?!.*"to": "bitfinexdep1").*</code>

<b>Only Url detect:</b>
<code>^(https?:\\/\\/)?([\\da-z\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$</code>
    
<b>Only Email detect:</b>
<code>^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$</code>

<b>Url OR Email detect:</b>
<code>^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$|^(https?:\\/\\/)?([\\da-z\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$</code>


<a href="https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149">More examples and tuts</a>
<b>Note: Forward slashes must be escaped!</b> Your regex should be sent without first and last <code>/</code>. 
They are already installed.`

const SENDER = (DATA,USERS) =>{
    const msg = DATA;
    const parsedblock = JSON.parse(msg); 
    const readable = JSON.stringify(parsedblock,null,4)
    for(ONE of USERS){
    
        const user = ONE;
        const USERWORDS = user.keywords;
        const USERREGEX = new RegExp(USERWORDS,"g");
        const S = msg.match(USERREGEX)
        if(S) {
            const captiontxt = '📡 Match your RegEx on block '+parsedblock[0].blockNum+'\n\n/pause\n\n/keywords';
            const txtfile = "./enc/"+user.id+".txt";
            
            fs.writeFile(txtfile,readable, 'utf8', (err)=> { 
                if (!err) sendDocument(user.chatid,{source:txtfile},{caption:captiontxt}).catch((err) => {console.warn(err)});
            });
            
   
            const UZ= {
                nick:(user.profile.username)?"@"+user.profile.username:"",
                name:(user.profile.first_name)?user.profile.first_name:"",
                last:(user.profile.last_name)?user.profile.last_name:"",
                lang:(user.profile.language_code)?user.profile.language_code:"",
            }
        
           
        }
        
       
      
    }

}

let ACTIVEUSERS = []

const UPDATEUSER = (USERID,chatid,profile,config,keywords,state) => {  
  
    let REBUILD = []

    for(user of ACTIVEUSERS){
    
       if(user.id!==USERID){
        console.log('REBUILD '+user.id+'  '+user.keywords)
        REBUILD.push({
            id:      user.id,
            chatid:  user.chatid,
            profile: user.profile,
            config:  user.config,
            keywords:user.keywords,
            state:   user.state
            })
        }
    }

    if(state!=="pause"){
        REBUILD.push({
            id: USERID,
            chatid:  chatid,
            profile: profile,
            config:  config,
            keywords:keywords,
            state:   state
        })
    }
    ACTIVEUSERS = REBUILD

}

sub.on("message", (c, message) => {
    if(ACTIVEUSERS[0])return SENDER(message,ACTIVEUSERS)
})

