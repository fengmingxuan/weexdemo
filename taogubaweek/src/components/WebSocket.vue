<template>
    <scroller>
        <div>
            <div style="background-color: #286090">
                <text class="title" style="height: 80 ;padding: 20;color: #FFFFFF">websocket</text>
            </div>
            <input
                    type="text"
                    placeholder="please input message to send"
                    class="input"
                    autofocus="false"
                    value=""
                    onchange="onchange"
                    oninput="oninput"
                    id = "input"
            />
            <div style="flex-direction: row; justify-content: center;">
                <text class="button" onclick="connect">connect</text>
                <text class="button" onclick="send">send</text>
                <text class="button" onclick="close">close</text>
            </div>
            <div style="background-color: #D3D3D3;margin-top: 20">
                <text class="title" style="height: 80 ;padding: 20;color: #000000">method = send</text>
            </div>
            <text style="color: #000000;height: 80">{{sendinfo}}</text>
            <div style="background-color: #D3D3D3">
                <text class="title" style="height: 80 ;padding: 20;color: #000000">method = onopen</text>
            </div>
            <text style="color: #000000;height: 80">{{onopeninfo}}</text>
            <div style="background-color: #D3D3D3">
                <text class="title" style="height: 80 ;padding: 20;color: #000000">method = onmessage</text>
            </div>
            <text style="color: #000000;height: 100">{{onmessage}}</text>
            <div style="background-color: #D3D3D3">
                <text class="title" style="height: 80 ;padding: 20;color: #000000">method = onclose</text>
            </div>
            <text style="color: #000000;height: 80">{{oncloseinfo}}</text>
            <div style="background-color: #D3D3D3">
                <text class="title" style="height: 80 ;padding: 20;color: #000000">method = onerror</text>
            </div>
            <text style="color: #000000;height: 80">{{onerrorinfo}}</text>
            <div style="background-color: #D3D3D3">
                <text class="title" style="height: 80 ;padding: 20;color: #000000">method = close</text>
            </div>
            <text style="color: #000000;height: 80">{{closeinfo}}</text>
        </div>
        </div>
    </scroller>
</template>
<style>
    .input {
        font-size: 40;
        height: 80;
        width: 600;
    }
    .button {
        font-size: 36;
        width: 150;
        color: #41B883;
        text-align: center;
        padding-top: 10;
        padding-bottom: 10;
        border-width: 2;
        border-style: solid;
        margin-right: 20;
        border-color: rgb(162, 217, 192);
        background-color: rgba(162, 217, 192, 0.2);
    }
</style>
<script>
    var websocket = weex.requireModule('webSocket');//require('@weex-module/webSocket');
    module.exports = {
        data: {
            connectinfo: '',
            sendinfo: '',
            onopeninfo: '',
            onmessage: '',
            oncloseinfo: '',
            onerrorinfo: '',
            closeinfo: '',
            txtInput:'',
            navBarHeight: 88,
            title: 'Navigator',
            dir: 'examples',
            baseURL: '',
        },
        methods: {
            connect:function() {
                websocket.WebSocket('ws://echo.websocket.org','');
                var self = this;
                self.onopeninfo = 'connecting...'
                websocket.onopen = function(e)
                {
                    self.onopeninfo = 'websocket open';
                }
                websocket.onmessage = function(e)
                {
                    self.onmessage = e.data;
                }
                websocket.onerror = function(e)
                {
                    self.onerrorinfo = e.data;
                }
                websocket.onclose = function(e)
                {
                    self.onopeninfo = '';
                    self.onerrorinfo = e.code;
                }
            },
            send:function(e) {
                var input = this.$el('input');
                input.blur();
                websocket.send(this.txtInput);
                this.sendinfo = this.txtInput;
            },
            oninput: function(event) {
                this.txtInput = event.value;
            },
            close:function(e) {
                websocket.close();
            },
        }
    };
</script>