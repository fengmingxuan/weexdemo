<template>
  <div class="wrapper">
    <router-view></router-view>

    <scroller class="scroller">
      <div class="row" v-for="(name, index) in rows" :ref="'item'+index">

          <text v-bind:style="{color: activeColor}"  :ref="'text'+index" @click="openitem">{{name}}</text>

      </div>
    </scroller>

  </div>
</template>

<script>
    var navigator = weex.requireModule('navigator')
    var weexModule = weex.requireModule('weexModule');
    const dom = weex.requireModule('dom')
    const modal = weex.requireModule('modal')


    export default {
        data () {
            return {
                rows: [],
                themetype:0,
                activeColor:'red'
            }
        },
        created () {
            this.rows.push('weexbar/stock_template')
            this.rows.push('a')
            this.rows.push('slider')
            this.rows.push('indicator')
            this.rows.push('switch')
            this.rows.push('text')
            this.rows.push('textarea')
            this.rows.push('vedio')
            this.rows.push('web')
            this.rows.push('div')
            this.rows.push('image')
            this.rows.push('list')
            this.rows.push('input')
            this.rows.push('cell')
            this.rows.push('loading')
            this.rows.push('refresh')
            this.rows.push('scroller')
            this.rows.push('animation')
            this.rows.push('picker')
            this.rows.push('WebSocket')
            this.rows.push('clipboard')
            this.rows.push('dom')
            this.rows.push('modal')
            this.rows.push('navigator')
            this.rows.push('storage')
            this.rows.push('stream')
            this.rows.push('webview')
            this.rows.push('weexbar/tabbar')
            this.rows.push('weexbar/collection')
            this.rows.push('weexbar/me')
            this.rows.push('weexbar/main')
            this.rows.push('navbar')
            this.rows.push('weexbar/joke_item')
            this.rows.push('weexbar/special_theme')
            this.rows.push('weexbar/dropdown-demo')
            this.rows.push('weexbar/we-action-sheet')
            this.getOptions()
        },
        ready(){

        },
        methods: {
            openitem:function (event) {

                //callJS tasks:[{"data":"14","type":2},{"data":"[{\"args\":[\"150\",\"click\",{\"position\":{\"height\":52.77778,\"width\":713.19446,\"x\":33.333332,\"y\":191.66667}},null],\"method\":\"fireEvent\"}]","type":3}]
                // tasks:[{"module":"modal","method":"toast","args":[{"message":{"position":{"height":52.77778,"width":713.19446,"x":33.333332,"y":191.66667},"type":"click",
                // "target":{"ref":"186","type":"text","attr":{"value":"a"},"style":{"fontSize":45,"color":"#666666"},"event":["click"]},"timestamp":1488878471697}}]}]
                var name = event.target.attr.value;
<<<<<<< HEAD
                modal.toast({ message:  name.toString()})

                 weexModule.openUrl('http://192.168.1.9:8080/dist/'+name+'.weex.js', function(err){
                   console.log(err);
                  });
//                navigator.push({
//                    url: 'http://192.168.1.15:8080/dist/'+name+'.weex.js',
//                    animated: "true"
//                }, event => {
//                   // modal.toast({ message: 'callback: ' + event })
//                })
=======
//                modal.toast({ message:  name.toString()})
//
//                 weexModule.openURL('http://192.168.1.15:8080/dist/'+name+'.weex.js');
                navigator.push({
                    url: 'http://192.168.1.15:8080/dist/'+name+'.weex.js',
                    animated: "true"
                }, event => {
                   // modal.toast({ message: 'callback: ' + event })
                })

            }, getOptions: function() {
                this.themetype = this.$getConfig().themetype;
                if(this.themetype==0){
                    this.activeColor = 'red'
                }else{
                    this.activeColor = 'green'
                }

>>>>>>> 30a5db99f3683bb2817c46df5dbfe14084ab3535
            }



        }
    }
</script>

<style scoped>
  .scroller {
    width: inherit;
    height: inherit;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    margin-left: 1px;
    margin-right: 1px;
  }
  .row {
    height: 150px;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
  }
  .text {
    font-size: 45px;
    color: #666666;
  }

</style>