__NUXT_JSONP__("/posts/digitalocean-ubuntu", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:[{page:{slug:"digitalocean-ubuntu",description:"Quick setup note, all commands, no need to google anymore.",title:"How I setup my Digital Ocean Ubuntu 18.04 Server?",image:"\u002Fposts\u002F2020-08-19-01\u002F1.jpg",date:"2020-08-19",toc:[],body:{type:n,children:[{type:b,tag:e,props:{},children:[{type:a,value:"My personal note to setup ubuntu server, my old note is in Quiver."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Before creating a droplet, make sure to select the SSH-KEY that is used login to server."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To generate new key, use this command and input the path you want to store the new key."}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ssh-keygen\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"After creating a droplet, ssh into server using"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ssh -i ~\u002F.ssh\u002Fssh_key root@server_ip\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Create a new user, for example "},{type:b,tag:d,props:{},children:[{type:a,value:k}]}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"adduser ubuntu\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Make ubuntu a sudoer so that "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" can be used instead of "},{type:b,tag:d,props:{},children:[{type:a,value:n}]}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"usermod -aG sudo ubuntu\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Swap user to "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" and copy ssh public key to "},{type:b,tag:d,props:{},children:[{type:a,value:"~\u002F.ssh\u002Fauthorized_keys"}]}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"su ubuntu\ncd ~\nmkdir .ssh\nvim authorized_keys  # paste the ssh public key here\nexit  # back to root user\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:" again to close this session."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Try login using "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" user. If done correctly, there should be no password prompt."}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:m}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"make "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" sudo without supplying password"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"sudo visudo\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Add this line to the last part"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ubuntu ALL=(ALL) NOPASSWD:ALL\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ctrl+x"}]},{type:a,value:o},{type:b,tag:d,props:{},children:[{type:a,value:"y"}]},{type:a,value:o},{type:b,tag:d,props:{},children:[{type:a,value:"enter"}]},{type:a,value:" to exit the editor"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:" to close the session."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"SSH back in"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:m}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"run "},{type:b,tag:d,props:{},children:[{type:a,value:"sudo date"}]},{type:a,value:" there should be no password prompt."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Now disable root ssh login"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"sudo vim \u002Fetc\u002Fssh\u002Fsshd_config\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:p},{type:b,tag:d,props:{},children:[{type:a,value:"PermitRootLogin yes"}]},{type:a,value:" to "},{type:b,tag:d,props:{},children:[{type:a,value:"PermitRootLogin no"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Add a line "},{type:b,tag:d,props:{},children:[{type:a,value:"AllowUsers ubuntu"}]},{type:a,value:" to allow "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" to login."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Then restart ssh."}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"sudo service ssh restart\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Now "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:" to close session again and test logging back in to server."}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:m}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Finally"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"sudo apt update\nsudo apt upgrade\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"NOTE: To change SSH Port from 22 to something else"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"sudo vi \u002Fetc\u002Fssh\u002Fsshd_config\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:p},{type:b,tag:d,props:{},children:[{type:a,value:"Port 22"}]},{type:a,value:" to the port you want."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Restart SSH "},{type:b,tag:d,props:{},children:[{type:a,value:"sudo service ssh restart"}]},{type:a,value:" and then to SSH, use"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ssh -i ~\u002F.ssh\u002Fssh_key root@server_ip -p PORT\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Done! Next, try using "},{type:b,tag:d,props:{},children:[{type:a,value:"ansible"}]},{type:a,value:" to setup other softwares.\nAlso checkout firewall before using in production."}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fdigitalocean-ubuntu",extension:".md",createdAt:q,updatedAt:q}}],fetch:{},mutations:void 0}}("text","element","\n","code","p","div","nuxt-content-highlight","pre","language-text","line-numbers","ubuntu","exit","ssh -i ~\u002F.ssh\u002Fssh_key ubuntu@server_ip\n","root"," ","Change ","2023-01-11T12:49:22.000Z")));