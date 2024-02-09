__NUXT_JSONP__("/posts/nuxtjs-google-cloud-run", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab){return {data:[{page:{slug:"nuxtjs-google-cloud-run",description:"Deploying Nuxtjs on Google Cloud Run. Quickest and easiest way to deploy Nuxtjs.",title:"Deploying Nuxtjs on Google Cloud Run (Serverless)",image:"\u002Fposts\u002F2019-04-09-01\u002F1.png",date:"2019-04-09",toc:[],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:"Better "},{type:b,tag:h,props:{},children:[{type:a,value:"cloud-build.yaml"}]},{type:a,value:" file pull older image before build. Save build time."}]},{type:a,value:e},{type:b,tag:D,props:{id:"update"},children:[{type:b,tag:j,props:{href:"#update",ariaHidden:E,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:"UPDATE"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Cloud run now available in almost every region (including Singapore Hooooray!!!)"}]},{type:a,value:e},{type:b,tag:D,props:{id:"what-and-why"},children:[{type:b,tag:j,props:{href:"#what-and-why",ariaHidden:E,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:"What and why?"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"I like NuxtJS and I use it a lot in many of my customer projects. I like it a lot and it's super easy to go serverless on Google Cloud Run. It's cheap and it support SSR as well. You should check pricing before you proceed though..."}]},{type:a,value:e},{type:b,tag:D,props:{id:"prerequisite"},children:[{type:b,tag:j,props:{href:"#prerequisite",ariaHidden:E,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:"Prerequisite"}]},{type:a,value:e},{type:b,tag:Q,props:{},children:[{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"I'm using MacOS. Please let me know if I'm missing anything."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:R,props:{},children:[{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:"Install "},{type:b,tag:h,props:{},children:[{type:a,value:S}]},{type:a,value:" cli "},{type:b,tag:j,props:{href:T,rel:[z,A,B],target:C},children:[{type:a,value:T}]}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:a,value:"Login to "},{type:b,tag:h,props:{},children:[{type:a,value:S}]},{type:a,value:" in command line by running "},{type:b,tag:h,props:{},children:[{type:a,value:"gcloud auth login"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:Q,props:{},children:[{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"There will be times in this tutorial when gcloud cli will ask you to enable things like cloud build \u002F cloud run \u002F etc. If you don't enable them, this tutorial won't work. If you do, make sure you know the upcoming cost."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:D,props:{id:"lets-start"},children:[{type:b,tag:j,props:{href:"#lets-start",ariaHidden:E,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:"Let's start"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"First, we will create an empty project. You might want to read this. "},{type:b,tag:j,props:{href:U,rel:[z,A,B],target:C},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,I]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"# or just run\nnpx create-nuxt-app cloud-run-demo\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{alt:"Create nuxt app",src:"https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002F4o4fkd4u850mnfw3ej34.png"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"I like git, so let's commit first."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{alt:"Commit initial code",src:"https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fug5ahaw8p6j959yh9e7d.png"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"I want to know if it's working or not. Let's just try it out. Go into project directory and run "},{type:b,tag:h,props:{},children:[{type:a,value:"npm run dev"}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{alt:"Test our code",src:"https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fto3d4yrmcnh64tcgcljj.png"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Cloud run require "},{type:b,tag:h,props:{},children:[{type:a,value:"process.env.PORT"}]},{type:a,value:" to be your application port. So let's change our server config. Also, please note that using express + cloud run require host to be "},{type:b,tag:h,props:{},children:[{type:a,value:"0.0.0.0"}]},{type:a,value:" not "},{type:b,tag:h,props:{},children:[{type:a,value:"localhost"}]},{type:a,value:" or "},{type:b,tag:h,props:{},children:[{type:a,value:"127.0.0.1"}]},{type:a,value:L}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{alt:"Add port config",src:"https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fxab2smxfo93fybqao3fd.png"},children:[]}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,I]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"  server: {\n    port: process.env.PORT || 3000,\n    host: \"0.0.0.0\",\n    timing: false\n  }\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Add "},{type:b,tag:h,props:{},children:[{type:a,value:"Dockerfile"}]},{type:a,value:" to build our project. You can change node version to match your project."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{alt:"Add docker file",src:"https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002F4vh5vvfmu66vm5br8mv4.png"},children:[]}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,"language-docker"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"FROM"}]},{type:a,value:" node:13.6-alpine"}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"ARG"}]},{type:a,value:" BUILD_ENV"}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:a,value:" mkdir -p \u002Fusr\u002Fsrc\u002Fapp"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:V}]},{type:a,value:" package*.json \u002Fusr\u002Fsrc\u002Fapp\u002F"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:a,value:" cd \u002Fusr\u002Fsrc\u002Fapp\u002F; npm install"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"WORKDIR"}]},{type:a,value:" \u002Fusr\u002Fsrc\u002Fapp"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:V}]},{type:a,value:" . \u002Fusr\u002Fsrc\u002Fapp"}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:a,value:" npm run build"}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"CMD"}]},{type:a,value:" [ "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"npm\""}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"run\""}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"start\""}]},{type:a,value:" ]"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"I like to config my cloud build in yaml. Let's do that by adding a file call "},{type:b,tag:h,props:{},children:[{type:a,value:"cloud-build.yml"}]},{type:a,value:" (or anything else you like). You will need to change "},{type:b,tag:h,props:{},children:[{type:a,value:N}]},{type:a,value:" to match your google "},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:". And "},{type:b,tag:h,props:{},children:[{type:a,value:"container-name"}]},{type:a,value:" to whatever you want."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{alt:"Add google cloud build config",src:"https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fetxkj0dht6c3y3lgehpe.png"},children:[]}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,"language-yaml"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"steps"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'gcr.io\u002Fcloud-builders\u002Fdocker'"}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"entrypoint"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'bash'"}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'-c'"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"|"}]},{type:b,tag:c,props:{className:[d,"scalar",i]},children:[{type:a,value:"\n        docker pull gcr.io\u002Fproject-name\u002Fcontainer-name:latest || exit 0"}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:" gcr.io\u002Fcloud"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"builders\u002Fdocker\n    "},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:" 1200s\n    "},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"["}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'build'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'-f'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'Dockerfile'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'-t'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'gcr.io\u002Fproject-name\u002Fcontainer-name'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'--cache-from'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'gcr.io\u002Fproject-name\u002Fcontainer-name:latest'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'.'"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:s}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"]"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:" 1200s\n"},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"images"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:o}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:" gcr.io\u002Fproject"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"name\u002Fcontainer"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"name\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Let's build our project on Google Cloud Build. don't forget to change "},{type:b,tag:h,props:{},children:[{type:a,value:N}]},{type:a,value:" with your "},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:L}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,I]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"# build from yml config\ngcloud builds submit --project \"project-name\" --config=.\u002Fcloud-build.yaml\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{alt:"Cloud build",src:"https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002Fcs6u0iwnf3rywfebdbq1.png"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Finally let's deploy. Don't forget to change"}]},{type:a,value:e},{type:b,tag:R,props:{},children:[{type:a,value:e},{type:b,tag:t,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"cloud-run-name"}]},{type:a,value:" service name (any name you like). It will show up on "},{type:b,tag:j,props:{href:$,rel:[z,A,B],target:C},children:[{type:a,value:$}]},{type:a,value:L}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"--region asia-northeast1"}]},{type:a,value:" you can choose region to closest to your location."}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:N}]},{type:a,value:" to your "},{type:b,tag:h,props:{},children:[{type:a,value:O}]}]},{type:a,value:e},{type:b,tag:t,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"--image gcr.io\u002Fproject-name\u002Fcontainer-name"}]},{type:a,value:" change it to match what you set in cloud-build.yaml"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,I]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"# deploying (rerun to redeploy)\ngcloud beta run deploy cloud-run-name --region asia-northeast1 --project \"project-name\" --image gcr.io\u002Fproject-name\u002Fcontainer-name --platform managed\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:p,props:{alt:"Run container on cloud run",src:"https:\u002F\u002Fdev-to-uploads.s3.amazonaws.com\u002Fi\u002F9ipfylmjqlcxd7kf8a1x.png"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Now, you can visit that endpoint given in the console. Usually "},{type:b,tag:j,props:{href:"https:\u002F\u002Fcloud-run-name-%7Bsome_hash%7D-uc.a.run.app",rel:[z,A,B],target:C},children:[{type:a,value:"https:\u002F\u002Fcloud-run-name-{some_hash}-uc.a.run.app"}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Or you can change the domain to something else. You should be able to find it here. "},{type:b,tag:j,props:{href:aa,rel:[z,A,B],target:C},children:[{type:a,value:aa}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"This is way too easy to deploy Serverless Nuxtjs app."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"I believe you can do the same in both Nextjs or Gatsby as well. If you've done it, please share."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Again, let me know if I missed anything."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"PLEASE GOOGLE, I NEED THIS IN SINGAPORE REGION."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"SaKKo"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fnuxtjs-google-cloud-run",extension:".md",createdAt:ab,updatedAt:ab}}],fetch:{},mutations:void 0}}("text","element","span","token","\n","p","punctuation","code","string","a","instruction","keyword","key","atrule",":","img","-","\n        ",",","li","div","nuxt-content-highlight","pre","line-numbers"," ","nofollow","noopener","noreferrer","_blank","h1","true",-1,"icon","icon-link","language-text","\n\n","\n      ",".","RUN","project-name","gcloud-project-id","\n  ","blockquote","ul","gcloud","https:\u002F\u002Fcloud.google.com\u002Fsdk\u002Fdocs#mac","https:\u002F\u002Fnuxtjs.org\u002Fguide\u002Finstallation","COPY",", ","name","\n    ","args","timeout","https:\u002F\u002Fconsole.cloud.google.com\u002Frun","https:\u002F\u002Fconsole.cloud.google.com\u002Frun\u002Fdomains","2023-01-11T12:49:22.000Z")));